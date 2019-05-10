import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { HashRouter, Route } from "react-router-dom";
import { Normalize } from "styled-normalize";
import theme from "./utils/theme";
import { FullScreenSpinner } from "./components";
import ElateConf from "./slides/ElateConf";
import HamarMeetup from "./slides/HamarMeetup";
import SlideDeckSelect from "./slides";

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62.5%;
  }
  body {
    font-family: "Helvetica Neue", "Ubuntu Light", "sans-serif";
    height: 100%;
    overflow: hidden;
    background-color: #090909;
    font-size: 3.2rem;
  }
  h1 {
    font-size: 6rem;
  }
`;

const Routes = () => (
  <Suspense fallback={<FullScreenSpinner />}>
    <Route exact path="/" render={() => <SlideDeckSelect />} />
    <Route path="/elate" component={ElateConf} />
    <Route path="/hamar" component={HamarMeetup} />
  </Suspense>
);

const Navigation = () => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Routes />
  </HashRouter>
);

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <>
        <Normalize />
        <basefont size="32px" />
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <Navigation />
          </>
        </ThemeProvider>
      </>
    </AppContainer>,
    document.getElementById("root")
  );
};

render();
