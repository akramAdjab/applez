import styled from "styled-components";

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  column-gap: var(--space-3);
  row-gap: var(--space-8);

  @media only screen and (max-width: 37.5em) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* @media only screen and (max-width: 22.5em) {
    grid-template-columns: 1fr;
  } */
`;

export default ProductsContainer;
