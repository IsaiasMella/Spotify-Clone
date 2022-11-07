import React from 'react'
import './SidebarOption.css'

const SidebarOption = ({ Icon, title }) => {
    return (
        <div className='container__option'>
            {Icon &&  <Icon />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SidebarOption