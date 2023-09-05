import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const postsPrivacyPolicyOrConditionTermsApi = createApi({

  reducerPath: "postsPrivacyPolicyOrConditionTermsApi",
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
    terms: builder.query({ query: () => `/privacy_policy_or_condition/terms_and_conditions/` }),
  }),
});

export const { usePortfolioQuery } = postsPrivacyPolicyOrConditionTermsApi;
