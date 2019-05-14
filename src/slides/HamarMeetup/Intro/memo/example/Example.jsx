import React from "react";
import styled from "styled-components";
import { AnimateOnChange } from "@nearform/react-animation";
import { GridRow, GridCol, PrimaryButton } from "../../../../../baseComponents";
import Old from "./Old";
import New from "./New";

const Wrapper = styled.div`
  border: 2px solid yellowgreen;
  background: rgba(0, 0, 0, 0.7);
`;

const ParentWrapper = styled.div`
  margin: 12px;
  text-align: center;
`;

let timesRendered = 0;

const Example = React.memo(() => {
  timesRendered++;

  const [clickCount, increment] = React.useState(0);

  return (
    <Wrapper>
      <GridRow justify="center">
        <GridCol>
          <ParentWrapper>
            <h2>Parent</h2>
            <AnimateOnChange animationIn="bounceIn">
              <h1>{timesRendered}</h1>
            </AnimateOnChange>
            <hr />
            <PrimaryButton
              onClick={() => {
                increment(clickCount + 1);
              }}
            >
              <h2>Render</h2>
            </PrimaryButton>
          </ParentWrapper>
        </GridCol>
      </GridRow>
      <GridRow justify="center">
        <GridCol size={3} display="flex" justify="center">
          <Old />
        </GridCol>
        <GridCol size={1} />
        <GridCol size={3} display="flex" justify="center">
          <New />
        </GridCol>
      </GridRow>
    </Wrapper>
  );
});

export default Example;
