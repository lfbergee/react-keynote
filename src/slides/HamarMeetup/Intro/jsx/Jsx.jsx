import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { GridRow, GridCol, List, ListItem } from "../../../../baseComponents";

const Jsx = () => (
  <>
    <GridRow justify="center">
      <GridCol>
        <List>
          <ListItem customDot="fire">
            JSX er syntax utvidelse av JavaScript
          </ListItem>
          <ListItem customDot="fire">
            Det er en måte å beskrive hvordan UI skal være, men det er ikke et
            templating språk
          </ListItem>
          <ListItem customDot="fire">
            Man må ikke skrive React med JSX, men...
          </ListItem>
          <ListItem>
            <SyntaxHighlighter language="jsx" style={okaidia}>
              {`const element = <h1>Hello, Digirama!</h1>;`}
            </SyntaxHighlighter>
          </ListItem>
          <ListItem>
            <SyntaxHighlighter language="jsx" style={okaidia}>
              {`const name = 'Digirama';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);`}
            </SyntaxHighlighter>
          </ListItem>
        </List>
      </GridCol>
    </GridRow>
  </>
);

export default Jsx;
