import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const postsServicesApi = createApi({
  prepareHeaders: (headers) => {
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Headers', 'Content-Type,X-Api-Key');
    headers.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.set('Access-Control-Allow-Methods', 'OPTIONS,POST,GET,PUTCH,PUT');
    return headers
  },
  reducerPath: "postsServicesApi",
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
    postsServices: builder.query({ query: () => "/painted_text/services/" }),
  }),
});

export const { usePostsServicesQuery } = postsServicesApi;
