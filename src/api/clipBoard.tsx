import { SuccessSwal, ErrorSwal } from "@components/Modal/CustomModal";

export const handleCopyClipBoard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    SuccessSwal("성공", "클립보드에 메세지가 복사되었습니다.");
  } catch (e) {
    ErrorSwal("에러 발생", "복사에 실패하였습니다");
  }
};
