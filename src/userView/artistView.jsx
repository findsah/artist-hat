import React from 'react'
import { Outlet, useNavigate } from 'react-router'
import UserNavbar from './components/userNavbar/userNavbar'
// import UserProfile from './profile/profile'
import './artistView.css'

const ArtistView = () => {
    const loggedIn = localStorage.getItem('userToken');
    const navigate = useNavigate();
    if (!loggedIn) {
        navigate('/userregistration')
    }
    
    
    // else async()=>{
    //     await dispatch(getArtistData(userId));
    // }
    return (
        <div className='userview-sec'>
            <UserNavbar />
            <div className='userview-con my-5'>
            <Outlet />
            </div>
        </div>
    )
}

export default ArtistView
