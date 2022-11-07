import React from 'react'
import Header from '../Header/Header'
import { useUserDataValue } from '../../Context/UserData'
import './Body.css'

const Body = ({ spotify }) => {
  const [{ recently_played_tracks }, dispatch] = useUserDataValue()

  return (
    <div className='container__body'>
      <Header spotify={spotify} />

      <div className='body__info'>
        {/* <img 
        src={recently_played_tracks?.images[0].url}
        alt='images' /> */}
        <div className='body__infoText'>
          <strong>LISTA</strong>
          {console.log(recently_played_tracks)}
          {/* <h2>{console.log(discover_weekly)}</h2>
          <p>{discover_weekly?.description}</p> */}
        </div>
      </div>
    </div>
  )
}

export default Body