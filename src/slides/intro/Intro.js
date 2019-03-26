import React from "react";
import { List, ListItem } from "../../baseComponents";
import { Slide, SlideDeck } from "../../components";

const Intro = () => (
  <SlideDeck>
    <Slide name="intro" heading="Versioning Policy" withImage>
      <List>
        <ListItem>
          When releasing breaking changes, we make a major release by changing
          the x number (ex: 15.6.2 to 16.0.0).
        </ListItem>
        <ListItem>
          When releasing new features, we make a minor release by changing the y
          number (ex: 15.6.2 to 15.7.0).
        </ListItem>

        <ListItem>
          When releasing bug fixes, we make a patch release by changing the z
          number (ex: 15.6.2 to 15.6.3).
        </ListItem>
        <ListItem>
          We release new features in minor versions. That means that minor
          releases are often more interesting and compelling than majors,
          despite their unassuming name.
        </ListItem>
        <ListItem>
          However, we reserve the option to release minor versions even if they
          do not include new features.
        </ListItem>
        <ListItem>
          Patches are the most important type of release because they sometimes
          contain critical bugfixes. That means patch releases have a higher bar
          for reliability.
        </ListItem>
      </List>
    </Slide>
    <Slide name="roadmap" heading="Roadmap React 16.x">
      <List>
        <ListItem customDot>
          React 16.0, fragments, error boundaries, portals
        </ListItem>
        <ListItem customDot>
          React 16.3, new lifecycle methods, stable context api
        </ListItem>
        <ListItem customDot>React 16.4 Pointer events</ListItem>
        <ListItem customDot>React 16.5 Profiler</ListItem>
        <ListItem customDot>
          React 16.6 with Suspense for Code Splitting
        </ListItem>
        <ListItem customDot>React 16.8 release with React Hooks</ListItem>
        <ListItem customDot>
          A minor 16.x release with Concurrent Mode (~Q2 2019)
        </ListItem>
        <ListItem customDot>
          A minor 16.x release with Suspense for Data Fetching (~mid 2019)
        </ListItem>
      </List>
    </Slide>
  </SlideDeck>
);

export default Intro;
