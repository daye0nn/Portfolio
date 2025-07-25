import Globalstyles from "./styles/GlobalStyles.styles";
import { Outlet } from "react-router-dom";
import Lenis from "lenis";
import Header from "./components/Header";

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
      <Header />
      <Outlet />
    </>
  );
}

export default Root;
