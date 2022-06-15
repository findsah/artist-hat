import React, { useState } from 'react'
import ConfirmDetails from '../../ArtistProfile/artistProfileSteps/subComponents/confirmDetails/confirmDetails';
import DateAndTime from '../../ArtistProfile/artistProfileSteps/subComponents/dateAndTime/dateAndTime';
import ProjectDescription from '../../ArtistProfile/artistProfileSteps/subComponents/ProjectDescription/ProjectDescription';
import TaskersAndPrices from '../../ArtistProfile/artistProfileSteps/subComponents/taskersAndPrices/taskersAndPrices';
import './stepsBar.css';
const StepsBar = ({ step1, step2, step3, step4 }) => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <div>
            <hr className="hr-line position-absolute" />
            <div className="row steps-row justify-content-between mb-3" id="pills-tab" role="tablist">
                <div className="col-3 text-center" role="presentation">
                    <button className={`step1 ${toggleState === 1 ? 'btn btn-outline-secondary steps-ative step1-active' : 'btn btn-outline-secondary steps'}`} onClick={() => toggleTab(1)} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">1</button>
                    <h2 className='step-heading'>DESCRIBE YOUR PROJECTS</h2>
                </div>
                <div className="col-3 text-center" role="presentation">
                    <button className={`step2 ${toggleState === 2 ? 'btn btn-outline-secondary steps-ative step2-active' : 'btn btn-outline-secondary steps'}`} onClick={() => toggleTab(2)} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">2</button>
                    <h2 className='step-heading'>BROWSE ARTIST & PRICES</h2>
                </div>
                <div className="col-3 text-center" role="presentation">
                    <button className={`step3 ${toggleState === 3 ? 'btn btn-outline-secondary steps-ative step3-active' : 'btn btn-outline-secondary steps'}`} onClick={() => toggleTab(3)} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">3</button>
                    <h2 className='step-heading'>CHOOSE DATE & TIME</h2>
                </div>
                <div className="col-3 text-center" role="presentation">
                    <button className={`step4 ${toggleState === 4 ? 'btn btn-outline-secondary steps-ative step4-active' : 'btn btn-outline-secondary steps'}`} onClick={() => toggleTab(4)} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">4</button>
                    <h2 className='step-heading'>CONFIRM DETAILS</h2>
                </div>
            </div>
            <div className="tab-content" id="pills-tabContent">
                <div className={`${toggleState === 1 ? 'tab-pane fade show active ' : 'tab-pane fade'}`} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">{step1 === 'ProjectDescription' ? (<ProjectDescription />) : ('')}</div>
                <div className={`${toggleState === 2 ? 'tab-pane fade show active ' : 'tab-pane fade'}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">{step2 === 'TaskersAndPrices' ? (<TaskersAndPrices />) : ('')}</div>
                <div className={`${toggleState === 3 ? 'tab-pane fade show active ' : 'tab-pane fade'}`} id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">{step3 === 'dateAndTime' ? (<DateAndTime />) : ('')}</div>
                <div className={`${toggleState === 4 ? 'tab-pane fade show active ' : 'tab-pane fade'}`} id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">{step4 === 'confirmDetails' ? (<ConfirmDetails />) : ('')}</div>

            </div>
        </div>

    )
}

export default StepsBar
