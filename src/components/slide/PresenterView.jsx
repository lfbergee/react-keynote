import React, { useEffect } from "react";
import NewWindow from "react-new-window";
import styled from "styled-components";
import PresenterNavigation from "./PresenterNavigation";
import { GridRow, GridCol } from "../../baseComponents";

const Preview = styled.div`
  transform: scale(0.5);
`;

const PresenterView = ({
  presenterMode,
  updatePresenterMode,
  activeSlide,
  slides,
}) => {
  useEffect(() => () => updatePresenterMode(false));

  return (
    <NewWindow>
      <PresenterNavigation
        presenterMode={presenterMode}
        updatePresenterMode={updatePresenterMode}
      />
      <GridRow>
        <Preview>
          {slides.map((child, idx) => (activeSlide === idx ? child : null))}
        </Preview>
      </GridRow>
      <GridRow>
        <GridCol>
          <p>Timer: {Date.now()}</p>
        </GridCol>
      </GridRow>
    </NewWindow>
  );
};

export default PresenterView;
