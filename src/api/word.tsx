import client from "@api/common/client";

import { RefreshApi } from "./auth";
import {
  ErrorSwal,
  WarningSwal,
  SuccessSwal,
} from "@components/Modal/CustomModal";
const CLIENT_MAIN_URL = process.env.REACT_APP_REACT_URL;

// 전체 단어 불러오기
export const GetAllWordList = async (
  page: number,
  refreshToken: string,
  cookie: (res: any) => void,
): Promise<any> => {
  try {
    const res = await client.get(
      `word/list?page=${page}&size=20&sort=word,asc`,
    );
    return res.data;
  } catch (err: any) {
    if (err.response.data.message === "expired token") {
      //WarningSwal("에러 발생", "다시 시도해주세요");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      WarningSwal("에러 발생", "다시 로그인 해주세요");
      window.location.href = `${CLIENT_MAIN_URL}login`;
    } else {
      ErrorSwal("에러 발생", "다시 시도해주세요.");
    }
  }
};

// 저장한 단어 목록 불러오기
export const GetSavedWordList = async (
  refreshToken: string,
  cookie: (res: any) => void,
): Promise<any> => {
  try {
    const res = await client.get("word/my/list");
    return res.data;
  } catch (err: any) {
    if (err.response.data.message === "expired token") {
      //WarningSwal("에러 발생", "다시 시도해주세요");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      WarningSwal("에러 발생", "다시 로그인 해주세요");
      window.location.href = `${CLIENT_MAIN_URL}login`;
    } else {
      ErrorSwal("에러 발생", "다시 시도해주세요.");
    }
  }
};

// 개별 단어 조회
export const GetWord = async (
  wordId: number,
  refreshToken: string,
  cookie: (res: any) => void,
): Promise<any> => {
  try {
    const res = await client.get(`/word/${wordId}`);
    return res.data;
  } catch (err: any) {
    if (err.response.data.message === "expired token") {
      // WarningSwal("에러 발생", "다시 시도해주세요");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      WarningSwal("에러 발생", "다시 로그인 해주세요");
      window.location.href = `${CLIENT_MAIN_URL}login`;
    } else if (err.response.data.message === "word not exist") {
      ErrorSwal("에러 발생", "존재하지 않는 단어입니다.");
    } else {
      ErrorSwal("에러 발생", "다시 시도해주세요.");
    }
  }
};

// 단어 검색하기
export const GetSearchWords = async (
  searchText: string,
  refreshToken: string,
  cookie: (res: any) => void,
): Promise<any> => {
  try {
    const res = await client.get(
      `/word/search/list?searchKeyword=${searchText}&page=0&size=10&sort=word,asc`,
    );

    return res.data;
  } catch (err: any) {
    if (err.response.data.message === "expired token") {
      //WarningSwal("에러 발생", "다시 시도해주세요");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      WarningSwal("에러 발생", "다시 로그인 해주세요");
      window.location.href = `${CLIENT_MAIN_URL}login`;
    } else if (err.response.data.message === "word not exist") {
      ErrorSwal("에러 발생", "존재하지 않는 단어입니다.");
    } else {
      ErrorSwal("에러 발생", "다시 시도해주세요.");
    }
  }
};

// 단어 저장하기
export const PostSaveWord = async (
  wordId: number,
  refreshToken: string,
  cookie: (res: any) => void,
): Promise<any> => {
  try {
    const res = await client.post(`/word/${wordId}`);
    SuccessSwal("단어 저장", "단어를 저장했습니다!");
    return res;
  } catch (err: any) {
    // console.log(err);
    const message = err.response.data.message;
    if (message === "존재하지 않는 단어 id") {
      ErrorSwal("에러 발생", "존재하지 않는 단어입니다.");
    } else if (message === "expired token") {
      WarningSwal("에러 발생", "다시 시도해주세요");
      RefreshApi(refreshToken, cookie);
    } else if (message === "empty token") {
      WarningSwal("에러 발생", "다시 로그인 해주세요");
      window.location.href = `${CLIENT_MAIN_URL}login`;
    } else if (message === "이미 저장된 단어입니다.") {
      WarningSwal("중복 저장", "이미 저장된 단어입니다.");
    } else {
      ErrorSwal("에러 발생", "다시 시도해주세요.");
    }
  }
};

// 단어 삭제하기
export const DeleteWord = async (
  wordId: number,
  refreshToken: string,
  cookie: (res: any) => void,
): Promise<any> => {
  try {
    const res = await client.delete(`/word/${wordId}`);
    SuccessSwal("단어 삭제", "단어를 삭제했습니다.");
    return res;
  } catch (err: any) {
    if (err.response.data.message === "expired token") {
      // WarningSwal("에러 발생", "다시 시도해주세요");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      WarningSwal("에러 발생", "다시 로그인 해주세요");
      window.location.href = `${CLIENT_MAIN_URL}login`;
    } else {
      ErrorSwal("에러 발생", "다시 시도해주세요.");
    }
  }
};
