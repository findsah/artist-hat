import React from 'react'
import './updateInfo.css'

const UpdateInfo = () => {
    return (
        <>
            {/* .artistInfo-large-screen */}

            <div className="artistInfo-large-sec">
                <div className="row">
                    <div className="col-3 px-3">
                        <div className='pb-4'><h2 className='artistBasic-info'>BIRTHDATE</h2></div>
                        <div className='artistBasic-info-div'><h2 className='artistBasic-info'>ADDRESS</h2></div>
                        <div><h2 className='artistBasic-info'>PERSONAL URL</h2></div>
                    </div>
                    <div className="col-9 artistInfo-values-div px-3">
                        <div className="container">
                            <div className="row py-4">
                                <div className="col-5">
                                    <select id="birth-month" name="birth-month" className="birthday">
                                        <option value="" className="timeOption birthday">12 DEC</option>
                                        <option value="">09:00</option>
                                        <option value="">10:00</option>
                                        <option value="">01:00</option>
                                    </select>
                                </div>
                                <div className="col-3">
                                    <select id="birth-date" name="birth-date" className="birthday">
                                        <option value="" className="timeOption birthday">20</option>
                                        <option value="">09:00</option>
                                        <option value="">10:00</option>
                                        <option value="">01:00</option>
                                    </select>
                                </div>
                                <div className="col-3">
                                    <select id="birth-year" name="birth-year" className="birthday">
                                        <option value="" className="timeOption birthday">1991</option>
                                        <option value="">09:00</option>
                                        <option value="">10:00</option>
                                        <option value="">01:00</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row py-4 userInfo-row">
                                <div className="col-12">
                                    <p className='artistBasic-info-values'>Home Address</p>
                                    <div className='py-4'>
                                        <input type="text" value='1100 Trouker street' className='address' />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-5">
                                            <p className='artistBasic-info-values py-1'>City</p>
                                            <input type="text" value='Toronto' className='address' />
                                        </div>
                                        <div className="col-3">
                                            <p className='artistBasic-info-values py-1'>Province</p>
                                            <select id="birth-year" name="birth-year" className="birthday">
                                                <option value="" className="timeOption birthday">ON</option>
                                                <option value="">09:00</option>
                                                <option value="">10:00</option>
                                                <option value="">01:00</option>
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <p className='artistBasic-info-values py-1'>Postal Code</p>
                                            <input type="text" value='M5A 3R7' className='address' />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="row py-4 userInfo-row">
                                <div className="col-12">
                                    <p className='artistBasic-info-values'>Your personal url is curruntly https://tr.co/micool-g--2 </p>
                                    <div className='py-2'>
                                        <input type="text" value='Micce-g--2' className='address' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* artistInfo-tabler-sec */}
            <div className="artistInfo-tablet-sec d-none">
                <div className="row">
                    <div className="col-12"><h2 className='artistBasic-info text-start py-2'>BIRTHDATE</h2></div>
                    <div className="col-12 tablet-birthdate-sec pb-5">
                        <div className="row py-4">
                            <div className="col-5">
                                <select id="birth-month" name="birth-month" className="birthday">
                                    <option value="" className="timeOption birthday">12 DEC</option>
                                    <option value="">09:00</option>
                                    <option value="">10:00</option>
                                    <option value="">01:00</option>
                                </select>
                            </div>
                            <div className="col-3">
                                <select id="birth-date" name="birth-date" className="birthday">
                                    <option value="" className="timeOption birthday">20</option>
                                    <option value="">09:00</option>
                                    <option value="">10:00</option>
                                    <option value="">01:00</option>
                                </select>
                            </div>
                            <div className="col-4">
                                <select id="birth-year" name="birth-year" className="birthday">
                                    <option value="" className="timeOption birthday">1991</option>
                                    <option value="">09:00</option>
                                    <option value="">10:00</option>
                                    <option value="">01:00</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12"><h2 className='artistBasic-info text-start py-2'>ADDRESS</h2></div>
                    <div className="col-12 tablet-birthdate-sec">
                        <div>
                            <p className='artistBasic-info-values pt-4'>Home Address</p>
                            <div className='pb-4'>
                                <input type="text" value='1100 Trouker street' className='address' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 pb-5">
                        <div className="row pt-4">
                            <div className="col-5">
                                <p className='artistBasic-info-values py-1'>City</p>
                                <input type="text" value='Toronto' className='address' />
                            </div>
                            <div className="col-3">
                                <p className='artistBasic-info-values py-1'>Province</p>
                                <select id="birth-year" name="birth-year" className="birthday">
                                    <option value="" className="timeOption birthday">ON</option>
                                    <option value="">09:00</option>
                                    <option value="">10:00</option>
                                    <option value="">01:00</option>
                                </select>
                            </div>
                            <div className="col-4">
                                <p className='artistBasic-info-values py-1'>Postal Code</p>
                                <input type="text" value='M5A 3R7' className='address' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12"><h2 className='artistBasic-info text-start py-2'>PERSONAL URL</h2></div>
                    <div className="col-12 tablet-birthdate-sec py-4">
                        <p className='artistBasic-info-values'>Your personal url is curruntly https://tr.co/micool-g--2 </p>
                        <div className='py-2'>
                            <input type="text" value='Micce-g--2' className='address' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateInfo
