import React from "react";
import { Route } from "react-router-dom";

const HamarMeetup = ({ match }) => {
  const HamarMeetupSlideDeck = React.lazy(() =>
    import("./HamarMeetupSlideDeck")
  );
  const Intro = React.lazy(() => import("./Intro/Intro"));

  return (
    <>
      <Route
        exact
        path={`${match.path}`}
        render={() => <HamarMeetupSlideDeck />}
      />
      <Route path={`${match.path}/intro`} render={() => <Intro />} />
    </>
  );
};

export default HamarMeetup;
