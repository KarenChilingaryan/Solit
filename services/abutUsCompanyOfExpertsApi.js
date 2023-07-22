import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const abutUsCompanyOfExpertsApi = createApi({

  reducerPath: "abutUsCompanyOfExpertsApi",
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
    about: builder.query({ query: () => "/abut_us_company_of_experts/" }),
  }),
});

export const { useAboutQuery } = abutUsCompanyOfExpertsApi;
