import client from "@api/common/client";
import { RefreshApi } from "./auth";
import { FLASK_URL } from "./common/url";
import axios from "axios";

import { ErrorSwal } from "@components/Modal/CustomModal";

/** 문자 마법사 */
export const GetMessageMaker = async (
  receiver: string,
  purpose: string,
  tone: string,
  more_info: string,
): Promise<any> => {
  try {
    console.log("문자 요청 ");

    const res = await axios.post(`${FLASK_URL}/message`, {
      receiver: receiver,
      purpose: purpose,
      tone: tone,
      more_info: more_info,
    });

    return res.data.result;
  } catch (err: any) {
    ErrorSwal("GPT 에러 발생", "다시 시도해주세요");
  }
};
