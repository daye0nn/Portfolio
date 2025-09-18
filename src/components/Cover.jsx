import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  color: var(--dark-color);
  text-transform: uppercase;
  font-size: 30rem;
  /* font-size: 26rem; */
  font-weight: 500;
  position: absolute;
  top: 20%;
  opacity: 0;
`;

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;

const ImgeWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  img {
    width: 300px;
    object-fit: cover;
    animation: ${float} 3s ease-in-out infinite;
  }
`;

const Text = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 2.6rem;
  padding: 0 20px;
  position: absolute;
  bottom: 0;
  margin-bottom: 30px;
`;

gsap.registerPlugin(ScrollTrigger);

const Cover = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);

  // text animation
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });

    //Title
    tl.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" }
    );

    // Text
    tl.fromTo(
      textRef.current.querySelectorAll("p"),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", stagger: 0.2 },
      "-=0.8" // Title 끝나기 전에 같이 실행
    );
  }, []);
  return (
    <Container>
      <Title ref={titleRef}>portfolio</Title>
      {/* <ImgeWrapper>
          <img src="/object.png" alt="" />
        </ImgeWrapper> */}
      <Text ref={textRef}>
        <p>&copy;2025</p>
        <p>
          Web
          <br />
          Publisher
        </p>
        <p>
          Designed by
          <br />
          DaYeon Choi
        </p>
      </Text>
    </Container>
  );
};

export default Cover;
