import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Slide, SlideDeck } from "../../components";
import { List, ListItem, LinkButton } from "../../baseComponents";
import { mutating } from "./example/mutating";
import { immutable, reduxNoImmer, thisProject } from "./example/immutable";

const Immer = () => {
  return (
    <SlideDeck>
      <Slide name="intro" heading="Immutable all the things" withImage>
        <List>
          <ListItem>React prefers immutability</ListItem>
          <ListItem>Javascript does not</ListItem>
          <ListItem>
            Immutability can be cumbersome (read immutable.js)
          </ListItem>
        </List>
      </Slide>
      <Slide name="example" heading="Example" withImage>
        <SyntaxHighlighter language="jsx" style={okaidia}>
          {mutating}
        </SyntaxHighlighter>
      </Slide>
      <Slide name="immer" heading="Immer.js" withImage>
        <List>
          <ListItem customDot="fire">
            Lets you just use mutating functions
          </ListItem>
          <ListItem customDot="fire">
            And immer solves the immutability
          </ListItem>
          <ListItem customDot="fire">
            Super nice for mutating deeply nested object
          </ListItem>
          <SyntaxHighlighter language="jsx" style={okaidia}>
            {immutable}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="jsx" style={okaidia}>
            {reduxNoImmer}
          </SyntaxHighlighter>
        </List>
      </Slide>
      <Slide name="slidedeck" heading="In this project">
        <SyntaxHighlighter language="jsx" style={okaidia}>
          {thisProject}
        </SyntaxHighlighter>
      </Slide>
      <Slide name="resources" heading="Resources">
        <List>
          <ListItem customDot="fire">
            <LinkButton href="https://github.com/mweststrate/immer">
              Github
            </LinkButton>
          </ListItem>
        </List>
      </Slide>
    </SlideDeck>
  );
};

export default Immer;
