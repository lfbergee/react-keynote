import styled from "styled-components";
import { Link } from "react-scroll";
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
`;

export const ActionButton = styled(Router)`
  border: none;
  font-size: 24px;
  padding: 12px;
  margin: 4px;
`;

export const ScrollButton = styled(Link)`
  border: 2px solid yellowgreen;
  border-radius: 4px;
  color: yellowgreen;
  padding: 12px;
  margin: 12px;
`;

export const IconButton = styled(ScrollButton)`
  padding: 4px 18px;
  font-size: 18px;
`;

export const RouterButton = styled(Router)`
  border: 2px solid yellowgreen;
  border-radius: 4px;
  color: yellowgreen;
  padding: 12px;
  margin: 12px;
  text-decoration: none;
  font-size: 20px;
`;
