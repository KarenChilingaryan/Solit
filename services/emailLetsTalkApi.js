import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const emailLetsTalkApi = createApi({

  reducerPath: "emailLetsTalkApi",
  refetchOnFocus: false,
  refetchOnMountOrArgChange: false,
  refetchOnReconnect: false,
  tagTypes: ['Posts'],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_APP_API,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    email: builder.query({
      query: (body) => {
        return {
          url: '/email_lets_talk/',
          method: 'POST',
          body,
        }
      }
    })
  }),
});

export const { useEmailQuery } = emailLetsTalkApi;
