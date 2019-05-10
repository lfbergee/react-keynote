import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { GridRow, GridCol } from "../../../../baseComponents";

const Components1 = () => (
  <>
    <GridRow>
      <GridCol>
        <SyntaxHighlighter language="jsx" style={okaidia}>
          {`
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`}
        </SyntaxHighlighter>
      </GridCol>
    </GridRow>
    <GridRow>
      <GridCol>
        <SyntaxHighlighter language="jsx" style={okaidia}>
          {`
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`}
        </SyntaxHighlighter>
      </GridCol>
    </GridRow>
  </>
);

export default Components1;
