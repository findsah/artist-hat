import React from 'react'
import './accountDeactivation.css'
import Button from '../../../Components/button/button'

const AccountDeactivation = () => {
    return (
        <>
            <div className='pb-4'><h2 className='h1_heading'>ACCOUNT DEACTIVATION</h2></div>
            <div className='deactivation-sec container py-5'>
                <div className='row justify-content-end mb-md-5'>
                    <div className='col-10 deactivation-description-div'>
                        <p className='deactivation-description'>
                            Account Balances are automatically applied when a project is completed.
                            Account Balances are automatically applied when a project is completed.
                            Account Balances are automatically applied when a project is completed.
                        </p>
                    </div>
                    <div className='col-10 deactivation-description-div mt-lg-5 mb-3 my-md-5'>
                        <p className='deactivation-description'>
                            Account Balances are automatically applied when a project is completed.
                        </p>
                    </div>
                    <div className='col-10 p-0 mt-md-5 account-deactivation'>
                        <Button color='#fff' text='ACCOUNT DEACTIVATION' padding='0 0 1px' width='210px' fontSize="8px" border='1.5px solid #B4B4B5' className='buttonDimensions' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountDeactivation
