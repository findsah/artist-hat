import React from 'react'
import { useState } from 'react'
import Button from '../../../Components/button/button'
import Map from '../../../Components/map/Map'
import { useDispatch } from "react-redux";
import { updateArtistData } from '../../../Redux/artistProfile/ArtistData'
import './workArea.css'

const WorkArea = ({ toggleProfileNav }) => {
    const [locations, setLocations] = useState()
    const dispatch = useDispatch()

   

    // const handleLocation = (val)=>{
    //    setLocations(val);
    // }
    const handleSubmit = () => {
        toggleProfileNav(3)
        const location = 'location'
        dispatch(updateArtistData({ [location]: locations }))
    }
    return (
        <>
            <div className='workArea-con'>
                <div>
                    <h1 className='heading'>WORK AREA</h1>
                    <p className='contentt'>Let us know where you are available to work .To draw your work area, click on the map to create points<br></br>
                        around the edge of the area you can cover.</p>
                </div>
                <Map setLocations={setLocations} />

                <div className='text-center pt-5'>
                    <Button color='#fdd043' text='SUBMIT' padding='2px 60px' fontSize="10px" border='1px solid #B4B4B5' event={handleSubmit} />
                </div>
            </div>
        </>
    )
}

export default WorkArea
