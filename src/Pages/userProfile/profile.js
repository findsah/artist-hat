
import { useContext,useState } from "react";
import "./profile.css";
// import user from '../../Assets/user.svg';
// import user from '../../Assets/yellowuser.svg';
import user from '../../Assets/brownuser.svg';
import sideart from '../../Assets/sideart.png';
import ReactFlagsSelect from "react-flags-select";
import { createProfile } from "../../Api/UserReg_API";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import S3 from "react-aws-s3";
import { UserContext } from "../../App";
import { getArtistData } from "../../Redux/artistProfile/ArtistData";
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";

const config = {
    bucketName: "artisthat",
    region: "ca-central-1",
    accessKeyId: "AKIA3EGOTMVI3JPHWNN4",
    secretAccessKey: "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",
};


const ReactS3Client = new S3(config);
const Profile = () => {
    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#ffffff");
   
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: #ffffff;
  `;
    const [selected, setSelected] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const userData = useSelector((state) => state.userProfile.value);
    const Id = localStorage.getItem('userId');
    const token = localStorage.getItem('userToken');
    const  {logedIn}  = useContext(UserContext);
    const [profileData, setProfileData] = useState({
        email: "",
        first_name: "",
        last_name: "",
        socialInsuranceNumber: "",
        country: "",
        street: "",
        apartmentNumber: "",
        city: "",
        province: "",
        dob: "",
        hourlyRate: "",
        bio: "",
        profilePicture: "",
        postal_address : ""
    });

    if(!token){
        navigate('/userregistration')
    }else{
        if(!logedIn){
            navigate('/userregistration')
        }else if(logedIn && userData.isArtist){
            navigate('/artistView')
        }
    }
  
    console.log(userData, ' this is today ')
    const handleChange = (e, flag) => {
        setLoading(false)
        const { name, value } = e.target;
        if (flag === "image") {
            ReactS3Client.uploadFile(e.target.files[0], uuid() + "imgs")
                .then(data => {
                    console.log(data.location, 'thisi image section is filred')
                    // if (flag === "gallery") {
                    //   setGalleryArray([...galleryArray, data.location])
                    setProfileData({ ...profileData, [name]: data.location })
                    // } 
                    // else {
                    //   setEditProfileData({ ...editProfileData, [e.target.name]: data.location })
                    // }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {

            setProfileData({ ...profileData, [name]: value })
        }


    }


    // const handleImageChange = (e) =>{
    //     let newData = {...profileData};
    //     newData["profile_image"] = e.target.files[0];
    //     setProfileData(newData);
    // }
    const submitProfile = async () => {
        // const data = 
setLoading(true)
        const response = await createProfile(profileData,Id);
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

console.log(profileData.country, ' thisi is countyr')
    return (
        <>
            <div className="createprofile">
                <div className="createprofileName">
                    <h1 className="createprofileH1">create profile</h1>
                    <div className="image-container">
                        <img className="sideartImg" src={sideart} alt="img" />
                    </div>
                </div>
                <div className="container">
                    <div className="inputdiv">
                        <label className="inputdivlabel">FIRST Name</label>
                        <input
                            className="inputfield"
                            name="first_name"
                            value={profileData.first_name}
                            onChange={(e) => handleChange(e, 'firstName')}
                            type="text"
                            placeholder="Type your first name here"
                        />
                    </div>
                    <div className="inputdiv">
                        <label className="inputdivlabel">LAST Name</label>
                        <input
                            className="inputfield"
                            name="last_name"
                            value={profileData.last_name}
                            onChange={(e) => handleChange(e, 'lastName')}
                            type="text"
                            placeholder="Type your last name here"
                        />
                    </div>
                    <div className="inputdiv" style={{ display: "flex", alignItems: "center" }}>
                        <label className="profilelabel">
                            <img src={user} className="profileimg" alt="pic" />
                            <input type="file" id="file-input" required
                                name="profilePicture"
                                onChange={(e) => handleChange(e, 'image')} />
                        </label>
                        <label className="inputdivlabel" style={{ margin: "0" }}>profile picture</label>
                    </div>
                    <div className="inputdiv">
                        <label className="inputdivlabel">Social Insurance Number (optional)</label><br />
                        <input
                            className="inputfield"
                            style={{
                                // width: "927px",
                                display: "flex"
                            }}
                            name="socialInsuranceNumber"
                            required
                            value={profileData.socialInsuranceNumber}
                            onChange={(e) => handleChange(e, 'siNumber')}
                            type="text"
                            placeholder="Type your Social Insurance Number here"
                        />
                    </div>
                    <div className="inputdiv">
                        <ReactFlagsSelect
                         className="inputfield country"
                            selected={selected}
                            onSelect={(code) => {
                                setSelected(code);
                                console.log(code)
                                setProfileData({ ...profileData, 'country': code })
                                // handleChange(code, 'country')
                            }}
                        />;
                        {/* <select
                            className="inputfield"
                            name="country"
                            onChange={(e) => handleChange(e, 'country')}
                        >
                            <option value="Canada">Canada</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="USA">USA</option>
                            <option value="Italy">Italy</option>
                        </select> */}
                    </div>
                    <div className="twoFieldsInaRow">
                        <div className="inputdiv" style={{ width: "70%" }}>
                            <label className="inputdivlabel">Street number and Name</label><br />
                            <input
                                className="inputfield"
                                // style={{ width: "432px"}}
                                type="text"
                                required
                                name="street"
                                value={profileData.street}
                                onChange={(e) => handleChange(e, 'street')}
                                placeholder="Type your Street here"
                            />
                        </div>
                        <div className="inputdiv">
                            <label className="inputdivlabel">Apr/ Suite</label><br />
                            <input
                                className="inputfield"
                                // style={{ width: "432px"}}
                                type="text"
                                required
                                name="apartmentNumber"
                                value={profileData.apartmentNumber}
                                onChange={(e) => handleChange(e, 'apartmentNumber')}
                                placeholder="Type your Apartment here"
                            />
                        </div>
                    </div>
                    <div className="twoFieldsInaRow">
                        <div className="inputdiv">
                            <label className="inputdivlabel">city</label><br />
                            <select
                                className="inputfield dropDowninputfield"
                                name="city"
                                required
                                onChange={(e) => handleChange(e, 'city')}
                            >
                                <option value="Montreal">Montreal</option>
                                <option value="Calgary">Calgary</option>
                                <option value="Ottawa">Ottawa</option>
                                <option value="Edmonton">Edmonton</option>
                            </select>
                        </div>
                        <div className="inputdiv">
                            <label className="inputdivlabel">province</label><br />
                            <select
                                className="inputfield dropDowninputfield"
                                name="province"
                                required
                                onChange={(e) => handleChange(e, 'province')}
                            >
                                <option value="Manitoba">Manitoba</option>
                                <option value="Nunavut">Nunavut</option>
                                <option value="Quebec">Quebec</option>
                                <option value="Yukon">Yukon</option>
                            </select>
                        </div>
                    </div>
                    <div className="inputdiv">
                        <label className="inputdivlabel">email</label><br />
                        <input
                            className="inputfield"
                            name="email"
                            value={profileData.email}
                            onChange={(e) => handleChange(e, 'email')}
                            type="email"
                            placeholder="Type your email here"
                        />
                    </div>
                    <div className="inputdiv">
                        <label className="inputdivlabel">Password</label><br />
                        <input
                            className="inputfield"
                            name="password"
                            value={profileData.email}
                            onChange={(e) => handleChange(e, 'password')}
                            type="password"
                            placeholder="Type Password here"
                        />
                    </div>
                    <div className="inputdiv">
                        <label className="inputdivlabel">date of birth</label><br />
                        <input
                            className="inputfield"
                            name="dob"
                            value={profileData.dob}
                            onChange={(e) => handleChange(e, 'dob')}
                            type="date"
                            data-date-format="DD MM YYYY"
                            placeholder="Type your date of birth here"
                        />
                    </div>
                    <div className="twoFieldsInaRow">
                        <div className="inputdiv">
                            <label className="inputdivlabel">hourly rate</label><br />
                            <input
                                className="inputfield"
                                name="hourlyRate"
                                value={profileData.hourlyRate}
                                onChange={(e) => handleChange(e, 'hourlyRate')}
                                type="text"
                                placeholder="Type your hourly rate here"
                                required
                            />
                            {/* <select
                                className="inputfield dropDowninputfield"
                                name="hourly_rate"
                                onChange={(e) =>
                                    setProfileData({ ...profileData, "hourly_rate": e.target.value })}
                            >
                                <option value="volvo">Choose your hourly rate </option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                            </select> */}
                        </div>
                        {/* <div className="inputdiv">
                            <label className="inputdivlabel">calender</label><br />
                            <select
                                className="inputfield dropDowninputfield"
                                name="calender"
                            onChange={(e) =>
                                setProfileData({ ...profileData, "province": e.target.value })}
                            >
                                <option value="volvo">Choose your calender </option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div> */}
                    </div>
                    <div className="inputdiv">
                        <label className="inputdivlabel">bio</label><br />
                        <textarea
                            name="bio"
                            required
                            value={profileData.bio}
                            onChange={(e) => handleChange(e, 'bio')}
                            cols="30"
                            rows="10"
                            className="profiletextarea"
                            placeholder="Tell us your creative description of yourself here..."
                        ></textarea>
                    </div>
                    <button type="submit" className="createaccount" onClick={submitProfile}>
                    {loading?<ScaleLoader color={color} loading={loading} css={override} size={40} />:' Create Account'}
                    </button>
                </div>
            </div>
        </>
    )
}
export default Profile;