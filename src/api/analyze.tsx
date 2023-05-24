import client from "@api/common/client";
import { RefreshApi } from "./auth";
import axios from "axios";
import { FLASK_URL } from "@api/common/url";
import { WarningSwal, ErrorSwal } from "@components/Modal/CustomModal";

const CLIENT_MAIN_URL = process.env.REACT_APP_REACT_URL;

/** (1) OCR 특약 이미지 업로드 */
export const PostContractImg = async (
  user_id: number,
  file: File,
): Promise<any> => {
  try {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("id", user_id.toString());

    const res = await axios.post(`${FLASK_URL}/ocr`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "multipart/form-data",
      },
    });

    return res.data;
  } catch (err: any) {
    console.log("ocr 에러 발생 슈발", err);
    WarningSwal("OCR 에러 발생", "다시 시도해주세요");
  }
};

type extrainfoType = {
  monthly: string;
  lumpSumMoney: number;
  commission: number;
  deposit: number;
  monthlyMoney: number;
  pet: boolean;
  loan: boolean;
  substitute: boolean;
  officetel: string;
};

type NLPtype = {
  contents: string[];
  extraInfo: extrainfoType;
};

/** (2) NLP case 분석 */
export const PostContractCase = async (result: NLPtype): Promise<any> => {
  try {
    console.log("nlp 요청 body : ", result);
    const res = await axios.post(`${FLASK_URL}/nlp`, result);

    return res.data;
  } catch (err: any) {
    ErrorSwal("에러 발생", "다시 시도해주세요.");
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
    // console.log("스프링 요청:", {
    //   commission: commission,
    //   answer_commission: answer_commission,
    //   is_expensive: is_expensive,
    //   contract_type: contract_type,
    //   image_url: image_url,
    //   omissions: omissions,
    //   inclusions: inclusions,
    // });

    const res = await client.post("analysis", {
      commission: commission,
      answer_commission: answer_commission,
      is_expensive: is_expensive,
      contract_type: contract_type,
      image_url: image_url,
      omissions: omissions,
      inclusions: inclusions,
    });

    return res.data;
  } catch (err: any) {
    if (err.response.data.message === "expired token") {
      WarningSwal("에러 발생", "다시 시도해주세요");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      WarningSwal("에러 발생", "로그인 해주세요");
      window.location.href = `${CLIENT_MAIN_URL}login`;
    } else {
      ErrorSwal("에러 발생", "다시 시도해주세요.");
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

    return res;
  } catch (err: any) {
    if (err.response.data.message === "expired token") {
      WarningSwal("에러 발생", "다시 시도해주세요");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      WarningSwal("에러 발생", "로그인 해주세요");
      window.location.href = `${CLIENT_MAIN_URL}login`;
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
    const res = await client.get(`analysis?recordId=${record_id}`);
    return res.data;
  } catch (err: any) {
    if (err.response.data.message === "record_id not exist") {
      WarningSwal("에러 발생", "존재하지 않는 레포트입니다.");
    } else if (err.response.data.message === "expired token") {
      WarningSwal("에러 발생", "다시 시도해주세요");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      WarningSwal("에러 발생", "로그인 해주세요");
      window.location.href = `${CLIENT_MAIN_URL}login`;
    } else {
      ErrorSwal("에러 발생", "다시 시도해주세요.");
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
  } catch (err: any) {
    const message = err.response.data.message;

    if (message === "record_id not exist") {
      WarningSwal("에러 발생", "존재하지 않는 레포트입니다.");
    } else if (err.response.data.message === "expired token") {
      WarningSwal("에러 발생", "다시 시도해주세요");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      WarningSwal("에러 발생", "로그인 해주세요");
      window.location.href = `${CLIENT_MAIN_URL}login`;
    } else {
      ErrorSwal("에러 발생", "다시 시도해주세요.");
    }
  }
};

/** 레포트 요약 */
export const SummarizeReport = async (contents: string[]): Promise<any> => {
  try {
    const res = await axios.post(`${FLASK_URL}/summary`, {
      contents: contents,
    });

    return res;
  } catch (err: any) {
    WarningSwal("에러 발생", "다시 시도해주세요");
  }
};
