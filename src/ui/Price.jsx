import styled, { css } from "styled-components";

const Price = styled.p`
  color: var(--color-secondary-600);
  font-weight: var(--weight-4);

  ${(props) =>
    props.$size &&
    css`
      font-size: var(--text-${props.$size});
    `}
`;

Price.defaultProps = {
  $size: 3,
};

export default Price;
