/* Upload 페이지 */
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

import SimpleNavBar from "@components/NavBar/SimpleNavBar";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.scss";

import First from "@components/Analyze/First";
import Condition1 from "@pages/Analyze/Slide/Condition1";
import Condition2 from "@pages/Analyze/Slide/Condition2";
import Condition3 from "@pages/Analyze/Slide/Condition3";
import Condition4 from "@pages/Analyze/Slide/Condition4";
import Condition5 from "@pages/Analyze/Slide/Condition5";
import Condition6 from "@pages/Analyze/Slide/Condition6";
import Condition7 from "@pages/Analyze/Slide/Condition7";

import UploadFile from "@components/Analyze/UploadFile";
import { FontTitle } from "@style/font.style";
import loadingPerson from "@assets/illustration/loadingPerson.png";

import { PropsExtra } from "@assets/types";

import { useAppDispatch } from "@store/store";

import { setExtraInfo, setContents } from "@store/extraInfoSlice";
import { setContractType, setImgUrlReducer } from "@store/resultSlice";

// hooks
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const [upload, setUpload] = useState<boolean>(false);

  // 이미지 url은 전역 상태로 관리 필요
  const [imgUrl, setImgUrl] = useState<string>("");
  const [result, setResult] = useState<string[]>([]);

  // extra condition
  const [extraInfo, setExtraInfostate] = useState<PropsExtra>({
    monthly: "",
    lumpSumMoney: 0,
    deposit: 0,
    monthlyMoney: 0,
    commission: 0,
    pet: true,
    loan: true,
    substitute: true,
  });

  useEffect(() => {
    console.log("사진과 extrainfo 업로드");

    console.log(extraInfo);

    // Contract type (전세, 월세, 반전세)
    dispatch(setContractType({ contract_type: extraInfo.monthly }));

    // if (extraInfo.monthly === true) {
    //   dispatch(setContractType({ contract_type: "MONTHLY_RENT" }));
    // } else if (extraInfo.monthly === false) {
    //   dispatch(setContractType({ contract_type: "JEONSE" }));
    // } else {
    //   dispatch(setContractType({ contract_type: "HALF_JEONSE" }));
    // }

    dispatch(
      setExtraInfo({
        monthly: extraInfo.monthly,
        lumpSumMoney: extraInfo.lumpSumMoney,
        deposit: extraInfo.deposit,
        monthlyMoney: extraInfo.monthlyMoney,
        commission: extraInfo.commission,
        pet: extraInfo.pet,
        loan: extraInfo.loan,
        substitute: extraInfo.substitute,
      })
    );
  }, [upload]);

  useEffect(() => {
    console.log("S3 url과 1차 text 결과 저장");

    dispatch(setImgUrlReducer({ image_url: imgUrl }));

    dispatch(setContents({ contents: result }));

    if (imgUrl != "" && result.length != 0) navigate("/feedback");
  }, [imgUrl, result]);

  return (
    <Div>
      <SimpleNavBar text="레포트" />
      {!upload ? (
        <Swiper pagination={{ clickable: true }} className="mySwiper">
          <SwiperSlide>
            <First />
          </SwiperSlide>

          <SwiperSlide>
            <Condition1
              extraInfo={extraInfo}
              setExtraInfo={setExtraInfostate}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Condition2
              extraInfo={extraInfo}
              setExtraInfo={setExtraInfostate}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Condition3
              extraInfo={extraInfo}
              setExtraInfo={setExtraInfostate}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Condition4
              extraInfo={extraInfo}
              setExtraInfo={setExtraInfostate}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Condition5
              extraInfo={extraInfo}
              setExtraInfo={setExtraInfostate}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Condition6
              extraInfo={extraInfo}
              setExtraInfo={setExtraInfostate}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Condition7
              extraInfo={extraInfo}
              setExtraInfo={setExtraInfostate}
            />
          </SwiperSlide>

          <SwiperSlide>
            <UploadFile
              setUpload={setUpload}
              setImgUrl={setImgUrl}
              setResult={setResult}
            />
          </SwiperSlide>
        </Swiper>
      ) : (
        <div>
          <FontTitle margin="20px 0 0 37px">특약 텍스트 추출 중</FontTitle>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <IlluImg src={loadingPerson} />
          </div>
          <ProgressFont>65%</ProgressFont>
          <WatingFont>추출 중...</WatingFont>
        </div>
      )}
    </Div>
  );
};

export default Upload;

const Div = styled.div`
  width: 100%;
  height: 100%;

  .mySwiper {
    width: auto;
    height: 90%;
  }

  .swiper-pagination {
    margin-bottom: 10px;
  }
  .swiper-pagination-bullet {
    background: #d9d9d9 !important;
  }
  .swiper-pagination-bullet-active {
    background: #616161 !important;
  }
`;

const IlluImg = styled.img`
  margin: 35px auto 0 auto;
`;
const ProgressFont = styled.p`
  margin-top: 19px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 60px;
  /* identical to box height */
  text-align: center;
  color: #9b9b9b;
`;

const WatingFont = styled.p`
  margin-left: 9px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 350;
  font-size: 32px;
  line-height: 46px;
  text-align: center;

  color: #959595;
`;
