import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: InitialStateType = {
  isLoading: false,
  requestStatus: "idle",
};
const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsLoadingAC(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setRequestStatusAC(
      state,
      action: PayloadAction<{ status: RequestStatusType }>
    ) {
      state.requestStatus = action.payload.status;
    },
  },
});

export const appReducer = slice.reducer;
export const { setIsLoadingAC, setRequestStatusAC } = slice.actions;

export type RequestStatusType = "pending" | "rejected" | "fulfilled" | "idle";
type InitialStateType = {
  isLoading: boolean;
  requestStatus: RequestStatusType;
};
