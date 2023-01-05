import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const aboutOurTeamTitleApi = createApi({

  reducerPath: "aboutOurTeamTitleApi",
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
    aboutOurTeamTitle: builder.query({ query: () => "/about_our_team_title/" }),
  }),
});

export const { useAboutOurTeamTitleQuery } = aboutOurTeamTitleApi;
