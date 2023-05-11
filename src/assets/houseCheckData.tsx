export const checkdata1 = [
  {
    id: "0",
    title: "집 소유자와 현재 집주인 일치 여부 확인 ",
    content:
      "계약하려는 부동산의 주소와 등기부등본에 기재되어 있는 소재지가 일치되어 있는지 확인하세요!",
    checked: false,
  },
  {
    id: "1",
    title: "대지권",
    content:
      "보통 대지권이라고 많이 표기하고, 아파트나 다세대주택과 같은 집합 건물 등기부등본에서 볼 수 있는 용어입니다. 구분소유자가 그 전유부분을 소유하기 위하여 대지에 대하여 가지는 권리라고 정의됩니다. [A. 대지권의 목적인 토지의 표시 항목이 없음 B. 대지권의 표시 항목이 없음 C. 대지권의 목적인 토지의 표시 항목에 대지권, 미등기라는 문구가 있음 D. 대지권의 표시 항목에 토지에 관하여 별도 등기있음 문구가 있음 ]a~c의 경우 보통 구분건물 소유자가 토지에 대한 소유권이 없거나 여러 사정으로 등기 절차가 지연된 경우입니다. d의 경우 대지권이 설정된 토지에 근저당권(융자) 설정 등이 걸려있는 경우입니다. 모든 케이스의 이유는 해당 토지에 대한 등기부를 따로 확인하여야 자세히 알 수 있겠지만, 추후 이와 관련해 문제가 발생할 가능성이 높기에 일반적인 상황과 벗어나 있다면 에디터는 계약을 권하고 싶지 않습니다.",
    checked: false,
  },
  {
    id: "2",
    title: "집 주소",
    content:
      "내가 알고 있는 매물의 주소와 등기부등본 표제부 상에 기재된 소재지번이 동일한지 확인하세요.",
    checked: false,
  },
  {
    id: "3",
    title: "발급 일자",
    content:
      "표제부 하단, '열람 일시'라 적힌 날짜가 바로 발급 일자입니다. 계약날과 발급 일자가 일치하는 것이 좋습니다. 만약 같지 않더라도 가능한 최신 발급본이어야합니다. 발급 일자 이후에 언제든 가압류, 근저당이 설정될 수 있기 때문입니다.",
    checked: false,
  },
  {
    id: "4",
    title: "근린 생활 시설",
    content:
      "근린생활시설은 주택가 또는 그 인근에 입지하여 주민들의 생활 편의를 도울 수 있는 시설입니다. 근생은 대지권과 마찬가지로 주로 집합건물의 등기부등본 표제부에서 확인할 수 있습니다. 근린생활시설은 건축물의 용도가 주택이 아니기 때문에 전세 대출 불가능압니다. 전세 대출을 받을 예정이라면 꼭 등기부등본과 건축물대장에서 근린생활시설 여부 확인하셔야합니다. 근린생활시설은  전세 시세가 주변에 비해 저렴하나 중개 수수료가 주택에 비해 비싼 편입니다. 싱크대 설치도 불법이라 신고가 들어온다면 철거해야할수도 있습니다. 등기부등본에 근린생활시설이 표기되어 있다면 해당 용도로 등록된 층이 몇 층인지, 내가 계약하고자 하는 층수의 용도는 주택으로 되어있는지 확인 후 계약해야 합니다.",
    checked: false,
  },
];

