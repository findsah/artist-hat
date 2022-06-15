import React from 'react'
import './accountSecurity.css'
import security from '../../../Assets/accountsecurity.svg'

const AccountSecurity = () => {
    return (
        <>
            <div className='pb-4'><h2 className='h1_heading'>ACCOUNT SECURITY</h2></div>

            <div className='accountSecurity-sec'>
                <div className='row account_security_row'>
                    <div className='col-12 col-xl-4 text-center'>
                        <img src={security} alt="img" className='authentication_img' />
                    </div>
                    <div className='col-12 col-xl-8 d-flex flex-column justify-content-between'>
                        <div><h2 className='account_content_headings'>TWO-FACTOR AUTHENTICATION</h2></div>
                        <div>
                            <p className='account_small_paragraphs'>Your two fector authenticatioin is activated.Your phone number +1 647-749-7000 is the number you
                                will receive authuntication code if detected a login from unauthorized device or browser.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountSecurity
