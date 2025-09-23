import { useEffect, useRef } from "react";
import gsap from "gsap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { text } from "@fortawesome/fontawesome-svg-core";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  span {
    text-align: center;
    color: var(--sub-text);
    margin-bottom: 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 300px 60px 100px 60px;
  align-items: center;
`;

const Text = styled.h4`
  font-size: 14rem;
  font-weight: 500;
`;

const Contact = styled.ul`
  display: flex;
  gap: 20px;
  font-size: 4rem;
  a {
    color: var(--sub-text);
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      color: var(--dark-color);
    }
  }
`;

const Footer = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.set(textRef.current, {
      yPercent: 110,
      rotateX: -45,
      transformOrigin: "0% 50% -100%",
      opacity: 0,
      transformStyle: "preserve-3d",
    });

    gsap.to(textRef.current, {
      yPercent: 0,
      rotateX: 0,
      opacity: 1,
      transformOrigin: "50% 50%",
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);
  return (
    <Container>
      <Wrapper>
        <Text ref={textRef}>Contact Me</Text>
        <Contact>
          <a href="mailto:dayeonnchoi@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://github.com/daye0nn" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Contact>
      </Wrapper>
      <span>&copy; 2025 choidayeon. All rights reserved.</span>
    </Container>
  );
};

export default Footer;
