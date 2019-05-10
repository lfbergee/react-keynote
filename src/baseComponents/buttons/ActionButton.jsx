import styled from "styled-components";
import { Link as Router } from "react-router-dom";

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-transform: capitalize;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  max-width: 80vw;
`;

export const ActionButtonGroup = styled(ButtonGroup)`
  position: fixed;
  bottom: 10px;
  right: 10px;
`;

export const NavButtonGroup = styled(ButtonGroup)`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1;
`;

export const ActionButton = styled(Router)`
  border: none;
  font-size: 2.2rem;
  padding: 0.8rem;
  margin: 0.4rem;
  background-color: transparent;
`;

export const ScrollButton = styled.button`
  border: 2px solid yellowgreen;
  border-radius: 4px;
  color: yellowgreen;
  padding: 12px;
  margin: 12px;
  background-color: transparent;
`;

export const PrimaryButton = styled.button`
  border: 2px solid yellowgreen;
  border-radius: 4px;
  color: yellowgreen;
  padding: 12px;
  margin: 12px;
  background-color: transparent;
`;

export const LinkButton = styled.a`
  border: 2px solid yellowgreen;
  border-radius: 4px;
  color: yellowgreen;
  padding: 12px;
  margin: 12px;
  background-color: transparent;
`;

export const IconButton = styled(ScrollButton)`
  padding: 4px 18px;
  font-size: 2rem;
  border: none;
`;

export const RouterButton = styled(Router)`
  border: 2px solid yellowgreen;
  border-radius: 4px;
  color: yellowgreen;
  padding: 12px;
  margin: 12px;
  text-decoration: none;
  font-size: 2rem;
`;
