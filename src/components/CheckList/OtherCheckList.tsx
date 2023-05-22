import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

// assets
import arrow from "@assets/checklist/arrows/arrow1.png";
import { checkCategoryData } from "@assets/checkCategoryData";

type Props = { except: number };

const OtherCheckList = ({ except }: Props) => {
  const navigate = useNavigate();

  /** 다른 카테고리로 이동하는 클릭 함수 */
  const _handleClickOtherCategory = (id: number) => {
    navigate(`/checklist/${id}`);
  };
  return (
    <BackgroundBox>
      <p className="title">
        Related <span>Checklists</span>
      </p>
      <div className="view-box">
        <p>View all</p> <img src={arrow} width={36} height={11} />
      </div>

      {checkCategoryData.map(d => {
        if (d.id !== except) {
          return (
            <CheckBtnBox onClick={() => _handleClickOtherCategory(d.id)}>
              <img src={d.emoji} width={27} height={27} />
              <p>{d.title}</p>
            </CheckBtnBox>
          );
        }
      })}
    </BackgroundBox>
  );
};

export default OtherCheckList;

const BackgroundBox = styled.div`
  width: 100%;
  height: auto;
  background: #f0faf9;
  border-radius: 19px;

  display: flex;
  flex-direction: column;

  padding: 43px 26px;

  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;

    span {
      color: #407682;
    }
  }

  .view-box {
    margin-top: 9px;
    margin-bottom: 21px;

    display: flex;

    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      color: #407682;
      margin-right: 12px;
    }
  }
`;

const CheckBtnBox = styled.div`
  width: 100%;
  height: 74px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  display: flex;
  justify-content: start;
  align-items: center;

  margin-bottom: 18px;

  img {
    margin: 0 14px 0 25px;
  }

  p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #000000;
  }
`;
