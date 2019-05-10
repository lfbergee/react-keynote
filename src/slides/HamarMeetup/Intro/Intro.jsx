import React from "react";
import { Slide, SlideDeck } from "../../../components";
import PlayCard from "../playCard/PlayCard";
import { List, ListItem, GridRow, GridCol } from "../../../baseComponents";
import { Jsx, Jsx1, Jsx2 } from "./jsx";
import {
  Components,
  Components1,
  Components2,
  Components3,
} from "./components";
import PauseSlide from "./PauseSlide";
import { Hard } from "./internal";

const Intro = () => (
  <SlideDeck>
    <Slide name="intro">
      <PauseSlide />
    </Slide>
    <Slide name="agenda" withImage heading="Kveldens plan">
      <GridRow justify="center">
        <GridCol>
          <List>
            <ListItem customDot="fire">
              Hva er React, og hvorfor skal vi bry oss?
            </ListItem>
            <ListItem customDot="fire">Hvordan komme igang?</ListItem>
            <ListItem customDot="fire">React 16.x</ListItem>
            <ListItem customDot="fire">
              Sjekke om jeg klarer å live kode
            </ListItem>
          </List>
        </GridCol>
      </GridRow>
    </Slide>
    <Slide name="whoami" backgroundColor="#323330">
      <PlayCard />
    </Slide>
    <Slide name="agenda2" withImage>
      <GridRow justify="center">
        <GridCol>
          <Hard>
            <List>
              <ListItem customDot="heart">Spør</ListItem>
              <ListItem customDot="heart">Grav</ListItem>
              <ListItem customDot="heart">Osv</ListItem>
            </List>
          </Hard>
        </GridCol>
      </GridRow>
    </Slide>
    <Slide name="whyis" color="#323330" backgroundColor="#f0db4f">
      <Hard>Hvorfor bruke et rammeverk som React?</Hard>
    </Slide>
    <Slide name="whatis" color="#323330" backgroundColor="#f0db4f">
      <Hard>
        Holde
        <br /> UI og state
        <br />
        i sync er <br />
        vanskelig
      </Hard>
    </Slide>
    <Slide name="jsx" withImage>
      <Jsx />
    </Slide>
    <Slide name="jsx1" withImage heading="JSX">
      <Jsx1 />
    </Slide>
    <Slide name="jsx2" withImage heading="JSX">
      <Jsx2 />
    </Slide>
    <Slide name="components" color="#323330" backgroundColor="#f0db4f">
      <Components />
    </Slide>
    <Slide
      name="components1"
      withImage
      heading="Komponenter kan definers på to måter"
    >
      <Components1 />
    </Slide>
    <Slide name="components2" withImage heading="Komponenter kan komposeres">
      <Components2 />
    </Slide>
    <Slide name="components3" color="#323330" backgroundColor="#f0db4f">
      <Components3 />
    </Slide>
    <Slide name="pause2">
      <PauseSlide />
    </Slide>
    <Slide name="references">
      <List>
        <ListItem>https://reactjs.org/docs/introducing-jsx.html</ListItem>
        <ListItem>
          https://evilmartians.com/chronicles/optimizing-react-virtual-dom-explained
        </ListItem>
      </List>
    </Slide>
  </SlideDeck>
);

export default Intro;
