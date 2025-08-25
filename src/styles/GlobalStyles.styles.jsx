import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const Globalstyles = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  :root {
    --dark-color: #000;
    --light-color: #fff;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: "Futura", sans-serif;
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 400;
    src: url("./assets/fonts/Pretendard-Regular.woff") format('woff');
}
  @font-face {
    font-family: "Pretendard";
    font-weight: 500;
    src: url("./assets/fonts/Pretendard-Medium.woff") format('woff');
}
  @font-face {
    font-family: "Pretendard";
    font-weight: 700;
    src: url("./assets/fonts/Pretendard-Bold.woff") format('woff');
}

  @font-face {
  font-family: "Futura";
  src: url("./assets/fonts/FuturaCyrillicBold.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
`;

export default Globalstyles;
