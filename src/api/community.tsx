import client from "@api/common/client";
import { RefreshApi } from "./auth";

// 금쪽이 포스트 리스트 조회
export const GetTodayPosts = async (
  refreshToken: string,
  cookie: (res: any) => void
): Promise<any> => {
  try {
    const res = await client.get("community/today");
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

///////////////////////

// 금쪽이 포스트 리스트 조회
export const GetAllGoldPosts = async (
  refreshToken: string,
  cookie: (res: any) => void
): Promise<any> => {
  try {
    const res = await client.get("community/post/all");
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

// 금쪽이 글 상세 조회
export const GetGoldPost = async (
  postId: number,
  refreshToken: string,
  cookie: (res: any) => void
): Promise<any> => {
  try {
    const res = await client.get(`/community/post/${postId}`);
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

// 금쪽이 글 작성
export const PostGoldPost = async (
  question: string,
  detail: string,
  refreshToken: string,
  cookie: (res: any) => void
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

// 금쪽이 글 삭제
export const DeleteGoldPost = async (
  postId: number,
  refreshToken: string,
  cookie: (res: any) => void
): Promise<any> => {
  try {
    const res = await client.delete(`community/post/${postId}`);
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

// 금쪽이 댓글 작성
export const PostGoldComment = async (
  postId: number,
  comment: string,
  refreshToken: string,
  cookie: (res: any) => void
): Promise<any> => {
  try {
    const res = await client.post(`community/post/${postId}/comment`, {
      comment: comment,
    });
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

// 금쪽이 댓글 삭제
export const DeleteGoldComment = async (
  commentId: number,
  refreshToken: string,
  cookie: (res: any) => void
): Promise<any> => {
  try {
    const res = await client.delete(`community/post/comment/${commentId}`);
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

///////////////////////////////////////////////

// 챗쪽이 포스트 리스트 조회
export const GetAllChatPosts = async (
  refreshToken: string,
  cookie: (res: any) => void
): Promise<any> => {
  try {
    const res = await client.get("community/question/all");
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

// 챗쪽이 글 상세 조회
export const GetChatPost = async (
  postId: number,
  refreshToken: string,
  cookie: (res: any) => void
): Promise<any> => {
  try {
    const res = await client.get(`/community/question/${postId}`);
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

// 챗쪽이 댓글 작성
export const PostChatComment = async (
  postId: number,
  comment: string,
  refreshToken: string,
  cookie: (res: any) => void
): Promise<any> => {
  try {
    const res = await client.post(`community/question/${postId}/answer`, {
      comment: comment,
    });
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

// 챗쪽이 댓글 삭제
export const DeleteChatComment = async (
  answerId: number,
  refreshToken: string,
  cookie: (res: any) => void
): Promise<any> => {
  try {
    const res = await client.delete(`community/question/answer/${answerId}`);
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
