export type PropsExtra = {
  monthly: string; //전세,월세,반전세
  lumpSumMoney: number; // 전세금
  commission: number; //복비,
  deposit: number; //보증금
  monthlyMoney: number; // 월세(차임)
  pet: boolean; // 반려동물
  loan: boolean; // 전세대출 (case (유효-필수 20번))
  substitute: boolean; // 대리인
};

export type PropsContracts = {
  id: number;
  contract: string;
  done: boolean;
  selected: boolean;
  edit: boolean;
};

export type resultsType = {
  recordId: number;
  is_expensive: boolean;
  commission: number;
  answer_commission: number;
  contract_type: string;
  image_url: string;
  record_date: string;
};

export type CasesType = {
  caseId: number;
  case_detail: string;
  desc: string;
  caseType: string;
  contract_type: string;
  case_exists: boolean;
  word_ref: number[];
  article_url: string;
};

export type WordsType = {
  word_id: number;
  word: string;
  meaning: string;
};

// 금쪽이
export type GoldQuestionType = {
  postId: number;
  writer: string;
  title: string;
  content: string;
  numOfComments: number;
};

export type GoldComment = {
  commentId: number;
  writer: string;
  comment: string;
  createdDate: string;
};

export type GoldQuestionDetailType = {
  postId: number;
  writer: string;
  title: string;
  detail: string;
  createdDate: string;
};

// 챗쪽이
export type ChatQuestionType = {
  questionId: number;
  question: string;
  numOfAnswers: number;
};

export type ChatComment = {
  commentId: number;
  writer: string;
  comment: string;
  createdDate: string;
};

export type ChatQuestionDetailType = {
  questionId: number;
  question: string;
  createdDate: string;
};
