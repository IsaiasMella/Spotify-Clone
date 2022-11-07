import './App.css';
import Login from './Login/Login';
import Player from './Components/Player/Player';
import SpotifyWebApi from 'spotify-web-api-js';
import { useEffect } from 'react';
import { getTokenFromUrl } from './Spotify/Spotify';
import { useUserDataValue } from './Context/UserData';

const spotify = new SpotifyWebApi()

function App() {
  const [{ user, token }, dispatch] = useUserDataValue()
  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ''

    let _token = hash.access_token

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.setAccessToken(_token)

      spotify.getMe()
        .then(user => {
          console.log(user)
          dispatch({
            type: 'SET_USER',
            user: user
          })
        })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
//   7DVJRsfJG7Ao5T3sv8LCec
      spotify.getPlaylist("7DVJRsfJG7Ao5T3sv8LCec").then((response) =>
      dispatch(
          {
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      spotify.getCategories()
      .then((recently) =>
      dispatch(
          {
          type: "SET_RECENTLY_PLAYED_TRACK",
          recently_played_tracks: recently,
        })
      );


// aca cierra, hacer cosas antes
    }
  }, []);
  console.log(spotify)
  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
