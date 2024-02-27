import styled from "styled-components";

const StyledProduct = styled.div`
  padding-left: var(--space-3);
  padding-right: var(--space-3);

  display: grid;
  grid-template-columns: 63% repeat(auto-fit, minmax(3%, 36rem));
  grid-template-rows: auto 1.6rem;
  column-gap: var(--space-7);
  row-gap: var(--space-4);

  position: relative;

  /* Very large screens */
  @media only screen and (min-width: 131em) {
    & {
      grid-template-columns: 63% 36rem;
    }
  }

  /* Tablet view */
  @media only screen and (max-width: 50em) {
    & {
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr;
      row-gap: var(--space-9);
    }
  }
`;

export default StyledProduct;
