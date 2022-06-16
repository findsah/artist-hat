import React, { useState, useEffect } from 'react'
import Button from '../../../Components/button/button'
import './bankAccount.css'

const BankAccount = () => {
    const [editClicked, setEditClicked] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 1919px)").matches
    )
    useEffect(() => {
        window
            .matchMedia("(max-width: 1919px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);
    const handleClick = () => {
        setEditClicked(true);
        setIsDisabled(false);
    }
    const handleSubmit =  () => {
     
    }
    return (
        <>
            <div className='pb-4'><h2 className='h1_heading'>BANK ACCOUNT</h2></div>
            <div className='bankAccount-sec'>
                <div className='row text-center'>
                    <div className='col-5 col-lg-4 bankDetails-headings-div'>
                        <div className='credentialsWrapper'>
                            <h2 className='bankDetails-headings'>SORT CODE</h2>
                            <h2 className='bankDetails-headings'>ACCOUNT NUMBER</h2>
                        </div>
                    </div>
                    <div className='col-7 col-lg-8'>
                    <div className='credentialsWrapper'>
                            <input type='password' placeholder='207320111w3e' className='accountDetails-input'></input>
                            <input type='password' placeholder='111*****122' className='accountDetails-input'></input>
                        </div>
                    </div>
                </div>
                <div className='row py-5'>
                    <div className='col-12 col-lg-4'>
                        <div className='p-3'>
                            <Button color='#fff' text='EDIT' padding='2px 0' fontSize="10px" border='1.5px solid #B4B4B5' className='buttonDimensions' height='40px' width={matches ? '222px' : '297px'} switchData={handleClick} />
                        </div>
                    </div>
                </div>
                <div className='row account-number-details'>
                    <div className='col-12'>
                        <div>
                            <label className={`label-inputfields ${editClicked ? 'labels_acitve' : ''}`}>ACCOUNT NUMBER</label>
                            <input type='password' placeholder='Type your account number here' className={`accountNumber-input-fields ${editClicked ? 'fields_acitve' : ''}`} disabled={isDisabled}></input>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div>
                            <label className={`label-inputfields ${editClicked ? 'labels_acitve' : ''}`}>TRANSIT NUMBER</label>
                            <input type='password' placeholder='Type your transit number here' className={`accountNumber-input-fields ${editClicked ? 'fields_acitve' : ''}`} disabled={isDisabled}></input>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div>
                            <label className={`label-inputfields ${editClicked ? 'labels_acitve' : ''}`}>INSTITUTION NUMBER</label>
                            <input type='password' placeholder='Type your institution nmuber here' className={`accountNumber-input-fields ${editClicked ? 'fields_acitve' : ''}`} disabled={isDisabled}></input>
                        </div>
                    </div>
                </div>
                <div className='row accountButtons'>
                    <div className='col-12 col-lg-6 save'>
                        <Button color='#fdd043' text='SAVE' padding='1px 0' fontSize="10px" border='1.5px solid #B4B4B5' className='buttonDimensions' height='40px' width={matches ? '222px' : '297px'} />
                    </div>
                    <div className='col-12 col-lg-6 cancel'>
                        <Button color='#fff' text='CANCEL' padding='1px 0' fontSize="10px" border='1.5px solid #B4B4B5' className='buttonDimensions' height='40px' width={matches ? '222px' : '297px'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BankAccount
