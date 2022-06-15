import React from 'react'
import { Modal } from 'react-bootstrap'
import SimpleMap from '../../../Components/map/Map'

const ConfirmationModal = (props) => {
    return (

        <Modal show={props.show} onHide={props.handleClose}>
            <div className="projectsCofirmation">
                <Modal.Body>
                    <div className="row">
                        <div className="col-12">
                            <div className="mapArea">
                            <SimpleMap />
                            </div>
                            <div className="confirmations">
                                <label className="radioLabel-container">
                                    I did'nt agree with the price
                                    <input type="checkbox" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="confirmations">
                                <label className="radioLabel-container">
                                    I am not free during that to reschedule
                                    <input type="checkbox" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="confirmations">
                                <label className="radioLabel-container">
                                    Is too far for me
                                    <input type="checkbox" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="confirmations">
                                <label className="radioLabel-container">
                                    I don't have tools
                                    <input type="checkbox" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </div>
        </Modal>


    )
}

export default ConfirmationModal