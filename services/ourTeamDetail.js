import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const ourTeamDetailApi = createApi({

  reducerPath: "ourTeamDetailApi",
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
    ourTeamDetail: builder.query({ query: (id) => `/our_team_detail/${id}/` }),
  }),
});

export const { usePortfolioQuery } = ourTeamDetailApi;
