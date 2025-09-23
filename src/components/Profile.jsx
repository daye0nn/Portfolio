import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: #f8f8f8;
  /* background: #f0f0f0; */
  /* h3 {
    padding: 60px;
    font-size: 4rem;
    font-weight: 500;
  } */
  h3 {
    font-size: 5rem;
    padding: 2vw 4vw;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 180px;
  padding-left: 14%;
  align-items: center;
  border: 1px solid #f00;
`;

const ImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  gap: 20px;
  border: 1px solid #f00;
`;

const Img = styled.div`
  position: relative;
  h3 {
    font-size: 5rem;
    position: absolute;
    left: 0;
    top: -8%;
  }
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  /* img {
    width: 50%;
  } */
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  h4 {
    /* font-size: 2.6rem; */
    font-size: 2rem;
    b {
      font-size: 3rem;
      font-weight: 600;
    }
  }
`;

const Textwrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14vh;
`;

const Education = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h4 {
    font-size: 3rem;
  }
  p {
    font-size: 2rem;
    /* line-height: 1.4; */
    span {
      color: var(--sub-text);
    }
  }
`;

const Introduce = styled(Education)``;

const Certification = styled(Education)``;

const Awards = styled(Education)``;

const Profile = () => {
  return (
    <Container>
      <h3>About Me</h3>
      <Wrapper>
        <ImgWrap>
          <Img>
            <img src="/profile.jpg" alt="profile" />
          </Img>
          <Info>
            <h4>
              <b>최 다 연</b> / CHOI DaYeon
            </h4>
            <Introduce>
              <h4>Introduce</h4>
              <p>2001.12.30</p>
              <p>010.2678.1142</p>
              <p>dayeonnchoi@gmail.com</p>
            </Introduce>
          </Info>
        </ImgWrap>
        <Textwrap>
          <Education>
            <h4>Education</h4>
            <p>
              <span>2024.12 ~ 2025.06</span> UX/UI디자인 웹 프론트엔드개발
              부트캠프 과정 수료
            </p>
            <p>
              <span>2024.07 ~ 2024.07</span> AWS 리눅스 기반 클라우드 데브옵스
              기초 실무 과정 수료
            </p>
            <p>
              <span>2023.03 ~ 2024.02</span> 동서울대학교 ICT융합학과(학사학위)
              졸업
            </p>
            <p>
              <span>2020.03 ~ 2023.02</span> 동서울대학교 정보통신과 졸업
            </p>
            <p>
              <span>2020.02</span> 광남고등학교 졸업
            </p>
          </Education>
          <Certification>
            <h4>Certification</h4>
            <p>
              <span>2022.07</span> 인공지능전문가 자격증 AIEC
            </p>
          </Certification>
          <Awards>
            <h4>Awards</h4>
            <p>
              <span>2022</span> 우수논문상
            </p>
            <span>자동 제동 기능이 추가된 스마트유모차 연구 우수논문상</span>
          </Awards>
        </Textwrap>
      </Wrapper>
    </Container>
  );
};

export default Profile;
