import React, { useState } from 'react'
import './taskersAndPrices.css'
import SpecificArtist from './subComponents/specificArtist'
import ArtistsList from './subComponents/artistsList';
import { useDispatch } from 'react-redux';
import { getArtistReviews } from '../../../../Redux/artistProfile/artistPublicProfile';

const TaskersAndPrices = () => {
    const dispatch = useDispatch();
    const [component, setComponent] = useState(1)
    const handleClick = (index) => {
        setComponent(index);
        dispatch(getArtistReviews())
    }
    
    
    return (
        <>
            {component === 1 && <ArtistsList handleClick={handleClick} />}
            {component === 2 && <SpecificArtist />}
        </>

    )
}

export default TaskersAndPrices