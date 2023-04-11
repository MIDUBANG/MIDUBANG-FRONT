import client from "@api/common/client";
import { RefreshApi } from "./auth";

import axios from "axios";

/** 문자 마법사 */
export const GetMessageMaker = async (
  receiver: string,
  purpose: string,
  tone: string,
  more_info: string
): Promise<any> => {
  try {
    console.log("문자 요청 ");

    // const res = await axios.post("http://127.0.0.1:5000/api/message", {
    //   receiver: receiver,
    //   purpose: purpose,
    //   tone: tone,
    //   more_info: more_info,
    // });

    //return res.data.result;
    return "가짜 결과이지롱";
  } catch (err: any) {
    console.log("에러", err);
  }
};
