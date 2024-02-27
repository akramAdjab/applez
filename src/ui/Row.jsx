import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.$align &&
    css`
      align-items: ${props.$align};
    `}

  ${(props) =>
    props.$justify &&
    css`
      justify-content: ${props.$justify};
    `}

  ${(props) =>
    props.$direction === "row"
      ? css`
          flex-direction: row;
        `
      : css`
          flex-direction: column;
        `}

  ${(props) =>
    props.$gap &&
    css`
      gap: var(--space-${props.$gap});
    `}

  ${(props) =>
    props.$width &&
    css`
      width: ${props.$width}%;
    `}

  ${(props) =>
    props.$height &&
    css`
      height: ${props.$height}rem;
    `}
`;

Row.defaultProps = {
  $direction: "row",
  $gap: 3,
  $width: "100",
};

export default Row;
