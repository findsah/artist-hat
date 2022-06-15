import React, {useState, useEffect} from 'react'

const PreviewTask = () => {
const [taskData, setTaskData] = useState()
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('taskData'));
        if (items) {
            setTaskData(items);
        }
      }, []);

      console.log(taskData)
    return (
        <div className='row confirmTask-sec'>
            <div className='account_leftBar px-0'>
                <div className='account-navbar confirm-taskBar'>
                    <h2 className='h2-heading text-center py-3'>YOUR ACCOUNT</h2>
                    <h5 className='closing-message'>CLOSING MESSAGES</h5>
                    <div className="message">
                        <p>
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
                <div className="content">
                    <div className="data-row">
                        <div className="faded-heading">Client</div>
                        <div className="data-value">{taskData? taskData.username:'N/A'}</div>
                    </div>
                    <div className="data-row">
                        <div className="faded-heading">Hours Worked</div>
                        <div className="data-value">{taskData?taskData.hours:'N/A'}</div>
                    </div>
                    <div className="data-row">
                        <div className="faded-heading">Expenses</div>
                        <div className="data-value">{taskData?taskData.expenses:'N/A'}</div>
                    </div>
                    <div className="data-row">
                        <div className="faded-heading">Pinting Type</div>
                        <div className="data-value">{taskData?taskData.painting:'N/A'}</div>
                    </div>
                    <div className="data-row">
                        <div className="faded-heading">Your Task Rate</div>
                        <div className="data-value">{taskData?taskData.rate:'N/A'}</div>
                    </div>
                    <div className="data-row">
                        <div className="faded-heading">Is this an ongoing job?</div>
                        <div className="data-value">{taskData?'yes':'No'}</div>
                    </div>
                    
                    <div className="data-row">
                        <div className="sub-total">Total</div>
                        <div className="sub-total">$77.97</div>
                    </div>
                    <div className="data-row">
                        <button className='preview-button'>Preview</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PreviewTask
