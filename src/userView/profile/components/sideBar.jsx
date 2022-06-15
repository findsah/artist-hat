import React from 'react'
import user from '../../../Assets/profile.png'
import ReactStars from 'react-rating-stars-component'
import { ImShare2 } from 'react-icons/im';
import { RiFacebookCircleLine } from 'react-icons/ri'
import { TiSocialLinkedinCircular, TiSocialTwitterCircular } from 'react-icons/ti'
import { IoLogoInstagram } from 'react-icons/io'
import SidebarNav from '../rateAndSkills/subComponents/sidebarNav'
import { useSelector } from 'react-redux';


const SideBar = ({ profileTab }) => {
    const artistData = useSelector((state) => state.ArtistData.value);
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <div className='left_sideBar'>
            <div className='row position-relative p-0'>
                <div className='top-card userProfile-leftbar '>
                    <div className='pb-5'>
                        <div className='row leftBar-innerRow justify-content-between'>
                            <div className='col-12 col-lg-5 p-0'>
                                <img src={artistData?artistData.profilePicture:user} alt="img" className="profile_avatar" />
                            </div>
                            <div className='col-12 col-lg-6 p-0 user_name_sec'>
                                <div>
                                    <h2 className='user-name'>{artistData?.first_name}</h2>
                                    <h2 className='user-name'>{artistData?.last_name}</h2>
                                </div>
                                <p className='user-shortDesc'>It is a long established fact.
                                </p>
                            </div>
                            <div className='col-12'>
                                <h4 className='hourly-rate'>
                                    Hourly Rate ${artistData?.hourlyRate}
                                </h4>
                                <div className='mb-2 react_stars'><ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    size={11}
                                    color1="green"
                                    color2="red"
                                />
                                </div>
                                <p className='user-longDesc'>
                                    {artistData?.bio}
                                </p>
                                <div className='d-flex justify-content-between pt-2'>
                                    <div className='share'>
                                        <ImShare2 />
                                    </div>
                                    <div className='profileArrow-div d-flex align-items-center'>
                                        <p className='see-more'>See more</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-12 mt-3'>
                            <div className="profleCompletin-rate text-center">
                                <span>Profile 62% Complete</span>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='row py-2 justify-content-center'>
                                <div className='social-media'>
                                    <RiFacebookCircleLine />
                                </div>
                                <div className='social-media'>
                                    <TiSocialLinkedinCircular />
                                </div>
                                <div className='social-media'>
                                    <IoLogoInstagram />
                                </div>
                                <div className='social-media'>
                                    <TiSocialTwitterCircular />
                                </div>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='row justify-content-between mb-4'>
                                <div className='col-6 p-0 text-center'>
                                    <button className="public-profile">
                                        <span>Public Profile</span>
                                    </button>
                                </div>
                                <div className='col-6 p-0 text-center'>
                                    <button className="update-profile">
                                        <span>Update Profile</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sideNav'>
                    <div className="tab-content" id="pills-tabContent">
                        <div className={`${profileTab === 1 ? 'tab-pane fade show active ' : 'tab-pane fade'}`} id="pills-ratesAndSkills" role="tabpanel" aria-labelledby="pills-home-tab">
                            <SidebarNav />
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default SideBar
