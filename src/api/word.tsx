import client from "@api/common/client";

import { RefreshApi } from "./auth";

// 전체 단어 불러오기
export const GetAllWordList = async (
  refreshToken: string,
  cookie: (res: any) => void
): Promise<any> => {
  try {
    const res = await client.get("word/list?sort=word,desc");
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

// 저장한 단어 목록 불러오기
export const GetSavedWordList = async (
  refreshToken: string,
  cookie: (res: any) => void
): Promise<any> => {
  try {
    const res = await client.get("word/my/list");
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

// 개별 단어 조회
export const GetWord = async (
  wordId: number,
  refreshToken: string,
  cookie: (res: any) => void
): Promise<any> => {
  try {
    const res = await client.get(`/word/${wordId}`);
    return res.data;
  } catch (err: any) {
    console.log(err);
    if (err.response.data.message === "expired token") {
      alert("토큰 만료");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      alert("빈 토큰");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "word not exist") {
      alert("존재하지 않는 단어입니다.");
    }
  }
};

// 단어 검색하기
export const GetSearchWords = async (
  searchText: string,
  refreshToken: string,
  cookie: (res: any) => void
): Promise<any> => {
  try {
    const res = await client.get(
      `/word/search/list?searchKeyword=${searchText}&page=0&size=2&sort=word,asc`
    );
    console.log("검색 결과:", res);
    return res.data;
  } catch (err: any) {
    console.log(err);
    if (err.response.data.message === "expired token") {
      alert("토큰 만료");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      alert("빈 토큰");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "word not exist") {
      alert("존재하지 않는 단어입니다.");
    }
  }
};

// 단어 저장하기
export const PostSaveWord = async (
  wordId: number,
  refreshToken: string,
  cookie: (res: any) => void
): Promise<any> => {
  try {
    const res = await client.post(`/word/${wordId}`);
    return res;
  } catch (err: any) {
    console.log(err);
    const message = err.response.data.message;
    if (message === "존재하지 않는 단어 id") {
      alert("존재하지 않는 단어 id");
    } else if (message === "이미 저장된 단어입니다.") {
      alert("이미 저장된 단어입니다.");
    } else if (err.response.data.message === "expired token") {
      alert("토큰 만료");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      alert("빈 토큰");
      RefreshApi(refreshToken, cookie);
    }
  }
};

// 단어 삭제하기
export const DeleteWord = async (
  wordId: number,
  refreshToken: string,
  cookie: (res: any) => void
): Promise<any> => {
  try {
    const res = await client.delete(`/word/${wordId}`);
    return res;
  } catch (err: any) {
    console.log(err);
    if (err.response.data.message === "expired token") {
      alert("토큰 만료");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      alert("빈 토큰");
      RefreshApi(refreshToken, cookie);
    }
  }
};
