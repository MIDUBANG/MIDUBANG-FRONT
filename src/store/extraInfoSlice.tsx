import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const name = "extraInfoSlice";

type extraInfoType = {
  monthly: boolean;
  lumpSumMoney: number;
  commission: number;
  deposit: number;
  monthlyMoney: number;
  pet: boolean;
  loan: boolean;
  substitute: boolean;
  officetel: string;
};

type stateType = {
  contents: string[];
  extraInfo: extraInfoType;
};

const initialState: stateType = {
  contents: [],
  extraInfo: {
    monthly: true,
    lumpSumMoney: 0,
    commission: 0,
    deposit: 0,
    monthlyMoney: 0,
    pet: false,
    loan: false,
    substitute: false,
    officetel: "",
  },
};

export const extraInfoSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    initExtraInfo: state => {
      state.contents = initialState.contents;
      state.extraInfo.monthly = initialState.extraInfo.monthly;
      state.extraInfo.lumpSumMoney = initialState.extraInfo.lumpSumMoney;
      state.extraInfo.commission = initialState.extraInfo.commission;
      state.extraInfo.deposit = initialState.extraInfo.deposit;
      state.extraInfo.monthlyMoney = initialState.extraInfo.monthlyMoney;
      state.extraInfo.pet = initialState.extraInfo.pet;
      state.extraInfo.loan = initialState.extraInfo.loan;
      state.extraInfo.substitute = initialState.extraInfo.substitute;
      state.extraInfo.officetel = initialState.extraInfo.officetel;
    },
    setContents: (state, action) => {
      state.contents = action.payload.contents;
    },
    setExtraInfo: (state, action) => {
      state.extraInfo.monthly = action.payload.monthly;
      state.extraInfo.lumpSumMoney = action.payload.lumpSumMoney;
      state.extraInfo.commission = action.payload.commission;
      state.extraInfo.deposit = action.payload.deposit;
      state.extraInfo.monthlyMoney = action.payload.monthlyMoney;
      state.extraInfo.pet = action.payload.pet;
      state.extraInfo.loan = action.payload.loan;
      state.extraInfo.substitute = action.payload.substitute;
      state.extraInfo.officetel = action.payload.officetel;
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { initExtraInfo, setContents, setExtraInfo } =
  extraInfoSlice.actions;

export default extraInfoSlice.reducer;
