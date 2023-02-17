import client from "@api/common/client";
import { RefreshApi } from "./auth";

/** (1) OCR 특약 이미지 업로드 */
export const PostContractImg = async (
  user_id: number,
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

    // response = url과 text 결과
    return {
      imgUrl: "https/블라블라 결과물",
      resultArray: [
        {
          id: 1,
          contract:
            "보증금과 월세는 1년마다 시세에 맞게증금과 월세는 1년마다 시세에 맞게증금과 월세는 1년마다 시세에 맞게증금과 월세는 1년마다 시세에 맞게 올릴 수 있다",
        },
        {
          id: 2,
          contract:
            "보증금과 월세는 1년마다 시세에 맞게증금과 월세는 1년마다 시세에 맞게증금과 월세는 1년마다 시세에 맞게증금과 월세는 1년마다 시세에 맞게 올릴 수 있다",
        },
      ],
    };

    // .post("/upload", formData, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    //   onUploadProgress,
    // });

    // S3 이미지 url 응답으로 받음
  } catch (err: any) {
    return {
      imgUrl: "https/블라블라 결과물",
      resultArray: [
        {
          id: 1,
          contract:
            "보증금과 월세는 1년마다 시세에 맞게증금과 월세는 1년마다 시세에 맞게증금과 월세는 1년마다 시세에 맞게증금과 월세는 1년마다 시세에 맞게 올릴 수 있다",
        },
        {
          id: 2,
          contract:
            "보증금과 월세는 1년마다 시세에 맞게증금과 월세는 1년마다 시세에 맞게증금과 월세는 1년마다 시세에 맞게증금과 월세는 1년마다 시세에 맞게 올릴 수 있다",
        },
      ],
    };

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
    // 5000포트 axios로 변경 필요
    client.defaults.baseURL = "http://34.64.177.249:5000/api/";
    const res = await client.post("/nlp", result);
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
