import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 2s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid yellowgreen;
  border-right: 2px solid yellowgreen;
  border-bottom: 2px solid yellowgreen;
  border-left: 2px solid transparent;
  background: transparent;
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;

export default Spinner;
