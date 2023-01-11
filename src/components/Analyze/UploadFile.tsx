import styled from "@emotion/styled";
import { FontBig, FontGray } from "@style/font.style";
import CloudBtn from "@components/Buttons/CloudBtn";

import sampleImg from "@assets/illustration/sampleImg.png";
const UploadFile = () => {
  return (
    <Div>
      <Illustration src={sampleImg} />
      <FontBig margin="80px auto 0 auto">사진 업로드</FontBig>
      <FontGray margin="17px auto 0 auto">
        믿어방 가이드에 맞는
        <br />
        이미지를 업로드 해주세요.
      </FontGray>
      <CloudBtn />
    </Div>
  );
};

export default UploadFile;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Illustration = styled.img`
  margin: 50px auto 0 auto;
`;
