import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const shortPresentationBlogApi = createApi({
  reducerPath: "shortPresentationBlogApi",
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
    shortPresentationBlog: builder.query({ query: () => "/short_presentation_blog/" }),
  }),
});

export const { useShortPresentationBlogQuery } = shortPresentationBlogApi;
