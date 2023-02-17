import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const name = "resultSlice";

type stateType = {
  contract_type: string;
  image_url: string;
  commission: number;
  answer_commission: number;
  is_expensive: boolean;
  inclusions: number[];
  omissions: number[];
};

const initialState: stateType = {
  contract_type: "",
  image_url: "",
  commission: 0,
  answer_commission: 0,
  is_expensive: false,
  inclusions: [],
  omissions: [],
};

export const contentsSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    initContents: (state) => {
      state.contract_type = initialState.contract_type;
      state.image_url = initialState.image_url;
      state.commission = initialState.commission;
      state.answer_commission = initialState.answer_commission;
      state.is_expensive = initialState.is_expensive;
      state.inclusions = initialState.inclusions;
      state.omissions = initialState.omissions;
    },
    setContractType: (state, action) => {
      state.contract_type = action.payload.contract_type;
    },
    setImgUrl: (state, action) => {
      state.image_url = action.payload.image_url;
    },
    setNlpReult: (state, action) => {
      state.commission = action.payload.commission;
      state.answer_commission = action.payload.answer_commission;
      state.is_expensive = action.payload.is_expensive;
      state.inclusions = action.payload.inclusions;
      state.omissions = action.payload.omissions;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { initContents, setContractType, setImgUrl, setNlpReult } =
  contentsSlice.actions;

export default contentsSlice.reducer;
