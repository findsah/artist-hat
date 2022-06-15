import "./UserRegistration.css";

import titleImg from "../../Assets/logArtist.svg";
import sideart from "../../Assets/sideart.png";
import { useState, useContext, useEffect } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
import { userSignup, socialLogin } from "../../Api/UserReg_API";
import google from "../../Assets/google.svg";
import facebook from "../../Assets/facebook.svg";
import { useNavigate } from "react-router";
import ArtistCheckBox from "../../Components/ArtistCheckBox/ArtistCheckBox";
import { getUserData } from "../../Redux/SimpleUser/UserProfile";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from '../../App';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { getArtistData } from "../../Redux/artistProfile/ArtistData";


const UserRegistration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  
 
  const { setLogedIn } = useContext(UserContext);
 const token = localStorage.getItem('userToken');
  const userData = useSelector((state) => state.userProfile.value);
  const [loginValidation, setloginValidation] = useState('');
  const [signUpValidations, setSignUpValidations] = useState([])
  const [showErrors, setShowErrors] = useState(false)
  const [signin, setSignin] = useState(true);
  const [signup, setSignup] = useState(false);
  let [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const override = css`
  display: block;
  margin: 0 auto;
  border-color: #ffffff;
`;
  const [signupData, setSignupData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    country_code: "",
    mobile_number: "",
    send_no_email: false,
    terms_and_conditions: false
  });
  
   useEffect(() => {
    setLoading(false)
   }, [loginValidation])
   
  const customValidator = () =>{
    setSignUpValidations([]);
    let emailValid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    let nameRegex = /^[a-zA-Z-]+$/;
    let phoneRegex = /^(?!\b(0)\1+\b)(\+?\d{1,3}[. -]?)?\(?\d{3}\)?([. -]?)\d{3}\3\d{4}$/;
    
    if (!(emailValid.test(signupData.email)) || !(nameRegex.test(signupData.first_name)) || !(passwordValid.test(signupData.password))
    || !(nameRegex.test(signupData.last_name)) || !(phoneRegex.test(signupData.mobile_number))) {

      if (!(emailValid.test(signupData.email)) || signupData.email === ''){
        setSignUpValidations((signUpValidations) => [...signUpValidations, 'Your email is not valid']);
        
      }
      if (!(passwordValid.test(signupData.password)) || signupData.password === '') {
        setSignUpValidations((signUpValidations) => [...signUpValidations, 'Password should contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character']);
        
      }
      if (!(nameRegex.test(signupData.first_name)) || signupData.first_name === ''){
        setSignUpValidations((signUpValidations) => [...signUpValidations, 'Please enter a valid First Name']);
        
      }
      if ( !(nameRegex.test(signupData.last_name)) || signupData.last_name === '') {
        setSignUpValidations((signUpValidations) => [...signUpValidations, 'Please enter a valid Last Name']);
        
      }
      if (!(phoneRegex.test(signupData.mobile_number)) || signupData.mobile_number === '') {
        setSignUpValidations((signUpValidations) => [...signUpValidations, 'Invalid Phone Number']);
        
      }
    }
    else{
      setShowErrors(false)
    }
   
  }
  if (token) {
    const userId = JSON.stringify(userData.slug);
    const slug = userId.replace(/['"]+/g, '');
    localStorage.setItem("userId", slug);
    const getdata = async ()=>{
      const data = dispatch(getArtistData(slug));
      if(data){
        setLogedIn(true)
        navigate("/artistView");
       }
    }
    getdata();
   
  }

  const loginHandleChange = (e) => {
    setloginValidation('')
    setLoading(false)
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const loginHandleSubmit = async () => {
    setloginValidation('')
    setLoading(true);
     let emailValid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailValid.test(loginData.email) && loginData.password.length >= 8) {
      setSignUpValidations([])
     const response = await dispatch(getUserData(loginData));
      if (response.payload.token) {
        const userId = JSON.stringify(response.payload.slug);
        const slug = userId.replace(/['"]+/g, '');
        localStorage.setItem("userId", slug);
         const data = dispatch(getArtistData(slug));
         if(data){
          setLogedIn(true)
          navigate("/artistView");
         }
       
      }else{
        setloginValidation('Wrong Credentials');
        setLoading(false);
      }
    } else {
      setloginValidation("Your email or password is incorrect");
    }
    
  };

  const signupHandleChange = (e,flag) => {
    if(flag === 'countryCode'){
      setSignupData({ ...signupData, ['country_code']: '+'+e });
    }else{

      let { name, value } = e.target;
      if(flag === 'checkBox'){
        const { checked } = e.target;
        value = checked;
      }
      setSignupData({ ...signupData, [name]: value });
      
    }
  };
  const signupHandleSubmit = async () => {
    if (signUpValidations.length === 0) {
     
      const data = await userSignup(signupData);
      if (!(data.errors)) {
        setSignin(true);
        setSignup(false);
      } 
    }else{
      setShowErrors(true);
      window.scrollTo({
        top: 60,
        behavior: 'smooth',
        height:'2000'
    });
    }
   

  };

  const responseFacebook = async (response) => {
    const obj = {
      email: response?.email,
      first_name: response?.name?.split(" ")[0],
      last_name: response?.name?.split(" ")[1],
      password: response?.accessToken,
    };
    if (response.status === "unknown") {
      navigate.push("/userregistration");
    } else {
      const { data } = await socialLogin(obj);
      if (data.profile_check) {
        navigate.push("/artistprofile");
      } else {
        navigate.push("/profile");
      }
    }
  };

  const responseGoogle = async (response) => {
    const { profileObj } = response;
    const obj = {
      email: profileObj?.email,
      first_name: profileObj?.givenName,
      last_name: profileObj?.familyName,
      password: response.accessToken,
    };
    const { data } = await socialLogin(obj);
    if (data?.profile_check) {
      navigate("/artistprofile");
    } else {
      navigate("/profile");
    }
  };
  return (
    <div className="main">
      <div className="formsDiv">
        <img className="titleImg" src={titleImg} alt="titleimg" />
        <div className="regrestrationBtnsDiv">
          <button
            className={signin ? "userActive" : "registerBtns"}
            id="signin"
            onClick={() => {
              setSignin(true);
              setSignup(false);
            }}
          >
            sign in
          </button>
          <button
            className={signup ? "userActive" : "registerBtns"}
            id="signup"
            onClick={() => {
              setSignin(false);
              setSignup(true);
            }}
          >
            sign up
          </button>
        </div>
        <div
          className="signinDiv"
          id="div1"
          style={{ display: signin ? "block" : "none" }}
        >
          {loginValidation ? (
            <div className="errDiv">{loginValidation}</div>
          ) : (
            ""
          )}
          <input
            className="signinInput"
            style={{
              borderBottom: loginValidation
                ? "3px solid red"
                : "0.5px solid #c6c6c6",
            }}
            value={loginData.email}
            onChange={loginHandleChange}
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            className="signinInput"
            style={{
              borderBottom: loginValidation
                ? "3px solid red"
                : "0.5px solid #c6c6c6",
            }}
            value={loginData.password}
            onChange={loginHandleChange}
            type="password"
            name="password"
            placeholder="Password"
          />
          <br />
          <div className="socialDiv">
            <GoogleLogin
              clientId="634829741594-fbs97jduk9s5jun7ia8sqqmslkutatgh.apps.googleusercontent.com"
              render={(renderProps) => (
                <img
                  src={google}
                  style={{
                    width: "3rem",
                    height: "2rem",
                    cursor: "pointer",
                  }}
                  alt="img"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                />
                // <button
                //     className="googleButton"
                //     onClick={renderProps.onClick}
                //     disabled={renderProps.disabled}>
                //     <GrGooglePlus style={{ fill: "orange", fontSize: "18px" }} />
                // </button>
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
            <FacebookLogin
              appId="455550395701733"
              autoLoad={false}
              fields="name,email,picture"
              scope="public_profile,user_friends"
              callback={responseFacebook}
              render={(renderProps) => (
                <img
                  src={facebook}
                  style={{
                    width: "3rem",
                    height: "2rem",
                    cursor: "pointer",
                  }}
                  alt="img"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                />
                // <button
                //     className="fbButton"
                //     onClick={renderProps.onClick}>
                //     <FaFacebookF style={{ fill: "orange", fontSize: "18px" }} />
                // </button>
              )}
            />
          </div>
          <button className="continueBtn" onClick={loginHandleSubmit}>
            {loading?<ScaleLoader color={'#ffffff'} loading={loading} css={override} size={40} />:' continue'}
          </button>
          <p className="forgotPassword">forgot password</p>
        </div>
        <div
          className="signupDiv"
          id="div2"
          style={{ display: signup ? "block" : "none" }}
        >
          {showErrors ? (
            <ul className="errDiv">{signUpValidations?.map((value, index) => (
              <li>{value}</li>
            ))}</ul>
          ) : (
            ""
          )}
          <input
            className="signinInput"
            value={signupData.first_name}
            onChange={signupHandleChange}
            type="text"
            name="first_name"
            placeholder="First Name"
            onBlur={
              customValidator
            }
          />
           
          <input
            className="signinInput"
            value={signupData.last_name}
            onChange={signupHandleChange}
            type="text"
            name="last_name"
            placeholder="Last Name"
            onBlur={customValidator
            }
          />
         <label className="countryCodeLabel">Country code</label>
          <PhoneInput
  country={'us'}
  value={signupData.country_code}
  placeholder={'Country Codes'}
  inputClass={'signinInput'}
  onChange={phone => signupHandleChange(phone, 'countryCode')}
/>
          <input
            className="signinInput"
            value={signupData.mobile_number}
            onChange={signupHandleChange}
            type="number"
            name="mobile_number"
            placeholder="Mobile Number"
            onBlur={customValidator
            }
          />
          <input
            className="signinInput"
            value={signupData.email}
            onChange={signupHandleChange}
            type="email"
            name="email"
            placeholder="Email Address"
            onBlur={customValidator
            }
          />
            
          <input
            className="signinInput"
            value={signupData.password}
            onChange={signupHandleChange}
            type="password"
            name="password"
            placeholder="Password"
            onBlur={customValidator
            }
          />
          <div style={{ display: "flex", margin: "3rem 0 1rem 0" }}>
            {/* <input
              type="checkbox"
              value={signupData.send_no_email}
              onChange={(e) => setTermsCheckbox(e.target.checked)}
              className="checkboxInput"
              name="termsCheckbox"
              style={{
                width: "3rem",
                height: "1.5rem",
              }}
            /> */}
            <ArtistCheckBox signupData={signupData} 
            signupHandleChange={signupHandleChange} usedFor={'terms_and_conditions'}/>
            <label className="checkboxlabel">
              By checking this box, I acknowledge that I have reviewed and agree
              to the{" "}
              <a href="/" style={{ color: "#523106" }}>
                {" "}
                Terms and Conditions{" "}
              </a>{" "}
              and
              <a href="/" style={{ color: "#523106" }}>
                {" "}
                Privacy Policy.{" "}
              </a>
            </label>
          </div>
          <div style={{ display: "flex", marginBottom: "3rem" }}>
            {/* <input
              type="checkbox"
              value={signupData.send_no_email}
              onChange={(e) =>
                setSignupData({
                  ...signupData,
                  [e.target.name]: e.target.checked,
                })
              }
              className="checkboxInput"
              name="send_no_email"
              style={{
                width: "2rem",
                height: "1.5rem",
              }}
            /> */}
            <ArtistCheckBox signupData={signupData} usedFor={'promotion'}
            signupHandleChange={signupHandleChange}/>
            <label className="checkboxlabel">
              I do not want to receive promotional emails and notifications from
              ArtistHat.
            </label>
          </div>
          <button className="continueBtn" onClick={signupHandleSubmit}>
            create account
          </button>
        </div>
      </div>
      <div className="imgContainer">
        <img className="titleImg2" src={titleImg} alt="titleimg" />
        <img className="sideartImg" src={sideart} alt="img" />
      </div>
    </div>
  );
};

export default UserRegistration;
