import React from 'react'
import ReactStars from 'react-rating-stars-component';
import './AboutArtist.css';
import artistImage from '../../Assets/profileIcon.png';
import brush from '../../Assets/Brush.svg';
import location from '../../Assets/Location.svg';
import id from '../../Assets/Id.svg';
import calendar from '../../Assets/Calendar.svg';
import vehicle from '../../Assets/Car.svg';
import Button from '../../Components/button/button';

const AboutArtist = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <div className="row artistIntroRow">
            <img className="artist-img position-absolute p-0" src={artistImage} alt="" />
            <div className="col-10 justify-content-between aboutArtist-content">
                <div className="artistIntro row">
                    <div className='rate-section x-4'>
                        <h4 className="ArtistName">MICHEL G</h4>
                        <h6>PAINTING ARTIST</h6>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            color1="green"
                            color2="red"
                        />
                        <h3>$50.00/HR</h3>
                    </div>
                    <div className="artistSkills py-2 col-md-12 px-0">
                        <div className="d-flex align-items-center">
                            <div className="icons">
                                <img src={brush} alt="brush" />
                            </div>
                            <p className="artistSkill mx-2 my-2">5 Printing Projects</p>
                        </div>
                        <div className="d-flex align-items-center py-2">
                            <div className="icons">
                                <img src={location} alt="brush" />
                            </div>
                            <p className="artistSkill mx-2 my-2">Working in Montreal</p>
                        </div>
                        <div className="d-flex align-items-center py-2">
                            <div className="icons">
                                <img src={id} alt="brush" />
                            </div>
                            <p className="artistSkill mx-2 my-2">ID Verified</p>
                        </div>
                        <div className="d-flex align-items-center py-2">
                            <div className="icons">
                                <img src={calendar} alt="brush" />
                            </div>
                            <p className="artistSkill mx-2 my-2">Artist since 2020</p>
                        </div>
                        <div className="d-flex align-items-center py-2">
                            <div className="icons">
                                <img src={vehicle} alt="brush" />
                            </div>
                            <p className="artistSkill mx-2 my-2">Vehicles: Car</p>
                        </div>
                        <div className="d-flex align-items-center py-2">
                            <div className="icons">
                                <img src={calendar} alt="brush" />
                            </div>
                            <p className="artistSkill mx-2 my-2">Artist since 2020</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5 select-and-continue">
                    <Button color='#fff'
                        textColor='#523105'
                        text='Select & Continue'
                        padding='6px'
                        height='67px'
                        width='427px'
                        fontSize="22px"
                        fontWeight='900'
                        border='1.5px solid #B4B4B5' />
                </div>
            </div>
        </div >
    )
}

export default AboutArtist
