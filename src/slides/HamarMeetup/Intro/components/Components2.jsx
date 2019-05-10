import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { GridRow, GridCol } from "../../../../baseComponents";

const Components2 = () => (
  <GridRow>
    <GridCol>
      <SyntaxHighlighter language="jsx" style={okaidia}>
        {`
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));`}
      </SyntaxHighlighter>
    </GridCol>
  </GridRow>
);

export default Components2;
