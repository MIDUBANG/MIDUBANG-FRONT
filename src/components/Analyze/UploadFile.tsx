import styled from "@emotion/styled";
import { FontBig, FontGray } from "@style/font.style";
import CloudBtn from "@components/Buttons/CloudBtn";
import ArrowBtn from "@components/Buttons/ArrowBtn";
import sampleImg from "@assets/illustration/sampleImg.png";
import { useState } from "react";

import { PostContractImg } from "@api/analyze";
import { GetUserInfo } from "@api/auth";

import { useCookies } from "react-cookie";

import { useNavigate } from "react-router-dom";

type contentType = {
  id: number;
  contract: string;
};
type UploadFileProps = {
  setUpload: React.Dispatch<React.SetStateAction<boolean>>;
  setImgUrl: (url: string) => void;
  setResult: (result: contentType[]) => void;
};

const UploadFile = ({ setUpload, setImgUrl, setResult }: UploadFileProps) => {
  const [status, setStatus] = useState(false);
  const [statusMsg, setStatusMsg] = useState("사진 업로드");
  const [explain, setExplain] = useState(
    "믿어방 가이드에 맞는 이미지를 업로드해주세요."
  );
  const [imgSrc, setImgSrc] = useState(sampleImg);
  const [fileName, setFileName] = useState("");

  const [uploadfile, setUploadFile] = useState<File | any>();

  /* 업로드한 사진과 파일명 보여주기 */
  const readInputFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 업로드 된 파일 보여주기
    let files = e.target.files as FileList;
    const selectedFile = URL.createObjectURL(files[0]);
    setImgSrc(selectedFile);

    // 업로드 된 파일 이름
    let currentFileName = files[0].name; // ! 안붙이면 오류남 (why)
    setFileName(currentFileName);

    // 상태 문구 변경
    setStatus(true);
    setStatusMsg("분석 가능");
    setExplain("버튼을 누르면 분석을 시작합니다.");

    //여기서부터
    const target = e.currentTarget;
    const uploadfiles = (target.files as FileList)[0];

    if (uploadfiles === undefined) {
      return;
    }

    // 파일 확장자 체크
    // if (!fileExtensionValid(uploadfiles)) {
    //   target.value = "";
    //   alert(
    //     `업로드 가능한 확장자가 아닙니다. [가능한 확장자 : ${ALLOW_FILE_EXTENSION}]`
    //   );
    //   return;
    // }

    // 파일 용량 체크
    // if (files.size > FILE_SIZE_MAX_LIMIT) {
    //   target.value = "";
    //   alert("업로드 가능한 최대 용량은 5MB입니다. ");
    //   return;
    // }

    // validation을 정상적으로 통과한 File
    setUploadFile(uploadfiles);
  };

  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);
  const onCookie = (res: any) => {
    console.log("쿠키");
    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);
    const refreshToken = res.data.refreshToken;
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  const navigate = useNavigate();

  /** 사진 업로드 함수 */
  const _handleUploadImg = async () => {
    // 업로드 중 화면으로 전환
    setUpload(true);

    // 유저 아이디 요청
    const { member_id } = await GetUserInfo(cookies.refreshToken, onCookie);

    console.log("member_id", member_id);

    // 이미지 업로드 -> 오류나면 어찌되는겨??
    const { imgUrl, resultArray } = await PostContractImg(
      member_id,
      uploadfile,
      cookies.refreshToken,
      onCookie
    );

    // url과 분석 결과 상위로 전달 -> 상태관리 필요
    setImgUrl(imgUrl);
    setResult(resultArray);

    // setTimeout(() => {
    //   // 피드백 페이지 이동
    //   navigate("/feedback");
    // }, 1000);
  };

  return (
    <Div>
      <ImgDiv>
        <Illustration src={imgSrc} />
        <FontGray>{fileName}</FontGray>
      </ImgDiv>

      <FontBig margin="80px auto 0 auto">{statusMsg}</FontBig>
      <FontGray margin="17px auto 0 auto">{explain}</FontGray>

      <div className="filebox">
        <input className="upload-name" value="" disabled />

        <input
          onChange={(e) => readInputFile(e)}
          type="file"
          className="upload-hidden"
          id="ex_filename"
          accept="img/*"
          required
        />
      </div>
      <div className="btn-container">
        <CloudBtn />
        {status && <ArrowBtn onClick={_handleUploadImg} />}
      </div>

      <p>사진 업로드 예시 보기</p>
    </Div>
  );
};

export default UploadFile;

const Div = styled.div`
  .filebox {
    margin-bottom: 20px;
  }
  .filebox input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  .filebox label {
    display: inline-block;
    padding: 0.5em 0.75em;
    color: #999;
    font-size: inherit;
    line-height: normal;
    vertical-align: middle;
    background-color: #fdfdfd;
    cursor: pointer;
    border: 1px solid #ebebeb;
    border-bottom-color: #e2e2e2;
    border-radius: 0.25em;
  }

  /* named upload */
  .filebox .upload-name {
    width: auto;

    text-align: center;

    margin-top: 30px;
    font-size: inherit;
    font-family: inherit;
    line-height: normal;
    vertical-align: middle;
    background-color: transparent;
    border: none;
    border-bottom-color: #e2e2e2;
    border-radius: 0.25em;
    -webkit-appearance: none; /* 네이티브 외형 감추기 */
    -moz-appearance: none;
    appearance: none;
  }

  .hidden {
    display: none;
  }

  // ㅇㄴㄹㄴㅇㄹㅇ

  display: flex;
  flex-direction: column;
  justify-content: center;

  .btn-container {
    width: 180px;
    display: flex;
    justify-content: center;

    margin: 0 auto;
  }
`;

const ImgDiv = styled.div`
  margin: 0 auto;
  padding-top: 50px;
  width: 90%;
  height: 250px;

  display: flex;
  flex-direction: column;
`;

const Illustration = styled.img`
  max-width: 320px;
  max-height: 260px;
  margin: 0 auto 10px auto;
`;
