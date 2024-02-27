import styled from "styled-components";
import Row from "./Row";
import Logo from "./Logo";

const StyledFooter = styled.footer`
  color: var(--color-primary-50);
  padding: var(--space-13) 0;
  border-top: 2px solid var(--color-grey-800);
  background-color: var(--color-primary-950);

  & div {
    margin-bottom: var(--space-11);
  }

  & a:link:last-child,
  & a:visited:last-child {
    color: var(--color-primary-300);
  }

  & a:hover:last-child,
  & a:active:last-child {
    color: var(--color-primary-400);
  }

  & .copyright {
    font-size: var(--space-4);
    text-align: center;
  }
`;

function Footer() {
  const date = new Date();

  return (
    <StyledFooter data-cursor="-inverse">
      <Row
        $align="baseline"
        $justify="space-between"
        $gap={6}
        className="container"
      >
        <Logo $size={5} style={{ color: "#f7fbff" }}>
          Applez
        </Logo>

        <p>
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/akramadjab/"
            target="_blank"
            rel="noreferrer"
          >
            Akram adjab
          </a>
        </p>
      </Row>

      <p className="copyright">
        Copyright &copy; {date.getFullYear()}. All right reserved
      </p>
    </StyledFooter>
  );
}

export default Footer;
