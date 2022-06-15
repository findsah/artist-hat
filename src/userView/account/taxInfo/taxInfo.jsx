import React from 'react'
import './taxInfo.css'
import Button from '../../../Components/button/button'

const TaxInfo = () => {
    return (
        <>
            <div className='pb-4'><h2 className='h1_heading'>TAX INFO</h2></div>
            <div className='taxInfo-sec container py-5'>
                <div className='row justify-content-end taxInfo-first-row'>
                    <div className='col-10 taxInfo-description-div'>
                        <p className='taxInfo-description'>
                            Your information is required to comply with local and federal regulations.
                            Failure to provide this information may cause payouts on your accounts to
                            be paused until information is received
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-lg-4 updateInfo-div text-center'>
                        <h2 className='h2-headings'>UPDATE MY INFO</h2>
                        <div className='pt-2'>
                            <Button color='#fff' text='UPDATE MY INFO' padding='0 0 1px' fontSize="10px" border='1.5px solid #B4B4B5' className='buttonDimensions' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaxInfo
