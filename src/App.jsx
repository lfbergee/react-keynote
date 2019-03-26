import React from "react";
import styled from "styled-components";
import Slide from "./components/slide/Slide";
import { RouterButton, GridRow, GridCol } from "./baseComponents";

const Paragraph = styled.p`
  margin: 18px;
  padding: 18px;
`;

const App = () => {
  return (
    <Slide heading="From React 16 and beyond" withImage>
      <GridRow justify="center">
        <GridCol>
          <Paragraph>
            So a lot has changed. And there is a lot of cool stuff, this talk
            aims to cover some of it
          </Paragraph>
        </GridCol>
      </GridRow>
      <GridRow justify="center">
        <GridCol>
          <RouterButton to="intro">Intro</RouterButton>
          <RouterButton to="memo">memo()</RouterButton>
          <RouterButton to="lazy">lazy()</RouterButton>
          <RouterButton to="immer">immer.js</RouterButton>
          <RouterButton to="hooks">Hooks</RouterButton>
          <RouterButton to="custom-hooks">Custom hooks</RouterButton>
        </GridCol>
      </GridRow>
    </Slide>
  );
};

export default App;
