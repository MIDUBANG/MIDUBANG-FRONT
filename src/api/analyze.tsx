import client from "@api/common/client";
import { RefreshApi } from "./auth";

// 특약 분석&저장
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
    const res = await client.post("analysis");
    console.log("성공", res);
    return res.data;
  } catch (err: any) {
    console.log("에러", err);

    if (err.response.data.message === "expired token") {
      alert("토큰 만료");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      alert("빈 토큰");
      RefreshApi(refreshToken, cookie);
    }
  }
};

// 분석 리스트 불러오기
export const GetAnalyzeList = async (
  refreshToken: string,
  cookie: (res: any) => void
): Promise<any> => {
  try {
    const res = await client.get("analysis/list");
    console.log("성공", res);
    return res.data;
  } catch (err: any) {
    console.log("에러", err);

    if (err.response.data.message === "expired token") {
      alert("토큰 만료");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      alert("빈 토큰");
      RefreshApi(refreshToken, cookie);
    }
  }
};
// 분석 하나 불러오기
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
