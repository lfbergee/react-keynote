import styled from "styled-components";

export const GridRow = styled.div`
  display: flex;
  justify-content: ${props => (props.justify ? props.justify : "initial")};
`;

export const GridCol = styled.div`
  width: ${props => (props.size / 12) * 100}vw;
`;
