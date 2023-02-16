export type PropsExtra = {
  monthly: boolean;
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
