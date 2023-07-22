import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const postsCareersJobOpeningApi = createApi({

  reducerPath: "postsCareersJobOpeningApi",
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
    career: builder.query({ query: (id) => `/careers_job_opening/${id}/` }),
  }),
});

export const { useServiceItemQuery } = postsCareersJobOpeningApi;
