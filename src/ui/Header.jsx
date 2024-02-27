import styled from "styled-components";

import { useIsHomepage } from "../hooks/useIsHomepage";

import Logo from "./Logo";
import Navbar from "./Navbar";

const StyledHeader = styled.header`
  padding: var(--space-6) 0;
  z-index: 98;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Header() {
  const isCurrentlyHomepage = useIsHomepage();

  return (
    <StyledHeader
      className="container"
      style={isCurrentlyHomepage ? { color: "#f7fbff" } : null}
    >
      <Navbar isCurrentlyHomepage={isCurrentlyHomepage} />

      <Logo to="/" style={isCurrentlyHomepage ? { color: "#f7fbff" } : null}>
        Applez.
      </Logo>

      <Navbar type="icon" isCurrentlyHomepage={isCurrentlyHomepage} />
    </StyledHeader>
  );
}

export default Header;
