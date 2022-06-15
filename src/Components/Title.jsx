import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  margin: 4rem 0;
`;
const HeadTitle = styled.h1`
  font-size: 40px;
  font-weight: 600 !important;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.78;
  letter-spacing: normal;
  text-align: center;
  color: #523106;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;
const SubTitle = styled.div`
  color: #9599b2;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: center;
`;

const Title = ({ title, subTitle }) => {
  return (
    <Wrapper>
      <HeadTitle>{title}</HeadTitle>
      <SubTitle>{subTitle}</SubTitle>
    </Wrapper>
  );
};

export default Title;
