import React from 'react'
import spotifyLogo from '../../Images/Spotify_Logo_RGB_White.png'
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SidebarOption from './SidebarOption/SidebarOption';
import { useUserDataValue } from '../../Context/UserData';

const Sidebar = () => {
  const [{ playlists }, dispatch] = useUserDataValue()

  return (
    <div className='container__sidebar'>
      <img src={spotifyLogo} alt='spotify-logo' />
      <SidebarOption Icon={HomeIcon} title={'Inicio'} />
      <SidebarOption Icon={SearchIcon} title={'Buscar'} />
      <SidebarOption Icon={LibraryMusicIcon} title={'Tu biblioteca'} />
      <hr />
      {
        playlists?.items?.map((playlists, index) => (
          <SidebarOption key={index} title={playlists.name} />
        ))
      }
    </div>
  )
}

export default Sidebar