import client from "@api/common/client";

import { RefreshApi } from "./auth";
import { WarningSwal, ErrorSwal } from "@components/Modal/CustomModal";
const CLIENT_MAIN_URL = process.env.REACT_APP_REACT_URL;

// 전체 체크리스트 완료 count수
export const GetAllCheckCount = async (
  refreshToken: string,
  cookie: (res: any) => void,
): Promise<any> => {
  try {
    const res = await client.get("checklist/count");
    return res.data;
  } catch (err: any) {
    if (err.response.data.message === "expired token") {
      //WarningSwal("에러 발생", "다시 시도해주세요");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      WarningSwal("에러 발생", "로그인 해주세요");
      window.location.href = `${CLIENT_MAIN_URL}login`;
    } else {
      ErrorSwal("에러 발생", "다시 시도해주세요.");
    }
  }
};

// 항목 별 체크리스트 완료 count 수
export const GetCheckCount = async (
  checklistId: number,
  refreshToken: string,
  cookie: (res: any) => void,
): Promise<any> => {
  try {
    const res = await client.get(`checklist/count/${checklistId}`);
    return res.data;
  } catch (err: any) {
    if (err.response.data.message === "expired token") {
      //WarningSwal("에러 발생", "다시 시도해주세요");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      WarningSwal("에러 발생", "로그인 해주세요");
      window.location.href = `${CLIENT_MAIN_URL}login`;
    } else {
      ErrorSwal("에러 발생", "다시 시도해주세요.");
    }
  }
};

// 항목 별 체크리스트
export const GetChecklist = async (
  checklistId: number,
  refreshToken: string,
  cookie: (res: any) => void,
): Promise<any> => {
  try {
    const res = await client.get(`checklist/${checklistId}`);
    return res.data;
  } catch (err: any) {
    if (err.response.data.message === "expired token") {
      //  WarningSwal("에러 발생", "다시 시도해주세요");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      WarningSwal("에러 발생", "로그인 해주세요");
      window.location.href = `${CLIENT_MAIN_URL}login`;
    } else {
      ErrorSwal("에러 발생", "다시 시도해주세요.");
    }
  }
};

// 토글 체크
export const ToggleChecklist = async (
  checklistId: number,
  refreshToken: string,
  cookie: (res: any) => void,
): Promise<any> => {
  try {
    const res = await client.post(`checklist/${checklistId}`);
    return res.data;
  } catch (err: any) {
    if (err.response.data.message === "expired token") {
      //WarningSwal("에러 발생", "다시 시도해주세요");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      WarningSwal("에러 발생", "로그인 해주세요");
      window.location.href = `${CLIENT_MAIN_URL}login`;
    } else {
      ErrorSwal("에러 발생", "다시 시도해주세요.");
    }
  }
};

// 토글 취소
export const UnToggleChecklist = async (
  checklistId: number,
  refreshToken: string,
  cookie: (res: any) => void,
): Promise<any> => {
  try {
    const res = await client.delete(`checklist/${checklistId}`);

    return res.data;
  } catch (err: any) {
    if (err.response.data.message === "expired token") {
      //WarningSwal("에러 발생", "다시 시도해주세요");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      WarningSwal("에러 발생", "로그인 해주세요");
      window.location.href = `${CLIENT_MAIN_URL}login`;
    } else {
      ErrorSwal("에러 발생", "다시 시도해주세요.");
    }
  }
};

// 토글 전체 취소
export const UnToggleAllChecklist = async (
  categoryId: number,
  refreshToken: string,
  cookie: (res: any) => void,
): Promise<any> => {
  try {
    const res = await client.delete(`checklist/category/${categoryId}`);

    return res.data;
  } catch (err: any) {
    if (err.response.data.message === "expired token") {
      // WarningSwal("에러 발생", "다시 시도해주세요");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      WarningSwal("에러 발생", "로그인 해주세요");
      window.location.href = `${CLIENT_MAIN_URL}login`;
    } else {
      ErrorSwal("에러 발생", "다시 시도해주세요.");
    }
  }
};
