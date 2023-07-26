import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const postsTextCareersAboutUsApi = createApi({
  reducerPath: "postsTextCareersAboutUsApi",
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
    careersAbout: builder.query({ query: () => "/text_careers_about_us/" }),
  }),
});

export const { usePostsQuery } = postsTextCareersAboutUsApi;
