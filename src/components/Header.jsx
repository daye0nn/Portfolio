import styled from "styled-components";

const Container = styled.ul`
  display: flex;
  justify-content: right;
  background: var(--dark-color);
  color: var(--light-color);
`;

const Header = () => {
  return (
    <Container>
      <li>About Me</li>
      <li>Project</li>
      <li>Contact</li>
    </Container>
  );
};

export default Header;
