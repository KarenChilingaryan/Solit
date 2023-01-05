import { configureStore } from "@reduxjs/toolkit";
import { aboutApi } from "../services/aboutApi";
import { portfolioApi } from "../services/portfolioApi";
import { postsApi } from "../services/postsApi";
import { ourServicesApi } from "../services/ourServicesApi";
import { servicesApi } from "../services/servicesApi";
import { longPresentationBlogApi } from "../services/longPresentationBlogApi";
import { blogItemApi } from "../services/blogItemApi";
import { careerTechnologyItemApi } from "../services/careerTechnologyItemApi";
import { careerTechnologyLongPresentationApi } from "../services/careerTechnologyLongPresentationApi";
import { longPresentationPortfolioApi } from "../services/longPresentationPortfolioApi";
import { postsCareersApi } from "../services/postsCareersApi";
import { postsServicesApi } from "../services/postsServicesApi";
import { serviceItemApi } from "../services/servicesItemApi";
import { tagsApi } from "../services/tagsApi";
import { aboutUsCommunityApi } from "../services/aboutUsCommunityApi";
import { portfolioTextApi } from "../services/portfolioTextApi";
import { headerApi } from "../services/header";
import { homepageAdditionalServiceApi } from "../services/homepageAdditionalServiceApi";
import { shortPresentationBlogApi } from "../services/shortPresentationBlogApi";
import { shortPresentationPortfolioApi } from "../services/shortPresentationPortfolioApi";
import { aboutOurTeamTitleApi } from "../services/aboutOurTeamTitleApi";
import { testimonialsFlagTitleApi } from "../services/testimonialsFlagTitleApi";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [ourServicesApi.reducerPath]: ourServicesApi.reducer,
    [servicesApi.reducerPath]: servicesApi.reducer,
    [aboutApi.reducerPath]: aboutApi.reducer,
    [portfolioApi.reducerPath]: portfolioApi.reducer,
    [longPresentationBlogApi.reducerPath]: longPresentationBlogApi.reducer,
    [blogItemApi.reducerPath]: blogItemApi.reducer,
    [careerTechnologyItemApi.reducerPath]: careerTechnologyItemApi.reducer,
    [careerTechnologyLongPresentationApi.reducerPath]: careerTechnologyLongPresentationApi.reducer,
    [longPresentationPortfolioApi.reducerPath]: longPresentationPortfolioApi.reducer,
    [portfolioTextApi.reducerPath]: portfolioTextApi.reducer,
    [postsCareersApi.reducerPath]: postsCareersApi.reducer,
    [postsServicesApi.reducerPath]: postsServicesApi.reducer,
    [serviceItemApi.reducerPath]: serviceItemApi.reducer,
    [tagsApi.reducerPath]: tagsApi.reducer,
    [aboutUsCommunityApi.reducerPath]: aboutUsCommunityApi.reducer,
    [headerApi.reducerPath]: headerApi.reducer,
    [homepageAdditionalServiceApi.reducerPath]: homepageAdditionalServiceApi.reducer,
    [shortPresentationBlogApi.reducerPath]: shortPresentationBlogApi.reducer,
    [shortPresentationPortfolioApi.reducerPath]: shortPresentationPortfolioApi.reducer,
    [aboutOurTeamTitleApi.reducerPath]: aboutOurTeamTitleApi.reducer,
    [testimonialsFlagTitleApi.reducerPath]: testimonialsFlagTitleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});
