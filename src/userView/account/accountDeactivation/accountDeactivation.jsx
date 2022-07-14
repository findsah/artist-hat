import React, {useState, useEffect} from 'react'
import './accountDeactivation.css'
import Button from '../../../Components/button/button'

const AccountDeactivation = () => {
    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 991px)").matches
    )
    useEffect(() => {
        window
            .matchMedia("(max-width: 991px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);
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
                    <div className='col-12 col-lg-10 p-0 mt-md-5 account-deactivation'>
                        <Button color='#fff' text='ACCOUNT DEACTIVATION'  padding='1px 3px' fontSize={matches ? '12px' : '18px'} border='1.5px solid #B4B4B5' className='buttonDimensions' height={matches ? '40px' : '67px'} width={matches ? '222px' : '297px'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountDeactivation
