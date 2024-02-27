import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Logo = styled(Link)`
  color: var(--color-primary-950);
  font-weight: var(--weight-4);
  letter-spacing: -1.5px;

  ${(props) =>
    props.$size &&
    css`
      font-size: var(--text-${props.$size});
    `}
`;

Logo.defaultProps = {
  $size: 6,
};

export default Logo;
