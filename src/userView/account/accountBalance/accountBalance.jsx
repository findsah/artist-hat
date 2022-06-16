import React, { useEffect, useState } from 'react'
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
            <div className='accountBalance-sec'>
                <div className='row accountBalance_row'>
                    <div className='col-12 col-lg-10 cancelTask-description-div'>
                        <p className='taxInfo-description'>
                            Account Balances are automatically applied when a project is completed.
                        </p>
                    </div>
                </div>
                <div className='row accountBalance_row2'>
                    <div className='col-12 col-lg-10'>
                        <div className='px-3'>
                            <h2 className='account_content_headings'>AVAILABLE ACCOUNT BALANCE: $0</h2>
                            <h4 className='redemptionCode-heading py-3'>Enter a redemption code</h4>
                        </div>
                        <div>
                            <input type='password' className='redemptionCode-input-fields'></input>
                            <div className='pt-5'>
                                <Button color='#fdd043' text='APPLY' hegiht='40px' padding='2px 60px' fontSize="12px" border='1.5px solid #B4B4B5' width='100%'/>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
        </>
    )
}

export default AccountBalance
