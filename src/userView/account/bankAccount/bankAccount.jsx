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
                    <div className='col-4 bankDetails-headings-div'>
                        <div className='px-lg-3 pb-3'>
                            <h2 className='bankDetails-headings'>SORT CODE</h2>
                        </div>
                        <div className='px-3 py-3'>
                            <h2 className='bankDetails-headings'>ACCOUNT NUMBER</h2>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='pb-3'>
                            <input type='password' placeholder='207320111w3e' className='accountDetails-input'></input>
                        </div>
                        <div className='py-3'>
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
                <div className='row pt-5'>
                    <div className="col-12 col-lg-6">
                        <Button color='#fdd043' text='SAVE' padding='2px 0' fontSize="10px" className='buttonDimensions' border='1.5px solid #B4B4B5' height='40px' width='100%' event={handleSubmit} />
                    </div>
                    <div className="col-12 col-lg-6">
                        <Button color='#fff' text='CANCEL' padding='2px 0' fontSize="10px" border='1.5px solid #B4B4B5' className='buttonDimensions' height='40px' width='100%' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BankAccount
