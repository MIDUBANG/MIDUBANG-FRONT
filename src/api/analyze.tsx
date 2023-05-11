import client from "@api/common/client";
import { RefreshApi } from "./auth";

import axios from "axios";

/** (1) OCR 특약 이미지 업로드 */
export const PostContractImg = async (
  user_id: number,
  file: File,
): Promise<any> => {
  try {
    console.log("OCR 요청 중...");
    const formData = new FormData();
    formData.append("image", file);
    formData.append("id", user_id.toString());

    const res = await axios.post("https://nlp.midubang.com/api/ocr", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "multipart/form-data",
      },
    });

    return res.data;
  } catch (err: any) {
    alert("OCR 서버 에러 발생! 다시 시도해주세요");
    console.log(err);
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
  cookie: (res: any) => void,
): Promise<any> => {
  try {
    const res = await axios.post("https://nlp.midubang.com/api/nlp", result);

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

type inlcusion = {
  caseNo: number;
  rawCase: string;
};
/** (3) Spring 특약 분석&저장 */
export const PostAnalyze = async (
  commission: number,
  answer_commission: number,
  is_expensive: boolean,
  contract_type: string,
  image_url: string,
  inclusions: inlcusion[],
  omissions: number[],
  refreshToken: string,
  cookie: (res: any) => void,
): Promise<any> => {
  try {
    console.log("스프링 요청:", {
      commission: commission,
      answer_commission: answer_commission,
      is_expensive: is_expensive,
      contract_type: contract_type,
      image_url: image_url,
      omissions: omissions,
      inclusions: inclusions,
    });

    const res = await client.post("analysis", {
      commission: commission,
      answer_commission: answer_commission,
      is_expensive: is_expensive,
      contract_type: contract_type,
      image_url: image_url,
      omissions: omissions,
      inclusions: inclusions,
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
  cookie: (res: any) => void,
): Promise<any> => {
  try {
    const res = await client.get("analysis/list");
    console.log("분석 불러오기 성공", res);

    return res;
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
  cookie: (res: any) => void,
): Promise<any> => {
  try {
    console.log("api 내부 try 실행");
    const res = await client.get(`analysis?recordId=${record_id}`);
    console.log("성공 >>>> ", res);
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
  recordId: number,
  refreshToken: string,
  cookie: (res: any) => void,
) => {
  try {
    const res = await client.delete(`analysis?recordId=${recordId}`);
    console.log("분석 삭제", res);
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
export const SummarizeReport = async (contents: string[]): Promise<any> => {
  try {
    const res = await axios.post("https://nlp.midubang.com/api/summary", {
      contents: contents,
    });

    return res;
  } catch (err: any) {
    console.log("요약 에러", err);
  }
};
