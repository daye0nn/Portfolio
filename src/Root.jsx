import Globalstyles from "./styles/GlobalStyles.styles";
import { Outlet } from "react-router-dom";
import Lenis from "lenis";
import Header from "./components/Header";
import Cover from "./components/Cover";
import Profile from "./components/Profile";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Footer from "./components/Footer";

function Root() {
  // lenis 라이브러리
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
      <Globalstyles />
      <Cover />
      <Profile />
      <Project />
      <Footer />
      <Outlet />
    </>
  );
}

export default Root;
