import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";
import { Normalize } from "styled-normalize";
import theme from "./utils/theme";
import App from "./App";
import { FullScreenSpinner } from "./components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Helvetica Neue", "Ubuntu Light";
    height: 100%;
    overflow: hidden;
    background-color: #090909;
  }
`;

const Hooks = React.lazy(() => import("./slides/hooks/Hooks"));
const Lazy = React.lazy(() => import("./slides/lazy/Lazy"));
const Memo = React.lazy(() => import("./slides/memo/Memo"));
const Profiling = React.lazy(() => import("./slides/profiling/Profiling"));
const Immer = React.lazy(() => import("./slides/immer/Immer"));

const Routes = () => (
  <Suspense fallback={<FullScreenSpinner />}>
    <Route exact path="/" render={() => <App />} />
    <Route exact path="/memo" render={() => <Memo />} />
    <Route exact path="/lazy" render={() => <Lazy />} />
    <Route exact path="/profiling" render={() => <Profiling />} />
    <Route exact path="/hooks" render={() => <Hooks />} />
    <Route exact path="/Immer" render={() => <Immer />} />
  </Suspense>
);

const Navigation = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <>
        <Normalize />
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle whiteColor />
            <Navigation />
          </>
        </ThemeProvider>
      </>
    </AppContainer>,
    document.getElementById("root")
  );
};

render();

if (module.hot) {
  module.hot.accept("./App", () => {
    render();
  });
}
