import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  /* display: flex; */
  height: 100vh;
  background: #f0f0f0;
  h4 {
    font-size: 4rem;
    font-weight: 500;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 40px;
`;

const ImgWrap = styled.div`
  border: 1px solid #f00;
  width: 20%;
`;

const Img = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
  /* img {
    width: 50%;
  } */
`;

const Info = styled.div``;

const Textwrap = styled.div`
  width: 80%;
  border: 1px solid #f00;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Education = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h5 {
    font-size: 2rem;
  }
`;

const Certification = styled(Education)``;

const Awards = styled(Education)``;

const Profile = () => {
  return (
    <Container>
      <h4>About Me</h4>
      <Wrapper>
        <ImgWrap>
          <Img>
            <img src="/profile.JPG" alt="profile" />
          </Img>
          <Info>
            <h5>최다연</h5>
            <p>2001.12.30</p>
            <p>Phone</p>
            <p>010-2678-1142</p>
            <p>Email</p>
            <p>dayeonnchoi@naver.com</p>
          </Info>
        </ImgWrap>
        <Textwrap>
          <Education>
            <h5>Education</h5>
            <p>2020.02 광남고등학교 졸업</p>
            <p>2020.03 ~ 2023.02 동서울대학교 정보통신과 졸업</p>
            <p>2023.03 ~ 2024.02 동서울대학교 ICT융합학과(학사학위) 졸업</p>
            <p>
              2024.07.03 ~ 2024.07.30 AWS 리눅스 기반 클라우드 데브옵스 기초
              실무 과정 수료
            </p>
            <p>
              2024.12.19 ~ 2025.06.25 UX/UI디자인 웹 프론트엔드개발 부트캠프
              과정 수료
            </p>
          </Education>
          <Certification>
            <h5>Certification</h5>
            <p>2022.07 인공지능전문가 자격증 AIEC</p>
          </Certification>
          <Awards>
            <h5>Awards</h5>
            <p>2022 우수논문상</p>
            <span>자동 제동 기능이 추가된 스마트유모차 연구 우수논문상</span>
          </Awards>
        </Textwrap>
      </Wrapper>
    </Container>
  );
};

export default Profile;
