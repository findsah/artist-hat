import React, { useState, useEffect } from 'react'
import './taxInfo.css'
import Button from '../../../Components/button/button'

const TaxInfo = () => {
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
            <div className='pb-4'><h2 className='h1_heading'>TAX INFO</h2></div>
            <div className='taxInfo-sec container py-5'>
                <div className='row justify-content-end taxInfo-first-row'>
                    <div className='col-10 taxInfo-description-div'>
                        <p className='account_small_paragraphs'>
                            Your information is required to comply with local and federal regulations.
                            Failure to provide this information may cause payouts on your accounts to
                            be paused until information is received
                        </p>
                    </div>
                </div>
                <div className='row justify-content-start CancelTask_div'>
                    <div className='col-12 col-lg-4 goToTasks-div'>
                        <h2 className='account_content_headings text-center'>UPDATE MY INFO</h2>
                        <Button color='#fff' text='UPDATE MY INFO' padding='1px 0' fontSize="10px" border={`${matches?'1px':'2px'} solid #B4B4B5`} fontWeight={`${matches?'500':'900'}`} className='buttonDimensions' height='40px' width='100%' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaxInfo
