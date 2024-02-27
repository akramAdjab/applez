import styled, { css } from "styled-components";

const ShadowTitle = styled.p`
  font-size: var(--text-11);
  font-weight: var(--weight-5);
  text-transform: uppercase;
  letter-spacing: 3px;

  ${(props) =>
    props.$dark
      ? css`
          opacity: 14%;
        `
      : css`
          opacity: 7%;
        `}

  @media only screen and (max-width: 37.5em) {
    & {
      font-size: var(--text-9);
    }
  }

  @media only screen and (max-width: 25em) {
    & {
      font-size: 11vw;
    }
  }
`;

export default ShadowTitle;
