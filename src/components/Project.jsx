import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: #191919;
  color: var(--light-color);
  border-radius: 30px;
  overflow: hidden;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
  margin-top: 100px;
  margin-left: 60px;
  h4 {
    font-size: 4rem;
  }
  p {
    font-size: 2rem;
  }
`;

const Horizontal = styled.div`
  position: absolute;
  left: 0;
  bottom: 80px;
  display: flex;
  width: max-content;
  gap: 60px;
  /* padding-right: 60px; */
  padding: 0 60px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h4 {
    font-size: 2rem;
    margin-left: 10px;
  }
`;

const Item = styled.div`
  width: 600px;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: cover;
    transition: transform 0.3s;
  }
  &:hover img {
    transform: scale(1.1);
  }
  &:hover div {
    /* transform: translateY(0); */
    opacity: 1;
  }
`;

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  opacity: 0;
  /* transform: translateY(100%); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  gap: 15px;
  transition: transform 0.4s ease, opacity 0.4s ease;
  p {
    line-height: 1.6;
  }
  span {
    padding: 10px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.6);
    font-size: 1.4rem;
  }
`;

const Icon = styled.div`
  display: flex;
  gap: 10px;
  img {
    width: 40px;
    height: 40px;
    /* aspect-ratio: 1; */
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  }
`;

const Link = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  a {
    &:hover {
      text-decoration: underline;
    }
  }
`;

// gsap 가로 스크롤
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const sectionRef = useRef(null); // useRef로 참조할 요소
  const containerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    const scrollWidth = section.scrollWidth;
    const windowWidth = window.innerWidth;

    const scroll = scrollWidth - windowWidth;

    const ctx = gsap.context(() => {
      gsap.to(section, {
        x: -scroll,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${scroll}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      //카드 애니메이션
      gsap.from(".card", {
        y: 100, //아래에서 시작
        opacity: 0,
        stagger: 0.2, // 순차적으로 나타나는 간격
        duration: 1,
        ease: "power3.out", // easing 함수 => 빠르게 시작해서 부드럽게 감속하며 멈춤
        scrollTrigger: {
          trigger: container,
          start: "top center",
        },
      });
    }, container);

    return () => ctx.revert(); // 안전한 cleanup
  }, []);

  return (
    <Container ref={containerRef}>
      <Title>
        <h4>Project</h4>
        <p>개인 및 팀 프로젝트입니다.</p>
      </Title>
      <Horizontal ref={sectionRef}>
        <Card className="card">
          <h4>Music Player</h4>
          <Item>
            <img src="/img/musicplayer.JPG" alt="musicplayer" />
          </Item>
        </Card>
        <Card className="card">
          <h4>농담</h4>
          <Item>
            <img src="/img/nongdam.JPG" alt="nongdam" />
            <Info>
              <span>Team Project</span>
              <p>
                농담은 수확 및 가공 과정에서 외형적 기준으로 버려지던 못난이
                농산물을 선별해 합리적인 가격에 제공함으로써, 가치 소비와 합리적
                소비를 동시에 실현하는 농산물 커머스 플랫폼입니다.
              </p>
              <Icon>
                <img src="/img/html-icon.png" alt="html" />
                <img src="/img/css-icon.png" alt="css" />
                <img src="/img/js-icon.png" alt="js" />
              </Icon>
              <Link>
                <a href="https://github.com/daye0nn/NongDam" target="_blank">
                  Github
                </a>
                <a
                  href="https://nongdam.netlify.app/index.html"
                  target="_blank"
                >
                  Site
                </a>
              </Link>
            </Info>
          </Item>
        </Card>
        <Card className="card">
          <h4>ZIP</h4>
          <Item>
            <img src="/img/zip.JPG" alt="zip" />
            <Info>
              <span>Team Project</span>
              <p>
                ZIP은 패션 매거진의 인마이백 영상 속 제품을 기반으로, 스타의
                실제 사용템만을 선별하여 소개하고 판매하는 OTT와 커머스를 결합한
                플랫폼입니다.
              </p>
              <Icon>
                <img src="/img/react-icon.png" alt="react" />
                <img
                  src="/img/styledcomponent-icon.png"
                  alt="styled-components"
                />
                <img src="/img/reactQuery-icon.png" alt="reactQuery" />
                <img src="/img/vite-icon.png" alt="vite" />
                <img src="/img/firebase-icon.png" alt="firebase" />
              </Icon>
              <Link>
                <a href="https://github.com/daye0nn/ZIP." target="_blank">
                  Github
                </a>
                <a
                  href="https://zip-project-ddd42.firebaseapp.com/"
                  target="_blank"
                >
                  Site
                </a>
              </Link>
            </Info>
          </Item>
        </Card>
      </Horizontal>
    </Container>
  );
};

export default Project;
