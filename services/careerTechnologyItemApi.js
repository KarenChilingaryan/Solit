import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const careerTechnologyItemApi = createApi({

  reducerPath: "careerTechnologyItemApi",
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
    careerTechnologyItem: builder.query({ query: (id) => `/career_technology/${id}/` }),
  }),
});

export const { useCareerTechnologyItemQuery } = careerTechnologyItemApi;
