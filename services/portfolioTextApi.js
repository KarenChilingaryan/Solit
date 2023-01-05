import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const portfolioTextApi = createApi({
  prepareHeaders: (headers) => {
    headers.set('Access-Control-Allow-Origin', '*')
    return headers
  },
  reducerPath: "portfolioTextApi",
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
    portfolioText: builder.query({ query: () => "/portfolio_text/" }),
  }),
});

export const { usePortfolioTextQuery } = portfolioTextApi;
