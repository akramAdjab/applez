import styled, { css, keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const SpinnerMini = styled(BiLoaderAlt)`
  ${(props) =>
    props.width &&
    css`
      width: ${props.width}rem;
      height: ${props.width}rem;
    `}

  ${(props) =>
    props.margin &&
    css`
      margin: var(--space-${props.margin}) auto;
    `}

  animation: ${rotate} 1.5s infinite linear;
`;

SpinnerMini.defaultProps = {
  width: 1.8,
  height: 1.8,
};

export default SpinnerMini;
