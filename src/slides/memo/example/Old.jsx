import React from "react";
import { AnimateOnChange } from "@nearform/react-animation";
import { PrimaryButton } from "../../../baseComponents";

let timesRendered = 0;

const Old = () => {
  timesRendered++;

  const [clickCount, increment] = React.useState(0);

  return (
    <PrimaryButton onClick={() => increment(clickCount + 1)}>
      <h2>No memo()</h2>
      <AnimateOnChange animationIn="bounceIn">
        <h1>{timesRendered}</h1>
      </AnimateOnChange>
    </PrimaryButton>
  );
};

export default Old;
