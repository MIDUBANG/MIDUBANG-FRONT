import styled from "@emotion/styled";
import profile from "@assets/text/profile.png";

type PropsType = {
  text: string[];
};

const LeftMessageBubble = ({ text }: PropsType) => {
  return (
    <LeftMessageBox>
      <div className="top-box">
        <ProfileImg src={profile} />
        <p className="name">믿어방</p>
      </div>

      <LeftBubble>
        {text.map(t => (
          <p>{t}</p>
        ))}
      </LeftBubble>
    </LeftMessageBox>
  );
};

export default LeftMessageBubble;
const ProfileImg = styled.img`
  width: 37px;
  height: 37px;
`;

const LeftMessageBox = styled.div`
  margin-top: 22px;

  .name {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;

    color: #505050;
    margin-left: 10px;
  }

  .top-box {
    display: flex;

    align-items: center;
  }
`;

const LeftBubble = styled.div`
  position: relative;

  width: auto;
  height: auto;
  min-width: 220px;
  max-width: 80%;

  padding: 16px;
  margin: 10px 0 0 8px;

  background: #f8f9fe;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 0px 20px 20px 20px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 350;
  font-size: 13px;
  line-height: 19px;
  color: black;

  span {
    font-weight: 500;
  }

  .name {
    font-weight: 700;
    margin-bottom: 5px;
  }
`;
