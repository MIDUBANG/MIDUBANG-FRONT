import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const name = "summarySlice";

type stateType = {
  reportId: number;
};

const initialState: stateType = {
  reportId: 0,
};

export const summarySlice = createSlice({
  name: name,
  initialState,
  reducers: {
    initReportId: (state) => {
      state.reportId = initialState.reportId;
    },
    setReportId: (state, action) => {
      state.reportId = action.payload.reportId;
    },
  },
});

export const { initReportId, setReportId } = summarySlice.actions;

export default summarySlice.reducer;
