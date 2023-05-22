import styled from "@emotion/styled";
import circle from "@assets/loading/circle.png";
import house from "@assets/loading/house.png";
import rokect from "@assets/loading/rokect.png";

const FloatingLoading = () => {
  return (
    <FloatingImg>
      <img src={circle} className="circle" />
      <img src={house} className="house" />
      <img src={rokect} className="rokect" />
    </FloatingImg>
  );
};

export default FloatingLoading;

const FloatingImg = styled.div`
  position: relative;

  width: 252px;
  height: 252px;

  margin: 60px auto 0 auto;

  .circle {
    width: 252px;
    height: 252px;
  }

  .house {
    position: absolute;
    left: -15px;
    bottom: -30px;
    z-index: 10;
    width: 150px;
    height: auto;
    animation: floating1 2s infinite linear;
  }

  .rokect {
    position: absolute;
    top: -60px;
    right: -50px;
    width: 262px;
    height: auto;
    animation: floating3 2s infinite linear;
  }
  @keyframes floating3 {
    0%,
    100% {
      transform: translate(0%, -4%);
    }
    50% {
      transform: translate(0, 0);
    }
  }

  @keyframes floating1 {
    0%,
    100% {
      transform: translate(0%, -5%) rotate(-5deg);
    }
    50% {
      transform: translate(0, 0);
    }
  }
`;
