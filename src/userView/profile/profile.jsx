import React, { useState, useEffect } from 'react'
import './profile.css'
import { IoMdArrowDropdown } from 'react-icons/io'
import Skills from '../../Assets/skills.svg'
import workArea from '../../Assets/workArea.svg'
import photo from '../../Assets/photo.svg'
import bio from '../../Assets/bio.svg'
import vehicle from '../../Assets/vehicle.svg'
import SideBar from './components/sideBar'
import WorkArea from './workArea/workArea'
import Bio from './bio/bio'
import Vehicles from './vehicles/vehicles'
import Photo from './photo/photo'
import Skill from './rateAndSkills/painting/Skill'
import { useNavigate } from 'react-router'



const UserProfile = () => {
    const navigate = useNavigate();
    const loggedIn = localStorage.getItem('userToken');
    const [profileTab, setProfileTab] = useState(1);
    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 1919px)").matches
    )
    if (!loggedIn) {
        navigate('/userregistration')
    }
    useEffect(() => {
        window
            .matchMedia("(max-width: 1919px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);


    const toggleProfileNav = (index) => {
        setProfileTab(index);
    }
    return (

        <div className='row justify-content-between main_grey_con'>
            {matches && (<div><div className='col-12 profile-nav-sec' id='profile_nav_tablet_view'>
                <div className='row justify-content-center'>
                    <div className='col-12'>
                        <div className='prfoile_preview'>
                            <h1 className='your-profile'>YOUR PROFILE</h1>
                            <p className='preview'>PREVIEW</p>
                        </div>
                    </div>
                    <div className='col-12 profile-tabs'>
                        <div className='row justify-content-between profile_nav m-0' id="pills-tab" role="tablist">
                            <div className='col-12 col-lg-2 profile-tabs-con text-center p-0' role="presentation">
                                <button className={`profileNav-tabs ${profileTab === 1 ? 'profileNav-tabs-active' : ''}`}
                                    onClick={() => toggleProfileNav(1)}

                                >
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='navImages_wrap'><img className="rateAndSkills-img" src={Skills} alt="img" /></div>
                                        <div className=''>
                                            <h4 className='profileRatesTab-text'>RATES & SKILLS</h4>
                                            <div className='profileArrow-div'>
                                                <IoMdArrowDropdown className={`profileArrow-dropDown ${profileTab === 1 ? 'profile-arrow-active' : ''}`} />
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className='col-12 col-lg-2 profile-tabs-con text-center p-0' role="presentation">
                                <button className={`profileNav-tabs ${profileTab === 2 ? 'profileNav-tabs-active' : ''}`}
                                    onClick={() => toggleProfileNav(2)}

                                >
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='navImages_wrap'><img className="rateAndSkills-img" src={workArea} alt="img" /></div>
                                        <div className=''>
                                            <h4 className='profileRatesTab-text'>WORK AREA</h4>
                                            <div className='profileArrow-div'>
                                                <IoMdArrowDropdown className={`profileArrow-dropDown ${profileTab === 2 ? 'profile-arrow-active' : ''}`} />
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className='col-12 col-lg-2  profile-tabs-con text-center p-0' role="presentation">
                                <button className={`profileNav-tabs ${profileTab === 3 ? 'profileNav-tabs-active' : ''}`}
                                    onClick={() => toggleProfileNav(3)}

                                >
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='navImages_wrap'><img className="rateAndSkills-img" src={photo} alt="img" /></div>
                                        <div className=''>
                                            <h4 className='profileRatesTab-text'>PHOTO</h4>
                                            <div className='profileArrow-div'>
                                                <IoMdArrowDropdown className={`profileArrow-dropDown ${profileTab === 3 ? 'profile-arrow-active' : ''}`} />
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className='col-12 col-lg-2 profile-tabs-con text-center p-0' role="presentation">
                                <button className={`profileNav-tabs ${profileTab === 4 ? 'profileNav-tabs-active' : ''}`}
                                    onClick={() => toggleProfileNav(4)}

                                >
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='navImages_wrap'><img className="rateAndSkills-img" src={bio} alt="img" /></div>
                                        <div className=''>
                                            <h4 className='profileRatesTab-text'>BIO</h4>
                                            <div className='profileArrow-div'>
                                                <IoMdArrowDropdown className={`profileArrow-dropDown ${profileTab === 4 ? 'profile-arrow-active' : ''}`} />
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className='col-12 col-lg-2 profile-tabs-con text-center p-0' role="presentation">
                                <button className={`profileNav-tabs ${profileTab === 5 ? 'profileNav-tabs-active' : ''}`}
                                    onClick={() => toggleProfileNav(5)}

                                >
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='navImages_wrap'><img className="rateAndSkills-img" src={vehicle} alt="img" /></div>
                                        <div className=''>
                                            <h4 className='profileRatesTab-text'>VEHICLES</h4>
                                            <div className='profileArrow-div'>
                                                <IoMdArrowDropdown className={`profileArrow-dropDown ${profileTab === 5 ? 'profile-arrow-active' : ''}`} />
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <hr className="hr-line" />
            </div>)}

            <SideBar profileTab={profileTab} />
            <div className={`profile_contentBar ${profileTab === 1 && 'category_selected'}`}>
                {!matches && (<div>
                    <div className='col-12 profile-nav-sec' id='profile_nav_desktop_view'>
                        <div className='row justify-content-center'>
                            <div className='col-12'>
                                <div className='d-flex align-items-end'>
                                    <h1 className='your-profile'>YOUR PROFILE</h1>
                                    <p className='preview'>PREVIEW</p>
                                </div>
                            </div>
                            <div className='col-10 profile-tabs'>
                                <div className='row justify-content-between profile_nav m-0' id="pills-tab" role="tablist">
                                    <div className='col-2 profile-tabs-con text-center p-0' role="presentation">
                                        <button className={`profileNav-tabs ${profileTab === 1 ? 'profileNav-tabs-active' : ''}`}
                                            onClick={() => toggleProfileNav(1)}

                                        >
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div className='navImages_wrap'><img className="rateAndSkills-img" src={Skills} alt="img" /></div>
                                                <div className=''>
                                                    <h4 className='profileRatesTab-text'>RATES & SKILLS</h4>
                                                    <div className='profileArrow-div'>
                                                        <IoMdArrowDropdown className={`profileArrow-dropDown ${profileTab === 1 ? 'profile-arrow-active' : ''}`} />
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div className='col-2 profile-tabs-con text-center p-0' role="presentation">
                                        <button className={`profileNav-tabs ${profileTab === 2 ? 'profileNav-tabs-active' : ''}`}
                                            onClick={() => toggleProfileNav(2)}

                                        >
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div className='navImages_wrap'><img className="rateAndSkills-img" src={workArea} alt="img" /></div>
                                                <div className=''>
                                                    <h4 className='profileRatesTab-text'>WORK AREA</h4>
                                                    <div className='profileArrow-div'>
                                                        <IoMdArrowDropdown className={`profileArrow-dropDown ${profileTab === 2 ? 'profile-arrow-active' : ''}`} />
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div className='col-2 profile-tabs-con text-center p-0' role="presentation">
                                        <button className={`profileNav-tabs ${profileTab === 3 ? 'profileNav-tabs-active' : ''}`}
                                            onClick={() => toggleProfileNav(3)}

                                        >
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div className='navImages_wrap'><img className="rateAndSkills-img" src={photo} alt="img" /></div>
                                                <div className=''>
                                                    <h4 className='profileRatesTab-text'>PHOTO</h4>
                                                    <div className='profileArrow-div'>
                                                        <IoMdArrowDropdown className={`profileArrow-dropDown ${profileTab === 3 ? 'profile-arrow-active' : ''}`} />
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div className='col-2 profile-tabs-con text-center p-0' role="presentation">
                                        <button className={`profileNav-tabs ${profileTab === 4 ? 'profileNav-tabs-active' : ''}`}
                                            onClick={() => toggleProfileNav(4)}

                                        >
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div className='navImages_wrap'><img className="rateAndSkills-img" src={bio} alt="img" /></div>
                                                <div className=''>
                                                    <h4 className='profileRatesTab-text'>BIO</h4>
                                                    <div className='profileArrow-div'>
                                                        <IoMdArrowDropdown className={`profileArrow-dropDown ${profileTab === 4 ? 'profile-arrow-active' : ''}`} />
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div className='col-2 profile-tabs-con text-center p-0' role="presentation">
                                        <button className={`profileNav-tabs ${profileTab === 5 ? 'profileNav-tabs-active' : ''}`}
                                            onClick={() => toggleProfileNav(5)}

                                        >
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div className='navImages_wrap'><img className="rateAndSkills-img" src={vehicle} alt="img" /></div>
                                                <div className=''>
                                                    <h4 className='profileRatesTab-text'>VEHICLES</h4>
                                                    <div className='profileArrow-div'>
                                                        <IoMdArrowDropdown className={`profileArrow-dropDown ${profileTab === 5 ? 'profile-arrow-active' : ''}`} />
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="hr-line" />
                </div>)}

                <div className='profileNav-content-sec'>
                    <div className="tab-content" id="pills-tabContent">
                        <div className={`${profileTab === 1 ? 'tab-pane fade show active ' : 'tab-pane fade'}`} id="pills-ratesAndSkills" role="tabpanel" aria-labelledby="pills-home-tab">
                            <Skill
                                setProfileTab={setProfileTab}
                            />
                        </div>
                        <div className={`${profileTab === 2 ? 'tab-pane fade show active ' : 'tab-pane fade'}`} id="pills-workArea" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <WorkArea
                                toggleProfileNav={toggleProfileNav}
                            />
                        </div>
                        <div className={`${profileTab === 3 ? 'tab-pane fade show active ' : 'tab-pane fade'}`} id="pills-photo" role="tabpanel" aria-labelledby="pills-contact-tab">
                            <Photo
                                profileTab={profileTab}
                            />
                        </div>
                        <div className={`${profileTab === 4 ? 'tab-pane fade show active ' : 'tab-pane fade'}`} id="pills-bio" role="tabpanel" aria-labelledby="pills-contact-tab">
                            <Bio 
                            setProfileTab={setProfileTab}/>
                        </div>
                        <div className={`${profileTab === 5 ? 'tab-pane fade show active ' : 'tab-pane fade'}`} id="pills-vehicles" role="tabpanel" aria-labelledby="pills-contact-tab">
                            <Vehicles
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default UserProfile
