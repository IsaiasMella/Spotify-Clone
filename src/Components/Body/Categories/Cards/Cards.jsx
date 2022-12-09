import React from 'react'
import './Cards.css'

const Cards = ({ img, description = 'Spotify', name }) => {
    return (
        <div className='container__card'>
            <img src={img} alt="" />
            <div className='card__text'>
                <strong className='title_card'>{name}</strong>
                <p className='card__description' >{description}</p>
            </div>
        </div>
    )
}

export default Cards