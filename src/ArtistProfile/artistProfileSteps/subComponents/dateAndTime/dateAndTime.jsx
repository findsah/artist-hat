
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


const DateAndTime = () => {
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
            color: 'red',
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
            <div className="container aboutArtisInnerCont">
                <AboutArtist artistMdcoL='3' />
                <div className="row aboutMeSection d-flex align-items-end">
                    <div className="col-3">
                        <ArtistButton color='#fed12f' text='HELP' padding='0.4rem 2.5rem' fontSize="10px"
                            border='1px solid #B4B4B5' height='40px' width='130px' />
                    </div>
                    <div className="col-9">
                        <div>
                            <h4 className="aboutHeading">ABOUT ME</h4>
                            <hr></hr>
                            <p className="aboutParagraph">t is a long established fact that a reader will
                                be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <div className="d-flex justify-content-end">
                            <h6>Read more</h6>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center reviewGalleryButtons">
                    <div className="col-6 text-center">
                        <Button color='#fff'
                            textColor='#523105'
                            text='Reviews'
                            padding='6px'
                            height='67px'
                            width='427px'
                            fontSize="22px"
                            fontWeight='900'
                            border='1.5px solid #B4B4B5' />
                    </div>
                    <div className="col-6 text-center">

                        <Button color='#fed12f'
                            textColor='#523105'
                            text='Gallery'
                            padding='6px'
                            height='67px'
                            width='427px'
                            fontSize="22px"
                            fontWeight='900'
                            border='1.5px solid #B4B4B5' />
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
                                    color='red'
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
                            <div className='col-md-4 py-5 text-center'>
                                <div className="request-for p-5">
                                    <h5 className="headings yellow-heading mb-4">REQUEST FOR</h5>
                                    <h5 className="headings requestFor-date">{from.day}. {from.date} TO {to.day}. {to.date}</h5>
                                </div>
                                <div className="my-3">
                                    <Button color='#fff'
                                        textColor='#523105'
                                        text='SELECT & CONTINUE'
                                        padding='6px'
                                        height='67px'
                                        width='427px'
                                        fontSize="22px"
                                        fontWeight='900'
                                        border='1.5px solid #B4B4B5' />
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