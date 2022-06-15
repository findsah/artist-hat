import React, { useState, useEffect } from 'react'
import Button from '../../../../Components/button/button'
import './Skill.css'
import Progress from './progress'
import { useDispatch, useSelector } from 'react-redux';
import { updateArtistData } from '../../../../Redux/artistProfile/ArtistData'
const Skill = ({ setProfileTab }) => {
    const dispatch = useDispatch()
    const userData = useSelector((state) => state.ArtistData.value);
    const [artistData, setArtistData] = useState()
    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 1919px)").matches
    )
    
    useEffect(() => {
        setArtistData(userData ? userData : [])
    }, [userData])

    useEffect(() => {
        window
            .matchMedia("(max-width: 1919px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setArtistData({ ...artistData, [name]: value })
        dispatch(updateArtistData({ [name]: value }))
    }
    const handleSave = () => {
        // dispatch(updateArtistData({ ['quickPitch']: artistData.quickPitch }))
        setProfileTab(2)
    }
    return (
        <>

            <div className='container mainheader rates_and_skills'>
                <div className='row'>
                    <div className='col-12 col-lg-9'>
                        <h4 className='pickheading py-1'>PICK YOUR SKILLS & ADD YOUR ARTIST RATES</h4>
                        <p className='pickArtist-paragraph'>Add your rates to categories you'd like to work in.Suggested are based on what clients choose<br></br>
                            most often among Artist with similar category experience in your area.By setting your rates at the<br></br>
                            suggested level, you'll set yourself up to earn more.
                        </p>
                    </div>
                </div>
                <section >
                    <div className='row borderline'>
                        <div className='col-12 col-lg-8 d-flex align-items-end'>
                            <div>
                                <h4 className='text painttext'>SCULPTURE</h4>
                                <p className='painting-paragraphs'>Painting that help artist express their creativity .
                                    in your home, office, public, Entrance wall.
                                </p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-4'>
                            <button type='button' className='btn btn-warning dollarbtn'>$40<span className='hrtext'>HR</span></button>
                        </div>
                    </div>
                </section>
                <section><div className='row sectionthree'>
                    <div className='col-12 col-lg-8'>
                        <h5 className='scope-heading pb-3'>SCOPE OF TASK</h5>
                        <p className='painting-paragraphs'> Please check with the client if they have any specific requirements.Always communicate regularly
                            and clearly <br></br>if you have any questions.</p>
                        <div className='d-flex'>
                            <input className='form-check-input checkboxbtn' type="checkbox" />
                            <p className='painting-paragraphs'>
                                I have the skills and license as needed for this
                            </p>
                        </div>
                    </div>
                </div></section>
                <section className='taskers'>
                    <div className='row'>
                        <div className='col-12 col-lg-10'>
                            <div className="d-flex justify-content-between">
                                <div className='col-8'><h6 className='subheadings'>YOUR TASKERS RATEARTIST</h6></div>
                                <div className='col-4'><p className='painting-paragraphs'>
                                    Complete in category: 0</p>
                                </div>
                            </div>

                            <div className='row justify-content-between mt-2'>
                                <div className='col-4'>
                                    <span className='signbtn'>$</span>
                                    <button type='button' className='btn btn-warning scondbtn'>40</button>
                                    <span className='hr2text'>HR</span>
                                </div>
                                <div className='col-4'>
                                    <p className='painting-paragraphs'>Most Taskers with your
                                        experience hired at: <br /> $37/hr
                                    </p>
                                </div>
                                <div className="col-4">
                                    <p className='painting-paragraphs'>Client Rate: <br /> $47.05/hr
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <div className='col-6 d-flex flex-column justify-content-between'>
                            <div>
                                <p className='painting-paragraphs'>
                                    Complete in category:</p>
                                <br /><p className='zero'>0</p>
                            </div>
                            <div>
                                <p className='painting-paragraphs'>Client Rate:<br></br> $47.05/hr</p>
                            </div>
                        </div> */}
                    </div>

                    <div className='row'>
                        <div className='col-12 col-sm-3'>
                        </div>
                        <div className='col-12 col-sm-5 completecatagry'>
                            <div className='row'>
                                <div className='col-6 clienttxt'>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='row justify-content-center'>
                        <div className='col-10 py-5'>
                            <Progress />
                        </div>
                    </div>
                </section>

                <section>
                    <div className='row justify-content-center'>
                        <div className='col-11'>
                            <h4 className='quick-heading'>YOUR QUICK PITCH</h4>
                            <p className='painting-paragraphs py-2'>Share why you're a great pick for the job.
                                If you are multilingual, consider including the languages <br></br>that you speak.
                            </p>
                        </div>
                        <div className='col-12 pitch'>
                            <textarea className='pitchparagraph' value={artistData?.quickPitch !== null && artistData?.quickPitch } name='quickPitch' onChange={e => handleChange(e, "skill")} placeholder="Pitch clients on why you are the best person for this type of project"></textarea>
                        </div>
                    </div>
                </section>
                <section className='lastdiv'>
                    <div className={`row ${matches ? 'justify-content-center' : 'justify-content-around'}`}>
                        <div className='col-12 col-lg-10 col-xl-5'>
                            <div className="d-flex justify-content-between">
                                <Button color='#fdd043' text='SAVE' padding='1px 0' width={`${matches?'120px':'180px'}`} height='45px' fontSize={`${matches?'10px':'15px'}`} border='1.5px solid #B4B4B5' event={handleSave} />
                                <Button color='#fff' text='CANCEL' padding='1px 0' width={`${matches?'120px':'180px'}`}  height='45px' fontSize={`${matches?'10px':'15px'}`} border='1.5px solid #B4B4B5' />
                            </div>
                        </div>
                        <div className='col-6 col-xl-5 text-center mt-3 mt-xl-0'>
                            <Button color='#fff' text='REMOVE ALL' padding='1px 0'  width={`${matches?'120px':'180px'}`} height='45px' fontSize={`${matches?'10px':'15px'}`} border='1.5px solid #B4B4B5' />
                        </div>

                    </div>
                </section>

            </div>
        </>
    )
}

export default Skill
