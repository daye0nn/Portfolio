import styled from "styled-components";

const Container = styled.div`
  display: flex;
  /* justify-content: right; */
  color: var(--light-color);
  border: 1px solid var(--light-color);
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 20px;
  border-radius: 50px;
  z-index: 3;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  mix-blend-mode: difference;
`;

const Wrapper = styled.ul`
  display: flex;
  gap: 20px;
  padding: 15px 20px;
`;

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <li>About Me</li>
        <li>Skill</li>
        <li>Project</li>
        <li>Contact</li>
      </Wrapper>
    </Container>
  );
};

export default Header;
