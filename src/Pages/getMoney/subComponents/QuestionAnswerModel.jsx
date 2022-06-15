import React from "react";
import { Modal } from "react-bootstrap";

const QuestionAnswerModel = (props) => {
  console.log(props);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <h4 className="modalHeading">{props.modalobject.heading}</h4>
        {props.modalobject.desc.map((listValue) => (
          <p className="modalDescription">- {listValue}</p>
        ))}
      </Modal.Body>
    </Modal>
  );
};

export default QuestionAnswerModel;