export const checkdata2 = [
  {
    id: "0",
    title: "집 소유자와 현재 집주인 일치 여부 확인 ",
    content:
      "계약하려는 부동산의 주소와 등기부등본에 기재되어 있는 소재지가 일치되어 있는지 확인하세요!",
    checked: false,
  },
  {
    id: "1",
    title: "공동 소유인 경우, 소유 지분 확인하기",
    content:
      "한 사람이 과반수 지분을 가지고 있다면, 나머지의 소유주의 위임장은 필요 없습니다. 소유주가 다수라면, 계약하는 임대인과 위임받은 소유주들의 지분이 과반수 넘겨야 합니다.",
    checked: false,
  },
  {
    id: "2",
    title: "소유권 보존",
    content: "",
    checked: false,
  },
  {
    id: "3",
    title: "소유권 이전 횟수",
    content: "",
    checked: false,
  },
  {
    id: "4",
    title: "최종 소유자 이름",
    content: "최종 소유자가 내가 계약하려는 사람과 동일한지 비교하세요!",
    checked: false,
  },
  {
    id: "5",
    title: "가처분",
    content:
      "금전채권 이외의 청구권에 대한 강제집행을 보전하기 위한 것입니다. 가압류가 매물을 통한 금전을 변제받기 위한 절차였다면, 가처분은 그 외의 것, 매물의 소유권 등을 처분하지 못하도록 막아두는 임시 조치 입니다. 쉽게 설명해드리자면 A라는 사람이 B에게 본인의 집을 팔아서 계약금, 중도금, 잔금까지 모두 지불하였는데 A가 잔금 지급 기간동안 집값이 많이 올라서 집값을 계약서보다 더 달라고 요구하며 등기권리증을 B에게 넘기지 않고 있을때 B는 소유권이전청구소송을 통해서 소유권을 이전 받으면 되는 것입니다. 그런데 만약 B가 소송을 진행중인데 그 기간동안 A가 다른사람에게 팔수도 있기 때문에 B는 법원에 가처분신청을 해서 A가 맘대로 집을 팔수 없게 하는게 가처분입니다. 가처분이 되어 있는 집도 무언가 문제가 있다고 보면 될것입니다. 이런집도 계약을 하려고 한다면 다시 한번 생각해 보세요.",
    checked: false,
  },
  {
    id: "6",
    title: "가등기",
    content:
      "예비 등기의 한 종류로 본등기보다 앞서 선순위를 확보하기 위한 조치입니다. 물론 가등기만으로는 효력이 없지만 추후 본등기 시에 순위보전 효력이 있기 때문에 가등기보다 후순위는 말소 처리가 됩니다. 즉, 가등기는 본등기를 하기 전까지 별다른 효력이 없으나 나중에 본등기를 하면 후순위 권리자에 앞서게 되는 효력이 있습니다.",
    checked: false,
  },
  {
    id: "7",
    title: "가압류",
    content:
      "개인인 채권자가 채무자의 재산 등 어떤 목적물을 임의로 처분하지 못하도록 막아두는 임시 조치입니다. 가압류의 경우, 바로 부동산이 경매 등 강제집행 절차에 들어가는 것은 아니에요. 소송을 통해 압류 절차가 시작되어야 강제 집행 절차도 시작되는 것이기 때문이죠. 하지만 바로 집행이 되는 것이 아니라 해도 안전한 것은 절대 아닙니다. 만약 가압류가 걸려있는 부동산을 임차했다가 채무가 제대로 해결되지 않아 경매에 넘어간다면?! 가압류를 건 채무자의 부채를 먼저 돌려주기 때문에 임차보증금을 제대로 돌려받을 수 없을 가능성이 큽니다.",
    checked: false,
  },
  {
    id: "8",
    title: "압류",
    content:
      "압류도 가압류의 정의와 동일하지만 채권자가 행정기관이라는 것이 다릅니다. 흔히 빨간딱지라고 하죠? 드라마에서 자주 보셨을 거에요. 주로 국세 등의 세금이 체납된 경우, 채무자가 부동산을 처분하지 못하도록 한 것이죠. 압류의 경우, 경매 등의 강제 집행 절차도 국가기관에서 직접 처리합니다. 압류는 채권의 실행을 확보하기 위해 집행 법원이 확정 판결이나 그 밖의 집행 권원에 근거해 채무자의 재산 처분을 금지하는 것입니다. 주로 세금 체납에서 압류를 많이 합니다.",
    checked: false,
  },
  {
    id: "9",
    title: "예고 등기",
    content:
      "예비 등기의 한 종류로 소유권에 대한 소송이 제기된 경우 수소법원에서 이를 제3자에게 알리기 위한 경고용 등기입니다. 그렇기 때문에 사실 물권변동에는 아무런 효력이 없습니다. 등기의 말소나 회복을 위한 소송이 제기되었을 뿐이니까요. 하지만 이 경우 매물의 소유권을 두고 분쟁이 이뤄지고 있다는 이야기이므로 역시 계약을 재고하시는 것이 좋습니다.",
    checked: false,
  },
  {
    id: "10",
    title: "임의 경매",
    content:
      "임의 경매는 쉽게 말해 부동산에 설정된 담보권을 실행하기 위한 경매라고 생각하면 돼요. 여기서 담보권자는 부동산을 담보로 돈을 빌려준 채권자(은행 등)가 될 수도 있고, 전세 들어오면서 전세권을 설정한 전세입자(임차인)가 될 수도 있어요. 강제경매와 달리 집행권원이 필요하지 않아서 별도의 재판을 거치지 않고 곧바로 법원에 경매신청을 할 수 있습니다.",
    checked: false,
  },
  {
    id: "11",
    title: "강제 경매",
    content:
      "강제경매는 집행권원을 가진 채권자가 신청하여 채무자의 부동산을 압류하고 환가해서 매각 대금이 나오면 채권자와 배당요구한 사람에게 배분해 주는 제도예요. 쉽게 말하면, 돈을 빌려준 사람인 채권자가 돈을 갚아야 하는 사람인 채무자에게 돈을 못 받으면 채무자의 재산을 강제로 팔겠다는 뜻입니다. 이 때 강제경매는 집행권원이라는 문서가 있어야 진행할 수 있어요.",
    checked: false,
  },
  {
    id: "12",
    title: "신탁 등기",
    content:
      "집 주인은 부동산을 담보로 돈을 빌릴 수 있는데요(=근저당권 설정). 담보로 빌리다 못해 아예 소유권을 넘겨 버리고 돈을 아주 많이 빌릴 경우 등기부등본 갑구에 신탁이라고 표시돼요. 새로 지어서 돈이 많이 필요한 건물 등기부등본에서 많이 볼 수 있는데요. 신탁이라고 적혀있는 것 역시 직거래는 절대 안 하는 게 좋아요. 만약 부동산등기부 등본의 갑구 란에서 '신탁 등기'가 확인되었다면, 부동산등기부 등본 이외에 신탁원부 및 신탁계약서까지 추가로 발급 받아서 확인해야 합니다! 신탁원부는 등기소에 현장 방문하여 발급 받을 수 있으며(+받는 법 설명), 부동산등기부 등본에 기재된 신탁원부 번호를 가지고 신청할 수 있습니다. 신탁원부를 발급 받으면 신탁원부에 첨부된 신탁계약서까지 받아볼 수 있습니다.",
    checked: false,
  },
  {
    id: "13",
    title: "경매 개시 결정",
    content:
      "집 주인이 돈을 못 갚은 나머지, 집에 대한 경매가 진행되고 있다는 뜻이에요. 만약 매물의 등기부등본을 확인하는데 갑구에 **임시 경매개시결정** 또는 **강제 경매개시결정**이라는 항목이 들어가 있다면? 이는 법원에서 경매 신청이 적합하다고 판단하여 **경매 절차를 시작한다**는 이야기입니다. 물론 앞서 이야기한 것처럼 압류도 동시에 진행됩니다. 경매가 예정된 매물은 임대차계약은 포기하시는 것을 강력하게 권해드립니다.",
    checked: false,
  },
  {
    id: "14",
    title: "임차권 등기 명령",
    content:
      "앞서 집을 빌린 세입자가 집 주인한테 보증금을 돌려 받지 못한 사례가 있다는 걸 말해요. 이 경우엔 도대체 어떤 일이 있었는지 사실 관계를 정확하게 파악하는 게 중요해요.등기부등본에 경매개시결정, 임차권등기명령이 적혀 있다면 웬만해서 들어가지 않는 걸 추천해요. 이런 이력이 있는 경우에는 들어가서 문제를 겪는다고 해도 “넌 알고도 들어갔잖아”라는 식이라 법적으로 보호를 받기 쉽지 않거든요.",
    checked: false,
  },
  {
    id: "15",
    title: "담보 가등기",
    content:
      "담보가등기란 채권자가 채무자의 채무불이행사태를 대비해 부동산을 가등기의 형태로 담보 설정해둔 것을 지칭하는 용어입니다. 채무자가 채무를 변제하지 못할 경우 가등기를 본등기로 전환하고 부동산가액에서 채권금액을 뺀 나머지금액을 채무자에게 지급해줍니다.등기부등본을 보았을때 소유권이전만을 목적으로 한 가등기 같지만 사실은 채무자의 빚 상환을 보증하기 위한 담보설정의 한 방법이기 때문에 변칙담보라고도 합니다.",
    checked: false,
  },
];

