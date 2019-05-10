import React from "react";
import styled, { keyframes } from "styled-components";
import { GridCol, GridRow } from "../../../baseComponents";
import logo from "./logo.png";

const flicker = keyframes`
  0% {
    filter: brightness(1);
  }
  
  1% {
    filter: brightness(0.9);
  }
  
  5% {
    filter: brightness(1);
  }
  
  7% {
    filter: brightness(0.7);
  }
  
  15% {
    filter: brightness(1);
  }
  
  16% {
    filter: brightness(0.5);
  }
  
  20% {
    filter: brightness(0.95);
  }
  
  22% {
    filter: brightness(0.9);
  }
  
  30% {
    filter: brightness(1);
  }
  
  35% {
    filter: brightness(1);
  }
  
  50% {
    filter: brightness(0.8);
  }
  
  60% {
    filter: brightness(1);
  }
  
  64% {
    filter: brightness(1);
  }
  
  70% {
    filter: brightness(0.6);
  }
  
  85% {
    filter: brightness(0.5);
  }
  
  100% {
    filter: brightness(1);
  }
`;

const FlickeringImage = styled.img`
  animation: ${flicker} 10s linear infinite;
`;

const PauseSlide = () => {
  return (
    <GridRow justify="center">
      <GridCol>
        <FlickeringImage src={logo} alt="logo" />
      </GridCol>
    </GridRow>
  );
};

export default PauseSlide;
