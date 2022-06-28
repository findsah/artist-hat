
import React, { useEffect, useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import './dateAndTime.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import AboutArtist from '../../../Components/AboutArtist';
import { MdAdd } from 'react-icons/md';
import ArtistButton from '../../../Components/button/artistButton';
import artistImage from '../../../../Assets/artist.png';
import Button from "../../../../Components/button/button";
import { useSelector } from "react-redux";


const DateAndTime = () => {
    const artistPublicProfile = useSelector((state) => state.artist_Public_Profile.profile);
    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 991px)").matches
    )
    useEffect(() => {
        window
            .matchMedia("(max-width: 991px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);
    const [from, setFrom] = useState([
        {
            day: "",
            date: new Date()
        }
    ]
    );
    const [to, setTo] = useState([
        {
            day: "",
            date: new Date()
        }
    ]
    );

    const [selectedDayRange, setSelectedDayRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
    ]);

    useEffect(() => {
        setFrom([]);
        setTo([]);
        const dataFrom = {
            day: selectedDayRange[0].startDate.toString().split(" ")[1].toUpperCase(),
            date: selectedDayRange[0].startDate.getDate()
        }
        setFrom(dataFrom);
        const dataTo = {
            day: selectedDayRange[0].endDate.toString().split(" ")[1].toUpperCase(),
            date: selectedDayRange[0].endDate.getDate()
        }
        setTo(dataTo);

    }, [selectedDayRange])

    console.log(selectedDayRange[0].startDate.toString(), "this is from");
    return (
        <div className="aboutArtistSec">
            <div className="aboutArtisInnerCont">
                <AboutArtist artistMdcoL='3' />
                <div className="row about_me">
                    <div className="col-12 col-lg-3 text-center">
                        <ArtistButton color='#fed12f' text='HELP'
                            fontSize="10px"
                            border='1px solid #B4B4B5' height='40px' width='130px' />
                    </div>
                    <div className="col-12 col-lg-9 text-center">
                        <div>
                            <h4 className="aboutHeading">ABOUT ME</h4>
                            <hr></hr>
                            <p className="aboutParagraph">{artistPublicProfile && artistPublicProfile.bio}</p>
                        </div>
                        <div className="d-flex justify-content-end">
                            <h6 className='read_more'>Read more</h6>
                        </div>
                    </div>
                </div>
                <div className='row reviewGalleryButtons'>
                    <div className='col-12 col-lg-6 save'>
                        <Button color='#fdd043' text='Reviews' fontWeight={matches ? 'normal' : '900'} padding='1px 0' fontSize={matches ? '15px' : '22px'} border='1.5px solid #B4B4B5' className='buttonDimensions' height={matches ? '40px' : '67px'} width={matches ? '222px' : '297px'} />
                    </div>
                    <div className='col-12 col-lg-6 cancel'>
                        <Button color='#fff' text='Gallery' padding='1px 0' fontWeight={matches ? 'normal' : '900'} fontSize={matches ? '15px' : '22px'} border='1.5px solid #B4B4B5' className='buttonDimensions' height={matches ? '40px' : '67px'} width={matches ? '222px' : '297px'} />
                    </div>
                </div>
            </div>

            {/* gallery-section */}
            <div className="artistGallerySec">

                <div className="galleryCol">
                    <MdAdd className="imageCut" />
                    <div className="calendar-sec artistCal-sec">
                        <div className='="row justify-content-center'>
                            <div className='col-md-10'>
                                <h4 className="project-date">CHOOSE YOUR PROJECT DATE AND START TIME</h4>
                            </div>
                        </div>
                        <div className='="row justify-content-center my-5'>
                            <div className='col-md-5 d-flex justify-content-between'>
                                <div className='col-4'><img className="img-fluid" src={artistImage} alt="img" /></div>
                                <div className='col-8 artistDetails'>
                                    <h5 className="headings yellow-heading">MICHEL G</h5>
                                    <div>
                                        <h6 className="headings">AVAILABILITY</h6>
                                        <h6 className="headings">SEP.-OCT.2021</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row justify-content-center my-5'>
                            <div className='col-md-8 calendar-col'>
                                <DateRangePicker
                                    editableDateInputs={true}
                                    onChange={item => setSelectedDayRange([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={selectedDayRange}
                                />
                                <div className="my-5">
                                    <h6 className="headings pickTime">PICK TIME FOR YOUR ARTIST</h6>
                                    <div className="my-3">
                                        <select id="cars" name="cars" className="artistTimes">
                                            <option value="volvo" className="timeOption artistTimes">08:00</option>
                                            <option value="saab">09:00</option>
                                            <option value="fiat">10:00</option>
                                            <option value="audi">01:00</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                           
                            <div className='col-md-4 text-center d-flex justify-content-center flex-column'>
                                <div className="request-for">
                                    <h5 className="headings yellow-heading mb-4">REQUEST FOR</h5>
                                    <h5 className="headings requestFor-date">{from.day}. {from.date} TO {to.day}. {to.date}</h5>
                                </div>
                                <div className='row select-and-continue'>
                                    <div className='col-12 col-lg-8 cancel'>
                                        <Button color='#fff' text='Select & Continue' padding='1px 0' fontWeight={matches ? 'normal' : '900'} fontSize={matches ? '15px' : '22px'} border='1.5px solid #B4B4B5' className='buttonDimensions' height={matches ? '40px' : '67px'} width='100%' />
                                    </div>
                                </div>
                                <p className="confirm-details my-5">NEXT,CONFIRM YOUR DETAILS TO GET CONNECTED WITH YOUR ARTIST</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default DateAndTime