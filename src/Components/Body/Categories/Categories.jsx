import React from 'react'
import Cards from './Cards/Cards'
import './Categories.css'

const Categories = ({ category, title, isOrdenable = false }) => {

    if (isOrdenable) {
        category.sort((a, b) =>
            a.name.toLowerCase() > b.name.toLowerCase() ? 1 :
                a.name.toLowerCase() < b.name.toLowerCase() ? -1 :
                    0
        )
    }

    return (
        <div>
            <strong className='category__title' >{title}</strong>
            <div className='container__category_cards'>
                {category.map((playlist, index) =>
                    <Cards key={index} img={playlist?.images[0].url} name={playlist?.name} description={playlist?.description} />
                )
                }
            </div>
        </div>
    )
}

export default Categories