import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const postsWhatWeDoDetailApi = createApi({

  reducerPath: "postsWhatWeDoDetailApi",
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
    whatDetail: builder.query({ query: (id) => `/what_we_do/${id}/` }),
  }),
});

export const { usePortfolioQuery } = postsWhatWeDoDetailApi;
