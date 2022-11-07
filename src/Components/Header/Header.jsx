import React from 'react'
import './Header.css';
import Avatar from '@mui/material/Avatar';
import { useUserDataValue } from '../../Context/UserData'

const Header = () => {
    const [{ user }] = useUserDataValue()

    return (
        <div className='header' >
            <div className="header__left">
                <div className='button__header-left'>
                    <svg role="img" height="24" width="24" viewBox="0 0 24 24">
                        <path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"></path>
                    </svg>
                </div>
                <div className='button__header-rigth'>
                    <svg role="img" height="24" width="24" viewBox="0 0 24 24">
                        <path d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"></path>
                    </svg>
                </div>
            </div>
            <div className="header__rigth">
                <Avatar
                    src={user?.images[0].url}
                    alt={user?.display_name}
                    sx={{ width: 28, height: 28 }}
                />
                <h4>{user?.display_name}</h4>
                <svg role="img" height="16" width="16" class="Svg-ytk21e-0 jAKAlG eAXFT6yvz37fvS1lmt6k" aria-hidden="true" viewBox="0 0 16 16"><path d="M14 6l-6 6-6-6h12z"></path></svg>
            </div>
        </div>
    )
}

export default Header