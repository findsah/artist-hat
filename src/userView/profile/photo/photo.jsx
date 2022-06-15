import React, { useState, useEffect } from 'react'
import './photo.css'
import upload from '../../../Assets/upload.png'
import { MdAdd } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import uuid from "react-uuid";
import S3 from "react-aws-s3";
import { updateArtistData } from '../../../Redux/artistProfile/ArtistData';
const config = {
    bucketName: "artisthat",
    region: "ca-central-1",
    accessKeyId: "AKIA3EGOTMVI3JPHWNN4",
    secretAccessKey: "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",
};


const ReactS3Client = new S3(config);
const Photo = ({ profileTab }) => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.ArtistData.value);
    const [galleryArray, setGalleryArray] = useState();

    useEffect(() => {
        if (profileTab === 4) {
            // const location = 'location'
            dispatch(updateArtistData({ 'portfolioImages': galleryArray }))
        }
    }, [dispatch, profileTab])
    useEffect(() => {
        setGalleryArray(userData?.portfolioImages !== null ? userData?.portfolioImages : [])
    }, [userData])

    const handleChange = (e, flag) => {
        if (flag === "gallery") {

            ReactS3Client.uploadFile(e.target.files[0], uuid() + "imgs")
                .then((data) => {
                    if (galleryArray) {
                        setGalleryArray((galleryArray) => [...galleryArray, data.location])
                    } else {
                        setGalleryArray([data.location])
                    }
                })
                .catch((err) => {
                    console.log(err);
                });

        }
    }
    const deleteImage = (pic) => {
        // var data1 = 
        const filteredGalleryArray = galleryArray?.filter((item) => item !== pic);
        setGalleryArray(filteredGalleryArray);
        // dispatch(updateArtistData({ 'portfolioImages': filteredGalleryArray }))
    };
    return (
        <>
            <div className='gallery-con' >

                <div className='row'>

                    <div className='col-lg-9 col-12 text-center'>
                        <h1 className='heading'>UPLOAD YOUR PHOTO</h1>
                        <p className='content'>Please upload a photo of yourself that clearly conveys who you are.Having
                            a friendly, professional<br></br> photo inspires confidence
                            in potential clients and will increase your likelihood of being hired</p>

                    </div>
                    <div className='col-lg-3 col-12 text-center'>
                        <div>
                            <img style={{ width: "100%" }} src={upload} alt='uploadImage' />
                        </div>
                        <div>
                            <div className="text-center w-100">
                                <div className='py-3 cursor'>
                                    <input
                                     type="file" name="portfolioImages"
                                        className='artistGallery'
                                        onChange={e => handleChange(e, "gallery")}
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-12'>
                    <div className='text-center'>
                        <h4 className='heading-4'>TELL US ABOUT YOU</h4>
                    </div>
                    <div className='row pt-5'>
                        {galleryArray !== [] && galleryArray?.map((pic, index) => (
                            <div className='col-4 col-lg-3 photo_gallery' key={index}>
                                <div className='position-relative'>
                                    <MdAdd onClick={() => deleteImage(pic)} className="imageCut position-absolute cursor" />
                                    <img
                                        className="img-fluid galleryimges"
                                        src={pic}
                                        alt="user-pic"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Photo
