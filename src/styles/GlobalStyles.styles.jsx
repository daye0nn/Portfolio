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
    --sub-color: #858585;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: "Avenir","Pretendard", sans-serif;
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
  font-family: "Avenir";
  src: url("./assets/fonts/Avenir Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}
  @font-face {
  font-family: "Avenir";
  src: url("./assets/fonts/Avenir Heavy.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
}
`;

export default Globalstyles;
