import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  span {
    text-align: center;
    color: var(--sub-text);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 300px 60px 100px 60px;
  align-items: center;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  h4 {
    font-size: 14rem;
    font-weight: 500;
  }
  p {
    color: var(--sub-color);
    font-size: 2rem;
  }
`;

const Contact = styled.ul`
  display: flex;
  gap: 20px;
  font-size: 2rem;
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    a {
      display: flex;
      flex-direction: column;
      color: var(--sub-text);
      cursor: pointer;
    }
  }
`;

const Footer = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Text>
            <h4>Contact Me</h4>
          </Text>
          <Contact>
            <div>
              <p>Email</p>
              <p>Phone</p>
              <p>Github</p>
            </div>
            <div>
              <a href="mailto:dayeonnchoi@gmail.com">dayeonnchoi@gmail.com</a>
              <a>010.2678.1142</a>
              <a href="https://github.com/daye0nn" target="_blank">
                @daye0nn
              </a>
            </div>
          </Contact>
        </Wrapper>
        <span>&copy; 2025 choidayeon. All rights reserved.</span>
      </Container>
    </>
  );
};

export default Footer;
