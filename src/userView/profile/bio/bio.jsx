import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../Components/button/button';
import { updateArtistData } from '../../../Redux/artistProfile/ArtistData';
import './bio.css';

const Bio = ({setProfileTab}) => {
    const dispatch = useDispatch()
    const userData = useSelector((state) => state.ArtistData.value);
    const [artistData, setArtistData] = useState()

    useEffect(() => {
        setArtistData(userData ? userData : [])
    }, [userData])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setArtistData({ ...artistData, [name]: value })
        dispatch(updateArtistData({ [name]: value }))
    }

    const handlSubmit = () => {
        setProfileTab(5)
    }
    return (
        <div className='bio-sec'>
            <div className='row'>
                <div className='col-12 col-lg-9'>
                    <h4 className='heading-4'>TELL US ABOUT YOU</h4>
                    <p className='about-paragraph py-2'>Use this section to introduce yourself, personally and professionally
                        to the potential clients and Artists community.
                    </p>
                </div>
                <div className='col-12 py-2'>
                    <h5 className='about-subHeadings px-2 py-3'>WHAT MAKES YOU A GREAT ADDITIOIN TO THE ARTIST COMMUNITY?</h5>
                    <div className='text-area'>
                        <textarea rows="4" value={artistData?.bioHobbies} placeholder='required' name='bioHobbies' onChange={e => handleChange(e, "bio")}></textarea>
                    </div>
                </div>
                <div className='col-12 py-2'>
                    <h5 className='about-subHeadings px-2 py-3'>WHAT TO DO YOU LIKE TO DO WHEN YOU ARE NOT TASKING?</h5>
                    <div className='text-area'>
                        <textarea rows="4" value={artistData?.bioStandardsIFollow} placeholder='required' name='bioStandardsIFollow' onChange={e => handleChange(e, "standards")}></textarea>
                    </div>
                </div>
                <div className='col-12 py-2'>
                    <h5 className='about-subHeadings px-2 py-3'>WHEN I'M TASKING I ALWAYS MAKE SURE TO...</h5>
                    <div className='text-area'>
                        <textarea rows="4" value={artistData?.bioWhyGreatArtist} placeholder='required' name='bioWhyGreatArtist' onChange={e => handleChange(e, "greatArtist")}></textarea>
                    </div>
                </div>
                <div className='col-12 col-lg-8'>
                    <div className='d-flex align-items-center justify-content-between px-2'>
                        <div>
                            <h4 className='heading-4'>PERSONAL URL</h4>
                        </div>
                        <div>
                            <input className='personal-url' type='text' placeholder='mico-2020'></input>
                        </div>
                    </div>

                </div>
                <div className='col-12 text-center'>
                    <Button color='#fdd043' text='SUBMIT' padding='2px 60px' fontSize="10px" border='1px solid #B4B4B5' event={handlSubmit} />
                </div>
            </div>
        </div>
    )
}

export default Bio
