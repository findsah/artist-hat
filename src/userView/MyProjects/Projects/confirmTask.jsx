import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

const ConfirmTask = () => {
    const [data, setData] = useState({
        username: '',
        hours: '',
        expenses: '',
        painting: '',
        rate: '',
        isJob: false


    })
    useEffect(() => {
        localStorage.setItem('taskData', JSON.stringify(data));
      }, [data]);
      
    const handleChange = (e) => {
        const { name } = e.target
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setData({ ...data, [name]: value })
    }
    return (
        <div className='row confirmTask-sec'>
            <div className='account_leftBar px-0'>
                <div className='account-navbar confirm-taskBar'>
                    <h2 className='h2-heading text-center py-3'>YOUR ACCOUNT</h2>
                    <h5 className='closing-message'>CLOSING MESSAGES</h5>
                    <div className="message">
                        <p className='paragraph-1'>
                            Thanks for hiring me for your project! If you’d
                            Like to hire me again in the future, check out my profile where you can see all my skills and rates https://ah.co/michel-m-1.
                        </p>
                        <p className="paragraph-2">
                            You also get <strong>$20</strong> off your next time working with me if you use this referral code : <strong>AHA6F34G</strong>
                        </p>
                    </div>
                </div>
            </div>
            <div className='account_content confirm-rightBar px-sm-1 px-lg-3 py-2'>
                <div className="content confirmTask">
                    <div className="data-row">
                        <div className="faded-heading">Client</div>
                        <div className="data-value"><input name="username" className='data-input' type="text" placeholder='type here' onChange={(e) => handleChange(e)} value={data.username} /></div>
                    </div>
                    <div className="data-row">
                        <div className="faded-heading">Hours Worked</div>
                        <div className="data-value"><input name="hours" className='data-input' type="text" placeholder='type here' onChange={(e) => handleChange(e)} value={data.hours} /></div>
                    </div>
                    <div className="data-row">
                        <div className="faded-heading">Expenses</div>
                        <div className="data-value"><input name="expenses" className='data-input' type="text" placeholder='type here' onChange={(e) => handleChange(e)} value={data.expenses} /></div>
                    </div>
                    <div className="data-row">
                        <div className="faded-heading">Pinting Type</div>
                        <div className="data-value"><input name="painting" className='data-input' type="text" placeholder='type here' onChange={(e) => handleChange(e)} value={data.painting} /></div>
                    </div>
                    <div className="data-row">
                        <div className="faded-heading">Your Task Rate</div>

                        <div className="data-value"><input name="rate" className='data-input' type="text" placeholder='type here' onChange={(e) => handleChange(e)} value={data.rate} /></div>
                    </div>
                    <div className="data-row">
                        <div className="faded-heading">Is this an ongoing job?</div>
                        <label class="switch">
                            <input name="isJob" type="checkbox" checked={data.isJob} onChange={(e) => handleChange(e)} />
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <Link to={'/artistView/preview-task'} className='col-4' >
                            <button className='preview-button'>Preview</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ConfirmTask