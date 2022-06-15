import "./userNavbar.css";
import logo from "../../../Assets/title.png";
import useravatar from "../../../Assets/useravatar.png";
import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { AiOutlineBell } from 'react-icons/ai';
import { useSelector } from "react-redux";
import ReactCountryFlag from "react-country-flag"
import { useEffect, useState } from "react";



const UserNavbar = () => {
    const artistData = useSelector((state) => state.ArtistData.value);
const [curruntArtist, setCurruntArtist] = useState(artistData)
    useEffect(() => {
        setCurruntArtist(artistData)
       }, [artistData])
    return (
        <header className="header">
            <Navbar expand="lg">
                <Navbar.Brand href="/" className="icon">
                    <img className="logoimg" src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="user-lowerNavbar">
                        <NavLink to="services" className="link" activeclassname="link active">
                            <div className="px-1"><h3 className="nav-item">Get $10 Services</h3></div>
                        </NavLink>
                        <NavLink
                            to="my-projects"
                            className="link"
                            activeclassname="link active"
                        >
                            <div className="px-1"><h3 className="nav-item">My Projects</h3></div>
                        </NavLink>
                        <NavLink to="/blogs" className="link" activeclassname="link active">
                            <div className="px-1"><h3 className="nav-item">Artists</h3></div>
                        </NavLink>
                        <NavLink
                            to="/artistView"
                            className="link"
                            activeclassname="link active"
                        >
                            <div className="px-1"><h3 className="nav-item">Profile</h3></div>
                        </NavLink>
                        <NavLink
                            to="account"
                            className="link"
                            activeclassname="link active"
                        >
                            <div className="px-1"><h3 className="nav-item">Account</h3></div>
                        </NavLink>
                        <NavLink
                            to="my-business"
                            className="link"
                            activeclassname="link active"
                        >
                            <div className="px-1"><h3 className="nav-item">My Business</h3></div>
                        </NavLink>
                    </Nav>
                    <Nav className="ml-auto dir">
                        <div className="d-flex align-items-center" style={{ borderRight: "1px solid #707070" }}>
                            <div className="px-2"><h3 className="nav-item">{curruntArtist?.first_name} {curruntArtist?.last_name}</h3></div>
                            <div className="p-2 user-avatar"> <img className="img" src={curruntArtist ? curruntArtist.profilePicture : useravatar} alt="logo" /></div>
                            <div className="px-2 bell-icon"><AiOutlineBell /></div>
                        </div>
                        <div className="d-flex align-items-center">

                            <div className="px-2">
                                <ReactCountryFlag
                                    className="user-country"
                                    countryCode={curruntArtist?.country}
                                    svg
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                    }}
                                    title={curruntArtist?.country}
                                />
                            </div>
                            <div className="px-1">
                                <h3 className="nav-item">
                                    <ReactCountryFlag
                                        className="emojiFlag"
                                        countryCode={curruntArtist?.country}
                                        style={{
                                            fontSize: '2em',
                                            lineHeight: '2em',
                                            fontWeight: 'normal'
                                        }}
                                        aria-label="United States"
                                    />
                                </h3>
                            </div>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default UserNavbar;
