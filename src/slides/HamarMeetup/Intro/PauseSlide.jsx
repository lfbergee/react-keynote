import React from "react";
import styled, { keyframes } from "styled-components";
import { GridCol, GridRow } from "../../../baseComponents";
import logo from "./logo.png";

const flicker = keyframes`
  0% {
    filter: brightness(1);
  }
50% {
    filter: brightness(0.9);

}
  100% {
    filter: brightness(1);
  }
`;

const Image = styled.img`
  animation: ${flicker} 2s linear infinite;
`;

const PauseSlide = () => {
  return (
    <GridRow justify="center">
      <GridCol>
        <Image src={logo} alt="logo" />
      </GridCol>
    </GridRow>
  );
};

export default PauseSlide;
