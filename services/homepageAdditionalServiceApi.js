import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const homepageAdditionalServiceApi = createApi({
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    headers.set('Access-Control-Allow-Origin', `*`)
    return headers
  },
  reducerPath: "homepageAdditionalServiceApi",
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
    homepageAdditionalService: builder.query({ query: () => "/homepage_additional_service/" }),
  }),
});

export const { useHomepageAdditionalServiceQuery } = homepageAdditionalServiceApi;
