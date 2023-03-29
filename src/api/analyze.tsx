import client from "@api/common/client";
import { RefreshApi } from "./auth";

import axios from "axios";

/** (1) OCR 특약 이미지 업로드 */
export const PostContractImg = async (
  user_id: number,
  file: File,
  refreshToken: string,
  cookie: (res: any) => void
): Promise<any> => {
  try {
    console.log("OCR 요청 중...");
    const formData = new FormData();
    formData.append("image", file);

    // const data = {
    //   id: user_id.toString(),
    // };

    // formData.append(
    //   "id",
    //   new Blob([JSON.stringify(data)], { type: "application/json" })
    // );

    formData.append("id", user_id.toString());

    // const res = await axios.post("http://34.64.177.249:80/api/ocr", formData, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //     Accept: "multipart/form-data",
    //   },
    // });

    // response = url과 text 결과
    //return res;
    return {
      imgUrl: "https://tempimgurl",
      resultArray: [
        "보증금과 월세는 1년마다 시세에 맞게증금과 월세는 1년마다 시세에 맞게증금과 월세는 1년마다 시세에 맞게증금과 월세는 1년마다 시세에 맞게 올릴 수 있다",
        "보증금과 월세는 1년마다 시세에 맞게증금과 월세는 1년마다 시세에 맞게증금과 월세는 1년마다 시세에 맞게증금과 월세는 1년마다 시세에 맞게 올릴 수 있다",
      ],
    };
  } catch (err: any) {
    console.log("OCR 에러", err);
    alert(
      "이미지 업로드 중 알 수 없는 오류가 발생했습니다. 다시 시도해주세요."
    );

    if (err.response.data.message === "expired token") {
      alert("토큰 만료");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      alert("빈 토큰");
      RefreshApi(refreshToken, cookie);
    } else {
      console.log("?");
    }

    console.log("???");
  }
};

type extrainfoType = {
  monthly: boolean;
  lumpSumMoney: number;
  commission: number;
  deposit: number;
  monthlyMoney: number;
  pet: boolean;
  loan: boolean;
  substitute: boolean;
};

type NLPtype = {
  contents: string[];
  extraInfo: extrainfoType;
};

/** (2) NLP case 분석 */
export const PostContractCase = async (
  result: NLPtype,
  refreshToken: string,
  cookie: (res: any) => void
): Promise<any> => {
  try {
    const res = await axios.post("http://34.64.177.249:5000/api/nlp", result);

    console.log("NLP 성공", res);

    return res.data;
  } catch (err: any) {
    console.log("NLP 에러", err);

    if (err.response.data.message === "expired token") {
      alert("토큰 만료");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      alert("빈 토큰");
      RefreshApi(refreshToken, cookie);
    }
  }
};

/** (3) Spring 특약 분석&저장 */
export const PostAnalyze = async (
  commission: number,
  answer_commission: number,
  is_expensive: boolean,
  contract_type: string,
  image_url: string,
  inclusions: number[],
  omissions: number[],
  refreshToken: string,
  cookie: (res: any) => void
): Promise<any> => {
  try {
    // const res = await client.post("analysis", {
    //   commission: 4,
    //   answer_commission: 12,
    //   is_expensive: false,
    //   contract_type: "JEONSE",
    //   image_url: "http/",
    //   inclusions: [0, 2, 3, 4],
    //   omissions: [5, 6, 7],
    // });
    const res = await client.post("analysis", {
      commission: commission,
      answer_commission: answer_commission,
      is_expensive: is_expensive,
      contract_type: contract_type,
      image_url: image_url,
      inclusions: [0, 2, 3, 4],
      omissions: [5, 6, 7],
    });

    console.log("Spring 성공`", res);
    return res.data;
  } catch (err: any) {
    console.log("Spring 에러", err);

    if (err.response.data.message === "expired token") {
      alert("토큰 만료");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      alert("빈 토큰");
      RefreshApi(refreshToken, cookie);
    }
  }
};

// 분석 리스트 불러오기 ✅
export const GetAnalyzeList = async (
  refreshToken: string,
  cookie: (res: any) => void
): Promise<any> => {
  try {
    const res = await client.get("analysis/list");
    console.log("분석 불러오기 성공", res);

    if (res.data.noRecord === true) {
      return false; //분석 없음
    } else {
      return res.data;
    }
  } catch (err: any) {
    console.log("분석 불러오기 에러", err);

    if (err.response.data.message === "expired token") {
      alert("토큰 만료");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      alert("빈 토큰");
      RefreshApi(refreshToken, cookie);
    }
  }
};

// 개별 분석 불러오기
export const GetAnalyze = async (
  record_id: number,
  refreshToken: string,
  cookie: (res: any) => void
): Promise<any> => {
  try {
    const res = await client.get(`analysis?record_id=${record_id}`);
    console.log("성공", res);
    return res.data;
  } catch (err: any) {
    console.log("에러", err);

    if (err.response.data.message === "record_id not exist") {
      alert("record_id not exist");
    } else if (err.response.data.message === "expired token") {
      alert("토큰 만료");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      alert("빈 토큰");
      RefreshApi(refreshToken, cookie);
    }
  }
};

// 분석 삭제
export const DeleteAnalyze = async (
  record_id: number,
  refreshToken: string,
  cookie: (res: any) => void
) => {
  try {
    const res = await client.delete(`analysis?record_id=${record_id}`);
    console.log(res);
  } catch (err: any) {
    console.log(err);

    const message = err.response.data.message;

    if (message === "record_id not exist") {
      alert("record_id not exist");
    } else if (err.response.data.message === "expired token") {
      alert("토큰 만료");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      alert("빈 토큰");
      RefreshApi(refreshToken, cookie);
    }
  }
};

/** 레포트 요약 */
export const SummarizeReport = async (content: string): Promise<any> => {
  try {
    const res = await axios.post("http://127.0.0.1:5000/api/summary", {
      content: content,
    });

    return res;
  } catch (err: any) {
    console.log("요약 에러", err);
  }
};
