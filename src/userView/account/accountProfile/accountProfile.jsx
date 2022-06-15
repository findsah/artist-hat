import React, { useState,useEffect} from 'react'
import './accountProfile.css'
import user from '../../../Assets/artist.png'
import { RiUser3Line } from 'react-icons/ri';
import { BsEnvelope } from 'react-icons/bs';
import { ImPhone, ImLocation2 } from 'react-icons/im';
import Button from '../../../Components/button/button'
import UpateAccount from './updateAccount/updateAccount'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const AccountProfile = () => {
    const navigate = useNavigate();
    const loggedIn = localStorage.getItem('userToken');
    const artistData = useSelector((state) => state.ArtistData.value);
    const [show, setShow] = useState(true)
    const[isUpdateAccount, setIsUpdateAccount] = useState(false)
    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 1919px)").matches
    )
    if(!loggedIn){
        navigate('/userregistration')
    }
    console.log(loggedIn,' this is user id')
    useEffect(() => {
        window
            .matchMedia("(max-width: 1919px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);
    const switchData = () => {
        setShow(!show);
        setIsUpdateAccount(true)

    }
    const logOut = () =>{
        localStorage.removeItem('userToken');
        localStorage.removeItem('isArtist');
         localStorage.removeItem('userId');
        localStorage.clear();
        navigate('/userregistration')
    }
    return (
        <>
            <div className='row h1_heading justify-content-between pb-3 pl-md-0'>
                <div className='col-12 col-lg-3 pl-lg-0'><h2 className='h1_heading'>ACCOUNT</h2></div>
                <div className='col-12 col-lg-3'>
                   {show && <Button color='#fff' text='EDIT' padding='0'  fontSize="12px" border='1.5px solid #B4B4B5' height='40px' width='100%' event={switchData} />}
                </div>
            </div>
            <div className='accountProfile-sec'>
                {isUpdateAccount === true ? (<UpateAccount />) :
                    (<div className='details_card row'>
                        <div className='col-12 col-lg-4 text-center'>
                            <img className='user-img' alt='' src={artistData?artistData.profilePicture:user}></img>
                        </div>
                        <div className='col-9 col-lg-3 account_details_sec'>
                            <div className='account_details'>
                                <div className='profile_icon'><RiUser3Line className='accountProfile-icon' /></div>
                                <div className='profile_item'><h2 className='account_content_headings'>{artistData?.first_name} {artistData?.last_name}</h2></div>
                            </div>
                            <div className='account_details'>
                                <div className='profile_icon'><BsEnvelope className='accountProfile-icon' /></div>
                                <div className='profile_item'><h2 className='account_small_paragraphs user-email'>{artistData?.email}</h2></div>
                            </div>
                            <div className='account_details'>
                                <div className='profile_icon'><ImPhone className='accountProfile-icon' /></div>
                                <div className='profile_item'><h2 className='account_small_paragraphs user-phone'>{artistData?.phone}</h2></div>
                            </div>
                            <div className='account_details'>
                                <div className='profile_icon'><ImLocation2 className='accountProfile-icon' /></div>
                                <div className='profile_item'><h2 className='account_small_paragraphs user-location'>YOUR ACCOUNT</h2></div>
                            </div>
                        </div>
                        <div className='col-12 text-center'>
                            <Button color='#fff' text='LOG OUT' padding='2px 60px' fontSize="12px" border='1.5px solid #B4B4B5' height='40px' width={matches? '222px' : '297px'} event={logOut} />
                        </div>
                    </div>)
                }


            </div>

            {/* <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-12 text-center'>
                        <img className='user-img' alt='' src={user}></img>
                    </div>
                    <div className='col-lg-8 col-12'>
                        <div className='user-info'>
                            <i class="fas fa-user"></i> &nbsp;&nbsp; <span className='name'>MICHEL GEOOOG</span><br></br>
                            <i class="fas fa-envelope"></i>&nbsp; &nbsp;<span className='email'>MICHO.GG@GMAIL.COM</span><br></br>
                            <i class="fas fa-phone"></i>&nbsp; &nbsp;<span className='phone'>+1646-745-7000</span><br></br>
                            <i class="fas fa-map-marker-alt"></i> &nbsp; &nbsp;<span className='address'>M5A 3R7</span><br></br>
                        </div> </div>
                </div>
                <div className='row text-center'>
                    <button type='button' className='btn-btn-warning logout-btn'>LOG OUT</button></div>
            </div> */}
        </>
    )
}

export default AccountProfile
