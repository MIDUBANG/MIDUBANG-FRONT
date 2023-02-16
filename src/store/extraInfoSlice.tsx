import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const name = "extraInfoSlice";

type stateType = {
  monthly: boolean;
  lumpSumMoney: number;
  commission: number;
  deposit: number;
  monthlyMoney: number;
  pet: boolean;
  loan: boolean;
  substitute: boolean;
};

const initialState: stateType = {
  monthly: true,
  lumpSumMoney: 0,
  commission: 0,
  deposit: 0,
  monthlyMoney: 0,
  pet: true,
  loan: true,
  substitute: false,
};

export const extraInfoSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    initExtraInfo: (state) => {
      state.monthly = initialState.monthly;
      state.lumpSumMoney = initialState.lumpSumMoney;
      state.commission = initialState.commission;
      state.deposit = initialState.deposit;
      state.monthlyMoney = initialState.monthlyMoney;
      state.pet = initialState.pet;
      state.loan = initialState.loan;
      state.substitute = initialState.substitute;
    },
    setExtraInfo: (state, action) => {
      state.monthly = action.payload.monthly;
      state.lumpSumMoney = action.payload.lumpSumMoney;
      state.commission = action.payload.commission;
      state.deposit = action.payload.deposit;
      state.monthlyMoney = action.payload.monthlyMoney;
      state.pet = action.payload.pet;
      state.loan = action.payload.loan;
      state.substitute = action.payload.substitute;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { initExtraInfo, setExtraInfo } = extraInfoSlice.actions;

export default extraInfoSlice.reducer;
