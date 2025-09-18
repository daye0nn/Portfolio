import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  /* justify-content: right; */
  /* border: 1px solid var(--light-color); */
  /* left: 50%; */
  /* transform: translateX(-50%); */
  /* top: 20px; */
  /* border-radius: 50px; */
  z-index: 3;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  /* background: rgba(255, 255, 255, 0.2); */
  /* mix-blend-mode: difference; */
`;

const Wrapper = styled.nav`
  display: flex;
  gap: 40px;
  padding: 15px 20px;
  a {
    color: var(--light-color);
    mix-blend-mode: difference;
  }
`;

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <a>About Me</a>
        <a>Project</a>
        <a>Contact</a>
      </Wrapper>
    </Container>
  );
};

export default Header;
