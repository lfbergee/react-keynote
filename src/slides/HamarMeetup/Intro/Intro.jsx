import React from "react";
import styled from "styled-components";
import { Slide, SlideDeck } from "../../../components";
import PlayCard from "../playCard/PlayCard";
import { List, ListItem, GridRow, GridCol } from "../../../baseComponents";
import { Jsx, Jsx1, Jsx2 } from "./jsx";
import logo from "./logo.png";

const Hard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
  font-size: 120px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;

const Intro = () => (
  <SlideDeck>
    {/* <Slide name="intro">
      <GridRow justify="center">
        <GridCol>
          <img src={logo} alt="logo" />
        </GridCol>
      </GridRow>
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
          </List>
        </GridCol>
      </GridRow>
    </Slide>
    <Slide name="whoami" withImage>
      <PlayCard />
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
    <Slide name="jsx" withImage heading="JSX">
      <Jsx />
    </Slide>
    <Slide name="jsx1" withImage heading="JSX">
      <Jsx1 />
    </Slide>*/}
    <Slide name="jsx2" withImage heading="JSX">
      <Jsx2 />
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
