import React from "react";
import { NavButtonGroup, ActionButton, IconButton } from "../../baseComponents";

const PresenterNavigation = ({ updatePresenterMode, presenterMode }) => (
  <NavButtonGroup>
    <ActionButton to="/">
      <span role="img" aria-label="home">
        🏠
      </span>
    </ActionButton>
    <IconButton onClick={() => updatePresenterMode(!presenterMode)}>
      <span role="img" aria-label="presenter">
        📺
      </span>
    </IconButton>
  </NavButtonGroup>
);

export default PresenterNavigation;
