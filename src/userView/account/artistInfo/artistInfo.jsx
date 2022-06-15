import React, { useState, useEffect } from 'react'
import Button from '../../../Components/button/button'
import './artistInfo.css'
import UpdateInfo from './updateInfo/updateInfo'

const ArtistInfo = () => {
  const [show, setShow] = useState(false)
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 991px)").matches
  )
  useEffect(() => {
    window
      .matchMedia("(max-width: 991px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  const event = () => {
    setShow(!show);

  }
  return (
    <>
      {!matches &&
        <div>
          <div className='row justify-content-between pb-3'>
            <div className='col-3'><h2 className='h1_heading'>ACCOUNT</h2></div>
            <div className='col-3'>
              <Button color='#fff' text='EDIT' fontSize="12px" border='1.5px solid #B4B4B5' className='buttonDimensions' switchData={event} />
            </div>
          </div>
          <div className='artistInfo-sec'>
            {show === true ? (<UpdateInfo />) :
              (<div className="row">
                <div className="col-3 px-3">
                  <div className='pb-4'><h2 className='account_content_headings'>BIRTHDATE</h2></div>
                  <div className='pb-5 pt-2'><h2 className='account_content_headings'>ADDRESS</h2></div>
                  <div><h2 className='account_content_headings'>PERSONAL URL</h2></div>
                </div>
                <div className="col-9 artistInfo-values-div px-3">
                  <div className='pb-4'><p className='artistBasic-info-values'>1991-10-10</p></div>
                  <div className='pb-5 pt-2'><p className='artistBasic-info-values'>1100 Trouker Street,Toronto, ON 13 M5A, 3R7 ,</p></div>
                  <div><p className='artistBasic-info-values'>https://tr.co/micool-g--2</p></div>
                </div>
              </div>)}

          </div>
        </div>
      }

      {/* Mobile custom section  */}
      {matches &&
        <div className='artistInfo-sec p-5'>
          {show === true ? (<UpdateInfo />) :
            (<div className="row artist_info">
              <div className='col-12'><h2 className='account_content_headings'>BIRTHDATE</h2>
                <p className='account_small_paragraphs'>1991-10-10</p>
              </div>
              <div className='col-12'><h2 className='account_content_headings'>ADDRESS</h2>
                <p className='account_small_paragraphs'>1100 Trouker Street,Toronto, ON 13 M5A, 3R7 ,</p>
              </div>
              <div className='col-12'><h2 className='account_content_headings'>PERSONAL URL</h2>
                <p className='account_small_paragraphs'>https://tr.co/micool-g--2</p>
              </div>



            </div>)}

        </div>
      }

    </>
  )
}

export default ArtistInfo
