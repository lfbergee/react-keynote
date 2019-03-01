import React from "react";
import styled from "styled-components";
import Slide from "./components/slide/Slide";
import { RouterButton } from "./baseComponents";

const Paragraph = styled.p`
  margin: 18px;
  padding: 18px;
`;

const App = () => {
  return (
    <Slide heading="From React 16 and beyond" withImage>
      <Paragraph>
        So a lot has changed. And there is a lot of cool stuff, this talk aims
        to cover some of it
      </Paragraph>
      <RouterButton to="memo">memo()</RouterButton>
      <RouterButton to="lazy">lazy()</RouterButton>
      <RouterButton to="hooks">Hooks</RouterButton>
      <RouterButton to="immer">immer.js</RouterButton>
    </Slide>
  );
};

export default App;
