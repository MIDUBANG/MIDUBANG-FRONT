import client from "@api/common/client";

import { RefreshApi } from "./auth";

// 저장한 단어 목록 불러오기
export const GetWordList = async (
  refreshToken: string,
  cookie: (res: any) => void
): Promise<any> => {
  try {
    const res = await client.get("word/list");
    return res.data.wordList;
  } catch (err: any) {
    if (err.response.data.message === "expired token") {
      console.log("토큰 만료");
      RefreshApi(refreshToken, cookie);
    }
  }
};

// 단어 저장하기
export const PostSaveWord = async (
  wordId: number,
  refreshToken: string,
  cookie: (res: any) => void
) => {
  try {
    const res = await client.post(`/word/${wordId}`);
    console.log(res);
  } catch (err: any) {
    console.log(err);
    const message = err.response.data.message;
    if (message === "존재하지 않는 단어 id") {
      alert("존재하지 않는 단어 id");
    } else if (message === "이미 저장된 단어입니다.") {
      alert("이미 저장된 단어입니다.");
    } else if (message === "expired token") {
      alert("토큰 만료");
      RefreshApi(refreshToken, cookie);
    }
  }
};

// 단어 삭제하기
export const DeleteWord = async (
  wordId: number,
  refreshToken: string,
  cookie: (res: any) => void
) => {
  try {
    const res = await client.delete(`/word/${wordId}`);
    console.log(res);
  } catch (err: any) {
    console.log(err);
    if (err.response.data.message === "expired token") {
      alert("토큰 만료");
      RefreshApi(refreshToken, cookie);
    }
  }
};
