import React from "react";
import googleButton from "../Assets/googleButton.svg";
import appleButton from "../Assets/appleButton.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 120px;
  align-items: center;
  @media (max-width: 575px) {
    text-align: center;
  }
`;
const Title = styled.p`
  margin: 0;
  font-size: 12px;
  text-align: justify;
  @media (max-width: 575px) {
    font-size: 16px;
  }
`;

const DownloadStore = (props) => {
  return (
    <Wrapper
      className="row"
      style={{
        justifyContent: props.alignments,
      }}
    >
      <div className="col-12 col-sm-2" style={{ textAlign: "center" }}>
        <Title>
          Get sarted faster <br /> Download our app
        </Title>
      </div>
      <div className="col-12 col-sm-2">
        <img
          src={googleButton}
          style={{
            background: "white",
            borderRadius: "2rem",
            cursor: "pointer",
            maxWidth: "90%",
            height: "auto",
          }}
          alt="img"
        />
      </div>
      <div className="col-12 col-sm-2">
        <img
          src={appleButton}
          style={{
            background: "white",
            borderRadius: "2rem",
            cursor: "pointer",
            maxWidth: "90%",
            height: "auto",
          }}
          alt="img"
        />
      </div>
    </Wrapper>
  );
};

export default DownloadStore;
