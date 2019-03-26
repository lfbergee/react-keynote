import React from "react";
import styled from "styled-components";
import { GridCol, GridRow } from "../../baseComponents";
import bg from "./bg.jpg";
import logo from "./logo.png";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  background-image: ${props => (props.withImage ? `url(${bg})` : "")};
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.8);
  background-blend-mode: darken;
  color: ${props => props.theme.colors.white};
`;

const Content = styled.div`
  overflow-y: scroll;
  height: 100vh;
`;

const Header = styled.h1`
  text-align: center;
  margin: 68px 12px 24px;
`;

const Logo = styled.div`
  position: fixed;
  top: 24px;
  left: 24px;
  background: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  height: 75px;
  width: 75px;
`;

const Slide = ({ heading, withImage, name, children }) => (
  <Wrapper name={name} withImage={withImage}>
    <Logo />
    <Content>
      <GridRow>
        <GridCol size={12}>
          <Header>{heading}</Header>
        </GridCol>
      </GridRow>
      <GridRow justify="center">
        <GridCol size={10}>{children}</GridCol>
      </GridRow>
    </Content>
  </Wrapper>
);

export default Slide;
