import React from 'react'
import './Services.css';
import gift from '../../Assets/$25-services.png'

const Services = () => {
  return (
    <div>
      <div className="row _25_services">
        <div className="col-12 col-xl-7 refer">
          <div className="description">
            Refer a friend to ArtistHat.
            They get $25 off their first Project.
            You get $25 off when they complete it.
          </div>
          <div className="input-section">
            <input type="email" className='email-address' placeholder='Enter recipients email address' />
            <button className='invite-button'>
              Send Invite
            </button>
          </div>
        </div>
        <div className="col-12 col-xl-4 image-section">
          <img className='img-fluid' src={gift} alt="$25-services" />
        </div>
      </div>
    </div>
  )
}

export default Services