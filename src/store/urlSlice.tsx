import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const name = "urlSlice";

type stateType = {
  image_url: string;
};

const initialState: stateType = {
  image_url: "http://",
};

export const urlSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    initUrl: (state) => {
      state.image_url = initialState.image_url;
    },
    setUrl: (state, action) => {
      state.image_url = action.payload.image_url;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { initUrl, setUrl } = urlSlice.actions;

export default urlSlice.reducer;
