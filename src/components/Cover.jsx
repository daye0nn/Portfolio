import { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10vw;
  overflow-x: hidden;
  p {
    position: absolute;
    top: 2%;
    left: 2%;
    font-size: 2vw;
    font-weight: 300;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2vw;
`;

const Title = styled.h1`
  display: block;
  width: 100%;
  font-size: 14vw;
  line-height: 1;
  text-transform: uppercase;
  text-align: left;
  span {
    font-size: 8vw;
  }
`;

const Title2 = styled(Title)`
  white-space: nowrap;
  overflow: hidden;
`;

const Cover = () => {
  useEffect(() => {
    const titleAni = gsap.timeline({
      scrollTrigger: {
        trigger: ".visual .title",
        start: "top 30%",
        end: "bottom top",
        scrub: 1,
      },
    });

    titleAni
      .fromTo(".visual .line1", { xPercent: 0 }, { xPercent: 100 }, 0)
      .fromTo(".visual .line2", { xPercent: 0 }, { xPercent: -100 }, 0);
  }, []);

  return (
    <Container className="visual">
      <p>&copy;2025 DaYeon Choi</p>
      <Wrapper className="title">
        <Title className="line1">
          portfolio<span>&</span>
        </Title>
        <Title2 className="line2">web publisher</Title2>
      </Wrapper>
    </Container>
  );
};

export default Cover;
