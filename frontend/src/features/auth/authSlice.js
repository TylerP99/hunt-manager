import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            console.log("Set credentials");
            const {user, accessToken} = action.payload;
            state.user = user;
            state.token = accessToken;
        },
        logOut: (state, action) => {
            console.log("Log out");
            state.user = null;
            state.token = null;
        },
    },
})

export const {setCredentials, logOut} = authSlice.actions;

export default authSlice.reducer;

export const getCurrentUser = (state) => state.auth.user;
export const getCurrentToken = (state) => state.auth.token;