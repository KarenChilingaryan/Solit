import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const postsBlogApi = createApi({

  reducerPath: "postsBlogApi",
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
    blog: builder.query({ query: () => "/blog/" }),
  }),
});

export const { useLongPresentationBlogQuery } = postsBlogApi;
