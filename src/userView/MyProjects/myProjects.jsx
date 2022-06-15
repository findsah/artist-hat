import React, { useState } from 'react'
import '../account/account.css'
import Completed from './Projects/completed'
import Scheduled from './Projects/scheduled';

const MyProjects = () => {
    const [tabActive, setTabActive] = useState(1);

    const toggleTab = (index) => {
        setTabActive(index);
    }
    return (
        <div className='row p-5 justify-content-between user-projects'>
            <div className='account_leftBar px-0'>
                <div className='account-navbar'>
                    <div className='skills-inner-sec py-2 my-2'>
                        <div className='text-end account_nav_item'><button className={`account-tabs p-3 ${tabActive === 1 ? "backgrond-active" : ""}`} onClick={() => toggleTab(1)}><h3 className='skills'>SCHEDULED</h3></button></div>
                        <div className='text-end account_nav_item'><button className={`account-tabs p-3 ${tabActive === 2 ? "backgrond-active" : ""}`} onClick={() => toggleTab(2)}><h3 className='skills'>COMPLETED</h3></button></div>
                    </div>
                </div>
            </div>
            <div className='projects-content account_content py-2'>
            <div className='col-12 pl-lg-0'><h2 className='h1_heading my-projects-heading'>MY PROJECTS</h2></div>
                {tabActive === 1 ? (
                    <Scheduled/>
                ) : ''}
                {tabActive === 2 ? (
                   <Completed/>
                ) : ''}
               
            </div>
        </div>
    )
}

export default MyProjects
