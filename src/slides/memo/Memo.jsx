import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { List, ListItem } from "../../baseComponents";
import Slide from "../../components/slide/Slide";
import SlideDeck from "../../components/slide/SlideDeck";
import Example from "./example/Example";
import { oldCode, memoCode } from "./example/code";

const Memo = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SlideDeck namedNav>
      <Slide name="intro" heading="Memo" withImage>
        <List>
          <ListItem>When is React components updated?</ListItem>
          <ListItem>Why is a React component updated?</ListItem>
          <ListItem>What is the problem with functional components?</ListItem>
        </List>
      </Slide>
      <Slide name="code" heading="Memo" withImage>
        <SyntaxHighlighter language="jsx" style={okaidia}>
          {memoCode}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={okaidia}>
          {oldCode}
        </SyntaxHighlighter>
      </Slide>
      <Slide name="example" heading="Memo" withImage>
        <Example />
      </Slide>
      <Slide name="summary" heading="Memo" withImage>
        <List>
          <ListItem customDot="fire">
            Equivalent to PureComponent or componentShouldUpdate()
          </ListItem>
          <ListItem customDot="fire">
            Brings us one step closer to feature parity with class and
            functional syntax
          </ListItem>
          <ListItem customDot="skull">Be careful with mutated objects</ListItem>
        </List>
      </Slide>
    </SlideDeck>
  );
};

export default Memo;
