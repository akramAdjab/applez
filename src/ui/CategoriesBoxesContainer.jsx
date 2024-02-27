import styled, { css } from "styled-components";

const CategoriesBoxesContainer = styled.div`
  display: grid;
  gap: var(--space-3);

  ${(props) =>
    props.$length &&
    css`
      grid-template-columns: repeat(${props.$length}, 1fr);
    `}

  & div {
    border-radius: var(--border-radius-lg);
  }

  & div:nth-child(even),
  & a:nth-child(even) {
    transform: translateY(var(--space-7));
  }

  @media only screen and (max-width: 37.5em) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }

    & div {
      height: 33rem;
    }

    & img {
      width: 100%;
    }

    & div:nth-child(even),
    & a:nth-child(even) {
      transform: translateY(0);
    }

    & a:last-of-type,
    & div:last-of-type {
      width: 100%;

      grid-column: 1 / -1;
    }
  }
`;

CategoriesBoxesContainer.defaultProps = {
  $length: 7,
};

export default CategoriesBoxesContainer;
