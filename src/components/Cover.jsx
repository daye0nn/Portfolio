import React from "react";
import styled, { keyframes } from "styled-components";
import Profile from "./Profile";
import Skill from "./Skill";
import Project from "./Project";
import Footer from "./Footer";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  color: var(--dark-color);
  text-transform: uppercase;
  font-size: 30rem;
  position: absolute;
  top: 20%;
`;

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;

const ImgeWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  img {
    width: 300px;
    object-fit: cover;
    animation: ${float} 3s ease-in-out infinite;
  }
`;

const Text = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 2.6rem;
  padding: 0 20px;
  position: absolute;
  bottom: 0;
  margin-bottom: 30px;
`;

const Cover = () => {
  return (
    <>
      <Container>
        <Title>portfolio</Title>
        <ImgeWrapper>
          <img src="/object.png" alt="" />
        </ImgeWrapper>
        <Text>
          <p>FrontEnd Developer</p>
          <p> CHOI Da Yeon</p>
        </Text>
      </Container>
      <Profile />
      <Skill />
      <Project />
      <Footer />
    </>
  );
};

export default Cover;
