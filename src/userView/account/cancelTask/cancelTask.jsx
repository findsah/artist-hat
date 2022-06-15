import React, { useState, useEffect } from 'react'
import './cancelTask.css'
import Button from '../../../Components/button/button'
import cancelTaskImg from '../../../Assets/cancelTask.svg'

const CancelTask = () => {
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
            <div className='pb-4'><h2 className='h1_heading'>CANCEL A TASK</h2></div>
            <div className='cancelTask-sec container py-5'>
                <div className='row justify-content-end cancelTask-first-row'>
                    <div className='col-10 cancelTask-description-div'>
                        <p className='cancelTask-description'>
                            To cancel a task, go to your tasks and select the circle with three dots in the upper
                            right corner of the task card. This will reveal the 'Cancel Task' button.
                            Select 'Cancel Task' to cancel all appointments for that task.
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 goToTasks-div text-center'>
                        <h2 className='h2-headings'>CANCEL A TASK</h2>
                        <div className='pt-2'>
                            <Button color='#fff' text='GO TO MY TASKS' padding='1px 0' fontSize="10px" border='1.5px solid #B4B4B5' className='buttonDimensions' height='40px' width={matches? '222px' : '297px'} />
                        </div>
                    </div>
                    <div className='col-12 text-center py-2'>
                        <img src={cancelTaskImg} alt="img" className='taskCancellation_img' />
                    </div>
                </div>
                <div className='row justify-content-end cancelTask-second-row'>
                    <div className='col-10 cancelTask-description-div'>
                        <h2 className='h2-headings py-2'>HAVE SOMETHING ELSE ON YOUR TO DO LIST?</h2>
                        <p className='col-9 cancelTask-description'>
                            Book your next task or manage your to-dos with Artisthat.
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-12 goToTasks-div text-center'>
                        <Button color='#fff' text='CHECK IT OFF YOUR LIST' padding='1px 0' fontSize="10px" border='1.5px solid #B4B4B5' className='buttonDimensions' height='40px' width={matches? '222px' : '297px'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CancelTask
