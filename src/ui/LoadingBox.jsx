import styled, { css } from "styled-components";

const LoadingBox = styled.div`
  border-radius: var(--border-radius-lg);
  background-image: linear-gradient(
    90deg,
    var(--color-grey-200) 0px,
    var(--color-grey-300) 40px,
    var(--color-grey-200) 80px
  );
  background-size: 300%;
  background-position: 100% 0;
  animation: shimmer 1.5s infinite;
  cursor: auto;

  ${(props) =>
    props.$width &&
    css`
      width: ${props.$width}%;
    `}

  ${(props) =>
    props.$align === "center" &&
    css`
      margin: 0 auto;
    `}

  ${(props) =>
    props.$height &&
    css`
      height: ${props.$height}rem;
    `}
`;

LoadingBox.defaultProps = {
  $width: "100",
  $height: "2",
};

export default LoadingBox;
