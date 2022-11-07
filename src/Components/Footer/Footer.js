import React from 'react'
import './Footer.css'
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

const Footer = () => {
  return (
    <div className='container__footer'>
      <div className='footer__left'>
        <img className='img__song' src='https://thumbs.coleka.com/media/item/202111/23/pop-up-parade-demon-slayer-tanjiro-kamado-002_250x250.webp' alt='tanshiro' />
        <div className='info__song'>
          <h4>cancion</h4>
          <p>artista</p>
        </div>
      </div>

      <div className='footer__center'>
        <div className='footer__buttons'>
          <svg role="img" height="16" width="16" viewBox="0 0 16 16" className="Svg-ytk21e-0 jAKAlG"><path d="M2.464 4.5h1.473a.75.75 0 110 1.5H0V2.063a.75.75 0 011.5 0v1.27a8.25 8.25 0 1110.539 12.554.75.75 0 01-.828-1.25A6.75 6.75 0 102.464 4.5z"></path><path d="M.303 8.407c.79 0 1.214-.52 1.214-.907h1.5v8h-1.5V9.907H0v-1.5h.303zm4.832-.911h4.05v1.5H6.33l-.245 1.067c.256-.071.525-.11.804-.11 1.621 0 2.954 1.3 2.954 2.924C9.843 14.5 8.51 15.8 6.89 15.8a2.945 2.945 0 01-2.93-2.54l1.487-.197c.092.69.696 1.237 1.443 1.237.813 0 1.454-.647 1.454-1.423s-.64-1.423-1.454-1.423c-.49 0-.92.235-1.183.594l-.01.014-.206.254-1.314-.639.96-4.181z"></path></svg>
        </div>
        <SkipPreviousIcon className='footer__buttons' />
        <PlayCircleIcon className='footer__buttons button-play' />
        <SkipNextIcon className='footer__buttons' />
        <div className='footer__buttons'>
          <svg ole="img" height="16" width="16" viewBox="0 0 16 16" className="Svg-ytk21e-0 jAKAlG"><path d="M13.536 4.5h-1.473a.75.75 0 100 1.5H16V2.063a.75.75 0 00-1.5 0v1.27A8.25 8.25 0 103.962 15.887a.75.75 0 10.827-1.25A6.75 6.75 0 1113.535 4.5z"></path><path d="M6.303 8.407c.79 0 1.214-.52 1.214-.907h1.5v8h-1.5V9.907H6v-1.5h.303zm4.832-.911h4.05v1.5H12.33l-.245 1.067c.256-.071.525-.11.804-.11 1.621 0 2.954 1.3 2.954 2.924 0 1.624-1.333 2.923-2.954 2.923a2.945 2.945 0 01-2.93-2.54l1.487-.197c.092.69.696 1.237 1.443 1.237.813 0 1.454-.647 1.454-1.423s-.64-1.423-1.454-1.423c-.49 0-.92.235-1.183.594l-.01.014-.206.254-1.314-.639.96-4.181z"></path></svg>
        </div>
      </div>

      <div className='footer__rigth'>
        <div className='footer__buttons'>
          <svg role="img" height="16" width="16" viewBox="0 0 16 16" className="Svg-ytk21e-0 jAKAlG"><path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 013.5 1h9a2.5 2.5 0 010 5h-9A2.5 2.5 0 011 3.5zm2.5-1a1 1 0 000 2h9a1 1 0 100-2h-9z"></path></svg>
        </div>
        <div className='footer__device footer__buttons'>
          <svg role="presentation" height="16" width="16" className="Svg-ytk21e-0 jAKAlG" aria-label="Conectar a un dispositivo" viewBox="0 0 16 16"><path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0114.25 15h-6.5A1.75 1.75 0 016 13.25V2.75zm1.75-.25a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 00.25-.25V2.75a.25.25 0 00-.25-.25h-6.5zm-6 0a.25.25 0 00-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 010 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"></path><path d="M13 10a2 2 0 11-4 0 2 2 0 014 0zm-1-5a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
        </div>
        <div className='footer__volume footer__buttons'>
          <svg role="presentation" height="16" width="16" aria-label="Volumen alto" id="volume-icon" viewBox="0 0 16 16" className="Svg-ytk21e-0 jAKAlG"><path d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"></path><path d="M11.5 13.614a5.752 5.752 0 000-11.228v1.55a4.252 4.252 0 010 8.127v1.55z"></path></svg>
        </div>
      </div>
    </div>
  )
}

export default Footer