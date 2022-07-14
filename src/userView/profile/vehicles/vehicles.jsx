import React, { useState, useEffect } from 'react'
import Button from '../../../Components/button/button'
import './vehicles.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateArtist } from '../../../Api/UserReg_API';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateArtistData } from '../../../Redux/artistProfile/ArtistData'



const Vehicles = () => {
    const dispatch = useDispatch();
    const userId = localStorage.getItem('userId');
    const userData = useSelector((state) => state.ArtistData.value);
    const [artistData, setArtistData] = useState()
    const [roleRestrictions, setRoleRestrictions] = useState(
    );
    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 1919px)").matches
    )
    useEffect(() => {
        window
            .matchMedia("(max-width: 1919px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);
    const [selectedRestrictions, setSelectedRestrictions] = useState({
        vehicless: false,
        bike: false,
        truck: false,
        car: false,
        cycle: false,
        jeep: false,
    })

    useEffect(() => {
        setArtistData(userData ? userData : [])
    }, [userData])

    useEffect(() => {
        setSelectedRestrictions(userData?.vehicles !== null && userData?.vehicles );
        setRoleRestrictions([
            {
                res: "vehicless",
                check: userData?.vehicles?.vehicless,
                data: "BIOCR Validation",
            },
            {
                res: "bike",
                check: userData?.vehicles?.bike,
                data: "Event Validation",
            },
            {
                res: "truck",
                check: userData?.vehicles?.truck,
                data: "Extra Data Employee",
            },
            {
                res: "car",
                check: userData?.vehicles?.car,
                data: "BIOCR Validation",
            },
            {
                res: "cycle",
                check: userData?.vehicles?.cycle,
                data: "Event Validation",
            },
            {
                res: "jeep",
                check: userData?.vehicles?.jeep,
                data: "Extra Data Employee",
            }
        ]
    )
    }, [userData])

   

    // const handleChange = (e) => {
    //     const { value, checked } = e.target;
    //     if (checked) {
    //         if (vehiclesArray) {
    //             setVehiclesArray(vehiclesArray => [...vehiclesArray, value])
    //             dispatch(updateArtistData({ ['vehicles']: [...vehiclesArray, value] }))
    //         } else {
    //             setVehiclesArray([value])
    //             dispatch(updateArtistData({ ['vehicles']: [...vehiclesArray, value] }))
    //         }

    //     } else {
    //         const filteredVehiclesArray = vehiclesArray?.filter((item) => item !== value);
    //         setVehiclesArray(filteredVehiclesArray);
    //         dispatch(updateArtistData({ ['vehicles']: vehiclesArray?.filter((item) => item !== value) }))
    //     }
    // }
    const handleCheckBox = (e, item) => {
        const { checked, name } = e.target
        let checkboxList = roleRestrictions;
        checkboxList.forEach(chkItem => {
            if (chkItem === item) {
                setRoleRestrictions({ ...roleRestrictions, [chkItem.check]: checked })
                setSelectedRestrictions({ ...selectedRestrictions, [name]: checked })
                dispatch(updateArtistData({ 'vehicles': { ...selectedRestrictions, [name]: checked } }))

            }
        })
        setRoleRestrictions(checkboxList);
    }

    const handlSubmit = async () => {
        console.log(artistData, 'gggggg')
        const response = await updateArtist(artistData, userId);
        if (response.data) {
            if (response.data.Response === 'Success') {
                console.log(response.data, 'iiiiiiiiiii')
                toast("Data Submited Successfully..!")
            }

        }
    }

    console.log(selectedRestrictions,'new.......')
    return (
        <div className='vehicles-sec'>
            <div className='row pb-5'>
                <div className='col-9'>
                    <h4 className='heading-4'>TELL US ABOUT YOU</h4>
                    <p className='vehicles-paragraph py-2'>Do you access to a vehicle that you can use reliably for project.
                    </p>
                </div>
            </div>
            {/* form-section */}
            <div className='form-sec'>
                <div className='row justify-content-between'>
                                {
                                    roleRestrictions?.map((item, index) => (

                                        <div className='col-12 col-lg-6' key={index}>
                                        <label className="radioLabel-container" key={index}>{item.data}
                                            <input
                                                type="checkbox"
                                                name={item.res}
                                                checked={item.check}
                                                onChange={(e) => handleCheckBox(e, item)}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                            </div>
                                    ))
                                }
                            <div className='col-11'>
                                <p className='vehicles-paragraph'>Do you access to a vehicle that you can use reliably for project.
                                </p>
                            </div>
                   

                </div>
                <div className='row pt-5 accountButtons'>
                        <div className='col-12 col-lg-6 button'>
                            <Button color='#fdd043' textColor='#523105' text='SUBMIT' padding='2% 0' fontWeight={matches ? '500' : '600'} fontSize={matches ? '14px' : '17px'} border='1.5px solid #B4B4B5' className='buttonDimensions' width={matches ? '100%' : '297px'} event={handlSubmit} />
                        </div>
                        <div className='col-12 col-lg-6 button'>
                            <Button color='#fff' textColor='#523105' text='EDIT' padding='2% 0' fontWeight={matches ? '500' : '600'} fontSize={matches ? '14px' : '17px'} border='1.5px solid #B4B4B5' className='buttonDimensions' width={matches ? '100%' : '297px'} />
                        </div>
                    </div>
            </div>
            <ToastContainer
                theme='light'
                type='success'
            />
        </div>
    )
}

export default Vehicles
