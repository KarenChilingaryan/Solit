import { configureStore } from "@reduxjs/toolkit";
import { aboutApi } from "./aboutApi";
import { portfolioApi } from "./portfolioApi";
import { postsApi } from "./postsApi";
import { ourServicesApi } from "./ourServicesApi";
import { servicesApi } from "./servicesApi";
import { longPresentationBlogApi } from "./longPresentationBlogApi";
import { blogItemApi } from "./blogItemApi";
import { careerTechnologyItemApi } from "./careerTechnologyItemApi";
import { careerTechnologyLongPresentationApi } from "./careerTechnologyLongPresentationApi";
import { longPresentationPortfolioApi } from "./longPresentationPortfolioApi";
import { postsCareersApi } from "./postsCareersApi";
import { postsServicesApi } from "./postsServicesApi";
import { serviceItemApi } from "./servicesItemApi";
import { tagsApi } from "./tagsApi";
import { aboutUsCommunityApi } from "./aboutUsCommunityApi";
import { portfolioTextApi } from "./portfolioTextApi";
import { headerApi } from "./header";
import { homepageAdditionalServiceApi } from "./homepageAdditionalServiceApi";
import { shortPresentationBlogApi } from "./shortPresentationBlogApi";
import { shortPresentationPortfolioApi } from "./shortPresentationPortfolioApi";
import { aboutOurTeamTitleApi } from "./aboutOurTeamTitleApi";
import { testimonialsFlagTitleApi } from "./testimonialsFlagTitleApi";
import { emailApi } from "./emailApi";

const store = configureStore({
  reducer: {
    [emailApi.reducerPath]: emailApi.reducer,
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

export default store