import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const careerTechnologyLongPresentationApi = createApi({
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    headers.set('Access-Control-Allow-Origin', `*`)
    return headers
  },
  reducerPath: "careerTechnologyLongPresentationApi",
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
    careerTechnologyLongPresentation: builder.query({ query: () => "/career_technology_long_presentation/" }),
  }),
});

export const { useCareerTechnologyLongPresentationQuery } = careerTechnologyLongPresentationApi;
