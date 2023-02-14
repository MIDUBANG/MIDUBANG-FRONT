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

const Upload = () => {
  const [upload, setUpload] = useState<boolean>(false);

  // 이미지 url은 전역 상태로 관리 필요
  const [imgUrl, setImgUrl] = useState<string>("");
  const [result, setResult] = useState<string[]>([]);

  // extra condition
  const [extraInfo, setExtraInfo] = useState<PropsExtra>({
    monthly: true, // false면 전세
    lumpSumMoney: 0, // 전세금
    deposit: 0, //보증금
    monthlyMoney: 0, // 월세(차임)
    commission: 0, //복비,
    pet: true, // 반려동물
    loan: true, // 전세대출 (case (유효-필수 20번))
    substitute: true, // 대리인
  });

  useEffect(() => {
    console.log("변함", extraInfo);
  }, [extraInfo]);

  return (
    <Div>
      <SimpleNavBar text="레포트" />
      {!upload ? (
        <Swiper pagination={{ clickable: true }} className="mySwiper">
          <SwiperSlide>
            <First />
          </SwiperSlide>

          <SwiperSlide>
            <Condition1 extraInfo={extraInfo} setExtraInfo={setExtraInfo} />
          </SwiperSlide>

          <SwiperSlide>
            <Condition2 extraInfo={extraInfo} setExtraInfo={setExtraInfo} />
          </SwiperSlide>

          <SwiperSlide>
            <Condition3 extraInfo={extraInfo} setExtraInfo={setExtraInfo} />
          </SwiperSlide>

          <SwiperSlide>
            <Condition4 extraInfo={extraInfo} setExtraInfo={setExtraInfo} />
          </SwiperSlide>

          <SwiperSlide>
            <Condition5 extraInfo={extraInfo} setExtraInfo={setExtraInfo} />
          </SwiperSlide>

          <SwiperSlide>
            <Condition6 extraInfo={extraInfo} setExtraInfo={setExtraInfo} />
          </SwiperSlide>

          <SwiperSlide>
            <Condition7 extraInfo={extraInfo} setExtraInfo={setExtraInfo} />
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
