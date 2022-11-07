import React from 'react'
import './Login.css'
import SpotifyLogo from '../Images/Spotify_Logo_RGB_Green.png'
import { loginUrl } from '../Spotify/Spotify'

const Login = () => {
    return (
        <div className='container__login'>
            <div className='login'>
                <img src={SpotifyLogo} alt='sporify-logo' />
                <a className='login__button' href={loginUrl}>LOGIN WITH SPOTIFY</a>
            </div>
        </div>
    )
}

export default Login