import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { List, ListItem } from "../../baseComponents";
import { Slide, SlideDeck } from "../../components";
import { code } from "./example/code";
import Example from "./example/Example";

const Hooks = () => (
  <SlideDeck>
    <Slide name="intro" heading="What is the wrong with React?" withImage>
      <List>
        <ListItem customDot="angry">Wrapper hell</ListItem>
        <ListItem customDot="down">Awkward to share state logic</ListItem>
        <ListItem customDot="down">
          Imperative state and lifecycle handling
        </ListItem>
        <ListItem customDot="puke">Classes in React... and this</ListItem>
      </List>
    </Slide>
    <Slide name="example" heading="Example" withImage>
      <SyntaxHighlighter language="jsx" style={okaidia}>
        {code}
      </SyntaxHighlighter>
      <Example />
    </Slide>
    <Slide name="summary" heading="Hooks" withImage>
      <List>
        <ListItem customDot="fire">Functional all the things</ListItem>
        <ListItem customDot="fire">Better separation of concern</ListItem>
        <ListItem customDot="fire">Easier to share state logic</ListItem>
      </List>
    </Slide>
    <Slide name="donts" heading="Hooks dont's" withImage>
      <List>
        <ListItem customDot="skull">Do not work with classes</ListItem>
        <ListItem customDot="skull">Must be on top level</ListItem>
        <ListItem customDot="skull">Can not be in a loop or branch</ListItem>
        <ListItem customDot="skull">
          Do not replace ComponentWillCatch... yet
        </ListItem>
        <ListItem customDot="skull">Rewrite all old components...</ListItem>
        <ListItem customDot="fire">
          Just remember to add hooks-eslint-plugin, and you be fine!
        </ListItem>
      </List>
    </Slide>
  </SlideDeck>
);

export default Hooks;
