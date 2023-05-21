import styled from "@emotion/styled";
import { useRef } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { PostContractImg } from "@api/analyze";
import { GetUserInfo } from "@api/auth";

import { FontBig, FontGray } from "@style/font.style";
import CloudBtn from "@components/Buttons/CloudBtn";
import ArrowBtn from "@components/Buttons/ArrowBtn";
import TestUploadBtn from "@components/Buttons/TestUploadBtn";
import sampleImg from "@assets/illustration/sampleImg.png";

type UploadFileProps = {
  setUpload: React.Dispatch<React.SetStateAction<boolean>>;
  setImgUrl: (url: string) => void;
  setResult: (result: string[]) => void;
};

const UploadFile = ({ setUpload, setImgUrl, setResult }: UploadFileProps) => {
  const [status, setStatus] = useState(false);
  const [statusMsg, setStatusMsg] = useState("사진 업로드");
  const [explain, setExplain] = useState(
    "믿어방 가이드에 맞는 이미지를 업로드해주세요.",
  );
  const [imgSrc, setImgSrc] = useState(sampleImg);
  const [fileName, setFileName] = useState("");

  const [uploadfile, setUploadFile] = useState<File | any>();

  /** 업로드한 사진과 파일명 보여주기 */
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
    setUploadFile(uploadfiles);

    console.log(uploadfiles);
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
    const { memberId } = await GetUserInfo(cookies.refreshToken, onCookie);

    console.log("member_id", memberId);

    console.log("ocr 요청.... ");

    const res = await PostContractImg(memberId, uploadfile);

    console.log("결과 ????? ", res);

    //url과 분석 결과 상위로 전달 -> 상태관리 필요
    const { s3_url, text } = res;
    console.log("결2222 ", s3_url, text);
    setImgUrl(s3_url);
    //setImgUrl(imgUrl);
    setResult(text);
  };

  const downRef = useRef<HTMLAnchorElement>(null);

  const _handleDownTestImg = () => {
    const file = new Blob([contractSample]);
    const downloadUrl = window.URL.createObjectURL(file); // 해당 file을 가리키는 url 생성

    if (downRef.current) {
      downRef.current.download = "some file"; // a tag에 download 속성을 줘서 클릭할 때 다운로드가 일어날 수 있도록 하기
      downRef.current.href = downloadUrl; // href에 url 달아주기

      downRef.current.click(); // 코드 상으로 클릭을 해줘서 다운로드를 트리거
    }
  };

  return (
    <Div>
      <ImgDiv>
        <Illustration src={imgSrc} />
        <FontGray>{fileName}</FontGray>
      </ImgDiv>

      <FontBig margin="20px auto 0 auto" size="20px">
        {statusMsg}
      </FontBig>
      <FontGray margin="17px auto 0 auto">{explain}</FontGray>

      <div className="filebox">
        <input className="upload-name" value="" disabled />

        <input
          onChange={e => readInputFile(e)}
          type="file"
          className="upload-hidden"
          id="ex_filename"
          accept="image/*"
          required
        />
      </div>
      <BtnContainer>
        <TestUploadBtn />
        <CloudBtn />
        {status && <ArrowBtn onClick={_handleUploadImg} />}
      </BtnContainer>
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

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImgDiv = styled.div`
  margin: 0 auto;
  padding-top: 50px;
  width: 90%;
  height: auto;

  display: flex;
  flex-direction: column;
`;

const Illustration = styled.img`
  width: 100%;
  height: 100%;
  margin: 0 auto 10px auto;

  object-fit: contain;
`;

const BtnContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-evenly;

  margin: 0 auto;
`;
