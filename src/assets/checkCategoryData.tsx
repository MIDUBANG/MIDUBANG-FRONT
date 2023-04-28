import arrow1 from "@assets/checklist/arrows/arrow1.png";
import arrow2 from "@assets/checklist/arrows/arrow2.png";
import arrow3 from "@assets/checklist/arrows/arrow3.png";
import arrow4 from "@assets/checklist/arrows/arrow4.png";

import house from "@assets/checklist/emojis/house.png";
import airplane from "@assets/checklist/emojis/airplane.png";
import bear from "@assets/checklist/emojis/bear.png";
import bulb from "@assets/checklist/emojis/bulb.png";

export const checkCategoryData = [
  {
    id: 1,
    backgroundColor: "#F0FAF9",
    pointColor: "#407682",
    title: "사전 체크",
    subTitle: "독립의 시작",
    path: "1",
    emoji: house,
    arrow: arrow1,
    count: 6,
  },
  {
    id: 2,
    backgroundColor: "#F0EEFD",
    pointColor: "#5248B5",
    title: "매물 확인",
    subTitle: "좋은 집을 고르기",
    path: "2",
    emoji: airplane,
    arrow: arrow2,
    count: 20,
  },
  {
    id: 3,
    backgroundColor: "#FFEBF5",
    pointColor: "#CF2376",
    title: "가계약",
    subTitle: "계약의 시작",
    path: "3",
    emoji: bulb,
    arrow: arrow3,
    count: 7,
  },
  {
    id: 4,
    backgroundColor: "#FFF0ED",
    pointColor: "#CF7C23",
    title: "본계약",
    subTitle: "계약하기 ",
    path: "4",
    emoji: bear,
    arrow: arrow4,
    count: 24,
  },
  {
    id: 5,
    backgroundColor: "#F0FAF9",
    pointColor: "#407682",
    title: "잔금 지급 전",
    subTitle: "가장 중요한 단계",
    path: "5",
    emoji: house,
    arrow: arrow1,
    count: 1,
  },
  {
    id: 6,
    backgroundColor: "#F0EEFD",
    pointColor: "#5248B5",
    title: "잔금 지급",
    subTitle: "이제 정말 내 집",
    path: "6",
    emoji: airplane,
    arrow: arrow2,
    count: 1,
  },
  {
    id: 7,
    backgroundColor: "#FFEBF5",
    pointColor: "#CF2376",
    title: "잔금 지급 후",
    subTitle: "이제 이 집은 제껍니다",
    path: "7",
    emoji: bulb,
    arrow: arrow3,
    count: 2,
  },
  {
    id: 8,
    backgroundColor: "#FFF0ED",
    pointColor: "#CF7C23",
    title: "입주",
    subTitle: "독립 성공",
    path: "8",
    emoji: bear,
    arrow: arrow4,
    count: 1,
  },
];
