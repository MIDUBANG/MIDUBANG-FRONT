/* Upload 페이지 */
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Loading from "@components/Loading/Loading";
import FloatingLoading from "@components/Loading/FloatingLoading";
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.scss";

import First from "@pages/Analyze/Slide/First";
import Second from "@pages/Analyze/Slide/Second";
import Condition1 from "@pages/Analyze/Slide/Condition1";
import Condition2 from "@pages/Analyze/Slide/Condition2";
import Condition3 from "@pages/Analyze/Slide/Condition3";
import Condition4 from "@pages/Analyze/Slide/Condition4";
import Condition5 from "@pages/Analyze/Slide/Condition5";
import Condition6 from "@pages/Analyze/Slide/Condition6";
import Condition7 from "@pages/Analyze/Slide/Condition7";
import Condition8 from "./Slide/Condition8";

import UploadFile from "@components/Analyze/UploadFile";
import { FontTitle } from "@style/font.style";
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
    officetel: "",
  });

  useEffect(() => {
    // Contract type (전세, 월세, 반전세)
    dispatch(setContractType({ contract_type: extraInfo.monthly }));

    if (extraInfo.monthly === "MONTHLY_RENT") {
      dispatch(setContractType({ contract_type: "MONTHLY_RENT" }));
    } else if (extraInfo.monthly === "JEONSE") {
      dispatch(setContractType({ contract_type: "JEONSE" }));
    } else {
      dispatch(setContractType({ contract_type: "HALF_JEONSE" }));
    }

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
        officetel: extraInfo.officetel,
      }),
    );
  }, [upload]);

  useEffect(() => {
    dispatch(setImgUrlReducer({ image_url: imgUrl }));

    dispatch(setContents({ contents: result }));

    if (imgUrl != "" && result.length != 0) navigate("/analyze/feedback");
  }, [imgUrl, result]);

  SwiperCore.use([Pagination]);

  return (
    <Div>
      <SimpleNavBar text="임대차계약서 특약 분석" />

      {!upload ? (
        <Swiper pagination={{ clickable: true }} className="mySwiper">
          <SwiperSlide>
            <First />
          </SwiperSlide>

          <SwiperSlide>
            <Second />
          </SwiperSlide>

          <SwiperSlide>
            <Condition1
              extraInfo={extraInfo}
              setExtraInfo={setExtraInfostate}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Condition8
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
        <Container>
          <FontTitle margin="20px 0 0 37px" size="20px">
            특약 텍스트 추출 중
          </FontTitle>
          <FloatingLoading />

          <WatingFont>열심히 OCR 하는 중...</WatingFont>

          <Loading />
        </Container>
      )}
    </Div>
  );
};

export default Upload;

const Div = styled.div`
  width: 100vw;
  height: 100%;

  padding-top: 69px;

  .mySwiper {
    width: auto;
    height: 100%;
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

const Container = styled.div`
  width: 100%;
  height: auto;
`;
const WatingFont = styled.p`
  margin-left: 9px;
  margin-top: 30px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  color: #959595;
`;