export const checkdata3 = [
  {
    id: "0",
    title: "근저당권",
    content:
      "임대인이 해당 부동산을 담보로 대출을 받은 내역입니다. 이러한 근저당권이 있을 경우 집이 경매로 넘어가면 대출을 해준 금융기관에서 먼저 선순위로 변제를 해가고 세입자의 보증금은 후순위로 밀리게 되죠. 그렇기 때문에 임대차 계약을 할 때는 가능한 한 근저당권이 없는 집을 계약하는 것이 가장 베스트죠. 근저당권이 설정되어 있을 경우 안전한 범위 내인지 계산해보세요.",
    checked: false,
  },
  {
    id: "1",
    title: "저당권",
    content:
      "저당권이란 채권자가 채무자 또는 제3자로부터 점유를 옮기지 않고 그 채권의 담보로 제공된 목적물(부동산)에 대해 일반 채권자에 우선하여 변제를 받을 수 있는 약정담보물권을 말합니다. 저당권은 돈을 빌려주는 대신 담보로 제공된 부동산에 대해 후순위 채권자보다 먼저 돈을 돌려받을 수 있는 권리입니다. 예를 들어 A 씨가 B 씨의 집을 담보로 돈을 빌려주고 저당권을 설정하면, 나중에 그 저당권을 근거로 경매를 신청할 수 있습니다. 이 경우 A 씨는 다른 후순위 채권자들보다 먼저 돈을 돌려받을 수 있습니다. 이러한 권리를 ‘우선 변제권’이라고 합니다.",
    checked: false,
  },
  {
    id: "2",
    title: "전세권",
    content:
      "전세권이 설정되어 있을 경우(=전세권이 말소되지 않았을 경우), 전셋집이 경매에 넘어갔을 때 현 임차인은 후순위가 된다는 점 알아두셔야합니다.",
    checked: false,
  },
];