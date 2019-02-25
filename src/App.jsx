import React from "react";
import Slide from "./components/slide/Slide";
import { RouterButton } from "./baseComponents";

const App = () => {
  return (
    <Slide heading="From React 16 and beyond" withImage>
      <p>sadf</p>
      <RouterButton to="memo">memo()</RouterButton>
    </Slide>
  );
};

export default App;
