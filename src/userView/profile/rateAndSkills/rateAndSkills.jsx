import React, { useState } from 'react'

const RateAndSkills = () => {
    const [tabActive, setTabActive] = useState(1);

    const toggleTab = (index) => {
        setTabActive(index);
    };
    return (
        <div className='skills-main-sec p-2'>
            <div className='d-flex justify-content-center'>
                <div className='w-75'>
                    <h2 className='rates-and-skills'>RATES & SKILLS</h2>
                    <div className='w-100 text-end'>
                        <IoMdArrowDropdown className='arrow-dropDown' />
                    </div>
                </div>
            </div>
            <div className='skills-inner-sec d-flex justify-content-end py-2'>
                <ul style={{ listStyleType: "none", textAlign: "end", width: '70%' }}>
                    <li className={`skills-tabs p-3 ${tabActive === 1 ? "backgrond-active" : ""}`} onClick={() => toggleTab(1)}><h3 className='skills'>PAINTING</h3></li>
                    <li className={`skills-tabs p-3 ${tabActive === 2 ? "backgrond-active" : ""}`} onClick={() => toggleTab(2)}><h3 className='skills'>SCULPTUR</h3></li>
                    <li className={`skills-tabs p-3 ${tabActive === 3 ? "backgrond-active" : ""}`} onClick={() => toggleTab(3)}><h3 className='skills'>STAND GLASS</h3></li>
                    <li className={`skills-tabs p-3 ${tabActive === 4 ? "backgrond-active" : ""}`} onClick={() => toggleTab(4)}><h3 className='skills'>GRAFFITI</h3></li>
                    <li className={`skills-tabs p-3 ${tabActive === 5 ? "backgrond-active" : ""}`} onClick={() => toggleTab(5)}><h3 className='skills'>MOSAIC</h3></li>
                    <li className={`skills-tabs p-3 ${tabActive === 6 ? "backgrond-active" : ""}`} onClick={() => toggleTab(6)}><h3 className='skills'>MIXED MEDIA</h3></li>
                </ul>
            </div>
        </div>
    )
}

export default RateAndSkills
