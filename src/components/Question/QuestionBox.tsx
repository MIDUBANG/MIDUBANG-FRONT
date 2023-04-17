import styled from "@emotion/styled";
import dino1 from "@assets/question/dino1.png";
import user from "@assets/question/user.png";
import comment from "@assets/question/comment.png";

type QuestionType = {
  author: string;
  title: string;
  commentCount: number;
};

type Props = {
  question: QuestionType;
};

const QuestionBox = ({ question }: Props) => {
  const isDino = question.author === "챗쪽이" ? true : false;
  return (
    <BoxDiv isDino={isDino}>
      <img src={isDino ? dino1 : user} width={27} height={27} />

      <div className="texts">
        <p>{question.author}</p>
        <p>{question.title}</p>
      </div>

      <div className="comment">
        <img src={comment} width={15} height={15} />
        <p>{question.commentCount}</p>
      </div>
    </BoxDiv>
  );
};

export default QuestionBox;

const BoxDiv = styled.div<{ isDino: boolean }>`
  padding: 6px 12px 12px 12px;
  width: 346px;
  height: 85px;

  display: flex;

  .texts {
  }
  border: ${(props) =>
    props.isDino ? "0.5px solid #4880ee" : "0.5px solid rgba(42, 42, 42, 0.2)"};
  border-radius: 9px;

  margin-bottom: 12px;
`;
