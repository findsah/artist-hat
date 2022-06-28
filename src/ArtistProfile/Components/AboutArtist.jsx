import React, { useState, useEffect } from 'react'
import ReactStars from 'react-rating-stars-component';
import './AboutArtist.css';
import artistImage from '../../Assets/profileIcon.png';
import brush from '../../Assets/Brush.svg';
import location from '../../Assets/Location.svg';
import id from '../../Assets/Id.svg';
import calendar from '../../Assets/Calendar.svg';
import vehicle from '../../Assets/Car.svg';
import Button from '../../Components/button/button';
import ArtistButton from './button/artistButton';

const AboutArtist = ({ data }) => {
    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 991px)").matches
    )
    useEffect(() => {
        window
            .matchMedia("(max-width: 991px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <div className="artistIntroRow">
            <div className='row about-artist'>
                <div className="artist-img position-absolute">
                    <img className="img-fluid" src={artistImage} alt="" />
                </div>
                <div className='artistIntro_sec'>
                    <div className="artistIntro row">
                        <div className="ml-5">
                            <div className="artistSkills py-2 col-md-12 px-0">
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

                            <div className="d-flex align-items-center">
                                <img src={brush} alt="brush" className="icons" />
                                <p className="artistSkill mx-2 my-2">5 Printing Projects</p>
                            </div>
                            <div className="d-flex align-items-center py-2">
                                <img src={location} alt="brush" className="icons" />
                                <p className="artistSkill mx-2 my-2">Working in Montreal</p>
                            </div>
                            <div className="d-flex align-items-center py-2">
                                <img src={id} alt="brush" className="icons" />
                                <p className="artistSkill mx-2 my-2">ID Verified</p>
                            </div>
                            <div className="d-flex align-items-center py-2">
                                <img src={calendar} alt="brush" className="icons" />
                                <p className="artistSkill mx-2 my-2">Artist since 2020</p>
                            </div>
                            <div className="d-flex align-items-center py-2">
                                <img src={vehicle} alt="brush" className="icons" />
                                <p className="artistSkill mx-2 my-2">Vehicles:{data && data.vehicles[0]}</p>
                            </div>
                            <div className="d-flex align-items-center py-2">
                                <img src={calendar} alt="brush" className="icons" />
                                <p className="artistSkill mx-2 my-2">Artist since 2020</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row reviewGalleryButtons'>
                <div className='col-12 col-lg-6 save'>
                    <Button color='#fff' text='Select & Continue' fontWeight={matches ? 'normal' : '900'} padding='1px 0' fontSize={matches ? '15px' : '22px'} border='1.5px solid #B4B4B5' className='buttonDimensions' height={matches ? '40px' : '67px'} width={matches ? '222px' : '297px'} />
                </div>
            </div>
            {/* <div className="mt-5 select-and-continue">
                <Button color='#fff'
                    textColor='#523105'
                    text='Select & Continue'
                    padding='6px'
                    height='67px'
                    width='100%'
                    fontSize="22px"
                    fontWeight='900'
                    border='1.5px solid #B4B4B5' />
            </div> */}
        </div>
    )
}

export default AboutArtist
