import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { textAni } from "../js/animation";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

gsap.registerPlugin(ScrollTrigger);

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
  /* margin: 300px 60px 100px 60px; */
  margin: 34vh 6vw 14vh 6vw;
  align-items: center;
`;

const Text = styled.h4`
  font-size: 14rem;
  font-weight: 500;
  @media (max-width: 1023px) {
    font-size: 10rem;
  }
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
  @media (max-width: 1023px) {
    font-size: 3.6rem;
  }
`;

const Footer = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".footer-trigger",
            start: "top center",
            toggleActions: "play none none reverse",
          },
        })
        .add(textAni(textRef.current));

      // gsap.set(textRef.current, {
      //   yPercent: 110,
      //   rotateX: -45,
      //   opacity: 0,
      //   transformOrigin: "0% 50% -100%",
      //   transformStyle: "preserve-3d",
      // });

      // tl.to(textRef.current, {
      //   yPercent: 0,
      //   rotateX: 0,
      //   opacity: 1,
      //   transformOrigin: "50% 50%",
      //   duration: 1.2,
      //   ease: "power3.out",
      // });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Container className="footer-trigger">
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
