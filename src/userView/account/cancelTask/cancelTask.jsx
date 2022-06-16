import React, { useState, useEffect } from 'react'
import './cancelTask.css'
import Button from '../../../Components/button/button'
import cancelTaskImg from '../../../Assets/cancelTask.svg'

const CancelTask = () => {
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
            <div className='pb-4'><h2 className='h1_heading'>CANCEL A TASK</h2></div>
            <div className='cancelTask-sec container py-5'>
                <div className='row justify-content-center cancelTask-first-row'>
                    <div className='col-10 col-xl-8 cancelTask-description-div'>
                        <p className='account_small_paragraphs'>
                            To cancel a task, go to your tasks and select the circle with three dots in the upper
                            right corner of the task card. This will reveal the 'Cancel Task' button.
                            Select 'Cancel Task' to cancel all appointments for that task.
                        </p>
                    </div>
                </div>
                <div className='row justify-content-start CancelTask_div'>
                    <div className='col-12 col-lg-4 goToTasks-div'>
                        <h2 className='account_content_headings text-center'>CANCEL A TASK</h2>
                        <Button color='#fff' text='GO TO MY TASKS' padding='1px 0' fontSize="10px" border={`${matches?'1px':'2px'} solid #B4B4B5`} fontWeight={`${matches?'500':'900'}`} className='buttonDimensions' height='40px' width='100%' />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-12 col-lg-8 text-center py-2'>
                        <img src={cancelTaskImg} alt="img" className='img-fluid' />
                    </div>
                </div>
                <div className='row justify-content-center cancelTask-second-row'>
                    <div className='col-10 col-xl-8 cancelTask-description-div'>
                        <h2 className='account_content_headings py-2'>HAVE SOMETHING ELSE ON YOUR TO DO LIST?</h2>
                        <p className='account_small_paragraphs'>
                            Book your next task or manage your to-dos with Artisthat.
                        </p>
                    </div>
                </div>
                <div className='row justify-content-start CancelTask_div'>
                    <div className='col-12 col-lg-4 goToTasks-div'>
                        <Button color='#fff' text='CHECK IT OF YOUR LIST' padding='1px 0' fontSize="10px" border={`${matches?'1px':'2px'} solid #B4B4B5`} fontWeight={`${matches?'500':'900'}`} className='buttonDimensions' height='40px' width='100%' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CancelTask
