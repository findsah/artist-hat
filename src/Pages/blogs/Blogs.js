import React from 'react';
import './Blogs.css';
import blogs from '../../Assets/artisthatbloglogo.svg';
import blog1 from '../../Assets/blog1.png';
import blog2 from '../../Assets/blog2.png';
import blog3 from '../../Assets/blog3.png';
import blog4 from '../../Assets/blog4.svg';
import redsky from '../../Assets/redsky.png';
import twitter from '../../Assets/twitter.svg';
import google from '../../Assets/google.svg';
import facebook from '../../Assets/facebook.svg';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { socialLogin } from '../../Api/UserReg_API';
import { useNavigate } from "react-router";
import Footer from '../../Components/Footer/Footer';

const Blogs = () => {
    const navigate = useNavigate();
    const responseFacebook = async (response) => {
        const obj = {
            email: response?.email,
            first_name: response?.name?.split(" ")[0],
            last_name: response?.name?.split(" ")[1],
            password: response?.accessToken,
        }
        console.log(response);
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
    }
    const responseGoogle = async (response) => {
        const { profileObj } = response;
        const obj = {
            email: profileObj.email,
            first_name: profileObj.givenName,
            last_name: profileObj.familyName,
            password: response.accessToken,
        }
        const { data } = await socialLogin(obj);
        if (data.profile_check) {
            navigate.push("/artistprofile");
        } else {
            navigate.push("/profile");
        }
    }
    return (
        <>
            <div className="container blogNavMain">
                <div className="blogNav">
                    <img src={blogs} className="blogNavImg" alt="img" />
                    <Link to="/" style={{ textDecoration: "none", color: "#523106" }}>
                        <div className="blogArtist">Artisthat.com {">"}</div>
                    </Link>
                </div>
            </div>
            <div className="blogs">
                <div className="container" style={{ paddingTop: "50px" }}>
                    <h1 className="blogsH1">35 gray hallway ideas<br />  for your home</h1>
                    <p style={{ color: "#9599B2" }}>By Giannna Huesch <br />Published: December 23rd, 2020</p>
                    <p style={{ fontSize: "14px", margin: "1rem 0" }}>
                        Hunting for grey hallway ideas? Transform your
                        passafe space or<br /> entryway with a timesless grey colour scheme
                    </p>
                </div>
                <div className="container-fluid blog1">
                    <img src={blog1} style={{ width: "75rem", height: "35rem", borderRadius: "0 7rem 7rem 0" }}  alt="img" />
                    <div className="blogSocial">
                        <img
                            src={twitter}
                            style={{
                                width: "3rem",
                                height: "2rem"
                            }}
                            alt="img" 
                        />
                        <GoogleLogin
                            clientId="634829741594-fbs97jduk9s5jun7ia8sqqmslkutatgh.apps.googleusercontent.com"
                            render={renderProps => (
                                <img
                                    src={google}
                                    style={{
                                        width: "3rem",
                                        height: "2rem"
                                    }}
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                    alt="img" 
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
                            cookiePolicy={'single_host_origin'}
                        />
                        <FacebookLogin
                            appId="455550395701733"
                            autoLoad={false}
                            fields="name,email,picture"
                            scope="public_profile,user_friends"
                            callback={responseFacebook}
                            render={renderProps => (
                                <img
                                    src={facebook}
                                    style={{
                                        width: "3rem",
                                        height: "2rem"
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
                </div>
                <div className="container">
                    <p style={{ textAlign: "justify", margin: "10px 0" }}>
                        Share on FacebookTweet about this on TwitterShare on LinkedIn<br />
                        Musing oer grey hallway ideas? Well, you've come to the right place becaouse below,
                        i've gathered 35 examples of gorgeous grey hallways, across all interior decorating styles.
                        Whether you have an entryway hallway or your hallway is connecting rooms, it can seem like
                        a boring space, it's offten a dim, small corridor that's expected to cater for storage
                        needs as well as manage to be an uncluttered thoroughfare. But it's easy to make it
                        a more attractive and functional sapce to pass through. And one of the best colours
                        to transform a bland hallway is grey.<br /><br />
                        So let's jump in and take a look at 35 stylis grey hallwys -
                        there's sure to be a grey hallway here that appeals to your taste
                    </p>
                    <h2 className="blogsH2">1. Go for classic grey and white</h2>
                    <p style={{ textAlign: "justify", margin: "10px 0" }}>
                        That never-fail interior decorating colour combo of grey and white also makes for a classic and
                        chic look in a hallway. The grey here adds dimesion and depth to the white and you can see how it
                        helps define the passage
                        that's easy to achieve. <br />
                        grey ad white hallwaySource: living etc
                    </p>
                    <h2 className="blogsH2">2. Make an impoace with dark grey</h2>
                    <p style={{ textAlign: "justify", margin: "10px 0" }}>
                        Love a darker shade of grey but don't want ot make things gloomy? Consider painting a half wall
                        in a chalkboard grey,
                        with dark grey on the bottom half juxtaposed with soft white above. This helps keef things
                        don't have a staricase, just bring in some simple wooden hallway furniture.<br />
                        dark grey half wallSource: Marilyn Esaline
                    </p>
                    <h2 className="blogsH2">3.Embrace practical grey flooring</h2>
                    <p style={{ textAlign: "justify", margin: "10px 0" }}>
                        As much as entry hallwas are the perfect place to showcase your personality and make a statement,
                        they're also often highly functional areas due to their high traffic.
                        Make life easier for yourself with a mid-grey flooring solution that will handle the comings and goings of everyday life.
                        Another functional aspect of hallways is storage - whether it's a row of baskets, wall hooks or a slim console,
                        the need for storagespace is usually inevitable.
                        if you're designing for entryway storage and need more inspo, check out also our mudroom ideas,<br /> grey flooring with
                        natural accentsSource: Mainlifestyle
                    </p>
                    <h2 className="blogsH2">4. Mix textures</h2>
                    <p style={{ textAlign: "justify", margin: "10px 0" }}>
                        Because first impressions matter and entryways can be revealing, keeping your entrance hallway uncluttered is
                        key, Below, storage solutinos and a simple all grey colour scheme keep everything streamlined, but there's
                        plenty of bisual interest created from all the textures: concrete, timber, wall panelling, terrazzo. Wood in
                        partucular marries really well with greys because timber adds so much warmth.<br />
                        concrete and timberSource: Kennedy Nolan<br />
                        dark grey hallwaySource: Cote Maison<br />
                        Multi-dimenstional space: For example, in the grey bedroom below, a very deep grey wall on one side is
                        contrasted with a very pale grey wall on the other. I love the texture of the parquetry flooring against
                        the blocks of colour too.<br /><br />
                        dark grey and white hallwaySourde: Home Adore
                    </p>
                    <div className="row justify-content-between" style={{ margin: "3rem 0", }}>
                        <div
                            className="col-12 col-md-6"
                        // style={{ paddingLeft: "0" }}
                        >
                            <img src={blog2} style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "50px" }}  alt="img" />
                        </div>
                        <div
                            className="col-12 col-md-6"
                        // style={{ paddingRight: "0" }}
                        >
                            <img src={blog3} style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "50px" }}  alt="img" />
                        </div>
                    </div>
                    <img src={blog4} style={{ width: "100%", height: "500px", marginBottom: "3rem", objectFit: "cover", borderRadius: "70px" }}  alt="img" /><br />
                    <h2 className="blogsH2">5. Get down with grey</h2>
                    <p style={{ textAlign: "justify", margin: "10px 0" }}>
                        Because first impressions matter and entryways can be revealing, keeping your entrance hallway uncluttered is
                        key, Below, storage solutinos and a simple all grey colour scheme keep everything streamlined, but there's
                        plenty of bisual interest created from all the textures: concrete, timber, wall panelling, terrazzo. Wood in
                        partucular marries really well with greys because timber adds so much warmth.<br />
                        concrete and timberSource: Kennedy Nolan<br />
                        dark grey hallwaySource: Cote Maison
                    </p>
                    <h2 className="blogsH2">6. Add warmth with wood</h2>
                    <p style={{ textAlign: "justify", margin: "10px 0" }}>
                        Because first impressions matter and entryways can be revealing, keeping your entrance hallway uncluttered is
                        key, Below, storage solutinos and a simple all grey colour scheme keep everything streamlined, but there's
                        plenty of bisual interest created from all the textures: concrete, timber, wall panelling, terrazzo. Wood in
                        partucular marries really well with greys because timber adds so much warmth.<br />
                        concrete and timberSource: Kennedy Nolan<br />
                        dark grey hallwaySource: Cote Maison
                    </p>
                    <h2 className="blogsH2">7. Contrast greys with black</h2>
                    <p style={{ textAlign: "justify", margin: "10px 0" }}>
                        Because first impressions matter and entryways can be revealing, keeping your entrance hallway uncluttered is
                        key, Below, storage solutinos and a simple all grey colour scheme keep everything streamlined, but there's
                        plenty of bisual interest created from all the textures: concrete, timber, wall panelling, terrazzo. Wood in
                        partucular marries really well with greys because timber adds so much warmth.<br />
                        concrete and timberSource: Kennedy Nolan<br />
                        dark grey hallwaySource: Cote Maison
                    </p>
                </div>
                <div className="container-fluid ArticlesStories" style={{ marginTop: "120px" }}>
                    <div className="headtext">
                        <h1 className="headtexth1">You might also be interested in</h1>
                        {/* <p className="headtextp">How the art make our live different</p> */}
                    </div>
                    <div className="articlestorysection">
                        <div className="articlestorysection1">
                            <div className="articlestorysectioncard">
                                <div className="articlestorysectioncardtext">
                                    <p className="articlestorysectioncardp1">35 beautiful black bedroom ideas</p>
                                    <p className="articlestorysectioncardp2">
                                        Your Artist arrives
                                        and gets the job done. Pay securely and leave a review, all through ArtistHat.
                                        and gets the job done. gets the job done.
                                    </p>
                                </div>
                                <img className="articlestorysectioncardimg" src={redsky} alt="redsky" />
                            </div>
                            <div className="articlestorysectioncard">
                                <div className="articlestorysectioncardtext">
                                    <p className="articlestorysectioncardp1">35 beautiful black bedroom ideas</p>
                                    <p className="articlestorysectioncardp2">
                                        Your Artist arrives
                                        and gets the job done. Pay securely and leave a review, all through ArtistHat.
                                    </p>
                                </div>
                                <img className="articlestorysectioncardimg" src={redsky} alt="redsky" />
                            </div>
                        </div>
                        <div className="articlestorysection1">
                            <div className="articlestorysectioncard">
                                <div className="articlestorysectioncardtext">
                                    <p className="articlestorysectioncardp1">35 beautiful black bedroom ideas</p>
                                    <p className="articlestorysectioncardp2">
                                        Your Artist arrives
                                        and gets the job done. Pay securely and leave a review, all through ArtistHat.
                                    </p>
                                </div>
                                <img className="articlestorysectioncardimg" src={redsky} alt="redsky" />
                            </div>
                            <div className="articlestorysectioncard">
                                <div className="articlestorysectioncardtext">
                                    <p className="articlestorysectioncardp1">35 beautiful black bedroom ideas</p>
                                    <p className="articlestorysectioncardp2">
                                        Your Artist arrives
                                        and gets the job done. Pay securely and leave a review, all through ArtistHat.
                                    </p>
                                </div>
                                <img className="articlestorysectioncardimg" src={redsky} alt="redsky" />
                            </div>
                        </div>
                    </div>
                    <button className="articlestorysectionbutton">see more blogs</button>
                </div>
                <div className="container" style={{ width: "60%", margin: "70px auto", textTransform: "uppercase" }}>
                    <div className="headtext" style={{ marginBottom: "70px" }}>
                        <h1 className="headtexth1">Enjoyed reading this? leave a reply</h1>
                        <p className="headtextp">your email address will not be published.</p>
                    </div>
                    <label className='formLabel'>comment</label><br />
                    <textarea className="blogsTextArea"></textarea><br />
                    <label className='formLabel'>name</label><br />
                    <input className="blogsInput" type="text" /><br />
                    <label className='formLabel'>email</label><br />
                    <input className="blogsInput" type="text" /><br />
                    <button className="blogsButton">post comment</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blogs
