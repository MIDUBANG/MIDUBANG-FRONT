/* Upload 페이지 */
import { useState } from "react";
import styled from "@emotion/styled";

import SimpleNavBar from "@components/NavBar/SimpleNavBar";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.scss";

import First from "@components/Analyze/First";
import UploadFile from "@components/Analyze/UploadFile";
import { FontTitle } from "@style/font.style";
import loadingPerson from "@assets/illustration/loadingPerson.png";

const Upload = () => {
  const [upload, setUpload] = useState<boolean>(false);

  // 이미지 url은 전역 상태로 관리 필요
  const [imgUrl, setImgUrl] = useState<string>("");
  const [result, setResult] = useState<string[]>([]);

  return (
    <Div>
      <SimpleNavBar text="레포트" />
      {!upload ? (
        <Swiper pagination={{ clickable: true }} className="mySwiper">
          <SwiperSlide>
            <First />
          </SwiperSlide>

          <SwiperSlide>업로드 예시</SwiperSlide>

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
