import React, {useEffect, useState} from 'react'
import Button from '../../../Components/button/button'
import './accountBalance.css'

const AccountBalance = () => {
    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 1919px)").matches
    )
    useEffect(() => {
        window
            .matchMedia("(max-width: 1919px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);
    return (
        <>
            <div className='pb-4'><h2 className='h1_heading'>ACCOUNT BALANCE</h2></div>
            <div className='accountBalance-sec container py-5'>
                <div className='row justify-content-end taxInfo-description-row'>
                    <div className='col-10 taxInfo-description-div'>
                        <p className='taxInfo-description'>
                            Account Balances are automatically applied when a project is completed.
                        </p>
                    </div>
                </div>
                <div className='row justify-content-end redemptionCode-sec'>
                    <div className='col-12 text-center redemptionCode_col'>
                        <h2 className='h2-headings'>AVAILABLE ACCOUNT BALANCE: $0</h2>
                        <div className='row my-5'>
                            <div className='col-12 col-lg-8'>
                                <h4 className='redemptionCode-heading px-3 py-3'>Enter a redemption code</h4>
                                <div>
                                    <input type='password' className='redemptionCode-input-fields'></input>
                                    <div className='pt-5'>
                                        <Button color='#fdd043' text='APPLY' hegiht='40px' padding='2px 60px' fontSize="12px" border='1.5px solid #B4B4B5' width={matches? '222px' : '297px'}  />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountBalance
