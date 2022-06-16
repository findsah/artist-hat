import React, { useState, useEffect } from 'react'
import { BsCalendar } from 'react-icons/bs'
import Button from '../../../Components/button/button'
import './billingInfo.css'


const BillingInfo = () => {
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
            <div className='row h1_heading justify-content-between m-auto pb-3 pl-md-0'>
                <div className='col-12 col-lg-3 pl-lg-0'><h2 className='h1_heading'>ACCOUNT</h2></div>
                <div className='col-12 col-lg-3'>
                    <Button color='#fff' text='EDIT' fontSize="12px" border='1.5px solid #B4B4B5' height='40px' width={matches ? '' : '297px'} />
                </div>
            </div>
            <div className='billinInfo-sec'>
                <div className="row justify-content-center">
                    <div className='col-md-10'>
                                <div className="row billing-input-group">
                                    <div className="card-sign col-3"><BsCalendar /></div>
                                    <div className="col-3">
                                        <input type="text" className="card-inputs" placeholder="Card" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="card-inputs" placeholder="MM/YY" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="card-inputs" placeholder="CVC" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>


                                </div>
                    </div>
                    <div className='row pt-5 accountButtons'>
                        <div className='col-12 col-lg-6 button'>
                            <Button color='#fdd043' text='SAVE' padding='1px 0' fontSize="10px" border='1.5px solid #B4B4B5' className='buttonDimensions' height='40px' width={matches ? '222px' : '297px'} />
                        </div>
                        <div className='col-12 col-lg-6 button'>
                            <Button color='#fff' text='CANCEL' padding='1px 0' fontSize="10px" border='1.5px solid #B4B4B5' className='buttonDimensions' height='40px' width={matches ? '222px' : '297px'} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BillingInfo
