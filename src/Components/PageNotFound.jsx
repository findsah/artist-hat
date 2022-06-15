import React from "react";
import pagenotfound from "../Assets/pagenotfound.png";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  padding: 200px 0;
`;

const NotFoundImg = styled.img`
  width: 390px;
  height: 404px;
`;

const NotFoundP = styled.p`
  color: #523106;
  font-size: 20px;
`;

const PageNotFound = () => {
  return (
    <Wrapper className="container-fluid">
      <NotFoundImg src={pagenotfound} alt="pagenotfound" />
      <NotFoundP>
        We counldn't find any Artist that match - maybe try a different filer or
        search word?
      </NotFoundP>
    </Wrapper>
  );
};

export default PageNotFound;
