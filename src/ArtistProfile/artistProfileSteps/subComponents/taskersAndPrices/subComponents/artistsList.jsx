import React, { useEffect, useState } from 'react'
import profileImg from '../../../../../Assets/profileIcon.png'
import ReactStars from 'react-rating-stars-component';
import '../taskersAndPrices.css'
import Button from "../../../../../Components/button/button";
const ArtistsList = ({ handleClick }) => {
    
    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 1919px)").matches
    )
    useEffect(() => {
        window
            .matchMedia("(max-width: 1919px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    const artist =
        [{

            name: 'Michael',
            date: '02/02/2022',
            city: 'LAHORE',
            artist_skill_type: 'painting',
            rating: '5',
            description: 'Painting that help artists express their creativity.'
        },
        {

            name: 'Michael',
            date: '02/02/2022',
            city: 'LAHORE',
            artist_skill_type: 'painting',
            rating: '5',
            description: 'Painting that help artists express their creativity'
        },
        {

            name: 'Michael',
            date: '02/02/2022',
            city: 'LAHORE',
            artist_skill_type: 'painting',
            rating: '5',
            description: 'Painting that help artists express their creativity.'
        },
        {

            name: 'Michael',
            date: '02/02/2022',
            city: 'LAHORE',
            artist_skill_type: 'painting',
            rating: '5',
            description: 'Painting that help artists express their creativity.'
        }
        ]
    return (
        <>
            <div className='container taskersAndPrices'>
                <div className="row justify-content-between">
                    <div className="col-4 artist_filters">
                        <div className="filter_bar">
                            <h2 className='main_headings'>DATE</h2>
                            <div className="buttons row">
                                <div className="button">button</div>
                                <div className="button button_active">button</div>
                                <div className="button">button</div>
                                <div className="button button_active">button</div>
                            </div>
                            <hr />
                            <h2 className='main_headings'>DATE</h2>
                            <div className="timings">
                                <label className="radioLabel-container">MORNING (8:00 12:00)
                                    <input type="checkbox" name="vehicles" value='BICYCLE/SCOOTER/MOTOCYCLE' />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="radioLabel-container">AFTERNOON (12:00 17:00)
                                    <input type="checkbox" name="vehicles" value='BICYCLE/SCOOTER/MOTOCYCLE' />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="radioLabel-container">EVENING (17:00 21:30)
                                    <input type="checkbox" name="vehicles" value='BICYCLE/SCOOTER/MOTOCYCLE' />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <hr />
                            <div className="heading_small">OR CHOOSE A SPECIFIC TIME</div>

                            <div className="choose_time">
                                <select id="cars" name="cars" className="flexibility">
                                    <option value="volvo" className="timeOption artistTimes">08:00</option>
                                    <option value="saab">09:00</option>
                                    <option value="fiat">10:00</option>
                                    <option value="audi">01:00</option>
                                </select>
                            </div>

                            <h2 className='main_headings artist_type'>ARTIST TYPE</h2>
                            <div className="artist_type">
                                <label className="radioLabel-container">ELITE ARTIST
                                    <input type="checkbox" name="vehicles" value='BICYCLE/SCOOTER/MOTOCYCLE' />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="radioLabel-container">GREAT VALUE
                                    <input type="checkbox" name="vehicles" value='BICYCLE/SCOOTER/MOTOCYCLE' />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>

                    </div>
                    <div className="col-8 artists">
                        {artist.map((profile, index) => (
                            <div className={`artistProfile ${(index % 2) === 0 ? 'artistProfileGrey' : ''}`} key={index} onClick={() => handleClick(2)}>
                                <div className="profile_side col-4">
                                    <div className="profile_img">
                                        <img src={profileImg} alt="" className="img-fluid" />
                                    </div>
                                    <div className="viewProfile_reviews">
                                        VIEW PROFILE REVIEWS
                                    </div>
                                    <div className="profile_description">
                                        You can chat with your artist, adjust task details, or change task time after booking.
                                    </div>
                                    <div className="select_and_continue">
                                        <Button color='#fff'
                                            textColor='#523105'
                                            text='SELECT & CONTINUE'
                                            padding='6px'
                                            height='67px'
                                            width='100%'
                                            fontSize={`${matches ? '15px' : '20px'}`}
                                            fontWeight='900'
                                            border='1.5px solid #B4B4B5' />
                                    </div>
                                </div>
                                <div className="review_side col-7">
                                    <div className="ratings_and_price">
                                        <div className="ratings">
                                            <div className="artist_name">
                                                Michel G.
                                            </div>
                                            <ReactStars
                                                count={5}
                                                onChange={ratingChanged}
                                                size={24}
                                                color1="green"
                                                color2="red"
                                            />
                                            <div className="review_percentage">4.9 (7.5 Reviews)</div>
                                            <div className="review_percentage">120 Painting Projects</div>

                                        </div>
                                        <div className="price_sec">
                                            <h3 className='price'>$50.00/HR</h3>
                                            <div className="great_value">GREAT VALUE</div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="skill_des">
                                        Carving is a painting technique that involves using tools to
                                        shape a form by cutting or scraping away from a solid material such as stone, wood, ivory or bone.
                                    </div>
                                    <div className="read_more">Read more</div>
                                    <div className="reviews">
                                        <div className="reviewee">
                                            <img src={profileImg} alt="" className='image' />
                                            <div className="review_and_name">
                                                <div className="review">Mercer was fantastic! Fast, easy and knowledgeable service.

                                                </div>
                                                <div className="name_and_date">
                                                    Kate W. - January 14, 2021
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </div>
        </>
    )
}

export default ArtistsList