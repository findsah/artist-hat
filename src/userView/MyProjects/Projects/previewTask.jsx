import React, {useState, useEffect} from 'react'
import Button from '../../../Components/button/button'

const PreviewTask = () => {
const [taskData, setTaskData] = useState()
const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1919px)").matches
)
useEffect(() => {
    window
        .matchMedia("(max-width: 1919px)")
        .addEventListener('change', e => setMatches(e.matches));
}, []);
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
                        <p className="paragraph-2">
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
                    <div className='row pt-5 accountButtons'>
                        <div className='col-12 col-lg-6 button'>
                            <Button color='#fdd043' textColor='#523105' text='SUBMIT' padding='2% 0' fontWeight='600' fontSize="30px" border='1.5px solid #B4B4B5' className='buttonDimensions' width={matches ? '100%' : '297px'} />
                        </div>
                        <div className='col-12 col-lg-6 button'>
                            <Button color='#fff' textColor='#523105' text='EDIT' padding='2% 0' fontWeight='600' fontSize="30px" border='1.5px solid #B4B4B5' className='buttonDimensions' width={matches ? '100%' : '297px'} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PreviewTask
