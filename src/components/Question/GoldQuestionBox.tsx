import styled from "@emotion/styled";
import user from "@assets/question/user.png";
import comment from "@assets/question/comment.png";

import { GoldQuestionType } from "@assets/types";

type QuestionPropsType = {
  question: GoldQuestionType;
  onClick: () => void;
};

const GoldQuestionBox = ({ question, onClick }: QuestionPropsType) => {
  return (
    <BoxDiv onClick={onClick}>
      <Profile>
        <img src={user} width={25} height={25} />
      </Profile>

      <div className="texts">
        <p className="author">{question.writer.split("@")[0]}님</p>
        <p className="title">{question.title}</p>

        <p className="content">{question.content.substring(0, 48)}</p>
      </div>

      <div className="comment-box">
        <img src={comment} width={15} height={15} />
        <p>{question.numOfComments}</p>
      </div>
    </BoxDiv>
  );
};

export default GoldQuestionBox;

const BoxDiv = styled.div`
  padding: 9px 12px 17px 12px;
  width: 100%;
  height: auto;
  min-height: 85px;

  display: flex;

  border: 0.5px solid rgba(42, 42, 42, 0.2);
  border-radius: 9px;
  margin-bottom: 12px;

  p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    color: #000000;
  }

  .texts {
    margin: 5px 0 0 11px;
  }

  .title {
    font-weight: 500;
    font-size: 14px;

    margin-top: 7px;
  }

  .content {
    font-weight: 400;
    font-size: 12px;
    color: #8c8c8c;

    margin-top: 4px;
  }

  .comment-box {
    display: flex;
    align-self: flex-end;
    margin-left: auto;

    p {
      margin-left: 3px;
      color: #5a73fc;
    }
  }

  &:active {
    background-color: rgba(90, 115, 252, 0.1);
  }
`;

const Profile = styled.div`
  width: 25px;
  height: 25px;
  background: #f0f0f0;
  border-radius: 12.5px;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
  }
`;
