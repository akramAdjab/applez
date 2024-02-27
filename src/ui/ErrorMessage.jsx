import styled, { css } from "styled-components";

const ErrorMessage = styled.p`
  color: var(--color-secondary-600);
  font-size: var(--text-2);
  /* font-weight: var(--weight-4); */

  ${(props) =>
    props.$padding &&
    css`
      padding: 0 var(--space-${props.$padding});
    `}

  grid-row: 2 / -1;
  grid-column: 2 / -1;
  justify-self: center;

  @media only screen and (max-width: 50em) {
    & {
      grid-column: 1 / -1;
      grid-row: 3 / -1;
      order: -1;
    }
  }
`;

export default ErrorMessage;
