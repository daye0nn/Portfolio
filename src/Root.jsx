import { useEffect, useRef } from "react";
import styled from "styled-components";
import Globalstyles from "./styles/GlobalStyles.styles";
import { Outlet } from "react-router-dom";
import Lenis from "lenis";
import Cover from "./pages/Cover";
import Profile from "./pages/Profile";
import Intro from "./pages/Intro";
import Project from "./pages/Project";
import Footer from "./pages/Footer";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-bg);
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
