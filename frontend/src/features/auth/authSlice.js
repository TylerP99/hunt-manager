import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
    user: user || null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: { // Not thunk
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
        },
    },
    // Thunk
    extraReducers: () => {},
});

export const {reset} = authSlice.actions;
export default authSlice.reducer;