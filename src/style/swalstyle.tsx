export const logoutStyle = {
  title: "로그아웃 할까요?",
  text: "다시 되돌릴 수 없습니다.",
  icon: "warning",
  iconColor: "orange",

  showCancelButton: true,
  cancelButtonText: "취소",

  showConfirmButton: true,
  confirmButtonColor: "orange",
  confirmButtonText: "로그아웃",

  timer: 10000,
  background: "white",
  color: "black",
  backdrop: "rgba(0,0,0,0.2)",

  closeOnClickOutside: false,

  reverseButtons: true,
};

export const uploadGuideStyle = {
  title: "개인정보 유의 안내",
  text: "분석 전, 특약 사항에 개인정보가 포함되지 않았는지 확인해주세요. 저장되기를 바라지 않는 정보는 꼭 지워주세요.",
  icon: "warning",
  iconColor: "orange",

  showCancelButton: true,
  cancelButtonText: "취소",

  showConfirmButton: true,
  confirmButtonColor: "orange",
  confirmButtonText: "분석하기",

  timer: 10000,
  background: "white",
  color: "black",
  backdrop: "rgba(0,0,0,0.2)",

  closeOnClickOutside: false,

  reverseButtons: true,
};

export const gptGuideStyle = {
  title: "서비스 장애 안내",
  text: "openAI의 chatGPT AI 서버 과부하, 또는 불량한 와이파이 환경에서 기능이 작동하지 않을 수 있습니다. Tip) 메세지를 짧게 작성하면 답변을 받을 확률이 높아집니다.",
  icon: "warning",
  iconColor: "orange",

  showCancelButton: false,

  showConfirmButton: true,
  confirmButtonColor: "orange",
  confirmButtonText: "네, 알겠습니다",

  timer: 10000,
  background: "white",
  color: "black",
  backdrop: "rgba(0,0,0,0.2)",

  closeOnClickOutside: true,
};
