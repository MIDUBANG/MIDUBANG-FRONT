import styled from "@emotion/styled";
import logo from "@assets/footer/whitelogo.png";
import github from "@assets/footer/github.png";
import insta from "@assets/footer/insta.png";
import linktree from "@assets/footer/linktree.png";
import form from "@assets/footer/form.png";

const Footer = () => {
  const _handleClickIcon = (path: string) => {
    window.location.href = path;
  };
  return (
    <FooterDiv>
      <Logo src={logo} />

      <Text margin="16px 0 0 0">
        어려운 부동산을 쉽게 만들어가는 <br />
        믿어방 연구소입니다.
      </Text>

      <div className="sns-logo-container">
        <img
          src={github}
          onClick={() =>
            _handleClickIcon("https://github.com/orgs/MIDUBANG/repositories")
          }
        />
        <img
          src={insta}
          onClick={() =>
            _handleClickIcon("https://forms.gle/TuFVuu6mzfNAok7U9")
          }
        />
        <img
          src={linktree}
          onClick={() => _handleClickIcon("https://linktr.ee/midubang")}
        />
      </div>

      <hr />

      <Text margin="4px 0 0 0">오류 제보 및 문의 - dy6578ekdbs@gmail.com</Text>
      <Text margin="4px 0 0 0">CONTACT - dy6578ekdbs@gmail.com</Text>
      <Text margin="4px 0 0 0">Copyright ⓒ 믿어방 부동산 연구소</Text>
    </FooterDiv>
  );
};

export default Footer;

const FooterDiv = styled.div`
  height: 361px;
  width: 100%;

  margin-top: 50px;

  background: #041e42;

  .sns-logo-container {
    margin-top: 45px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 98px;

    img {
      width: 24px;
      height: 24px;
    }
  }

  padding: 42px;

  hr {
    border: 1px solid #546782;
  }
`;

const Logo = styled.img`
  width: 46px;
  height: auto;
`;

const Text = styled.p<{ margin: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;

  color: #ffffff;
  margin: ${props => props.margin};
`;
