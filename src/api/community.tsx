import client from "@api/common/client";
import { RefreshApi } from "./auth";

import {
  ErrorSwal,
  WarningSwal,
  SuccessSwal,
} from "@components/Modal/CustomModal";
const CLIENT_MAIN_URL = process.env.REACT_APP_REACT_URL;

// 금쪽이 포스트 리스트 조회
export const GetTodayPosts = async (
  refreshToken: string,
  cookie: (res: any) => void,
): Promise<any> => {
  try {
    const res = await client.get("community/today");
    return res.data;
  } catch (err: any) {
    if (err.response.data.message === "expired token") {
      WarningSwal("에러 발생", "다시 시도해주세요");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      WarningSwal("에러 발생", "다시 로그인 해주세요");
      window.location.href = `${CLIENT_MAIN_URL}login`;
    } else {
      ErrorSwal("에러 발생", "다시 시도해주세요.");
    }
  }
};

///////////////////////

// 금쪽이 포스트 리스트 조회
export const GetAllGoldPosts = async (
  refreshToken: string,
  cookie: (res: any) => void,
): Promise<any> => {
  try {
    const res = await client.get("community/post/all");
    return res.data;
  } catch (err: any) {
    if (err.response.data.message === "expired token") {
      WarningSwal("에러 발생", "다시 시도해주세요");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      WarningSwal("에러 발생", "다시 로그인 해주세요");
      window.location.href = `${CLIENT_MAIN_URL}login`;
    } else {
      ErrorSwal("에러 발생", "다시 시도해주세요.");
    }
  }
};

// 금쪽이 글 상세 조회
export const GetGoldPost = async (
  postId: number,
  refreshToken: string,
  cookie: (res: any) => void,
): Promise<any> => {
  try {
    const res = await client.get(`/community/post/${postId}`);
    return res.data;
  } catch (err: any) {
    if (err.response.data.message === "expired token") {
      WarningSwal("에러 발생", "다시 시도해주세요");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      WarningSwal("에러 발생", "다시 로그인 해주세요");
      window.location.href = `${CLIENT_MAIN_URL}login`;
    } else {
      ErrorSwal("에러 발생", "다시 시도해주세요.");
    }
  }
};

// 금쪽이 글 작성
export const PostGoldPost = async (
  question: string,
  detail: string,
  refreshToken: string,
  cookie: (res: any) => void,
): Promise<any> => {
  try {
    const res = await client.post("community/post", {
      question: question,
      detail: detail,
    });
    return res.data;
  } catch (err: any) {
    console.log(err);
    if (err.response.data.message === "expired token") {
      WarningSwal("에러 발생", "다시 시도해주세요");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      WarningSwal("에러 발생", "다시 로그인 해주세요");
      window.location.href = `${CLIENT_MAIN_URL}login`;
    } else {
      ErrorSwal("에러 발생", "다시 시도해주세요.");
    }
  }
};

// 금쪽이 글 삭제
export const DeleteGoldPost = async (
  postId: number,
  refreshToken: string,
  cookie: (res: any) => void,
): Promise<any> => {
  try {
    const res = await client.delete(`community/post/${postId}`);
    return res.data;
  } catch (err: any) {
    console.log(err);
    if (err.response.data.message === "expired token") {
      WarningSwal("에러 발생", "다시 시도해주세요");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      WarningSwal("에러 발생", "다시 로그인 해주세요");
      window.location.href = `${CLIENT_MAIN_URL}login`;
    } else {
      ErrorSwal("에러 발생", "다시 시도해주세요.");
    }
  }
};

