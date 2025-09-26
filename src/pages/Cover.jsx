import { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { textAni } from "../js/animation";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10vw;
  overflow-x: hidden;
  color: #f8f8f8;
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

const MotionText = styled.div`
  display: inline-block;
  transform-style: preserve-3d;
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
  @media (max-width: 767px) {
    text-align: center;
    span {
      display: block;
      text-align: center;
    }
  }
`;

const Title2 = styled(Title)`
  white-space: nowrap;
  overflow: hidden;
  @media (max-width: 767px) {
    white-space: normal;
  }
`;

const Cover = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  useEffect(() => {
    // // 초기 세팅
    // gsap.set([line1Ref.current, line2Ref.current], {
    //   yPercent: 110,
    //   rotateX: -45,
    //   transformOrigin: "0% 50% -100%",
    //   opacity: 0,
    //   transformStyle: "preserve-3d",
    // });

    // //동작
    // gsap.to([line1Ref.current, line2Ref.current], {
    //   yPercent: 0,
    //   rotationX: 0,
    //   opacity: 1,
    //   transformOrigin: "50% 50%",
    //   duration: 1.2,
    //   stagger: 0.1, // 순차적으로 애니메이션
    //   ease: "power3.out",
    // });
    textAni([line1Ref.current, line2Ref.current], { stagger: 0.1 });

    // 스크롤 시 양옆으로 퍼지는 애니메이션
    const scrollAni = gsap.timeline({
      scrollTrigger: {
        trigger: ".visual .title",
        start: "top 30%",
        end: "bottom top",
        scrub: 1,
      },
    });

    scrollAni
      .fromTo(line1Ref.current, { xPercent: 0 }, { xPercent: 100 }, 0)
      .fromTo(line2Ref.current, { xPercent: 0 }, { xPercent: -100 }, 0);
  }, []);

  return (
    <Container className="visual">
      <p>&copy;2025 DaYeon Choi</p>
      <Wrapper className="title">
        <Title>
          <MotionText ref={line1Ref}>
            portfolio<span>&</span>
          </MotionText>
        </Title>
        <Title2>
          <MotionText ref={line2Ref}>web publisher</MotionText>
        </Title2>
      </Wrapper>
    </Container>
  );
};

export default Cover;
