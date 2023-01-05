import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const homepageAdditionalServiceApi = createApi({

  reducerPath: "homepageAdditionalServiceApi",
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
    homepageAdditionalService: builder.query({ query: () => "/homepage_additional_service/" }),
  }),
});

export const { useHomepageAdditionalServiceQuery } = homepageAdditionalServiceApi;
