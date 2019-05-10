import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { GridRow, GridCol } from "../../../../baseComponents";

const Jsx1 = () => (
  <>
    <GridRow justify="space-around">
      <GridCol>In JSX</GridCol>
      <GridCol>compiles into</GridCol>
      <GridCol>JS</GridCol>
    </GridRow>
    <GridRow justify="space-around">
      <GridCol>
        <SyntaxHighlighter language="jsx" style={okaidia}>
          {`
<div className='cn'>
  Content!
</div>`}
        </SyntaxHighlighter>
      </GridCol>
      <GridCol />
      <GridCol>
        <SyntaxHighlighter language="js" style={okaidia}>
          {`
React.createElement(
  'div',
  { className: 'cn' },
  'Content!'
);`}
        </SyntaxHighlighter>
      </GridCol>
    </GridRow>
  </>
);

export default Jsx1;
