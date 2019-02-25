import React from "react";
import styled from "styled-components";
import { AnimateOnChange } from "@nearform/react-animation";

const MemoButton = styled.button`
  margin: 8px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
`;

let timesRendered = 0;

const New = React.memo(() => {
  timesRendered++;

  const [clickCount, increment] = React.useState(0);

  return (
    <MemoButton onClick={() => increment(clickCount + 1)}>
      <h2>With memo()</h2>
      <AnimateOnChange animationIn="bounceIn">
        <h1>{timesRendered}</h1>
      </AnimateOnChange>
    </MemoButton>
  );
});

export default New;
