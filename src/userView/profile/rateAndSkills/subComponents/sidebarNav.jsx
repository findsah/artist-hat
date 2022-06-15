import React, {useState, useEffect} from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { updateArtistData } from '../../../../Redux/artistProfile/ArtistData'
import { useDispatch } from 'react-redux'
const SidebarNav = () => {
    const dispatch = useDispatch()
    const [tabActive, setTabActive] = useState('PAINTING');
    const toggleTab = (category) => {
        setTabActive(category);
        dispatch(updateArtistData({ 'category': tabActive }))
    };
    useEffect(() => {
        dispatch(updateArtistData({ 'category': tabActive }))
    }, [dispatch,tabActive])
    return (
        <div className='skills-main-sec py-2'>
            <div className='d-flex justify-content-center'>
                <div className='w-75'>
                    <h2 className='rates-and-skills'>RATES & SKILLS</h2>
                    <div className='w-100 text-end'>
                        <IoMdArrowDropdown className='arrow-dropDown' />
                    </div>
                </div>
            </div>
            <div className='skills-inner-sec d-flex justify-content-end py-4'>
                <ul style={{ listStyleType: "none", textAlign: "end", width: '75%' }}>
                    <li className={`skills-tabs px-4 py-3 ${tabActive === 'PAINTING' ? "backgrond-active" : ""}`} onClick={() => toggleTab('PAINTING')}><h3 className='skills'>PAINTING</h3></li>
                    <li className={`skills-tabs px-4 py-3 ${tabActive === 'SCULPTUR' ? "backgrond-active" : ""}`} onClick={() => toggleTab('SCULPTUR')}><h3 className='skills'>SCULPTUR</h3></li>
                    <li className={`skills-tabs px-4 py-3 ${tabActive === 'STAND GLASS' ? "backgrond-active" : ""}`} onClick={() => toggleTab('STAND GLASS')}><h3 className='skills'>STAND GLASS</h3></li>
                    <li className={`skills-tabs px-4 py-3 ${tabActive === 'GRAFFITI' ? "backgrond-active" : ""}`} onClick={() => toggleTab('GRAFFITI')}><h3 className='skills'>GRAFFITI</h3></li>
                    <li className={`skills-tabs px-4 py-3 ${tabActive === 'MOSAIC' ? "backgrond-active" : ""}`} onClick={() => toggleTab('MOSAIC')}><h3 className='skills'>MOSAIC</h3></li>
                    <li className={`skills-tabs px-4 py-3 ${tabActive === 'MIXED MEDIA' ? "backgrond-active" : ""}`} onClick={() => toggleTab('MIXED MEDIA')}><h3 className='skills'>MIXED MEDIA</h3></li>
                </ul>
            </div>
        </div>
    )
}

export default SidebarNav
