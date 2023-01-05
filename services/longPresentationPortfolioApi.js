import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const longPresentationPortfolioApi = createApi({

  reducerPath: "longPresentationPortfolioApi",
  refetchOnFocus: false,
  refetchOnMountOrArgChange: false,
  refetchOnReconnect: false,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_APP_API,
    prepareHeaders: (headers) => {      
      headers.set('Access-Control-Allow-Origin', `*`)
      return headers
    },
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    longPresentationPortfolio: builder.query({ query: () => "/long_presentation_portfolio/" }),
  }),
});

export const { useLongPresentationPortfolioQuery } = longPresentationPortfolioApi;
