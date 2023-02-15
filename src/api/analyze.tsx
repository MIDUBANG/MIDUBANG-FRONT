import client from "@api/common/client";
import { RefreshApi } from "./auth";

/** (1) OCR 특약 이미지 업로드 */
export const PostContractImg = async (
  file: File,
  refreshToken: string,
  cookie: (res: any) => void
): Promise<any> => {
  try {
    const formData = new FormData();
    formData.append("image", file);

    // 5000포트 axios로 변경 필요
    const res = await client.post("/플라스크이미지", formData, {
      headers: { "content-type": "multipart/form-data" },
    });

    console.log("OCR 성공", res);

    // response = url과 추출 텍스트 결과
    return res.data;

    // .post("/upload", formData, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    //   onUploadProgress,
    // });

    // S3 이미지 url 응답으로 받음
  } catch (err: any) {
    console.log("OCR 에러", err);

    if (err.response.data.message === "expired token") {
      alert("토큰 만료");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      alert("빈 토큰");
      RefreshApi(refreshToken, cookie);
    }
  }
};

/** (2) NLP case 분석 */
export const PostContractCase = async (
  resultArray: string[],
  refreshToken: string,
  cookie: (res: any) => void
): Promise<any> => {
  try {
    // 5000포트 axios로 변경 필요
    const res = await client.post("nlp", resultArray);
    console.log("NLP 성공", res);
    return res.data;

    //   {
    //     "in": answer_in,
    //     "out": answer_out,
    //     "answer_commission": answer_commission,
    //     "is_expensive": is_expensive,
    // }
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
    const res = await client.post("analysis", {
      commission: commission,
      answer_commission: answer_commission,
      is_expensive: is_expensive,
      contract_type: contract_type,
      image_url: image_url,
      inclusions: inclusions,
      omissions: omissions,
    });

    console.log("Spring 성공", res);
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
