export const HouseData = [
  {
    id: 1,
    title: "입문",
    contents: [
      { id: 1, subTitle: "등기부등본이란?", complete: false, path: "intro" },
    ],
  },
  {
    id: 2,
    title: "발급",
    contents: [
      {
        id: 1,
        subTitle: "누가 발급 받을 수 있나요?",
        complete: false,
        path: "receive/1",
      },
      {
        id: 2,
        subTitle: "발급 방법 - 온라인",
        complete: false,
        path: "receive/2",
      },
      {
        id: 3,
        subTitle: "발급 방법 - 오프라인",
        complete: false,
        path: "receive/3",
      },
      { id: 4, subTitle: "요약 버전 ", complete: false, path: "receive/4" },
    ],
  },
  {
    id: 3,
    title: "등기부등본의 구성",
    contents: [
      { id: 1, subTitle: "인트로", complete: false, path: "my/1" },
      { id: 2, subTitle: "1. 표제부", complete: false, path: "my/2" },
      { id: 3, subTitle: "2. 갑구", complete: false, path: "my/3" },
      { id: 4, subTitle: "3. 을구", complete: false, path: "my/4" },
    ],
  },
  {
    id: 4,
    title: "우리집 등기부등본 알아보기",
    contents: [
      { id: 1, subTitle: "1. 표제부", complete: false, path: "check/1" },
      { id: 2, subTitle: "2. 갑구", complete: false, path: "check/2" },
      { id: 3, subTitle: "3. 을구", complete: false, path: "check/3" },
    ],
  },
];
