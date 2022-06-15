
import React, { useState, useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./home.css";
import painting1 from "../../Assets/painting.svg";
import mixedmedia1 from "../../Assets/mixedMedia.svg";
import mosaic1 from "../../Assets/mosaic.svg";
import grafitti1 from "../../Assets/grafitti.svg";
import standGlass1 from "../../Assets/standGlass.svg";
import sculptur1 from "../../Assets/sculptur.svg";
import sideart from "../../Assets/sideart.png";
import creativeArt from "../../Assets/creativeArt.svg";
import work1 from "../../Assets/work1.svg";
import work2 from "../../Assets/work2.png";
import work3 from "../../Assets/work3.svg";
import { GiPencilBrush } from 'react-icons/gi';
import Slider1 from "./subComponents/slider1";
import Slider2 from "./subComponents/slider2";
import DownloadStore from "../../Components/DownloadStore";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../Redux/home/Categories";
import { getStories } from "../../Redux/home/articleStories";
import { Link } from "react-router-dom";



const Home = () => {

    const dispatch = useDispatch();
    const ourCategories = useSelector((state) => state.categories.value);
    const articleStory = useSelector((state) => state.articleStory.value);

    const [sliderSelect, setSliderSelect] = useState();
    // const [paintingSelect, setPaintingSelect] = useState();
    // const sliderarr = [1, 2, 3, 4, 5, 6, 7, 8];



    const sliderObj = [
        {
            Icon: mixedmedia1,
            title: "Mixed Media"
        },
        {
            img: mosaic1,
            name: "Mosaic"
        },
        {
            img: grafitti1,
            name: "Grafitti"
        },
        {
            img: standGlass1,
            name: "Stand Glass"
        },
        {
            img: sculptur1,
            name: "Sculpture"
        },
        {
            img: painting1,
            name: "Painting"
        },
    ]
    var settings1 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
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
                    slidesToShow: 2,
                },
            },
        ],
    };


    useEffect(() => {
        console.log(ourCategories, "these are updated categoires")
        dispatch(getCategories());
        dispatch(getStories());
    }, [dispatch,ourCategories])


    return (
        <div className="home">
            <div className="section1">
                <div className="creativeway">
                    <h1 className="creativewayh1">get money in a creative way</h1>
                    <p className="creativewayp">Your platforms to show up your art </p>
                    <p className="creativewayp"> and get payed </p>
                    <div className="filters">
                        <p className="filterstext">what are you looking for?</p>
                        <select className="filtersselect" name="cars" id="cars">
                            <option value="volvo">Select Category </option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        <select className="filtersselect" name="cars" id="cars">
                            <option value="volvo">Select Location </option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        <button className="filterssearchbtn">search</button>
                    </div>
                    <div className="sliderClass">
                        <Slider {...settings1}>
                            {
                                sliderObj.map((item, index) => (
                                    <div
                                        className="sliderDiv"
                                        key={index}
                                        onClick={() => {
                                            setSliderSelect(index);
                                            console.log(sliderSelect, index)
                                        }}
                                        style={{ background: sliderSelect === index ? "#fed12f" : "white" }}
                                    >
                                        <img className="sliderimg" src={item.img} alt="img" />
                                        <p className="boxText">{item.name}</p>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
                <div className="creativewayimgdiv">
                    <img className="creativewayimg" src={sideart} alt="img" />
                </div>
            </div>
            <div className="container">
                <DownloadStore alignments="center" />
            </div>
            <div className="ourCategories container">
                <div className="headtext">
                    <h1 className="headtexth1">our categories</h1>
                    <p className="headtextp">Choose the category you awesome for</p>
                </div>
                <div className="categoriesboxes">
                    {
                        ourCategories.map(item => (
                            <div
                                className="categorybox"
                                key={item.id}
                            // onClick={() => setPaintingSelect(item.id)}
                            >
                                <img className="categoryboximg" src={item.image} alt="img" />
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="artistsection container">
                <div className="headtext">
                    <h1 className="headtexth1">best artist</h1>
                    <p className="headtextp">Look how creative they are</p>
                </div>
                <div>
                    <Slider1 />
                </div>
            </div>
            <div className="createyourteamsection container">
                <div className="createyourteamsectiontextdiv1">
                    <p className="createyourteamsectionp">
                        <GiPencilBrush style={{ fill: "orange", marginRight: "10px", marginLeft: "-30px" }} /> compare artist dolor sit amet consectetu
                    </p>
                    <p className="createyourteamsectionp">
                        <GiPencilBrush style={{ fill: "orange", marginRight: "10px", marginLeft: "-30px" }} /> compare artist dolor sit amet consectetu
                    </p>
                    <p className="createyourteamsectionp">
                        <GiPencilBrush style={{ fill: "orange", marginRight: "10px", marginLeft: "-30px" }} /> compare artist dolor sit amet consectetu
                    </p>
                </div>
                <img className="createyourteamsectionImg" src={creativeArt} alt="img" />
                <div className="createyourteamsectiontext">
                    <h1 className="createyourteamsectionh1">create your team of creatives</h1>
                    <p className="createyourteamsectionp1">
                        Lorem ipsum, dolor sit amet consectetur amet
                        adipisicing elit Quisquam ab dolorum,
                        numquam voluptate commodi Quisquam
                    </p>
                    <div className="createyourteamsectiontextdiv2">
                        <p className="createyourteamsectionp">
                            <GiPencilBrush style={{ fill: "orange", marginRight: "10px", marginLeft: "-30px" }} /> compare artist dolor sit amet consectetu
                        </p>
                        <p className="createyourteamsectionp">
                            <GiPencilBrush style={{ fill: "orange", marginRight: "10px", marginLeft: "-30px" }} /> compare artist dolor sit amet consectetu  consectetu job</p>
                        <p className="createyourteamsectionp">
                            <GiPencilBrush style={{ fill: "orange", marginRight: "10px", marginLeft: "-30px" }} /> compare artist dolor sit amet consectetu
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-fluid trustcardsection">
                <div className="headtext">
                    <h1 className="headtexth1">trusted by over 100k+ users</h1>
                    <p className="headtextp">See how Artists are changing the place for people like you.</p>
                </div>
                <div className="truestedUsers" style={{ marginTop: "5rem", marginBottom: "6rem" }}>
                    <Slider2 />
                </div>
            </div>
            <div className="howitworksecion container">
                <div className="headtext">
                    <h1 className="headtexth1">How it works</h1>
                    <p className="headtextp">How you get played</p>
                </div>
                <div className="howitworkcards">
                    <div className="howitworkcard">
                        <img className="howitworkcardimg" src={work1} alt="img" />
                        <div className="howitworkcardtext">
                            <p className="howitworkcardtext1">Describe Your Art Project</p>
                            <p className="howitworkcardtext2">Tell us what you need done, when and where it works for you.</p>
                        </div>
                    </div>
                    <div className="howitworkcard">
                        <img className="howitworkcardimg" src={work2} alt="img" />
                        <div className="howitworkcardtext">
                            <p className="howitworkcardtext1">Choose Your Artist</p>
                            <p className="howitworkcardtext2">Browse trusted Artist by skills, reviews, and price. Chat with them to confirm details.</p>
                        </div>
                    </div>
                    <div className="howitworkcard">
                        <img className="howitworkcardimg" src={work3} alt="img" />
                        <div className="howitworkcardtext">
                            <p className="howitworkcardtext1">Get It Done</p>
                            <p className="howitworkcardtext2"> Your Artist arrives and gets the job done. Pay securely and leave a review, all through ArtistHat.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid ArticlesStories" style={{ marginTop: "120px" }}>
                <div className="headtext">
                    <h1 className="headtexth1">Articles stories and more</h1>
                    <p className="headtextp">How the art make our live different</p>
                </div>
                <div className="articlestorysection">
                    <div className="articlestorysection1 row">
                        {articleStory.map((story) => (
                            <Link to={"/blogs/" + story.id} >
                                <div className="articlestorysectioncard col-6">
                                    <div className="articlestorysectioncardtext">
                                        <p className="articlestorysectioncardp1">{story.title}</p>
                                        <p className="articlestorysectioncardp2">
                                            {story.description}
                                        </p>
                                    </div>
                                    <img className="articlestorysectioncardimg" src={story.image} alt="redsky" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <button className="articlestorysectionbutton">see more blogs</button>
            </div>
        </div>
    )
}
export default Home;