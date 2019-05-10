import React from "react";
import Slide from "../../components/slide/Slide";
import { RouterButton, GridRow, GridCol } from "../../baseComponents";

const HamarMeetupSlideDeck = () => (
  <Slide>
    <GridRow justify="center">
      <GridCol>
        <RouterButton to="hamar/intro">Intro</RouterButton>
      </GridCol>
    </GridRow>
  </Slide>
);

export default HamarMeetupSlideDeck;
