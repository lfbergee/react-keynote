import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { List, ListItem } from "../../baseComponents";
import { Slide, SlideDeck } from "../../components";
import { code } from "./example/code";
import Example from "./example/Example";

const Lazy = () => (
  <SlideDeck>
    <Slide name="intro" heading="Lazy & Suspense" withImage>
      <List>
        <ListItem>
          ErrorBoundary gave us a way of catching an error below in the call
          tree
        </ListItem>
        <ListItem>
          Suspense kinda does the same, however instead of catching an error, it
          catches a promise thrown by a component wrapped in lazy()
        </ListItem>
      </List>
    </Slide>
    <Slide name="example" heading="Example" withImage>
      <SyntaxHighlighter language="jsx" style={okaidia}>
        {code}
      </SyntaxHighlighter>
      <Example />
    </Slide>
    <Slide name="summary" heading="Lazy" withImage>
      <List>
        <ListItem customDot="fire">Super easy code splitting</ListItem>
        <ListItem customDot="fire">
          Step towards the ultimate goal of async rendering
        </ListItem>
        <ListItem customDot="skull">
          Doesn't work with server side rendering
        </ListItem>
      </List>
    </Slide>
  </SlideDeck>
);

export default Lazy;
