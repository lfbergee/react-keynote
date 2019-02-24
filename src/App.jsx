import React, { Component } from "react";
import Slide from "./components/slide/Slide";

class App extends Component {
  render() {
    return (
      <Slide heading="New and cool stuff in React">
        <ul>
          <li>React stuff</li>
          <ul>
            <li>Memo</li>
            <li>Lazy & Suspense</li>
            <li>Profiling</li>
            <li>Hooks</li>
          </ul>
          <li>Other libs</li>
          <ul>
            <li>Immer.js</li>
            <li>reselect</li>
          </ul>
        </ul>
      </Slide>
    );
  }
}

export default App;
