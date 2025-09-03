import styled from "styled-components";

const Container = styled.div`
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
  flex-direction: column;
  gap: 20px;
  font-size: 2rem;
  li {
    a {
      color: var(--sub-color);
    }
  }
`;

const Footer = () => {
  return (
    <>
      <Container>
        <Text>
          <h4>Thank You</h4>
          <p>봐주셔서 감사합니다</p>
        </Text>
        <Contact>
          <li>
            PHONE <a>010.2678.1142</a>
          </li>
          <li>
            EMAIL <a>dayeonnchoi@naver.com</a>
          </li>
          <li>
            GITHUB <a>@daye0nn</a>
          </li>
        </Contact>
      </Container>
      <p>&copy; 2025 choidayeon. All rights reserved.</p>
    </>
  );
};

export default Footer;
