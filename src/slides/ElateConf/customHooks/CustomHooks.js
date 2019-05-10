import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Slide, SlideDeck } from "../../../components";
import { List, ListItem } from "../../../baseComponents";
import { form, brand, customhook } from "./example/code";

const CustomHooks = () => {
  return (
    <SlideDeck>
      <Slide name="custom" heading="🔥🔥 Custom hooks 🔥🔥" withImage>
        <List>
          <ListItem customDot="fire">
            Where it really becomes cool is custom hooks
          </ListItem>
          <ListItem customDot="heart">https://usehooks.com</ListItem>
        </List>
        <SyntaxHighlighter language="jsx" style={okaidia}>
          {customhook}
        </SyntaxHighlighter>
      </Slide>
      <Slide name="intro" heading="Custom hooks is awesome" withImage>
        <List>
          <ListItem customDot="heart">
            Neatly package together functionality
          </ListItem>
          <ListItem customDot="heart">So much stuff can be simplified</ListItem>
        </List>
      </Slide>
      <Slide name="usebrand" heading="Brand context" withImage>
        <SyntaxHighlighter language="jsx" style={okaidia}>
          {brand}
        </SyntaxHighlighter>
      </Slide>
      <Slide name="formvalidation" heading="Form validation hook" withImage>
        <SyntaxHighlighter language="jsx" style={okaidia}>
          {form}
        </SyntaxHighlighter>
      </Slide>
    </SlideDeck>
  );
};

export default CustomHooks;
