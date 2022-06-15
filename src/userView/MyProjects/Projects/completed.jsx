import React, { useState } from 'react'
import './projects.css'
import michael from '../../../Assets/michel.png'
import statusCancelled from '../../../Assets/status-cancelled.png'
import statusComplete from '../../../Assets/status-completed.svg'
import call from '../../../Assets/Call.svg'
import message from '../../../Assets/message.svg'
import date from '../../../Assets/date.svg'
import time from '../../../Assets/time.svg'
import plus from '../../../Assets/plus.svg'
import projectlocation from '../../../Assets/projectlocation.svg'
import ConfirmationModal from '../subComponents/confirmationModal'
import { Link } from 'react-router-dom'

const Completed = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="my-projects">
      <div className='content-section'>
        <div className="row card-row">
          <div className="col-12 project-card">
            <div className="confirmed-by">
              CONFIRMED BY
            </div>
            <img className='status-img' src={statusComplete} alt="statusComplete" />
            <div className="inner-content">
              <div className="intro-sec">
                <img src={michael} alt="michael" />
                <div className="intro">
                  <div className="name">Michel Motoshaleh</div>
                  <div className="skill">
                    Painting Artist</div>
                </div>
              </div>
              <div className="otherDetails">
                <div className="icon">
                  <img src={date} alt="date" />
                </div>
                <div className="time-and-date">
                  Saturday - November 7, 2020
                </div>
              </div>
              <div className="otherDetails">
                <div className="icon">
                  <img src={time} alt="time" />
                </div>
                <div className="time-and-date">
                  8:00am
                </div>
              </div>
              <div className="otherDetails">
                <div className="icon">
                  <img src={projectlocation} alt="projectlocation" />
                </div>
                <div className="location">
                  Toronto
                  <span>
                    Toronto, Ontario M4v 2H6
                  </span>
                </div>
              </div>
              <div className="otherDetails">
                <div className="icon">
                  <img src={plus} alt="plus" />
                </div>
                <div className="project-type">
                  Painting Wall Project
                </div>
              </div>
              <div className="otherDetails">
                <div className="icon"></div>
                <div className="details">
                  <div className="small-headings">Details</div>
                  <div className="detail-data">
                    I want to make drawing in my wall for
                    <br />
                    marvel characters
                  </div>
                </div>
              </div>
              <div className="otherDetails">
                <div className="icon"></div>
                <div className="details">
                  <div className="small-headings">Scope</div>
                  <div className="detail-data">
                    Medium-Size Project
                  </div>
                </div>
              </div>
              <div className="rate-bar-section">
                <div className="call">
                  <img src={call} alt="call" />
                </div>
                <div className="message">
                  <img src={message} alt="message" />
                </div>
                <div className="rate-bar">
                  <span>Your project rate</span>
                  <div className="rate">$69/hr</div>
                </div>
              </div>
              <div className="buttons-bar row">
                <button className='projects-button btn-white col-3' onClick={handleShow}> PROFIT</button>
                <button className='projects-button btn-brown col-3'> RESHEDULE</button>
                <Link to={"/userview/confirm-task"} className="col-3">
                  <button className='projects-button btn-yellow' > CONFIRM TASK</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 project-card">
            <div className="confirmed-by">
              CONFIRMED BY
            </div>
            <img className='status-img' src={statusComplete} alt="statusComplete" />
            <div className="inner-content">
              <div className="intro-sec">
                <img src={michael} alt="michael" />
                <div className="intro">
                  <div className="name">Michel Motoshaleh</div>
                  <div className="skill">
                    Painting Artist</div>
                </div>
              </div>
              <div className="otherDetails">
                <div className="icon">
                  <img src={date} alt="date" />
                </div>
                <div className="time-and-date">
                  Saturday - November 7, 2020
                </div>
              </div>
              <div className="otherDetails">
                <div className="icon">
                  <img src={time} alt="time" />
                </div>
                <div className="time-and-date">
                  8:00am
                </div>
              </div>
              <div className="otherDetails">
                <div className="icon">
                  <img src={projectlocation} alt="projectlocation" />
                </div>
                <div className="location">
                  Toronto
                  <span>
                    Toronto, Ontario M4v 2H6
                  </span>
                </div>
              </div>
              <div className="otherDetails">
                <div className="icon">
                  <img src={plus} alt="plus" />
                </div>
                <div className="project-type">
                  Painting Wall Project
                </div>
              </div>
              <div className="otherDetails">
                <div className="icon"></div>
                <div className="details">
                  <div className="small-headings">Details</div>
                  <div className="detail-data">
                    I want to make drawing in my wall for
                    <br />
                    marvel characters
                  </div>
                </div>
              </div>
              <div className="otherDetails">
                <div className="icon"></div>
                <div className="details">
                  <div className="small-headings">Scope</div>
                  <div className="detail-data">
                    Medium-Size Project
                  </div>
                </div>
              </div>
              <div className="rate-bar-section">
                <div className="call">
                  <img src={call} alt="call" />
                </div>
                <div className="message">
                  <img src={message} alt="message" />
                </div>
                <div className="rate-bar">
                  <span>Your project rate</span>
                  <div className="rate">$69/hr</div>
                </div>
              </div>
              <div className="buttons-bar row">
                <button className='projects-button btn-white col-3' onClick={handleShow}> PROFIT</button>
                <button className='projects-button btn-brown col-3'> RESHEDULE</button>
                <Link to={"/userview/confirm-task"} className="col-3">
                  <button className='projects-button btn-yellow' > CONFIRM TASK</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 project-card">
            <div className="confirmed-by">
              CONFIRMED BY
            </div>
            <img className='status-img' src={statusCancelled} alt="statusComplete" />
            <div className="inner-content">
              <div className="intro-sec">
                <img src={michael} alt="michael" />
                <div className="intro">
                  <div className="name">Michel Motoshaleh</div>
                  <div className="skill">
                    Painting Artist</div>
                </div>
              </div>
              <div className="otherDetails">
                <div className="icon">
                  <img src={date} alt="date" />
                </div>
                <div className="time-and-date">
                  Saturday - November 7, 2020
                </div>
              </div>
              <div className="otherDetails">
                <div className="icon">
                  <img src={time} alt="time" />
                </div>
                <div className="time-and-date">
                  8:00am
                </div>
              </div>
              <div className="otherDetails">
                <div className="icon">
                  <img src={projectlocation} alt="projectlocation" />
                </div>
                <div className="location">
                  Toronto
                  <span>
                    Toronto, Ontario M4v 2H6
                  </span>
                </div>
              </div>
              <div className="otherDetails">
                <div className="icon">
                  <img src={plus} alt="plus" />
                </div>
                <div className="project-type">
                  Painting Wall Project
                </div>
              </div>
              <div className="otherDetails">
                <div className="icon"></div>
                <div className="details">
                  <div className="small-headings">Details</div>
                  <div className="detail-data">
                    I want to make drawing in my wall for
                    <br />
                    marvel characters
                  </div>
                </div>
              </div>
              <div className="otherDetails">
                <div className="icon"></div>
                <div className="details">
                  <div className="small-headings">Scope</div>
                  <div className="detail-data">
                    Medium-Size Project
                  </div>
                </div>
              </div>
              <div className="rate-bar-section">
                <div className="call">
                  <img src={call} alt="call" />
                </div>
                <div className="message">
                  <img src={message} alt="message" />
                </div>
                <div className="rate-bar">
                  <span>Your project rate</span>
                  <div className="rate">$69/hr</div>
                </div>
              </div>
              <div className="buttons-bar row">
                <button className='projects-button btn-white col-3' onClick={handleShow}> PROFIT</button>
                <button className='projects-button btn-brown col-3'> RESHEDULE</button>
                <Link to={"/userview/confirm-task"} className="col-3">
                  <button className='projects-button btn-yellow' > CONFIRM TASK</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <ConfirmationModal show={show} handleClose={handleClose} />
      </div>
    </div>
  )
}

export default Completed