import styled from "styled-components";

import StyledProduct from "./StyledProduct";
import LoadingBox from "./LoadingBox";
import Row from "./Row";

const StyledLoadingProduct = styled.div`
  display: grid;
  row-gap: var(--space-6);

  & > div {
    margin-bottom: var(--space-12);
  }

  & div {
    border-radius: var(--border-radius-lg);
  }
`;

export default function LoadingProduct() {
  const arr = Array.from({ length: 3 });
  const mediaQuery = window.matchMedia("(max-width: 800px)");

  return (
    <StyledLoadingProduct className="section">
      <LoadingBox $width={25} $height={5.5} $align="center" />

      <StyledProduct>
        <LoadingBox $height={!mediaQuery ? 30 : 80} />
        <Row $height={80} $direction="column" $gap={11}>
          {arr.map((_, i) => (
            <Row $direction="column" $gap={4} style={{ flex: 1 }} key={i}>
              <LoadingBox $width={40} $height={4} />
              <LoadingBox style={{ flex: 1 }} />
            </Row>
          ))}

          <LoadingBox $height={5} />
        </Row>
      </StyledProduct>
    </StyledLoadingProduct>
  );
}
