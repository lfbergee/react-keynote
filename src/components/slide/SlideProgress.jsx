import styled from "styled-components";

const ProgressBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: ${props => `${props.progress}%`};
  height: 6px;
  background-color: yellowgreen;
  transition: width 1s ease-in-out;
  opacity: 0.7;
`;

export default ProgressBar;
