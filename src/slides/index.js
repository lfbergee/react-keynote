import React from "react";
import { Slide } from "../components";
import { RouterButton, GridCol, GridRow } from "../baseComponents";

const SlideDeckSelector = () => {
  return (
    <Slide withImage heading="Slide decks">
      <GridRow justify="center">
        <GridCol>
          <RouterButton to="elate">Elate</RouterButton>
          <RouterButton to="hamar">Hamar meetup</RouterButton>
        </GridCol>
      </GridRow>
    </Slide>
  );
};

export default SlideDeckSelector;
