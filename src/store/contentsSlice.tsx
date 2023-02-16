import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const name = "contentsSlice";

type stateType = {
  inclusions: number[];
  omissions: number[];
};

const initialState: stateType = {
  inclusions: [],
  omissions: [],
};

export const contentsSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    initContents: (state) => {
      state.inclusions = initialState.inclusions;
      state.omissions = initialState.omissions;
    },
    setContents: (state, action) => {
      state.inclusions = action.payload.inclusions;
      state.omissions = action.payload.omissions;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { initContents, setContents } = contentsSlice.actions;

export default contentsSlice.reducer;
