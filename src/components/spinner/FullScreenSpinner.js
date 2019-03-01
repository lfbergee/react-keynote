import React from "react";
import styled from "styled-components";
import Spinner from "./Spinner";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #090909;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FullScreenSpinner = () => {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
};

export default FullScreenSpinner;
