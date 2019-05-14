import React from "react";
import { Slide, SlideDeck } from "../../../components";
import PlayCard from "../playCard/PlayCard";
import {
  List,
  ListItem,
  GridRow,
  GridCol,
  LinkButton,
} from "../../../baseComponents";
import { Jsx, Jsx1, Jsx2 } from "./jsx";
import {
  Components,
  Components1,
  Components2,
  Components3,
} from "./components";
import PauseSlide from "./PauseSlide";
import { Hard } from "./internal";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import MemoExample from "./memo/example/Example";
import { oldCode as memoOldCode, memoCode } from "./memo/example/code";
import LazyExample from "./lazy/example/Example";
import { code as lazyCode } from "./lazy/example/code";
import { usestate, usecontext, useeffect } from "./hooks/example/code";
import Separation from "./hooks/example/separation.png";
import { form, brand, customhook } from "./customHooks/example/code";

const Intro = () => (
  <SlideDeck>
    <Slide name="intro">
      <PauseSlide />
    </Slide>
    <Slide name="agenda" withImage heading="Kveldens plan">
      <GridRow justify="center">
        <GridCol>
          <List>
            <ListItem customDot="fire">
              Hva er React, og hvorfor skal vi bry oss?
            </ListItem>
            <ListItem customDot="fire">Hvordan komme igang?</ListItem>
            <ListItem customDot="fire">React 16.x</ListItem>
            <ListItem customDot="fire">
              Sjekke om jeg klarer å live kode
            </ListItem>
          </List>
        </GridCol>
      </GridRow>
    </Slide>
    <Slide name="whoami" backgroundColor="#323330">
      <PlayCard />
    </Slide>
    <Slide name="agenda2" withImage>
      <GridRow justify="center">
        <GridCol>
          <Hard>
            <List>
              <ListItem customDot="heart">Spør</ListItem>
              <ListItem customDot="heart">Grav</ListItem>
              <ListItem customDot="heart">Osv</ListItem>
            </List>
          </Hard>
        </GridCol>
      </GridRow>
    </Slide>
    <Slide name="whyis" color="#323330" backgroundColor="#f0db4f">
      <Hard>Hvorfor bruke et rammeverk som React?</Hard>
    </Slide>
    <Slide name="whatis" color="#323330" backgroundColor="#f0db4f">
      <Hard>
        Holde
        <br /> UI og state
        <br />
        i sync er <br />
        vanskelig
      </Hard>
    </Slide>
    <Slide name="jsx" withImage>
      <Jsx />
    </Slide>
    <Slide name="jsx1" withImage heading="JSX">
      <Jsx1 />
    </Slide>
    <Slide name="jsx2" withImage heading="JSX">
      <Jsx2 />
    </Slide>
    <Slide name="components" color="#323330" backgroundColor="#f0db4f">
      <Components />
    </Slide>
    <Slide
      name="components1"
      withImage
      heading="Komponenter kan definers på to måter"
    >
      <Components1 />
    </Slide>
    <Slide name="components2" withImage heading="Komponenter kan komposeres">
      <Components2 />
    </Slide>
    <Slide name="components3" color="#323330" backgroundColor="#f0db4f">
      <Components3 />
    </Slide>
    <Slide name="pause2">
      <PauseSlide />
    </Slide>
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
    <Slide name="memo-intro" heading="Memo" withImage>
      <List>
        <ListItem customDot>
          So React components might be updated a bit more than you think
        </ListItem>
        <ListItem customDot>Much is hidden from us in reconciliation</ListItem>
        <ListItem customDot="seeNoEvil">
          PureComponent can help, but how about functional components?
        </ListItem>
      </List>
    </Slide>
    <Slide name="memo-code" heading="Memo" withImage>
      <SyntaxHighlighter language="jsx" style={okaidia}>
        {memoCode}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="jsx" style={okaidia}>
        {memoOldCode}
      </SyntaxHighlighter>
    </Slide>
    <Slide name="memo-example" heading="Memo" withImage>
      <MemoExample />
    </Slide>
    <Slide name="memo-summary" heading="Memo" withImage>
      <List>
        <ListItem customDot="fire">
          Equivalent to PureComponent or doing something clever with
          componentShouldUpdate()
        </ListItem>
        <ListItem customDot="fire">
          Brings us one step closer to feature parity with class and functional
          syntax
        </ListItem>
        <ListItem customDot="skull">Be careful with mutated objects</ListItem>
      </List>
    </Slide>
    <Slide name="lazy-intro" heading="Lazy & Suspense" withImage>
      <List>
        <ListItem>
          ErrorBoundary gave us a way of catching an error below in the call
          tree
        </ListItem>
        <ListItem>
          Suspense kinda does the same, however instead of catching an error, it
          catches a promise thrown by a component wrapped in lazy()
        </ListItem>
      </List>
    </Slide>
    <Slide name="lazy-example" heading="Example" withImage>
      <SyntaxHighlighter language="jsx" style={okaidia}>
        {lazyCode}
      </SyntaxHighlighter>
      <LazyExample />
    </Slide>
    <Slide name="lazy-summary" heading="Lazy" withImage>
      <List>
        <ListItem customDot="fire">Super easy code splitting</ListItem>
        <ListItem customDot="fire">
          Step towards the ultimate goal of async rendering
        </ListItem>
        <ListItem customDot="skull">
          Doesn't work with server side rendering
        </ListItem>
      </List>
    </Slide>
    <Slide name="hooks-intro" heading="What is the wrong with React?" withImage>
      <List>
        <ListItem customDot="angry">Wrapper hell</ListItem>
        <ListItem customDot="down">Awkward to share state logic</ListItem>
        <ListItem customDot="down">
          Imperative state and lifecycle handling
        </ListItem>
        <ListItem customDot="puke">Classes in React... and this</ListItem>
      </List>
    </Slide>
    <Slide name="hooks-example" heading="Example" withImage>
      <SyntaxHighlighter language="jsx" style={okaidia}>
        {usestate}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="jsx" style={okaidia}>
        {usecontext}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="jsx" style={okaidia}>
        {useeffect}
      </SyntaxHighlighter>
    </Slide>
    <Slide name="hooks-summary" heading="Hooks" withImage>
      <List>
        <ListItem customDot="fire">Functional all the things</ListItem>
        <ListItem customDot="fire">Better separation of concern</ListItem>
        <ListItem customDot="fire">Easier to share state logic</ListItem>
      </List>
    </Slide>
    <Slide name="hooks-separation" heading="Separation of concern">
      <GridRow justify="center">
        <img alt="" src={Separation} />
      </GridRow>
    </Slide>
    <Slide name="hooks-donts" heading="Hooks dont's" withImage>
      <List>
        <ListItem customDot="skull">Do not work with classes</ListItem>
        <ListItem customDot="skull">Must be on top level</ListItem>
        <ListItem customDot="skull">Can not be in a loop or branch</ListItem>
        <ListItem customDot="skull">
          Do not replace ComponentWillCatch... yet
        </ListItem>
        <ListItem customDot="skull">
          or getSnapshotBeforeUpdate, but who uses that anyway?
        </ListItem>
        <ListItem customDot="skull">Rewrite all old components...</ListItem>
        <ListItem customDot="fire">
          Just remember to add hooks-eslint-plugin, and you be fine!
        </ListItem>
      </List>
    </Slide>
    <Slide name="hooks-how" heading="Hooks note" withImage>
      <List>
        <ListItem customDot>Each hook scoped to the component</ListItem>
        <ListItem customDot>
          Use context or prop drilling to share state, as you'd expect
        </ListItem>
      </List>
    </Slide>
    <Slide
      name="custom-hooks-custom"
      heading="🔥🔥 Custom hooks 🔥🔥"
      withImage
    >
      <List>
        <ListItem customDot="fire">
          Where it really becomes cool is custom hooks
        </ListItem>
        <ListItem customDot="heart">https://usehooks.com</ListItem>
      </List>
      <SyntaxHighlighter language="jsx" style={okaidia}>
        {customhook}
      </SyntaxHighlighter>
    </Slide>
    <Slide
      name="custom-hooks-intro"
      heading="Custom hooks is awesome"
      withImage
    >
      <List>
        <ListItem customDot="heart">
          Neatly package together functionality
        </ListItem>
        <ListItem customDot="heart">So much stuff can be simplified</ListItem>
      </List>
    </Slide>
    <Slide name="custom-hooks-usebrand" heading="Brand context" withImage>
      <SyntaxHighlighter language="jsx" style={okaidia}>
        {brand}
      </SyntaxHighlighter>
    </Slide>
    <Slide
      name="custom-hooks-formvalidation"
      heading="Form validation hook"
      withImage
    >
      <SyntaxHighlighter language="jsx" style={okaidia}>
        {form}
      </SyntaxHighlighter>
    </Slide>
    <Slide name="references">
      <List>
        <ListItem customDot="fire">
          <LinkButton href="https://reactjs.org/docs/introducing-jsx.html">
            JSX introduction
          </LinkButton>
        </ListItem>
        <ListItem customDot="fire">
          <LinkButton href="https://evilmartians.com/chronicles/optimizing-react-virtual-dom-explained">
            The virtual DOM
          </LinkButton>
        </ListItem>
        <ListItem customDot="fire">
          <LinkButton href="https://reactjs.org/docs/react-api.html#reactmemo">
            Documentation
          </LinkButton>
        </ListItem>
        <ListItem customDot="fire">
          <LinkButton href="https://overreacted.io/react-as-a-ui-runtime/">
            Crazy in depth look at how React work
          </LinkButton>
        </ListItem>
        <ListItem customDot="fire">
          <LinkButton href="https://reactjs.org/docs/code-splitting.html#reactlazy">
            Documentation
          </LinkButton>
        </ListItem>
        <ListItem customDot="fire">
          <LinkButton href="https://hackernoon.com/lazy-loading-and-preloading-components-in-react-16-6-804de091c82d">
            Detailed lazy loading
          </LinkButton>
        </ListItem>
        <ListItem customDot="fire">
          <LinkButton href="https://reactjs.org/docs/hooks-intro.html">
            Hooks documentation
          </LinkButton>
        </ListItem>
        <ListItem customDot="fire">
          <LinkButton href="https://overreacted.io/a-complete-guide-to-useeffect/">
            The complete guide to useEffect
          </LinkButton>
        </ListItem>
      </List>
    </Slide>
  </SlideDeck>
);

export default Intro;
