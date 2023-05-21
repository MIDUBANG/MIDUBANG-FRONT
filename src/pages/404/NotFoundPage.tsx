import styled from "@emotion/styled";
import gif404 from "@assets/404/giphy.gif";

const NotFoundPage = () => {
  return (
    <Div>
      <Gif src={gif404} />
    </Div>
  );
};

export default NotFoundPage;

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
`;

const Gif = styled.img`
  width: 50%;
  height: auto;
`;
