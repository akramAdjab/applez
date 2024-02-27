import styled from "styled-components";

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-primary-950);
  opacity: 0.6;
  z-index: 99;

  transform: translate(-50%, -50%);
  position: fixed;
  top: 50%;
  left: 50%;
`;

export default Overlay;
