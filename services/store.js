import { configureStore } from "@reduxjs/toolkit";
import { aboutApi } from "./aboutApi";
import { portfolioApi } from "./portfolioApi";
import { postsApi } from "./postsApi";
import { servicesApi } from "./servicesApi";
import { blogItemApi } from "./blogItemApi";
import { careersJobOpeningApi } from "./careersJobOpeningApi";
import { postsCareersApi } from "./postsCareersApi";
import { serviceItemApi } from "./servicesItemApi";
import { headerApi } from "./header";
import { footerApi } from "./footerApi";
import { postsMainOurProjectsApi } from "./postsMainOurProjectsApi";
import { postsMainProcessTextApi } from "./postsMainProcessTextApi";
import { postsMainWhatWeDoTextApi } from "./postsMainWhatWeDoTextApi";
import { postsMainTechnologyApi } from "./postsMainTechnologyApi";
import { postsMainContactsTextApi } from "./postsMainContactsTextApi";
import { postsMainTechnologyFiltersApi } from "./postsMainTechnologyFiltersApi";
import { postsWhatWeDoApi } from "./postsWhatWeDoApi";
import { postPortfolioApi } from "./postPortfolioApi";
import { emailApi } from "./emailApi";
import { abutUsImpactApi } from "./abutUsImpactApi";
import { abutQuickFactsApi } from "./abutQuickFactsApi";
import { abutUsWhatWeDoApi } from "./abutUsWhatWeDoApi";
import { postAbutUsWhatWeDoApi } from "./postAbutUsWhatWeDoApi";
import { abutUsCompanyOfExpertsApi } from "./abutUsCompanyOfExpertsApi";
import { postsWhatWeDoDetailApi } from "./postsWhatWeDoDetailApi";
import { postsCareersJobOpeningApi } from "./postsCareersJobOpeningApi";
import { postsFilterNameBlogApi } from "./postsFilterNameBlogApi";
import { postsBlogApi } from "./postsBlogApi";
import { emailApplyForJobPositionApi } from "./emailApplyForJobPositionApi";
import { emailDiscussYourProject2Api } from "./emailDiscussYourProject2Api";
import { emailDiscussYourProject1Api } from "./emailDiscussYourProject1Api";

const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [postsMainOurProjectsApi.reducerPath]: postsMainOurProjectsApi.reducer,
    [postsMainProcessTextApi.reducerPath]: postsMainProcessTextApi.reducer,
    [postsMainWhatWeDoTextApi.reducerPath]: postsMainWhatWeDoTextApi.reducer,
    [postsMainTechnologyApi.reducerPath]: postsMainTechnologyApi.reducer,
    [postsMainContactsTextApi.reducerPath]: postsMainContactsTextApi.reducer,
    [postsMainTechnologyFiltersApi.reducerPath]: postsMainTechnologyFiltersApi.reducer,
    [postsWhatWeDoApi.reducerPath]: postsWhatWeDoApi.reducer,
    [postPortfolioApi.reducerPath]: postPortfolioApi.reducer,
    [postsCareersJobOpeningApi.reducerPath]: postsCareersJobOpeningApi.reducer,
    [servicesApi.reducerPath]: servicesApi.reducer,
    [aboutApi.reducerPath]: aboutApi.reducer,
    [abutUsImpactApi.reducerPath]: abutUsImpactApi.reducer,
    [abutQuickFactsApi.reducerPath]: abutQuickFactsApi.reducer,
    [abutUsCompanyOfExpertsApi.reducerPath]: abutUsCompanyOfExpertsApi.reducer,
    [abutUsWhatWeDoApi.reducerPath]: abutUsWhatWeDoApi.reducer,
    [portfolioApi.reducerPath]: portfolioApi.reducer,
    [postsWhatWeDoDetailApi.reducerPath]: postsWhatWeDoDetailApi.reducer,
    [postsBlogApi.reducerPath]: postsBlogApi.reducer,
    [postsFilterNameBlogApi.reducerPath]: postsFilterNameBlogApi.reducer,
    [blogItemApi.reducerPath]: blogItemApi.reducer,
    [careersJobOpeningApi.reducerPath]: careersJobOpeningApi.reducer,
    [postsCareersApi.reducerPath]: postsCareersApi.reducer,
    [serviceItemApi.reducerPath]: serviceItemApi.reducer,
    [postAbutUsWhatWeDoApi.reducerPath]: postAbutUsWhatWeDoApi.reducer,
    [headerApi.reducerPath]: headerApi.reducer,
    [footerApi.reducerPath]: footerApi.reducer,
    [emailApi.reducerPath]: emailApi.reducer,
    [emailDiscussYourProject1Api.reducerPath]: emailDiscussYourProject1Api.reducer,
    [emailDiscussYourProject2Api.reducerPath]: emailDiscussYourProject2Api.reducer,
    [emailApplyForJobPositionApi.reducerPath]: emailApplyForJobPositionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

export default store