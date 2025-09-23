import { useEffect, useRef } from "react";
import styled from "styled-components";
import Globalstyles from "./styles/GlobalStyles.styles";
import { Outlet } from "react-router-dom";
import Lenis from "lenis";
import Cover from "./components/Cover";
import Profile from "./components/Profile";
import Intro from "./components/Intro";
import Project from "./components/Project";
import Footer from "./components/Footer";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0f0f0f;
  z-index: -1;
`;

function Root() {
  // Lenis 라이브러리
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  const backgroundRef = useRef(null);
  const introRef = useRef(null);

  useEffect(() => {
    const introSection = document.querySelector(".intro-section");
    if (!introSection) return;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: introSection,
          start: "top 80%",
          end: "bottom top",
          scrub: 1.5,
        },
      })
      .to(backgroundRef.current, {
        backgroundColor: "var(--light-bg)",
        duration: 1.5,
      });
  }, []);

  return (
    <>
      <Globalstyles />
      <Background ref={backgroundRef} />
      <Cover />
      <Profile />
      <Intro ref={introRef} />
      <Project />
      <Footer />
      <Outlet />
    </>
  );
}

export default Root;
