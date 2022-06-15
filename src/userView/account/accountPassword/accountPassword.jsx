import React, { useState, useEffect } from 'react'
import Button from '../../../Components/button/button'
import './accountPassword.css'
import { useSelector } from "react-redux";
import { resetPassword } from '../../../Api/UserReg_API';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AccountPassword = () => {
    const userData = useSelector((state) => state.userProfile.value);
    const [responseData, setResponseData] = useState()
    const [updatedPassword, setUpdatedPassword] = useState({
        old_password: '',
        password: '',
        password2: '',
    })
    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 1919px)").matches
    )
    useEffect(() => {
        window
            .matchMedia("(max-width: 1919px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    const onChangeHandler = (e) => {
        setResponseData('');
        const { name, value } = e.target;
        setUpdatedPassword({ ...updatedPassword, [name]: value });
    }

    const handleSubmit = async () => {
        const passwordReponse = await resetPassword(updatedPassword, userData.token, userData.slug);
        setResponseData(passwordReponse.data)
        if (passwordReponse.data.status === 'Password_Updated_Successfully') {
            console.log('lsjlfdklsjflsjlfjslfjlsjflfjlsdjlfj')
            toast("Data Submited Successfully..!")
        }
    }
    console.log(userData)
    return (
        <>
            <div className='pb-4'><h2 className='h1_heading'>CHANGE PASSWORD</h2></div>
            <div className='accountPassword-sec'>
                <div className='row setting-password'>
                    <div className='col-12'>
                        <div>
                            <label className='label-inputfields'>ENTER CURRENT PASSWORD</label>
                            <input type='password' name='old_password' placeholder='Type your current password here' className='password-input-fields' onChange={onChangeHandler}></input>
                            {responseData?.status ? responseData?.status === 'Old password is not correct' && (
                                <div className="errDiv">{responseData?.status}</div>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                    <div className='col-12'>
                        <div>
                            <label className='label-inputfields'>ENTER NEW PASSWORD</label>
                            <input type='password' name='password' placeholder='Type your current password here' className='password-input-fields' onChange={onChangeHandler}></input>

                        </div>
                    </div>
                    <div className='col-12'>
                        <div>
                            <label className='label-inputfields'>CONFIRM NEW PASSWORD</label>
                            <input type='password' name='password2' placeholder='Type your current password here' className='password-input-fields' onChange={onChangeHandler}></input>
                            {responseData?.status ? responseData?.status === "Password Fields Didn't Match." && (
                                <div className="errDiv">{responseData?.status}</div>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>

                            <div className="col-12 col-lg-6">
                                <Button color='#fdd043' text='SAVE' padding='2px 0' fontSize="10px" className='buttonDimensions' border='1.5px solid #B4B4B5' height='40px' width='100%' event={handleSubmit} />
                            </div>
                            <div className="col-12 col-lg-6">
                                <Button color='#fff' text='CANCEL' padding='2px 0' fontSize="10px" border='1.5px solid #B4B4B5' className='buttonDimensions' height='40px' width='100%' />
                            </div>
                </div>
            </div>
            <ToastContainer
                theme='light'
                type='success'
            />
        </>
    )
}

export default AccountPassword
