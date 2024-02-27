import LoadingBox from "./LoadingBox";
import ProductsContainer from "./ProductsContainer";
import CategoriesBoxesContainer from "./CategoriesBoxesContainer";
import Row from "./Row";
import LoadingProduct from "./LoadingProduct";
import styled from "styled-components";

const CategoriesButtonsContainer = styled(Row)`
  @media only screen and (max-width: 31.25em) {
    & {
      width: 100%;
    }
  }

  /* @media only screen and (max-width: 18.75em) {
    & {
      width: 200%;
      overflow-x: scroll;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  } */
`;

function Loading({ type, length }) {
  const arrBasedOnLength = length && Array.from({ length }, (_, i) => i + 1);

  if (type === "products")
    return (
      <ProductsContainer>
        {arrBasedOnLength.map((product) => (
          <Row $direction="column" $gap={5} key={product}>
            <LoadingBox $height={35} />
            <Row $direction="column">
              <LoadingBox $width={80} />
              <LoadingBox $width={40} />
            </Row>
          </Row>
        ))}
      </ProductsContainer>
    );

  if (type === "product") return <LoadingProduct />;

  if (type === "categoriesBoxes")
    return (
      <CategoriesBoxesContainer>
        {arrBasedOnLength.map((product) => (
          <Row $direction="column" $gap={5} key={product}>
            <LoadingBox $height={60} />
          </Row>
        ))}
      </CategoriesBoxesContainer>
    );

  if (type === "categoriesButtons")
    return (
      <CategoriesButtonsContainer $gap={3} $width={65}>
        {arrBasedOnLength.map((product) => (
          <LoadingBox $height={3.5} key={product} />
        ))}
      </CategoriesButtonsContainer>
    );

  if (type === "checkout")
    return (
      <Row $gap={6}>
        <LoadingBox $height={70} />
        <LoadingBox $width={69} $height={70} />
      </Row>
    );
}

export default Loading;
