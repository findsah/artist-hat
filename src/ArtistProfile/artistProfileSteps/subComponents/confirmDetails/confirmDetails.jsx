import React, {useState, useEffect} from 'react'
import './confirmDetails.css'
import ArtistButton from '../../../Components/button/artistButton'
import ReactStars from 'react-rating-stars-component'
import { BsCalendar } from 'react-icons/bs'
import artistImage from '../../../../Assets/profileIcon.png'
import { MdAttachFile } from 'react-icons/md';
import title from '../../../../Assets/title.png'
import security from '../../../../Assets/security.svg'
import location from '../../../../Assets/Location.svg';
import calendar from '../../../../Assets/Calendar.svg';
import projects from '../../../../Assets/Projects.svg';
import car from '../../../../Assets/Car.svg';
import { useSelector } from 'react-redux'
import Button from '../../../../Components/button/button'


const ConfirmDetails = () => {
    const artistPublicProfile = useSelector((state) => state.artist_Public_Profile.profile);
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
        <div className="confirmDetails-Sec">
            <div className='container'>
                <div className='row about-artist'>
                    <img className="artist-img position-absolute" src={artistImage} alt="" />
                    <div className="col-12 col-md-7">
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
                                <div className="d-flex align-items-center py-2">
                                    <div className="icons">
                                        <img src={calendar} alt="brush" />
                                    </div>
                                    <p className="artistSkill mx-2 my-2">Sat., Jan. 23 at 08:00</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="icons">
                                        <img src={location} alt="brush" />
                                    </div>
                                    <p className="artistSkill mx-2 my-2">
                                        1188 Rue Saint-Antoine Ouest
                                        Montréal,
                                        Québec H3C 1B4ID verified
                                    </p>
                                </div>
                                <div className="d-flex align-items-center py-2">
                                    <div className="icons">
                                        <img src={projects} alt="brush" />
                                    </div>
                                    <p className="artistSkill mx-2 my-2">Medium - Est. 2-3 hrs</p>
                                </div>
                                <div className="d-flex align-items-center py-2">
                                    <div className="icons">
                                        <img src={car} alt="brush" />
                                    </div>
                                    <p className="artistSkill mx-2 my-2">Not needed for project</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 about_me_sec">
                        <h4 className="aboutHeading">ABOUT ME</h4>
                        <hr></hr>
                        <p className="aboutParagraph">{artistPublicProfile && artistPublicProfile.bio}</p>
                        <h6 className='read_more text-end'>Read more</h6>
                    </div>
                    <div className="col-12 help_button">
                        <ArtistButton color='#fed12f' text='HELP' padding='0 1rem' fontSize="10px" border='1px solid #B4B4B5' height='40px' width='130px' />
                    </div>
                </div>

                {/* Task Details Section */}
                <div className="row justify-content-center my-5">
                    <div className='col-md-9 taskDetails-sec'>
                        <div className="row taskDetails_content">
                            <div className="col-10">
                                <h4 className="headings taskDetails-headings p-0">TELL US THE DETAILS OF YOUR TASK</h4>
                            </div>
                            <div className="col-12">
                                <p className="pd-paragraphs">It is a long established fact that a reader will be distracted by the readable content of a page when
                                    looking at its layout.
                                </p>
                            </div>
                        </div>
                        <div className="row justify-content-center my-3">
                            <div className="col-md-6 text-center">
                                <h6>
                                    <MdAttachFile />
                                    See more
                                </h6>
                            </div>
                            <div className="col-md-6 text-center">
                                <button className="fileSize">Max size is 20MB</button>
                            </div>
                            <div className="col-12 my-3">
                                <div className="summary-section">
                                    <p>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when
                                        looking at its layout.
                                        The point of using Lorem Ipsum is that it has a more-or-less normal
                                    </p>
                                </div>
                            </div>
                            <div className="col-12">
                                <p className="pd-paragraphs">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when
                                    looking at its layout.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-9 mt-5">
                        <div className="row">
                            <div className="col-md-12 card-details-sec py-3 px-0">
                                <div className='px-3'>
                                    <h4 className="headings taskDetails-headings p-0">YOU ARE BILLED ONLY AFTER YOUR TASK IS COMPLETED</h4>
                                    <h4 className="headings taskDetails-headings px-0 py-3">CARD DETAILS</h4>
                                </div>
                                <div>
                                    <div className="d-flex billing-input-group">
                                        <div className="card-sign col-3"><BsCalendar /></div>
                                        <div className="col-3">
                                            <input type="text" className="card-inputs" placeholder="Card" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="col-3">
                                            <input type="text" className="card-inputs" placeholder="MM/YY" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="col-3">
                                            <input type="text" className="card-inputs" placeholder="CVC" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                </div>
                                <div className='my-3 px-3'>
                                    <p className="pd-paragraphs">Your card has expired, please update payment method</p>
                                    <h4 className="headings taskDetails-headings px-0 py-3">HAVE A PROMO CODE?</h4>
                                </div>
                            </div>

                            <div className='col-md-12 mobile-phone px-0'>
                                <h4 className="headings taskDetails-headings px-3 py-3">MOBILE PHONE</h4>
                            </div>
                            <div className="col-12 col-lg-7">
                                <div className="phone-number d-flex justify-content-between">
                                    <h1 className="mobile">+1 647 755 9999</h1>
                                </div>
                            </div>
                            <div className='col-md-12 py-4 px-0 donation-sec'>
                                <div className='title-img'>
                                    <img className="img-fluid" src={title} alt="img" />
                                </div>
                            </div>

                            <div className='col-md-12'>
                                <div className='py-2 px-5 donationMain-sec'>
                                    <div className='py-3'>
                                        <p className="pd-paragraphs" style={{ fontSize: "13px" }}>Your card has expired, please update payment method payment
                                            method</p>
                                        <h6 className='text-end'>Read more</h6>
                                    </div>
                                    <div className='d-block'>
                                        <div>
                                            <label className="radioLabel-container">Donate $1 to Artist for Good
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="radioLabel-container">Add a donation drop-off to your Project
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className='col-md-12 py-4'>
                                <div className='d-flex align-items-center'>
                                    <div className='security-img'>
                                        <img className="img-fluid" src={security} alt="img" />
                                    </div>
                                    <div className='px-3'>
                                        <p className="community-protection">
                                            To Protect your community please ensure that your Project complies with all public health guideliines
                                            and regulatioins in effect ins your area.
                                        </p>
                                    </div>
                                </div>
                                <h6 className='text-end py-4'>Learn more</h6>
                            </div>

                            <div className='col-md-12'>
                                <div className='row justify-content-center'>
                                    <div className='col-md-11'>
                                        <div className="chat-tagline">
                                            <p>
                                                It is a long established fact that a reader will be distracted by the readable content of a page when
                                                looking at its layout.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row reviewGalleryButtons'>
                                <div className='col-12 col-lg-6 cancel'>
                                    <Button color='#fff' text='CONFIRM & CHAT' padding='1px 0' fontWeight={matches ? 'normal' : '900'} fontSize={matches ? '12px' : '22px'} border='1.5px solid #B4B4B5' className='buttonDimensions' height={matches ? '40px' : '67px'} width={matches ? '222px' : '297px'} />
                                </div>
                            </div>
                            {/* <div className='col-md-12'>
                                <ArtistButton color='#fff' text='CONFIRM & CHAT' border='1px solid #B4B4B5' padding='.3rem 3.5rem' fontSize='12px' />
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* card-details-seciton */}
                {/* <div className="row justify-content-end my-5">
                    <div className='col-md-10'>
                        

                    </div>

                </div> */}
            </div>
        </div >
    )
}

export default ConfirmDetails
