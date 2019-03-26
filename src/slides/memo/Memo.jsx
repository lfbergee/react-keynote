import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { List, ListItem, LinkButton } from "../../baseComponents";
import { Slide, SlideDeck } from "../../components";
import Example from "./example/Example";
import { oldCode, memoCode } from "./example/code";

const Memo = () => (
  <SlideDeck>
    <Slide name="intro" heading="Memo" withImage>
      <List>
        <ListItem customDot>
          So React components might be updated a bit more than you think
        </ListItem>
        <ListItem customDot>Much is hidden from us in reconciliation</ListItem>
        <ListItem customDot="seeNoEvil">
          PureComponent can help, but how about functional components?
        </ListItem>
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
          Equivalent to PureComponent or doing something clever with
          componentShouldUpdate()
        </ListItem>
        <ListItem customDot="fire">
          Brings us one step closer to feature parity with class and functional
          syntax
        </ListItem>
        <ListItem customDot="skull">Be careful with mutated objects</ListItem>
      </List>
    </Slide>
    <Slide name="resources" heading="Resources">
      <List>
        <ListItem customDot="fire">
          <LinkButton href="https://reactjs.org/docs/react-api.html#reactmemo">
            Documentation
          </LinkButton>
          <LinkButton href="https://overreacted.io/react-as-a-ui-runtime/">
            Crazy in depth look at how React work
          </LinkButton>
        </ListItem>
      </List>
    </Slide>
  </SlideDeck>
);

export default Memo;
