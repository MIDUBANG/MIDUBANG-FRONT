import { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
// api
import client from "@api/common/client";
//import { GetUserInfo } from "@api/auth";

interface PrivateRouteProps {
  children?: ReactElement; // Router.tsx에서 PrivateRoute가 감싸고 있는 Componet Element
  authentication: boolean; // true :인증을 반드시 해야하만 접속가능, false : 인증을 반디스 안해야만 접속 가능
}

export default function PrivateRoute({
  authentication,
}: PrivateRouteProps): React.ReactElement | null {
  //const [isAuthenticated, setisAuthenticated] = useState<any>(null);

  /**
   * 로그인 했는지 여부
   * 로그인 했을 경우 : true 라는 텍스트 반환
   * 로그인 안했을 경우 : null or false(로그아웃 버튼 눌렀을경우 false로 설정) 반환
   */

  const isAuthenticated = !!localStorage.getItem("token");

  console.log("테스트>>", isAuthenticated);

  if (authentication) {
    // 인증이 반드시 필요한 페이지

    if (isAuthenticated === false) {
      alert("로그인이 필요한 서비스 입니다.");
    }

    // 인증을 안했을 경우 로그인 페이지로, 했을 경우 해당 페이지로
    return isAuthenticated === null || isAuthenticated === false ? (
      <Navigate to="/login" />
    ) : (
      <Outlet />
    );
  } else {
    // 이 코드는... 굳이?
    // 인증이 필요 없는 페이지

    // 인증을 안햇을 경우 해당 페이지로 인증을 한 상태일 경우 main페이지로

    return isAuthenticated === null || isAuthenticated === false ? (
      <Outlet />
    ) : (
      <Navigate to="/login" />
    );
  }
}
