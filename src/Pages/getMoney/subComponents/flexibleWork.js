
import ownboss from "../../../Assets/ownboss.svg";
import ownrates from "../../../Assets/ownrates.svg";
import ownbusiness from "../../../Assets/ownbusiness.svg";
import { Modal } from 'react-bootstrap'
import ScaleLoader from "react-spinners/ScaleLoader";
import { css } from "@emotion/react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { createProfile } from "../../../Api/UserReg_API";
import { useState } from "react";
import { getArtistData } from "../../../Redux/artistProfile/ArtistData";



const FlexibleWork = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const Id = localStorage.getItem('userId');
    let [loading, setLoading] = useState(false);

    let color = '#ffffff';
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: #ffffff;
  `;
  console.log(props.profileData,'updated profile data')
    const submitProfile = async () => {
        // const data = 
        setLoading(true)
        const response = await createProfile(props.profileData, Id);
        if (response.data.errors) {
            navigate("/profile");
            setLoading(false)
        } else {
            console.log(response, ' congratulations,, artist profile is successfully completed')
            dispatch(getArtistData(Id));
            navigate('/artistView')
            console.log(response, ' congratulations,, artist profile is successfully completed')

        }


    }
    return (
        <>

            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Body>
                    <div className="headtext">
                        <h1 className="headtexth1" style={{ fontSize: "30px", lineHeight: "2" }}>flexible work, at your fingertips</h1>
                        <p className="headtextp" style={{ fontSize: "20px" }}>
                            Find local jobs that fit your skills and schedule.<br />
                            With ArtistHat, you have the freedom and<br />
                            support to be your own boss
                        </p>
                    </div>
                    <div className="row justify-content-between" style={{ width: "100%", marginTop: "70px" }}>
                        <div className="col-12 col-md-3 text-center">
                            <img style={{ height: "25%", width: "80%" }} src={ownboss} alt="img" />
                            <h2 style={{ margin: "3rem 0 1rem 0", color: "#523106", fontSize: "25px", fontWeight: "bold" }}>Be your own boss</h2>
                            <p style={{ fontSize: "14px", color: "#9599b1", textAlign: "justify" }}>
                                Work how, when and where you want. Offer services in 50+ categories
                                and set a flexible schedule and work area.
                            </p>
                        </div>
                        <div className="col-12 col-md-3 text-center">
                            <img style={{ height: "25%", width: "80%" }} src={ownrates} alt="img" />
                            <h2 style={{ margin: "3rem 0 1rem 0", color: "#523106", fontSize: "25px", fontWeight: "bold" }}>Set your own rates</h2>
                            <p style={{ fontSize: "14px", color: "#9599b1", textAlign: "justify" }}>
                                You keep 100% of what you charge, plus tips!
                                Invoice and get paid directly through our secure payment system.
                            </p>
                        </div>
                        <div className="col-12 col-md-3 text-center">
                            <img style={{ height: "25%", width: "80%" }} src={ownbusiness} alt="img" />
                            <h2 style={{ margin: "3rem 0 1rem 0", color: "#523106", fontSize: "25px", fontWeight: "bold" }}>Grow your business</h2>
                            <p style={{ fontSize: "14px", color: "#9599b1", textAlign: "justify" }}>
                                We connect you with clients in your area,
                                and ways to market yourself — so you can focus on what you do best.
                            </p>
                        </div>
                        <div className="col-12">
                            <div className="confirmations">
                                <label className="radioLabel-container">
                                    I did'nt agree with the price
                                    <input type="checkbox" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="confirmations">
                                <label className="radioLabel-container">
                                    I am not free during that to reschedule
                                    <input type="checkbox" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="confirmations">
                                <label className="radioLabel-container">
                                    <strong>Agree</strong>
                                    <input type="checkbox" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                                <button type="submit" className="createaccount" onClick={submitProfile}>
                                    {loading ? <ScaleLoader color={color} loading={loading} css={override} size={40} /> : ' Create Account'}
                                </button>
                            </div>
                        </div>

                    </div>
                </Modal.Body>
            </Modal>


        </>
    )
}

export default FlexibleWork;