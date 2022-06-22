import React, {useEffect} from 'react'
import './ArtistProfile.css';
import AboutArtist from './Components/AboutArtist';
import { VscDeviceCamera } from 'react-icons/vsc';
import { FiPlay } from 'react-icons/fi';
import AddButton from './Components/addButton';
import featured from '../Assets/featured.jpg';
import michel from '../Assets/michel.png';
import { MdAdd } from 'react-icons/md';
import Button from '../Components/button/button';
import ArtistButton from './Components/button/artistButton';
const ArtistProfile = () => {
    
    return (
        <div className="aboutArtistSec">
            <div className="container aboutArtisInnerCont">
                <AboutArtist />
                <div className="row aboutMeSection">
                    <div className="col-3">
                        <ArtistButton color='#fed12f'
                            text='HELP'
                            padding='0.4rem 2.5rem' fontSize="10px" border='1px solid #B4B4B5' height='40px' width='130px'/>
                    </div>
                    <div className="col-9">
                        <div>
                            <h4 className="aboutHeading">ABOUT ME</h4>
                            <hr />
                            <p className="aboutParagraph">t is a long established fact that a reader will
                                be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <div className="d-flex justify-content-end">
                            <h6>Read more</h6>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center reviewGalleryButtons">
                    <div className="col-6 text-center">
                    <Button color='#fff'
                        textColor='#523105'
                        text='Reviews'
                        padding='6px'
                        height='67px'
                        width='427px'
                        fontSize="22px"
                        fontWeight='900'
                        border='1.5px solid #B4B4B5' />
                    </div>
                    <div className="col-6 text-center">
                        
                            <Button color='#fed12f'
                        textColor='#523105'
                        text='Gallery'
                        padding='6px'
                        height='67px'
                        width='427px'
                        fontSize="22px"
                        fontWeight='900'
                        border='1.5px solid #B4B4B5' />
                    </div>
                </div>

                {/* gallery-section */}
                <div className="artistGallerySec">
                    <div className="row my-5 justify-content-between">
                        <div className="col-12 col-lg-6 artisGalleryUpload position-relative">
                            <div className="py-4">
                                <VscDeviceCamera className="artisGalleryIcon" />
                            </div>
                            <div className="py-4">
                                <FiPlay className="artisGalleryIcon" />
                            </div>
                            <AddButton />
                        </div>
                        <div className="col-12 col-lg-5">
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label for="inputZip">Subject</label>
                                        <input type="text" placeholder="Painting wall" className="form-control artistFormGroup" id="inputZip" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label for="inputZip">Date</label>
                                        <input type="text" placeholder="The date of this subject" className="form-control artistFormGroup" id="inputZip" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label for="inputZip">Description</label>
                                        <input type="text" placeholder="describe this project here" className="form-control artistFormGroup" id="inputZip" />
                                    </div>
                                </div>
                                <div className="submit">
                                    <button className="formSignIn"><span className="formSignInText">SUBMIT</span></button>
                                </div>
                            </form>

                        </div>

                    </div>
                    <div className="row py-5 justify-content-between" style={{ borderTop: "2px solid #D3D3D3" }}>
                        <div className="col-12 col-lg-6 position-relative galleryCol">
                            <MdAdd className="imageCut" />
                            <img className="img-fluid featured-image" src={featured} alt="" />
                            <div className="michleCardSec position-absolute d-flex justify-content-center">
                                <div className="row michelCard">
                                    <div className="col-2">
                                        <img className="img-fluid" src={michel} alt="" />
                                    </div>
                                    <div className="col-10">
                                        <h5 className="michelCardHeading1">Michel Motoshaleh</h5>
                                        <h6 className="michelCardHeading2">Sculpture</h6>
                                        <p className="michelCardParagraph">t is a long established fact that a reader will.I
                                            t is a long established fact that a reader will
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 position-relative galleryCol">
                            <MdAdd className="imageCut" />
                            <img className="img-fluid featured-image" src={featured} alt="" />
                            {/* michel-card */}
                            <div className="michleCardSec position-absolute d-flex justify-content-center">
                                <div className="row michelCard">
                                    <div className="col-2">
                                        <img className="img-fluid" src={michel} alt="" />
                                    </div>
                                    <div className="col-10">
                                        <h5 className="michelCardHeading1">Michel Motoshaleh</h5>
                                        <h6 className="michelCardHeading2">Sculpture</h6>
                                        <p className="michelCardParagraph">t is a long established fact that a reader will.I
                                            t is a long established fact that a reader will
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row justify-content-center see-More" style={{ marginTop: "9%" }}>
                        <h6 style={{ textAlign: "end", color: "#ffd100", width: "96%" }}>See more</h6>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default ArtistProfile
