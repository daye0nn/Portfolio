import React from "react";
import styled, { keyframes } from "styled-components";
import Profile from "./Profile";
import Project from "./Project";

const Container = styled.div`
  background: var(--dark-color);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  color: var(--light-color);
  text-transform: uppercase;
  font-size: 25rem;
`;

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;

const ImgeWrapper = styled.div`
  img {
    width: 300px;
    object-fit: cover;
    animation: ${float} 3s ease-in-out infinite;
  }
`;

const Text = styled.div`
  color: var(--light-color);
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
          <p>
            FrontEnd Developer
            <br />
            CHOI Da Yeon
          </p>
        </Text>
      </Container>
      <Profile />
      <Project />
    </>
  );
};

export default Cover;
