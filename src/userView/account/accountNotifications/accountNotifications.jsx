import React, { useState, useEffect } from 'react'
import Button from '../../../Components/button/button'
import './accountNotifications.css'

const AccountNotifications = () => {
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
            <div className='pb-4'><h2 className='h1_heading'>NOTIFICATIONS</h2></div>
            <div className='accountNotificaions-sec'>

                {/* large-screens */}
                <div className="communication-large-sec">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th className='account_content_headings' scope="col">FORM OF COMMUNICATION</th>
                                <th className='account_content_headings' scope="col">EMAIL</th>
                                <th className='account_content_headings' scope="col">SMS</th>
                                <th className='account_content_headings' scope="col">PUSH NOTIFICATION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='communication-form'>Task Updates</td>
                                <td>
                                    <label className="radioLabel-container">
                                        <input type="radio" name="radio" />
                                        <span className="checkmark"></span>
                                    </label>
                                </td>
                                <td>
                                    <label className="radioLabel-container">
                                        <input type="radio" name="radio" />
                                        <span className="checkmark"></span>
                                    </label>
                                </td>
                                <td>
                                    <label className="radioLabel-container">
                                        <input type="radio" name="radio" />
                                        <span className="checkmark"></span>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td className='communication-form'>Promotional Emails And Notificaitons</td>
                                <td>
                                    <label className="radioLabel-container">
                                        <input type="radio" name="radio" />
                                        <span className="checkmark"></span>
                                    </label>
                                </td>
                                <td>
                                    <label className="radioLabel-container">
                                        <input type="radio" name="radio" />
                                        <span className="checkmark"></span>
                                    </label>
                                </td>
                                <td>
                                    <label className="radioLabel-container">
                                        <input type="radio" name="radio" />
                                        <span className="checkmark"></span>
                                    </label>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

                {/* tablet-seciton   */}

                <div className="d-none communication-tablet-sec">
                    <h4 className='account_content_headings' >FORM OF COMMUNICAITON</h4>
                    <div className="row py-5 communicaitons-first-row">
                        <div className="col-12 py-3">
                            <p className='communication-form'>Task Updates</p>
                        </div>
                        <div className="col-9 col-lg-6 py-2">
                            <h4 className='account_content_headings' >EMAIL</h4>
                        </div>
                        <div className="col-3 col-lg-6 py-2 communication_checkbox">
                            <label className="radioLabel-container">
                                <input type="radio" name="radio" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="col-9 col-lg-6 py-2">
                            <h4 className='account_content_headings' >SMS</h4>
                        </div>
                        <div className="col-3 col-lg-6 py-2 communication_checkbox">
                            <label className="radioLabel-container">
                                <input type="radio" name="radio" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="col-9 col-lg-6 py-2">
                            <h4 className='account_content_headings' >PUSH NOTIFICATIONS</h4>
                        </div>
                        <div className="col-3 col-lg-6 py-2 communication_checkbox">
                            <label className="radioLabel-container">
                                <input type="radio" name="radio" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>

                    <div className="row py-5">
                        <div className="col-12 py-3">
                            <p className='communication-form'>Promotional Emails And Notificaitons</p>
                        </div>
                        <div className="col-6 py-2">
                            <h4 className='account_content_headings' >EMAIL</h4>
                        </div>
                        <div className="col-6 py-2 communication_checkbox">
                            <label className="radioLabel-container">
                                <input type="radio" name="radio" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="col-6 py-2">
                            <h4 className='account_content_headings' >SMS</h4>
                        </div>
                        <div className="col-6 py-2 communication_checkbox">
                            <label className="radioLabel-container">
                                <input type="radio" name="radio" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="col-6 py-2">
                            <h4 className='account_content_headings' >PUSH NOTIFICATIONS</h4>
                        </div>
                        <div className="col-6 py-2 communication_checkbox">
                            <label className="radioLabel-container">
                                <input type="radio" name="radio" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='row buttons'>
                    <div className='col-12 col-lg-6 text-end'>
                        <Button color='#fdd043' text='SAVE' padding='1px 0' fontSize="10px" border='1.5px solid #B4B4B5' className='buttonDimensions' height='40px' width={matches ? '222px' : '297px'} />
                    </div>
                    <div className='col-12 col-lg-6'>
                        <Button color='#fff' text='CANCEL' padding='1px 0' fontSize="10px" border='1.5px solid #B4B4B5' className='buttonDimensions' height='40px' width={matches ? '222px' : '297px'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountNotifications
