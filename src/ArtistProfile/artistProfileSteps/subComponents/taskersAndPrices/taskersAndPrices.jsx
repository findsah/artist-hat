import React, { useState } from 'react'
import './taskersAndPrices.css'
import SpecificArtist from './subComponents/specificArtist'
import ArtistsList from './subComponents/artistsList';
import { useDispatch } from 'react-redux';
import { getArtistPublicProfile, getArtistReviews } from '../../../../Redux/artistProfile/artistPublicProfile';

const TaskersAndPrices = () => {
    const userId = localStorage.getItem("userId");
    const dispatch = useDispatch();
    const [component, setComponent] = useState(1)
    const handleClick = async (index) => {
        await dispatch(getArtistPublicProfile(userId))
        setComponent(index);
    }
    
    
    return (
        <>
            {component === 1 && <ArtistsList handleClick={handleClick} />}
            {component === 2 && <SpecificArtist />}
        </>

    )
}

export default TaskersAndPrices