import React, { useEffect, useReducer } from "react";
import produce from "immer";
import { AnimateOnChange } from "@nearform/react-animation";
import {
  ActionButtonGroup,
  NavButtonGroup,
  ActionButton,
  ScrollButton,
  IconButton,
} from "../../baseComponents";
import ProgressBar from "./SlideProgress";

const reducer = produce((draft, action) => {
  switch (action.type) {
    case "increment":
      draft.activeSlide =
        draft.activeSlide + 1 < draft.max
          ? draft.activeSlide + 1
          : draft.activeSlide;
      return;
    case "decrement":
      draft.activeSlide =
        draft.activeSlide - 1 >= 0 ? draft.activeSlide - 1 : draft.activeSlide;
      return;
    case "set":
      draft.activeSlide = action.slide;
      return;
    default:
      throw new Error();
  }
});

const SlideDeck = ({ namedNav, children }) => {
  const slides = children.map(child => child.props.name).filter(n => n);
  const [state, dispatch] = useReducer(reducer, {
    activeSlide: 0,
    max: slides.length,
  });

  const keyNavigation = ({ key }) => {
    switch (key) {
      case "ArrowRight":
        return dispatch({ type: "increment" });
      case "ArrowLeft":
        return dispatch({ type: "decrement" });
      default:
        break;
    }
  };

  useEffect(e => {
    window.addEventListener("keydown", keyNavigation);
    return () => window.removeEventListener("keydown", keyNavigation);
  });

  const NamedNavigation = () =>
    slides.map((slide, idx) => (
      <ScrollButton
        onClick={() => dispatch({ type: "set", slide: idx })}
        smooth={true}
        duration={500}
        key={slide}
      >
        {slide}
      </ScrollButton>
    ));

  const UnnamedNavigation = () => (
    <>
      {state.activeSlide !== 0 && (
        <IconButton
          onClick={() => dispatch({ type: "decrement" })}
          smooth={true}
          duration={500}
        >
          <span role="img" aria-label="back">
            👈
          </span>
        </IconButton>
      )}
      {state.activeSlide !== slides.length - 1 && (
        <IconButton
          onClick={() => dispatch({ type: "increment" })}
          smooth={true}
          duration={500}
        >
          <span role="img" aria-label="forward">
            👉
          </span>
        </IconButton>
      )}
    </>
  );

  return (
    <>
      <NavButtonGroup>
        <ActionButton to="/">
          <span role="img" aria-label="home">
            🏠
          </span>
        </ActionButton>
      </NavButtonGroup>
      <AnimateOnChange animationIn="fadeIn">
        {children.map((child, idx) =>
          state.activeSlide === idx ? child : null
        )}
      </AnimateOnChange>
      <ActionButtonGroup>
        {namedNav && <NamedNavigation />}
        {!namedNav && <UnnamedNavigation />}
      </ActionButtonGroup>
      <ProgressBar
        progress={Math.round(((state.activeSlide + 1) / slides.length) * 100)}
      />
    </>
  );
};

export default SlideDeck;
