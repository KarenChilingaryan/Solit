import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const shortPresentationPortfolioApi = createApi({

  reducerPath: "shortPresentationPortfolioApi",
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
    shortPresentationPortfolio: builder.query({ query: () => "/short_presentation_portfolio/" }),
  }),
});

export const { useLongPresentationPortfolioQuery } = shortPresentationPortfolioApi;
