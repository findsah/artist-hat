import React, { useEffect, useState } from 'react'
import '../taskersAndPrices.css';
import featured from '../../../../../Assets/featured.jpg';
import michel from '../../../../../Assets/michel.png';
import { MdAdd } from 'react-icons/md';
import ReactStars from 'react-rating-stars-component';
import AboutArtist from '../../../../Components/AboutArtist';
import ArtistButton from '../../../../Components/button/artistButton';
import Button from '../../../../../Components/button/button';
import { useSelector } from 'react-redux';

const SpecificArtist = () => {
    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 991px)").matches
    )
    useEffect(() => {
        window
            .matchMedia("(max-width: 991px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);
    const artistPublicProfile = useSelector((state) => state.artist_Public_Profile.profile);

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <div className="aboutArtistSec">
            <div className="aboutArtisInnerCont">

                <AboutArtist artistMdcoL='3' data={artistPublicProfile && artistPublicProfile} />
                <div className="row aboutMe_row">
                    <div className="col-12 col-lg-3 text-center">
                        <ArtistButton color='#fed12f' text='HELP'
                            fontSize="10px"
                            border='1px solid #B4B4B5' height='40px' width='130px' />
                    </div>
                    <div className="col-12 col-lg-9 text-center">
                        <div>
                            <h4 className="aboutHeading">ABOUT ME</h4>
                            <hr></hr>
                            <p className="aboutParagraph">{artistPublicProfile && artistPublicProfile.bio}</p>
                        </div>
                        <div className="d-flex justify-content-end">
                            <h6 className='read_more'>Read more</h6>
                        </div>
                    </div>
                </div>
                <div className='row reviewGalleryButtons'>
                    <div className='col-12 col-lg-6 save'>
                        <Button color='#fdd043' text='Reviews' fontWeight={matches ? 'normal' : '900'} padding='1px 0' fontSize={matches ? '10px' : '22px'} border='1.5px solid #B4B4B5' className='buttonDimensions' height={matches ? '40px' : '67px'} width={matches ? '222px' : '297px'} event={() => toggleTab(1)} />
                    </div>
                    <div className='col-12 col-lg-6 cancel'>
                        <Button color='#fff' text='Gallery' padding='1px 0' fontWeight={matches ? 'normal' : '900'} fontSize={matches ? '10px' : '22px'} border='1.5px solid #B4B4B5' className='buttonDimensions' height={matches ? '40px' : '67px'} width={matches ? '222px' : '297px'} event={() => toggleTab(2)} />
                    </div>
                </div>
                {/* <div className="row reviewGalleryButtons">
                            <div className="col-12 col-lg-6 text-center">
                                <Button color='#fff'
                                    textColor='#523105'
                                    text='Reviews'
                                    padding='6px'
                                    height='67px'
                                    width='100%'
                                    fontSize="22px"
                                    fontWeight='900'
                                    border='1.5px solid #B4B4B5'
                                    event={() => toggleTab(1)} />
                            </div>
                            <div className="col-12 col-lg-6 text-center">

                                <Button color='#fed12f'
                                    textColor='#523105'
                                    text='Gallery'
                                    padding='6px'
                                    height='67px'
                                    width='100%'
                                    fontSize="22px"
                                    fontWeight='900'
                                    border='1.5px solid #B4B4B5'
                                    event={() => toggleTab(2)} />
                            </div>

                        </div> */}
                <div className="tab-content" id="pills-tabContent">
                    <div className={`${toggleState === 1 ? 'tab-pane fade show active ' : 'tab-pane fade'}`} id="pills-reviews" role="tabpanel" aria-labelledby="pills-home-tab">
                        {/* Reviews Section */}
                        <div className='container-fluid reviews-sec my-5'>
                            <div className='row reviews-row' style={{
                                overflow: "auto"
                            }}>
                                <div className='col-12 col-lg-6 reviewsCard'>
                                    <div className='row' >
                                        <div className='col-2 d-flex justify-content-center align-items-top' style={{ padding: "10px" }}>
                                            <img className="reviewee-img" src={michel} alt="img" />
                                        </div>
                                        <div className='col-10'>
                                            <h4 className="reviewer-name">MICHEL G</h4>
                                            <h6 className='py-2 review-date'>8 Nov, 2021</h6>
                                            <ReactStars
                                                count={5}
                                                onChange={ratingChanged}
                                                size={24}
                                                color1="green"
                                                color2="red"
                                            />
                                            <p className='review-content'>
                                                It was a great experience.He was so creative and make my
                                                sculpture a masterpiece.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-lg-6 reviewsCard'>
                                    <div className='row' >
                                        <div className='col-2 d-flex justify-content-center align-items-top' style={{ padding: "10px" }}>
                                            <img className="reviewee-img" src={michel} alt="img" />
                                        </div>
                                        <div className='col-10'>
                                            <h4 className="reviewer-name">MICHEL G</h4>
                                            <h6 className='py-2 review-date'>8 Nov, 2021</h6>
                                            <ReactStars
                                                count={5}
                                                onChange={ratingChanged}
                                                size={24}
                                                color1="green"
                                                color2="red"
                                            />
                                            <p className='review-content'>
                                                It was a great experience.He was so creative and make my sculpture a masterpiece.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-lg-6 reviewsCard'>
                                    <div className='row' >
                                        <div className='col-2 d-flex justify-content-center align-items-top' style={{ padding: "10px" }}>
                                            <img className="reviewee-img" src={michel} alt="img" />
                                        </div>
                                        <div className='col-10'>
                                            <h4 className="reviewer-name">MICHEL G</h4>
                                            <h6 className='py-2 review-date'>8 Nov, 2021</h6>
                                            <ReactStars
                                                count={5}
                                                onChange={ratingChanged}
                                                size={24}
                                                color1="green"
                                                color2="red"
                                            />
                                            <p className='review-content'>
                                                It was a great experience.He was so creative and make my sculpture a masterpiece.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-lg-6 reviewsCard'>
                                    <div className='row' >
                                        <div className='col-2 d-flex justify-content-center align-items-top' style={{ padding: "10px" }}>
                                            <img className="reviewee-img" src={michel} alt="img" />
                                        </div>
                                        <div className='col-10'>
                                            <h4 className="reviewer-name">MICHEL G</h4>
                                            <h6 className='py-2 review-date'>8 Nov, 2021</h6>
                                            <ReactStars
                                                count={5}
                                                onChange={ratingChanged}
                                                size={24}
                                                color1="green"
                                                color2="red"
                                            />
                                            <p className='review-content'>
                                                It was a great experience.He was so creative and make my sculpture a masterpiece.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-lg-6 reviewsCard'>
                                    <div className='row my-3'>
                                        <div className='col-2 d-flex justify-content-center align-items-top' style={{ padding: "10px" }}>
                                            <img className="reviewee-img" src={michel} alt="img" />
                                        </div>
                                        <div className='col-10'>
                                            <h4 className="reviewer-name">MICHEL G</h4>
                                            <h6 className='py-2 review-date'>8 Nov, 2021</h6>
                                            <ReactStars
                                                count={5}
                                                onChange={ratingChanged}
                                                size={24}
                                                color1="green"
                                                color2="red"
                                            />
                                            <p className='review-content'>
                                                It was a great experience.He was so creative and make my sculpture a masterpiece.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-lg-6 reviewsCard'>
                                    <div className='row my-3'>
                                        <div className='col-2 d-flex justify-content-center align-items-top' style={{ padding: "10px" }}>
                                            <img className="reviewee-img" src={michel} alt="img" />
                                        </div>
                                        <div className='col-10'>
                                            <h4 className="reviewer-name">MICHEL G</h4>
                                            <h6 className='py-2 review-date'>8 Nov, 2021</h6>
                                            <ReactStars
                                                count={5}
                                                onChange={ratingChanged}
                                                size={24}
                                                color1="green"
                                                color2="red"
                                            />
                                            <p className='review-content'>
                                                It was a great experience.He was so creative and make my sculpture a masterpiece.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-lg-6 reviewsCard'>
                                    <div className='row my-3'>
                                        <div className='col-2 d-flex justify-content-center align-items-top' style={{ padding: "10px" }}>
                                            <img className="reviewee-img" src={michel} alt="img" />
                                        </div>
                                        <div className='col-10'>
                                            <h4 className="reviewer-name">MICHEL G</h4>
                                            <h6 className='py-2 review-date'>8 Nov, 2021</h6>
                                            <ReactStars
                                                count={5}
                                                onChange={ratingChanged}
                                                size={24}
                                                color1="green"
                                                color2="red"
                                            />
                                            <p className='review-content'>
                                                It was a great experience.He was so creative and make my sculpture a masterpiece.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={`${toggleState === 2 ? 'tab-pane fade show active ' : 'tab-pane fade'}`} id="pills-gallery" role="tabpanel" aria-labelledby="pills-profile-tab">
                        {/* gallery-section */}
                        <div className="artistGallerySec my-5">
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
                </div>


            </div>
        </div>

    )
}

export default SpecificArtist
