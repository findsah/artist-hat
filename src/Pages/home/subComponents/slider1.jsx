
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactStars from "react-rating-stars-component";

import michel from "../../../Assets/michel.png";
import { ImLocation2 } from "react-icons/im";

const Slider1 = () => {

    const bestArtist = [
        {

            img: michel,
            name: 'Michel',
            job_title: 'I’m the creative person for the job:',
            job_description: 'Experienced in the home and commercial renovation field. I have the tools and experience for all you',
            job_skills: ['Sculptural Artist'],
            Followers: '128k followers',
            Projects_done: '26 projects',
            location: '',
            price: '$40',
            rating: '4',

        }, {

            img: michel,
            name: 'Michel',
            job_title: 'I’m the creative person for the job:',
            job_description: 'Experienced in the home and commercial renovation field. I have the tools and experience for all you',
            job_skills: ['Sculptural Artist'],
            Followers: '128k followers',
            Projects_done: '26 projects',
            location: '',
            price: '$40',
            rating: '4',

        },
        {

            img: michel,
            name: 'Michel',
            job_title: 'I’m the creative person for the job:',
            job_description: 'Experienced in the home and commercial renovation field. I have the tools and experience for all you',
            job_skills: ['Sculptural Artist'],
            Followers: '128k followers',
            Projects_done: '26 projects',
            location: '',
            price: '$40',
            rating: '2',

        },
        {

            img: michel,
            name: 'Michel',
            job_title: 'I’m the creative person for the job:',
            job_description: 'Experienced in the home and commercial renovation field. I have the tools and experience for all you',
            job_skills: ['Sculptural Artist'],
            Followers: '128k followers',
            Projects_done: '26 projects',
            location: '',
            price: '$40',
            rating: '4',

        },
        {

            img: michel,
            name: 'Michel',
            job_title: 'I’m the creative person for the job:',
            job_description: 'Experienced in the home and commercial renovation field. I have the tools and experience for all you',
            job_skills: ['Sculptural Artist'],
            Followers: '128k followers',
            Projects_done: '26 projects',
            location: '',
            price: '$40',
            rating: '4',

        }
    ]



    function GoldNextArrow(props) {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "7px",
                    border: "none",
                    right: "-6%",
                }}
                onClick={onClick}
            />
        );
    }

    function GoldPrevArrow(props) {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "7px",
                    border: "none",
                    left: "-6%",
                    zIndex: "1",
                }}
                onClick={onClick}
            />
        );
    }
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: false,
        nextArrow: <GoldNextArrow />,
        prevArrow: <GoldPrevArrow />,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <div className="bestArtist1">
            <Slider {...settings}>
                {bestArtist.map((item,index) => (
                    <div className="artistsliderbox" key={index}>
                        <img className="artistsliderimg" src={item.img} alt="img" />
                        <p className="artistsliderspan">
                            {item.name}
                            <br /> Goroguos
                        </p>
                        <div className="artistsliderinnerbox">
                            <p className="artistsliderinnerboxp">
                                {item.job_title}
                            </p>
                            <p className="artistsliderinnerboxp1" style={{ color: "#817889" }}>
                                {item.job_description}
                            </p>
                            <span
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    color: "orange",
                                    fontWeight: "lighter",
                                    fontSize: "9px"
                                }}
                            >
                                Read more
                            </span>
                        </div>
                        <div className="artistsliderreviews">
                            <ul>
                                {item.job_skills.map((skill) => (<li>{skill}</li>))}
                                <li>{item.Followers}</li>
                                <li>{item.Projects_done}</li>
                            </ul>
                            <div style={{ marginTop: "25px" }}>
                                <p className="artistsliderinnerboxp2">
                                    <ImLocation2 style={{ width: "0.9rem", height: "0.9rem", fill: "#523106" }} /> Paris{" "}
                                    <br /> <span style={{ fontSize: "25px" }}>{item.price}</span>
                                </p>
                                <div className="reactStars">
                                    <ReactStars
                                        count={item.rating}
                                        onChange={ratingChanged}
                                        size={24}
                                        activeColor="#ffd700"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </Slider>
        </div>
    )
}

export default Slider1;