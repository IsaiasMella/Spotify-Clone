import React from 'react'
import Header from '../Header/Header'
import { useUserDataValue } from '../../Context/UserData'
import './Body.css'
import Categories from './Categories/Categories'

const Body = ({ spotify }) => {
  const [{
    recently_played_tracks,
    discover_weekly
  }, dispatch] = useUserDataValue()

  return (
    <div className='container__body'>
      <Header spotify={spotify} />

      <div className='body__info'>
        {/* <img 
        src={recently_played_tracks?.images[0].url}
        alt='images' /> */}
        <div className='body__infoText'>
          <Categories category={discover_weekly} title='Creadas para vos' isOrdenable={true} />
          {/* {console.log(recently_played_tracks)} */}
          {/* {recently_played_tracks && <Categories category={recently_played_tracks} title='Escuchados recientemenete' />} */}
          {/* {recently_played_tracks?.categories?.items.map(item => {
            console.log(item)
            return (
              <img src={item.icons[0].url}/>
            )
          })} */}

          {/* <h2>{console.log(discover_weekly)}</h2>
          <p>{discover_weekly?.description}</p> */}
        </div>
      </div>
    </div>
  )
}

export default Body