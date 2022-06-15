import React from 'react'
// import StepsBar from '../../Components/stepsBar/stepsBar'
import './ProjectDescription.css';
import { MdAttachFile } from 'react-icons/md';
import Button from '../../../../Components/button/button';
const ProjectDescription = () => {
  return (

    <div className="data-sec container">
      <div className="row mt-5">
        <p className='description'>It is a long established fact that a reader will be distracted
          by the readable content of a page when
          looking at its layout.
          The point of using Lorem Ipsum is that</p>
        <h2 className="painting" style={{ marginTop: "5%" }}>PAINTING</h2>
        <p className='description'>It is a long established fact that a reader will be distracted
          by the readable content of a page when
          looking at its layout.</p>
      </div>
      <div className="container" style={{ padding: "2rem 1rem" }}>
        <div className="row address-input-row">
          <p className='project-location'>Your Project Location</p>
          <div className="address-input-group d-flex justify-content-between">
            <input type="text" className="address-input" placeholder="Enter Street Address"
              aria-label="Username" aria-describedby="basic-addon1" />
            <button className="input-group-text" id="basic-addon1">Unit or Apt #</button>
          </div>
        </div>

        <div className="continue" >
          <Button color='#fff'
            textColor='#523105'
            text='CONTINUE'
            padding='6px'
            height='67px'
            width='427px'
            fontSize="22px"
            fontWeight='900'
            border='1.5px solid #B4B4B5' />
        </div>
        {/* Project location Section */}

        <div className="projectLocation-row">
          <div className="row">
            <div className="col-12">
              <p className='project-location'>TASK OPTIONS</p>
            </div>
            <div className="col-12">
              <h4 className="headings">TASK SIZE</h4>
            </div>
            <div className="col-12">
              <p className='estimated-size'>What is the estimated size of your task</p>
            </div>
            <div className="col-12 p-0 col-md-3">
              <label className="radioLabel-container">SMALL -EST.1HR
                <input type="radio" name="radio" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="col-12 p-0 col-md-3">
              <label className="radioLabel-container">LARGE -EST.5+HR
                <input type="radio" name="radio" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="col-12 p-0 col-md-3">
              <label className="radioLabel-container">MEDIUM -EST.2-3HR
                <input type="radio" name="radio" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="col-12 p-0 col-md-3">
              <label className="radioLabel-container">EXTRA LARGE -EST.24+HR
                <input type="radio" name="radio" />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
          {/* vehicle-requrements */}
          <div className="row">
            <div className="col-12">
              <h4 className="headings">VAHICLE REQUIREMENTS</h4>
            </div>
            <div>
              <div className="col-12">
                <label className="radioLabel-container">NOT NEEDED FOR PROJECT
                  <input type="radio" name="radio" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="col-12">
                <label className="radioLabel-container">TASK REQUIRE A CAR
                  <input type="radio" name="radio" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="col-12">
                <label className="radioLabel-container">TASK REQUIRES A TRUCK
                  <input type="radio" name="radio" />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="continue" >
          <Button color='#fff'
            textColor='#523105'
            text='CONTINUE'
            padding='6px'
            height='67px'
            width='427px'
            fontSize="22px"
            fontWeight='900'
            border='1.5px solid #B4B4B5' />
        </div>
        {/* Task Details Section */}
        <div className="taskDetails-section">
          <div className="row">
            <div className="col-12">
              <h4 className="headings">TELL US THE DETAILS OF YOUR TASK</h4>
            </div>
            <div className="col-12">
              <p className="pd-paragraphs">It is a long established fact that a reader will
                be distracted by the readable content of a page when
                looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less normal
              </p>
            </div>
          </div>
          <div className="row tell-task-details">
            <div className="col-md-6 text-center">
              <h6>
                <MdAttachFile />
                See more
              </h6>
            </div>
            <div className="col-md-6 text-center">
              <button className="fileSize">Max size is 20MB</button>
            </div>
            <div className="col-12 my-3">
              <div className="summary-section">
                <p>
                  It is a long established fact that a reader will be distracted by the readable
                  content of a page when
                  looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less normal
                </p>
              </div>
            </div>
            <div className="col-12">
              <p className="pd-paragraphs">
                It is a long established fact that a reader will be distracted by the readable
                content of a page when
                looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less normal
              </p>
            </div>

          </div>
        </div>
        <div className="continue" >
          <Button color='#fff'
            textColor='#523105'
            text='SEE ARTIST & PRICES'
            padding='6px'
            height='67px'
            width='427px'
            fontSize="22px"
            fontWeight='900'
            border='1.5px solid #B4B4B5' />
        </div>
      </div>
    </div>
  )
}

export default ProjectDescription