// 금쪽이 댓글 작성
export const PostGoldComment = async (
  postId: number,
  comment: string,
  refreshToken: string,
  cookie: (res: any) => void,
): Promise<any> => {
  try {
    const res = await client.post(`community/post/${postId}/comment`, {
      comment: comment,
    });
    return res;
  } catch (err: any) {
    console.log(err);
    const message = err.response.data.message;
    if (err.response.data.message === "expired token") {
      WarningSwal("에러 발생", "다시 시도해주세요");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      WarningSwal("에러 발생", "다시 로그인 해주세요");
      window.location.href = `${CLIENT_MAIN_URL}login`;
    } else {
      ErrorSwal("에러 발생", "다시 시도해주세요.");
    }
  }
};

// 금쪽이 댓글 삭제
export const DeleteGoldComment = async (
  commentId: number,
  refreshToken: string,
  cookie: (res: any) => void,
): Promise<any> => {
  try {
    const res = await client.delete(`community/post/comment/${commentId}`);
    return res;
  } catch (err: any) {
    console.log(err);
    if (err.response.data.message === "expired token") {
      WarningSwal("에러 발생", "다시 시도해주세요");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      WarningSwal("에러 발생", "다시 로그인 해주세요");
      window.location.href = `${CLIENT_MAIN_URL}login`;
    } else {
      ErrorSwal("에러 발생", "다시 시도해주세요.");
    }
  }
};

// 챗쪽이 포스트 리스트 조회
export const GetAllChatPosts = async (
  refreshToken: string,
  cookie: (res: any) => void,
): Promise<any> => {
  try {
    const res = await client.get("community/question/all");
    return res.data;
  } catch (err: any) {
    if (err.response.data.message === "expired token") {
      WarningSwal("에러 발생", "다시 시도해주세요");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      WarningSwal("에러 발생", "다시 로그인 해주세요");
      window.location.href = `${CLIENT_MAIN_URL}login`;
    } else {
      ErrorSwal("에러 발생", "다시 시도해주세요.");
    }
  }
};

// 챗쪽이 글 상세 조회
export const GetChatPost = async (
  postId: number,
  refreshToken: string,
  cookie: (res: any) => void,
): Promise<any> => {
  try {
    const res = await client.get(`/community/question/${postId}`);
    return res.data;
  } catch (err: any) {
    if (err.response.data.message === "expired token") {
      WarningSwal("에러 발생", "다시 시도해주세요");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      WarningSwal("에러 발생", "다시 로그인 해주세요");
      window.location.href = `${CLIENT_MAIN_URL}login`;
    } else {
      ErrorSwal("에러 발생", "다시 시도해주세요.");
    }
  }
};

// 챗쪽이 댓글 작성
export const PostChatComment = async (
  postId: number,
  comment: string,
  refreshToken: string,
  cookie: (res: any) => void,
): Promise<any> => {
  try {
    const res = await client.post(`community/question/${postId}/answer`, {
      comment: comment,
    });
    return res;
  } catch (err: any) {
    console.log(err);
    const message = err.response.data.message;
    if (err.response.data.message === "expired token") {
      WarningSwal("에러 발생", "다시 시도해주세요");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      WarningSwal("에러 발생", "다시 로그인 해주세요");
      window.location.href = `${CLIENT_MAIN_URL}login`;
    } else {
      ErrorSwal("에러 발생", "다시 시도해주세요.");
    }
  }
};

// 챗쪽이 댓글 삭제
export const DeleteChatComment = async (
  answerId: number,
  refreshToken: string,
  cookie: (res: any) => void,
): Promise<any> => {
  try {
    const res = await client.delete(`community/question/answer/${answerId}`);
    return res;
  } catch (err: any) {
    console.log(err);
    if (err.response.data.message === "expired token") {
      WarningSwal("에러 발생", "다시 시도해주세요");
      RefreshApi(refreshToken, cookie);
    } else if (err.response.data.message === "empty token") {
      WarningSwal("에러 발생", "다시 로그인 해주세요");
      window.location.href = `${CLIENT_MAIN_URL}login`;
    } else {
      ErrorSwal("에러 발생", "다시 시도해주세요.");
    }
  }
};
