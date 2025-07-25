import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--dark-color);
  border-radius: 30px;
`;

const Title = styled.h4`
  font-size: 4rem;
  color: var(--light-color);
`;

const Project = () => {
  return (
    <Container>
      <Title>Team Project</Title>
    </Container>
  );
};

export default Project;
