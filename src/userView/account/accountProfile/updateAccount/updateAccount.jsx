import React, { useState, useEffect } from 'react'
import './updateAccount.css'
import user from '../../../../Assets/artist.png'
import Button from '../../../../Components/button/button'
import { useDispatch, useSelector } from 'react-redux';
import { updateArtist } from '../../../../Api/UserReg_API';
import { getArtistData } from "../../../../Redux/artistProfile/ArtistData";
const UpdateAccount = () => {
    const artistData = useSelector((state) => state.ArtistData.value);
    const userId = localStorage.getItem('userId');
    const dispatch = useDispatch();
    const [curruntArtist, setCurruntArtist] = useState(artistData)
    const [isUpdated, setIsUpdated] = useState(false)
    // const [locations, setLocations] = useState()
    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 1919px)").matches
    )


    useEffect(() => {
        window
            .matchMedia("(max-width: 1919px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    useEffect(() => {
        setCurruntArtist(artistData)
    }, [artistData])

    const [check, setCheck] = useState(0);

    useEffect(() => {
        dispatch(getArtistData(userId));
        setIsUpdated(false)
        console.log('called')
    }, [dispatch,isUpdated,userId])
    const accuntCheck = (value) => {
        setCheck(value)
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
            setCurruntArtist({ ...curruntArtist, [name]: value })
    }
    const handlSubmit = () => {
        updateArtist(curruntArtist, userId);
        setIsUpdated(true)

    }
    console.log(curruntArtist,'thsis is updated artists')
    return (
        <>
            <div className='container for-updating-account'>
                <div className='row update-account'>
                    <div className='col-4 for-img text-center justify-content-center'>
                        <img className='user-img1 text-center' src={artistData ? artistData.profilePicture : user} alt='artistImage'></img>
                        <p className='upload-new-photo text-center'>UPLOAD A NEW PHOTO</p>
                    </div>
                    <div className='col-8 enter-user-info'>
                        <div className='row py-sm-0 py-lg-2'>
                            <div className='col-6 info-div first-name'>
                                <label className='Account-labels'>FIRST NAME</label><br></br>
                                <input type='input' name='first_name' className='basic-inputs' placeholder='Type your name here' value={curruntArtist?.first_name} onChange={e => handleChange(e, "vehicles")} />
                            </div>
                            <div className='col-6 info-div'>
                                <label className='Account-labels'>LAST NAME</label><br></br>
                                <input type='input' name='last_name' className='basic-inputs' placeholder='Type your name here' value={curruntArtist?.last_name} onChange={e => handleChange(e, "vehicles")} />
                            </div>
                        </div>
                        <div className='row py-sm-0 py-lg-2'>
                            <div className='col-12 enter-email'>
                                <label className='Account-labels'>EMAIL</label><br></br>
                                <input type='input' name='email' className='email-place' placeholder='Micho_ggg@gmail.com' value={curruntArtist?.email} onChange={e => handleChange(e, "vehicles")} />
                            </div>
                        </div>
                        <div className='row py-sm-0 py-lg-2'>
                            <div className='col-6 info-div'>
                                <label className='Account-labels'>PHONE NUMBER</label><br></br>
                                <input type='input' name='phoneNumber' className='basic-inputs' placeholder='+1 647 747 9980' value={curruntArtist?.phone} onChange={e => handleChange(e, "vehicles")} />
                            </div>
                            <div className='col-6 info-div'>
                                <label className='Account-labels'>POSTAL CODE</label><br></br>
                                <input type='input' name='postal_address' className='basic-inputs' placeholder='M5A 3R5' value={curruntArtist?.postal_address} onChange={e => handleChange(e, "postalCode")} />
                            </div>
                        </div>
                        <div className='row Account-use justify-content-center'>
                            <div className='col-8'>
                                <label className='Account-labels checkbox-heading'>I USE THIS ACCOUNT FOR</label><br></br>
                                <div className=''>
                                    <div>
                                        <label className={`radioLabel-container ${check === 1 ? 'checked-labels' : 'unchecked-labels'}`}>Personal Projects
                                            <input type="radio"  checked={curruntArtist?.account_role === 'Personal Projects'? 'checked':'unchecked'} name="account_role" value='Personal Projects' onClick={() => accuntCheck(1)} onChange={e => handleChange(e, "account_role")} />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className={`radioLabel-container ${check === 2 ? 'checked-labels' : 'unchecked-labels'}`}>Business Tasks
                                            <input type="radio"  checked={curruntArtist?.account_role === 'Business Tasks'? 'checked':'unchecked'} name="account_role" value='Business Tasks' onClick={() => accuntCheck(2)} onChange={e => handleChange(e, "account_role")}/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className={`radioLabel-container ${check === 3 ? 'checked-labels' : 'unchecked-labels'}`}>Personal and Business Tasks
                                            <input type="radio"  checked={curruntArtist?.account_role === 'Personal Projects & Business Tasks'? 'checked':'unchecked'} name="account_role"  value='Personal Projects & Business Tasks' onClick={() => accuntCheck(3)} onChange={e => handleChange(e, "account_role")}/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>

                            </div></div>
                        <div className='row pt-5'>
                            <div className='col-6 text-end'>
                                <Button color='#fed12f'
                                    textColor='#523105'
                                    text='SAVE'
                                    padding='6px'
                                    height={`${matches ? '45px' : '67px'}`}
                                    width='100%'
                                    fontSize={`${matches ? '10px' : '15px'}`}
                                    fontWeight='900'
                                    border='1.5px solid #B4B4B5'
                                    event={handlSubmit} />


                            </div>
                            <div className='col-6'>
                                <Button color='#ffffff'
                                    textColor='#523105'
                                    text='CANCEL'
                                    padding='6px'
                                    height={`${matches ? '45px' : '67px'}`}
                                    width='100%'
                                    fontSize={`${matches ? '10px' : '15px'}`}
                                    fontWeight='900'
                                    border='1.5px solid #B4B4B5' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateAccount
