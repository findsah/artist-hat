import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import stars from "../../../assests/stars.png";
import { RiStarSFill } from "react-icons/ri";
import {useSelector } from 'react-redux';


const Slider2 = () => {
    const trustedUser = useSelector((state) => state.trustedUser.value);



    function GoldNextArrow(props) {
        const { className, onClick } = props;
        return (<
            div className={className}
            style={
                {
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "7px",
                    border: "none",
                    right: "1%",
                    top: "44%"
                }
            }
            onClick={onClick}
        />
        );
    }

    function GoldPrevArrow(props) {
        const { className, onClick } = props;
        return (<
            div className={className}
            style={
                {
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "7px",
                    border: "none",
                    top: "44%",
                    left: "1%",
                    zIndex: "1",
                }
            }
            onClick={onClick}
        />
        );
    }
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: false,
        nextArrow: < GoldNextArrow />,
        prevArrow: < GoldPrevArrow />,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
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
    console.log(trustedUser)
    return (
        <div className="bestArtist2">
            <Slider {...settings}>
                {
                    trustedUser.map(item => (
                        <div key={item} >
                            <div className="trustedusercard">
                                <div className="trustedusercardprofile">
                                    <img className="trustedusercardprofileimg" src={item.img} alt="img" />
                                    <div className="trustedusercardprofilename">
                                        <p className="trustedusercardprofiletitle">{item.name}</p>
                                        <p className="trustedusercardprofilep">{item.date}, , {item.city} </p>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <p className="trustedusercardprofilep"> {item.artist_skill_type}</p>
                                            <p className="trustedusercardprofilep">
                                                <RiStarSFill />
                                                <RiStarSFill />
                                                <RiStarSFill />
                                                <RiStarSFill />
                                                <RiStarSFill />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p className="trustedusercardtext">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>

    )
}

export default Slider2;