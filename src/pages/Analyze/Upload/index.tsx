import styled from "@emotion/styled";
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
import logoPerson from "@assets/illustration/logo&person.png";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper.min.css";

import "./style.css";
import "swiper/components/pagination/pagination.scss";

const Upload = () => {
  SwiperCore.use([Pagination, Autoplay]);

  return (
    <Div>
      <SimpleNavBar />

      <Swiper pagination={{ clickable: true }} className="mySwiper">
        <SwiperSlide>
          <Illustration src={logoPerson} />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </Div>
  );
};

export default Upload;

const Div = styled.div`
  width: 100%;
`;

const CardSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px;
  border: 1px solid gray;
`;

const Illustration = styled.img`
  margin: 50px auto 0 auto;
`;
