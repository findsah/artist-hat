import React from 'react'
import StepsBar from '../../Components/stepsBar/stepsBar'
import './artistProfileSteps.css';
const ArtistProfileSteps = () => {
    return (
        <div className="container-fluid projectDes-sec artistProfileSteps">
            <div className="position-relative container">
                <StepsBar 
                step1="ProjectDescription"
                step2="TaskersAndPrices"
                step3="dateAndTime"
                step4="confirmDetails"
                 />
            </div>
        </div>
    )
}

export default ArtistProfileSteps
