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
export const PostSaveWord = (
  wordId: number,
  refreshToken: string,
  cookie: (res: any) => void
) => {
  client
    .post(`/word/${wordId}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
