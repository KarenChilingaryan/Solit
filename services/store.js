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
import { postsMainOurProjectsApi } from "./postsMainOurProjectsApi";
import { postsMainProcessTextApi } from "./postsMainProcessTextApi";
import { postsMainWhatWeDoTextApi } from "./postsMainWhatWeDoTextApi";
import { postsMainTechnologyApi } from "./postsMainTechnologyApi";
import { postsMainContactsTextApi } from "./postsMainContactsTextApi";
import { postsMainTechnologyFiltersApi } from "./postsMainTechnologyFiltersApi";
import { postsWhatWeDoApi } from "./postsWhatWeDoApi";
import { postPortfolioApi } from "./postPortfolioApi";
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
import { emailApi } from "./emailApi";
import { postsTextCareersAboutUsApi } from "./postsTextCareersAboutUsApi";
import { footerApi } from "./footerApi";
import { postsTextCareersColourfulApi } from "./postsTextCareersColourfulApi";
import { postsTextMainAboutUsApi } from "./postsTextMainAboutUsApi";
import { postTestimonialsApi } from "./postTestimonialsApi";
import { postsPrivacyPolicyOrConditionTermsApi } from "./postsPrivacyPolicyOrConditionTermsApi";
import { postsPrivacyPolicyOrConditionPolicyApi } from "./postsPrivacyPolicyOrConditionPolicyApi";
import { portfolioFiltersApi } from "./portfolioFiltersApi";
import { postsSeoFieldsApi } from "./postsSeoFieldsApi";
import { emailLetsTalkApi } from "./emailLetsTalkApi";


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
    [emailDiscussYourProject1Api.reducerPath]: emailDiscussYourProject1Api.reducer,
    [emailApi.reducerPath]: emailApi.reducer,
    [emailDiscussYourProject2Api.reducerPath]: emailDiscussYourProject2Api.reducer,
    [postsTextCareersAboutUsApi.reducerPath]: postsTextCareersAboutUsApi.reducer,
    [emailApplyForJobPositionApi.reducerPath]: emailApplyForJobPositionApi.reducer,
    [postsTextCareersColourfulApi.reducerPath]: postsTextCareersColourfulApi.reducer,
    [postsTextMainAboutUsApi.reducerPath]: postsTextMainAboutUsApi.reducer,
    [footerApi.reducerPath]: footerApi.reducer,
    [postTestimonialsApi.reducerPath]: postTestimonialsApi.reducer,
    [postsPrivacyPolicyOrConditionTermsApi.reducerPath]: postsPrivacyPolicyOrConditionTermsApi.reducer,
    [postsPrivacyPolicyOrConditionPolicyApi.reducerPath]: postsPrivacyPolicyOrConditionPolicyApi.reducer,
    [portfolioFiltersApi.reducerPath]: portfolioFiltersApi.reducer,
    [postsSeoFieldsApi.reducerPath]: postsSeoFieldsApi.reducer,
    [emailLetsTalkApi.reducerPath]: emailLetsTalkApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      postsApi.middleware,
      postsMainOurProjectsApi.middleware,
      postsMainProcessTextApi.middleware,
      postsMainWhatWeDoTextApi.middleware,
      postsMainTechnologyApi.middleware,
      postsMainContactsTextApi.middleware,
      postsMainTechnologyFiltersApi.middleware,
      postsWhatWeDoApi.middleware,
      postPortfolioApi.middleware,
      postsCareersJobOpeningApi.middleware,
      servicesApi.middleware,
      aboutApi.middleware,
      abutUsImpactApi.middleware,
      abutQuickFactsApi.middleware,
      abutUsCompanyOfExpertsApi.middleware,
      abutUsWhatWeDoApi.middleware,
      portfolioApi.middleware,
      postsWhatWeDoDetailApi.middleware,
      postsBlogApi.middleware,
      postsFilterNameBlogApi.middleware,
      blogItemApi.middleware,
      careersJobOpeningApi.middleware,
      postsCareersApi.middleware,
      serviceItemApi.middleware,
      postAbutUsWhatWeDoApi.middleware,
      headerApi.middleware,
      emailDiscussYourProject1Api.middleware,
      emailDiscussYourProject2Api.middleware,
      postsTextCareersAboutUsApi.middleware,
      emailApplyForJobPositionApi.middleware,
      postsTextCareersColourfulApi.middleware,
      postsTextMainAboutUsApi.middleware,
      footerApi.middleware,
      postTestimonialsApi.middleware,
      postsPrivacyPolicyOrConditionTermsApi.middleware,
      postsPrivacyPolicyOrConditionPolicyApi.middleware,
      portfolioFiltersApi.middleware,
      postsSeoFieldsApi.middleware,
      emailApi.middleware,
      emailLetsTalkApi.middleware
    ),
});

export default store