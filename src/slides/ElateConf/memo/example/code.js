export const oldCode = `let timesRendered = 0;

const Old = () => {
  timesRendered++;
  const [clickCount, increment] = React.useState(0);

  return (
    <button
      onClick={() => increment(clickCount + 1)}
    >
        <h1>{timesRendered}</h1>
    </button>
  );
};`;

export const memoCode = `let timesRendered = 0;

const New = React.memo(() => {
  timesRendered++;
  const [clickCount, increment] = React.useState(0);

  return (
    <button
      onClick={increment(clickCount + 1)}
    >
        <h1>{timesRendered}</h1>
    </button>
  );
});
`;
