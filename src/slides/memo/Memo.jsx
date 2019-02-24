import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ScrollButton, ActionButtonGroup } from "../../baseComponents";
import Slide from "../../components/slide/Slide";

const memoCode = `import React from 'react';

const Component = React.memo(() => <h1>Some Component</h1>);`;

const oldCode = `import React from 'react';

const Component = () => <h1>Some Component</h1>;`;

const Memo = () => {
  return (
    <>
      <Slide heading="Memo" withImage={true}>
        <ul>
          <li>When is React components updated? </li>
          <li>Why is a React component updated?</li>
          <li>What is the problem with functional components?</li>
        </ul>
      </Slide>
      <Slide name="code" heading="Memo" withImage={true}>
        <SyntaxHighlighter language="jsx" style={okaidia}>
          {memoCode}
        </SyntaxHighlighter>

        <SyntaxHighlighter language="jsx" style={okaidia}>
          {oldCode}
        </SyntaxHighlighter>
      </Slide>
      <Slide name="summary" heading="Memo" withImage={true}>
        <p>Watch out for object as props</p>
      </Slide>
      <ActionButtonGroup>
        <ScrollButton to={"code"} smooth={true} duration={500}>
          Code
        </ScrollButton>
        <ScrollButton to={"summary"} smooth={true} duration={500}>
          Summary
        </ScrollButton>
      </ActionButtonGroup>
    </>
  );
};

export default Memo;
