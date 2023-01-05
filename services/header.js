import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const headerApi = createApi({
  prepareHeaders: (headers) => {
    headers.set('Access-Control-Allow-Origin', '*')
    return headers
  },
  reducerPath: "headerApi",
  refetchOnFocus: false,
  refetchOnMountOrArgChange: false,
  refetchOnReconnect: false,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_APP_API,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    header: builder.query({ query: () => "/header/" }),
  }),
});

export const { useHeaderQuery } = headerApi;
