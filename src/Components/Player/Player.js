import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'
import './Player.css'

const Player = ({ spotify }) => {
    return (
        <div className='player'>
            <div className='main'>
                <Sidebar />
                <Routes>
                    <Route path='/' element={<Body spotify={spotify} />} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default Player