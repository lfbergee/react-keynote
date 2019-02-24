import styled from "styled-components";
import { Link } from "react-scroll";

export const ActionButtonGroup = styled.aside`
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: flex;
`;

export const ScrollButton = styled(Link)`
  border: 2px solid yellowgreen;
  border-radius: 4px;
  color: yellowgreen;
  padding: 12px;
  margin: 24px 12px;
`;
