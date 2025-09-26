import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import projectData from "../js/projectData";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.section`
  position: relative;
  width: 100%;
  padding-bottom: 80vh;
`;

const Card = styled.div`
  width: 100%;
  height: 80vh;
  margin-bottom: 50px;
  border-radius: 10px;
  color: #f5f5f5;
  /* background-color: #b5b5ba; */
  /* background-color: #121212; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  overflow: hidden;
  .mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;

const Type = styled.h3`
  position: absolute;
  top: 4%;
  left: 4%;
  font-size: 3rem;
  color: #888;
  font-style: italic;
`;

const Wrapper = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 767px) {
    width: 80%;
  }
`;

const Info = styled.div`
  width: 100%;
  padding: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  h4 {
    font-size: 8rem;
    font-weight: bold;
    margin-bottom: 14px;
    padding-top: 10rem;
  }
  p {
    word-break: keep-all;
    white-space: normal;
    line-height: 1.4;
  }
  @media (max-width: 1023px) {
    h4 {
      font-size: 7rem;
    }
  }
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
  color: var(--sub-text);
  p {
    white-space: nowrap;
  }
`;

const Link = styled.div`
  display: flex;
  gap: 20px;
  a {
    display: flex;
    align-items: center;
    font-weight: 100;
    gap: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(16, 18, 20, 0.25);
    backdrop-filter: blur(20px);
    padding: 10px 18px;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    svg {
      transform: rotate(-45deg);
      display: inline-block;
    }
    &:hover {
      background: var(--light-color);
      color: var(--dark-color);
    }
  }
`;

const Project = () => {
  useEffect(() => {
    const cards = gsap.utils.toArray(".card");
    const lastCard = cards[cards.length - 1];

    cards.forEach((card, index) => {
      // scale 애니메이션
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: () => `top bottom-=100`,
          end: () => `top top+=40`,
          scrub: true,
          invalidateOnRefresh: true,
        },
        ease: "none",
        scale: 1 - (cards.length - index) * 0.025,
        // backgroundColor: "#87878A",
        backgroundColor: "#1e1e1e",
      });

      // pin 고정
      ScrollTrigger.create({
        trigger: card,
        start: "center center",
        pin: true,
        pinSpacing: false,
        id: `pin-${index}`,
        endTrigger: lastCard,
        end: "bottom top",
        invalidateOnRefresh: true,
      });
    });
  }, []);

  return (
    <>
      <Container>
        {projectData.map((project) => (
          <Card key={project.id} className="card">
            <div className="mask"></div>
            <img src={project.image} alt={project.title} />
            {project.type && <Type>{project.type}</Type>}
            <Wrapper>
              <Info>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                {project.role && <p>position : {project.role}</p>}
                <Skills>
                  {project.skills.map((skill, idx) => (
                    <p key={idx}>{skill}</p>
                  ))}
                </Skills>
                <Link>
                  <a href={project.site} target="_blank" rel="noreferrer">
                    Site
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                  <a href={project.code} target="_blank" rel="noreferrer">
                    Code Review
                  </a>
                </Link>
              </Info>
            </Wrapper>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default Project;
