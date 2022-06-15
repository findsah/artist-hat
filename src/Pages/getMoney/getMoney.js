
import { useState } from "react";
import sideart from "../../Assets/sideart.png";
import creativeArt from "../../Assets/creativeArt.svg";
import './getMoney.css';
import FlexibleWork from "./subComponents/flexibleWork";
import GetStartCard from "./subComponents/getStartCard";
import DownloadStore from "../../Components/DownloadStore";
import signup from "../../Assets/Missing_Icons/Signup.svg";
import profile from "../../Assets/Missing_Icons/profile.svg";
import eligible from "../../Assets/Missing_Icons/eligible.svg";
import Payregistrationfee from "../../Assets/Missing_Icons/Payregistrationfee .svg";
import Setyourschedule from "../../Assets/Missing_Icons/Set_your_schedule.svg";
import Startgetting from "../../Assets/Missing_Icons/Start_getting.svg";
import grayscalelogo from "../../Assets/logobgrayscale.svg";
import QuestionAnswerModel from "./subComponents/QuestionAnswerModel";
import QuestionAnswerObject from "../../Helpers/QuestionAnswerObject";
// import { GiPencilBrush } from "react-icons/gi";



const GetMoney = () => {
    const [modalShow, setModalShow] = useState(false);
    const [modalObject, setModalObject] = useState();
    const [value, setValue] = useState();
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('Your favorite flavor is: ' + value);
        event.preventDefault();
    }
    return (
        <>
            <div className="container-fluid gradientColor">
                <div className="row gradientColorRow">
                    <div className="col-12 col-md-6 gradientColorForm" style={{ margin: "auto", paddingLeft: "5rem" }}>
                        <form onSubmit={handleSubmit}>
                            <label className="areaLabel">
                                select your area
                            </label><br />
                            <select className="areaSelect" value={value} onChange={handleChange}>
                                <option value="grapefruit">Grapefruit</option>
                                <option value="lime">Lime</option>
                                <option value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>
                            <label className="areaLabel">
                                choose a category
                            </label><br />
                            <select className="areaSelect" value={value} onChange={handleChange}>
                                <option value="Mixed Media">Mixed Media</option>
                                <option value="Mosaic">Mosaic</option>
                                <option value="Stand Glass">Stand Glass</option>
                                <option value="Sculpture">Sculpture</option>
                                <option value="Painting">Painting</option>
                            </select>
                            <label className="areaLabel">
                                your hourly rate
                            </label><br />
                            {/* <select className="areaSelect" value={value} onChange={handleChange} style={{fontSize: "30px", fontWeight: "bold"}}>
                                <option value="20">$20</option>
                                <option value="30">30</option>
                                <option value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select><br /> */}
                            <input className="areaSelect" type="text" placeholder="$" style={{ fontSize: "30px", fontWeight: "bold" }} /><br />
                            <input className="getStarted" type="submit" value="get started" /><br />
                            <div className="alreadyAccountDiv">
                                <span style={{ color: "#C6C6C6" }} >Already have an account? </span>
                                <span style={{ color: "#523106", textDecoration: "underline", fontWeight: "bold" }} >Sign in</span>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-md-6">
                        <img className="getMoneyimg" src={sideart} alt="img" />
                    </div>
                </div>
            </div>
            <div className="flexibleWorkSection container">
                <DownloadStore alignments="center" />
                {/* <div className="row" style={{ justifyContent: "center", margin: "8rem 0", alignItems: "center" }}>
                    <div className="col-12 col-sm-3 text-center">Get sarted faster. <br /> Download our app</div>
                    <div className="col-12 col-sm-3 text-center"><img src={googleButton} /></div>
                    <div className="col-12 col-sm-3 text-center"><img src={appleButton} /></div>
                </div> */}
                <FlexibleWork />
                <div className="row desArtist">
                    <div className="col-12 col-md-5">
                        <img className="artistImg" src={creativeArt} alt="img" />
                    </div>
                    <div className="col-12 col-md-6" style={{ margin: "auto 0" }}>
                        <h2 className="desArtisth2">What is artisthat ?</h2>
                        <p className="desArtistP">
                            Artisthat connects busy people in need of help with trusted local
                            Artist who can lend a hand with everything from home decoration to errands.
                            As an Artist, you can get paid to do what you love, when and where you want
                            all while saving the day for someone in your city.
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className="container-fluid leftFlexible">
                <FlexibleWork />
            </div> */}
            <div className="container" style={{ margin: "5rem auto" }}>
                <h1 className="headtexth1" style={{ fontSize: "30px", marginBottom: "70px" }}>Getting Started</h1>
                <div className="row justify-content-around" style={{ marginTop: "8rem" }}>
                    <div className="col-12 col-md-3 gettingStartedCols">
                        <GetStartCard
                            imgSrc={signup}
                            title="SignUp"
                            description="Create your account. Then download the ArtistHat app to continue registration."
                        />
                    </div>
                    <div className="col-12 col-md-3 gettingStartedCols">
                        <GetStartCard
                            imgSrc={profile}
                            title="Build You Profile"
                            description="Build your profile, Select what services you want to offer and where."
                        />
                    </div>
                    <div className="col-12 col-md-3 gettingStartedCols">
                        <GetStartCard
                            imgSrc={eligible}
                            title="Verify your eligibility to project"
                            description="Confirm your identity and submit business verifications, as required."
                        />
                    </div>
                </div>
                <div className="row justify-content-around" style={{ marginTop: "8rem" }}>
                    <div className="col-12 col-md-3 gettingStartedCols">
                        <GetStartCard
                            imgSrc={Payregistrationfee}
                            title="Pay registration fee"
                            description="Pay registration fee, In applicable cities, we charge a $25 registration fee that helps us provide the best service to you."
                        />
                    </div>
                    <div className="col-12 col-md-3 gettingStartedCols">
                        <GetStartCard
                            imgSrc={Setyourschedule}
                            title="Set your schedule and work area"
                            description="Set your weekly availability and opt in to receive same-day jobs."
                        />
                    </div>
                    <div className="col-12 col-md-3 gettingStartedCols">
                        <GetStartCard
                            imgSrc={Startgetting}
                            title="Start getting jobs"
                            description="Grow your business on your own terms."
                        />
                    </div>
                </div>
                <div className="row" style={{ marginTop: "120px" }}>
                    <h1 className="headtexth1" style={{ fontSize: "30px", marginBottom: "70px" }}>Your questions, answered</h1>
                    <div className="col-12 col-md-6">
                        {
                            QuestionAnswerObject.slice(0, 4).map(item => (
                                <div
                                    key={item.id}
                                    className="questions"
                                    onClick={() => {
                                        setModalShow(true);
                                        setModalObject(item)
                                    }}
                                >
                                    {item.question}
                                </div>
                            ))
                        }
                        {/* <div className="questions" onClick={() => setModalShow(true)}>What's required to become an Artist?</div>
                        <div className="questions" onClick={() => setModalShow(true)}>How do I get jobs?</div>
                        <div className="questions" onClick={() => setModalShow(true)}>Where does ArtistHat operations?</div>
                        <div className="questions" onClick={() => setModalShow(true)}>How long does it take for my registration to be processed?</div> */}
                    </div>
                    <div className="col-12 col-md-6">
                        {
                            QuestionAnswerObject.slice(4, 6).map(item => (
                                <div
                                    key={item.id}
                                    className="questions"
                                    onClick={() => {
                                        setModalShow(true)
                                    }}
                                >
                                    What's required to become an Artist?
                                </div>
                            ))
                        }
                        {/* <div className="questions" onClick={() => setModalShow(true)}>Do I need experience to get a project?</div>
                        <div className="questions" onClick={() => setModalShow(true)}>How do i get paid?</div>
                        <div className="questions" onClick={() => setModalShow(true)}>What categories can i task in on TaskRabbit?</div> */}
                    </div>
                </div>
                {/* model related to these questions */}
                {
                    modalShow ?
                        <QuestionAnswerModel
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            modalobject={modalObject}
                        /> : ""
                }
            </div>
            <div className="container-fluid rightFlexible">
                <h1 className="headtexth1" style={{ fontSize: "30px", marginBottom: "70px" }}>Ready To Get Started</h1>
                <div className="row rightFlexibleRow">
                    <div className="col-12 col-md-3">
                        <div className="readyStarted">
                            <div className="rightFlexibleTitle">
                                <img src={grayscalelogo} style={{ width: "40%", height: "40%" }}  alt="img" />
                            </div>
                            <p className="rightFlexibleP">
                                ArtistHat, one of the biggest players in the gig economy where people offer their time and services
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="readyStarted">
                            <div className="rightFlexibleTitle">
                                <img src={grayscalelogo} style={{ width: "40%", height: "40%" }} alt="img"  />
                            </div>
                            <p className="rightFlexibleP">
                                ArtistHat, one of the biggest players in the gig economy where people offer their time and services
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="readyStarted">
                            <div className="rightFlexibleTitle">
                                <img src={grayscalelogo} style={{ width: "40%", height: "40%" }}  alt="img" />
                            </div>
                            <p className="rightFlexibleP">
                                ArtistHat, one of the biggest players in the gig economy where people offer their time and services
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetMoney;