/* Upload 페이지 */

import styled from "@emotion/styled";

import SimpleNavBar from "@components/NavBar/SimpleNavBar";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import "./style.css";
import "swiper/components/pagination/pagination.scss";

import First from "@components/Analyze/First";
import UploadFile from "@components/Analyze/UploadFile";

const Upload = () => {
  SwiperCore.use([Pagination, Autoplay]);

  return (
    <Div>
      <SimpleNavBar />

      <Swiper pagination={{ clickable: true }} className="mySwiper">
        <SwiperSlide>
          <First />
        </SwiperSlide>
        <SwiperSlide>업로드 예시</SwiperSlide>
        <SwiperSlide>
          <UploadFile />
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </Div>
  );
};

export default Upload;

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

const CardSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px;
  border: 1px solid gray;
`;
