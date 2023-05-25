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
    const res = await axios.post(`${FLASK_URL}/message`, {
      receiver: receiver,
      purpose: purpose,
      tone: tone,
      more_info: more_info,
    });

    return res.data.result;
  } catch (err: any) {
    //console.log(err);
    ErrorSwal(
      "GPT 에러 발생",
      "서버 과부화로 인한 에러가 발생했습니다. 다시 시도해주세요😢",
    );
  }
};
