import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.section`
  width: 100%;
  height: auto;
`;

const Text = styled.div`
  width: 100%;
  padding: 20% 10% 20% 40%;
  p {
    text-align: right;
    font-size: 3rem;
  }
`;

const Intro = () => {
  return (
    <Container className="intro-section">
      <Text>
        <h3></h3>
        <p>
          단순히 페이지를 구현하는 것에 그치는 것이 아니라 웹 표준, 웹 접근성,
          그리고 웹 호환성 등을 고려하는 웹 퍼블리셔가 되고자 합니다. 더 나아가
          프론트엔드에 관련한 프로그래밍 능력도 키워나가 발전하는 사람이 웹
          퍼블리셔가 되고자 합니다.
        </p>
      </Text>
    </Container>
  );
};

export default Intro;
