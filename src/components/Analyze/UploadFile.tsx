import styled from "@emotion/styled";
import { FontBig, FontGray } from "@style/font.style";
import CloudBtn from "@components/Buttons/CloudBtn";
import ArrowBtn from "@components/Buttons/ArrowBtn";
import sampleImg from "@assets/illustration/sampleImg.png";
import { useState } from "react";
const UploadFile = () => {
  const [status, setStatus] = useState("사진 업로드");
  const [explain, setExplain] = useState(
    "믿어방 가이드에 맞는 이미지를 업로드해주세요."
  );
  const [imgSrc, setImgSrc] = useState(sampleImg);
  const [fileName, setFileName] = useState("");

  /* 업로드한 사진과 파일명 보여주기 */
  const readInputFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 업로드 된 파일 보여주기
    var files = e.target.files as FileList;
    const selectedFile = URL.createObjectURL(files[0]);
    setImgSrc(selectedFile);

    // 업로드 된 파일 이름
    var currentFileName = files[0].name; // ! 안붙이면 오류남 (why)
    setFileName(currentFileName);

    // 상태 문구 변경
    setStatus("분석 가능");
    setExplain("버튼을 누르면 분석을 시작합니다.");
  };

  return (
    <Div>
      <ImgDiv>
        <Illustration src={imgSrc} />
        <FontGray>{fileName}</FontGray>
      </ImgDiv>

      <FontBig margin="80px auto 0 auto">{status}</FontBig>
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
        <ArrowBtn />
      </div>
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
