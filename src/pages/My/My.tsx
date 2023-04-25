import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

// component
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
// asset
import profile from "@assets/my/profile.png";
import background from "@assets/my/background.png";
import { url } from "inspector";
const My = () => {
  const navigate = useNavigate();

  return (
    <Div>
      <SimpleNavBar text="마이페이지" />
      <TopContainer>
        {/* <img src={profile} width={53} height={53} /> */}
        <img src={background} className="background" />

        <p>dy6578님</p>
        <div>
          <p>내 이메일</p>
          <p>dy6578ekdbs@gmail.com</p>
        </div>
      </TopContainer>
      <Container></Container>
    </Div>
  );
};

export default My;

const Div = styled.div`
  width: 100%;
  height: 100%;

  padding-top: 65px;
`;

const TopContainer = styled.div`
  position: relative;

  width: 100%;
  height: 220px;
  border: 1px solid red;
  //background-image: url("${background}");
  background-size: cover;

  //background-size: contain;
  //background-repeat: no-repeat;

  .background {
    position: absolute;
    z-index: -1;

    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
