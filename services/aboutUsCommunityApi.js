import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const aboutUsCommunityApi = createApi({

  reducerPath: "aboutUsCommunityApi",
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
    aboutUsCommunity: builder.query({ query: () => "/about_us_community/" }),
  }),
});

export const { useAboutUsCommunityQuery } = aboutUsCommunityApi;
