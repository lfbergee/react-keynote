import React from "react";
import { Route } from "react-router-dom";

const ElateConf = ({ match }) => {
  const ElateSlideDeck = React.lazy(() => import("./ElateSlideDeck"));
  const Intro = React.lazy(() => import("./intro/Intro"));
  const Hooks = React.lazy(() => import("./hooks/Hooks"));
  const Lazy = React.lazy(() => import("./lazy/Lazy"));
  const Memo = React.lazy(() => import("./memo/Memo"));
  const Profiling = React.lazy(() => import("./profiling/Profiling"));
  const Immer = React.lazy(() => import("./immer/Immer"));
  const CustomHooks = React.lazy(() => import("./customHooks/CustomHooks"));

  return (
    <>
      <Route exact path={`${match.path}`} render={() => <ElateSlideDeck />} />
      <Route path={`${match.path}/intro`} render={() => <Intro />} />
      <Route path={`${match.path}/memo`} render={() => <Memo />} />
      <Route path={`${match.path}/lazy`} render={() => <Lazy />} />
      <Route path={`${match.path}/profiling`} render={() => <Profiling />} />
      <Route path={`${match.path}/hooks`} render={() => <Hooks />} />
      <Route path={`${match.path}/Immer`} render={() => <Immer />} />
      <Route
        path={`${match.path}/custom-hooks`}
        render={() => <CustomHooks />}
      />
    </>
  );
};

export default ElateConf;
