import client from "@api/common/client";

import { RefreshApi } from "./auth";

// 전체 체크리스트 완료 count수
export const GetAllCheckCount = async (
  refreshToken: string,
  cookie: (res: any) => void
): Promise<any> => {
  try {
    const res = await client.get("checklist/count");
    return res.data;
  } catch (err: any) {
    if (err.response.data.message === "expired token") {
      alert("토큰 만료");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      alert("빈 토큰");
      RefreshApi(refreshToken, cookie);
    }
  }
};

// 항목 별 체크리스트 완료 count 수
export const GetCheckCount = async (
  checklistId: number,
  refreshToken: string,
  cookie: (res: any) => void
): Promise<any> => {
  try {
    const res = await client.get(`checklist/count/${checklistId}`);
    return res.data;
  } catch (err: any) {
    if (err.response.data.message === "expired token") {
      alert("토큰 만료");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      alert("빈 토큰");
      RefreshApi(refreshToken, cookie);
    }
  }
};

// 항목 별 체크리스트
export const GetChecklist = async (
  checklistId: number,
  refreshToken: string,
  cookie: (res: any) => void
): Promise<any> => {
  try {
    const res = await client.get(`checklist/${checklistId}`);
    return res.data;
  } catch (err: any) {
    if (err.response.data.message === "expired token") {
      alert("토큰 만료");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      alert("빈 토큰");
      RefreshApi(refreshToken, cookie);
    }
  }
};

// 토글 체크
export const ToggleChecklist = async (
  checklistId: number,
  refreshToken: string,
  cookie: (res: any) => void
): Promise<any> => {
  try {
    const res = await client.post(`checklist/${checklistId}`);
    return res.data;
  } catch (err: any) {
    if (err.response.data.message === "expired token") {
      alert("토큰 만료");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      alert("빈 토큰");
      RefreshApi(refreshToken, cookie);
    }
  }
};

// 토글 취소
export const UnToggleChecklist = async (
  checklistId: number,
  refreshToken: string,
  cookie: (res: any) => void
): Promise<any> => {
  try {
    console.log("취소 시도");
    const res = await client.delete(`checklist/${checklistId}`);

    return res.data;
  } catch (err: any) {
    if (err.response.data.message === "expired token") {
      alert("토큰 만료");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      alert("빈 토큰");
      RefreshApi(refreshToken, cookie);
    }
  }
};
