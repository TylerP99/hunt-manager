import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    credentials: "include",
    prepareHeaders: (headers, {getState}) => {
        const token = getState().auth.token;
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
    }
});

const baseQueryWithReAuth = async (args, api, extraOptions) => {
    console.log("Reauth");
    let result = await baseQuery(args, api, extraOptions);

    if(result?.error?.originalStatus === 403) {
        console.log("Refreshing...");
        const refreshResult = await baseQuery("/refresh", api, extraOptions);
        console.log(refreshResult);

        if(refreshResult?.data) {
            const user = api.getState().auth.user;

            api.dispatch(setCredentials({...refreshResult.data, user}))

            result = await baseQuery(args,api,extraOptions);
        }
        else {
            console.log("Logging out");
            api.dispatch(logOut());
        }
    }

    return result;
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReAuth,
    endpoints: builder => ({}),
})