import React from 'react'
import './addButton.css';
import { MdAdd } from 'react-icons/md';

const AddButton = () => {
    return (
        <button className='d-flex position-absolute artistGalleryUploadButton align-items-center'>
            <div className="artistGalleryButton">
                <span>upload</span> 
            </div>
            <MdAdd className="plusSign" />
        </button>
    )
}

export default AddButton
