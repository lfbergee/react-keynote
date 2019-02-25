import React from "react";
import {
  ActionButtonGroup,
  NavButtonGroup,
  ActionButton,
  ScrollButton,
  IconButton
} from "../../baseComponents";

const SlideDeck = ({ namedNav, children }) => {
  const slides = children.map(child => child.props.name).filter(n => n);
  const [activeIdx, changeSlide] = React.useState(0);

  const NamedNavigation = () =>
    slides.map(slide => (
      <ScrollButton to={slide} smooth={true} duration={500} key={slide}>
        {slide}
      </ScrollButton>
    ));

  const UnnamedNavigation = () => (
    <>
      {activeIdx !== 0 && (
        <IconButton
          onClick={() => changeSlide(activeIdx - 1)}
          to={slides[activeIdx - 1]}
          smooth={true}
          duration={500}
        >
          {" < "}
        </IconButton>
      )}
      {activeIdx !== slides.length - 1 && (
        <IconButton
          onClick={() => changeSlide(activeIdx + 1)}
          to={slides[activeIdx + 1]}
          smooth={true}
          duration={500}
        >
          {" > "}
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
      {children}
      <ActionButtonGroup>
        {namedNav && <NamedNavigation />}
        {!namedNav && <UnnamedNavigation />}
      </ActionButtonGroup>
    </>
  );
};

export default SlideDeck;
