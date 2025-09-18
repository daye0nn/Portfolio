import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background: #f1f2f7;
`;

const ImgWrap = styled.div`
  img {
    width: 100px;
  }
`;

const Skill = () => {
  return (
    <Container>
      <h3>Skill & tools</h3>
      <ImgWrap>
        <img
          src="https://blog.kakaocdn.net/dna/bYUPhz/btrLOgKDYNA/AAAAAAAAAAAAAAAAAAAAAHt9q_GxZYgiNRQ9GXcM6_gZbV7icuNUW-Shro8uOSOv/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1759244399&allow_ip=&allow_referer=&signature=nXgqrINWQvNpzdVxQYdQN6ngNms%3D"
          alt=""
        />
        <img
          src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F998EFA4B5ABB7E9F0B"
          alt=""
        />
        <img
          src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/css3-512.png"
          alt=""
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png"
          alt=""
        />
        <img
          src="https://images.icon-icons.com/2415/PNG/512/javascript_original_logo_icon_146455.png"
          alt=""
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1200px-Typescript.svg.png"
          alt=""
        />
        <img
          src="https://images.icon-icons.com/2415/PNG/512/react_original_logo_icon_146374.png"
          alt=""
        />
        <img
          src="https://miro.medium.com/v2/resize:fit:1080/1*wGdP-ym3kqQopOA9us8nXg.jpeg"
          alt=""
        />
        <img src="https://cdn-icons-png.flaticon.com/256/25/25231.png" alt="" />
        <img
          src="https://images.seeklogo.com/logo-png/44/2/netlify-logo-png_seeklogo-444681.png"
          alt=""
        />
        <img
          src="https://firebase.google.com/static/downloads/brand-guidelines/SVG/logo-standard.svg?hl=ko"
          alt=""
        />
      </ImgWrap>
    </Container>
  );
};

export default Skill;
