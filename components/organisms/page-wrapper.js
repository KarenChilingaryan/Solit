import axios from "axios";
import { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { aboutApi } from "../../services/aboutApi";
import { abutQuickFactsApi } from "../../services/abutQuickFactsApi";
import { abutUsCompanyOfExpertsApi } from "../../services/abutUsCompanyOfExpertsApi";
import { abutUsImpactApi } from "../../services/abutUsImpactApi";
import { abutUsWhatWeDoApi } from "../../services/abutUsWhatWeDoApi";
import { careersJobOpeningApi } from "../../services/careersJobOpeningApi";
import { headerApi } from "../../services/header";
import { postsBlogApi } from "../../services/postsBlogApi";
import { postPortfolioApi } from "../../services/postPortfolioApi";
import { postsApi } from "../../services/postsApi";
import { postsMainContactsTextApi } from "../../services/postsMainContactsTextApi";
import { postsMainOurProjectsApi } from "../../services/postsMainOurProjectsApi";
import { postsMainProcessTextApi } from "../../services/postsMainProcessTextApi";
import { postsMainTechnologyApi } from "../../services/postsMainTechnologyApi";
import { postsMainTechnologyFiltersApi } from "../../services/postsMainTechnologyFiltersApi";
import { postsMainWhatWeDoTextApi } from "../../services/postsMainWhatWeDoTextApi";
import { postsWhatWeDoApi } from "../../services/postsWhatWeDoApi";
import { servicesApi } from "../../services/servicesApi";
import { postsFilterNameBlogApi } from "../../services/postsFilterNameBlogApi";
import { postsTextCareersAboutUsApi } from "../../services/postsTextCareersAboutUsApi";
import { postsTextCareersColourfulApi } from "../../services/postsTextCareersColourfulApi";
import { postsTextMainAboutUsApi } from "../../services/postsTextMainAboutUsApi";
import { footerApi } from "../../services/footerApi";
import { postTestimonialsApi } from "../../services/postTestimonialsApi";
import { postsPrivacyPolicyOrConditionTermsApi } from "../../services/postsPrivacyPolicyOrConditionTermsApi";
import { postsPrivacyPolicyOrConditionPolicyApi } from "../../services/postsPrivacyPolicyOrConditionPolicyApi";
import { portfolioFiltersApi } from "../../services/portfolioFiltersApi";

export async function getServerSideProps(context) {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users/`);

  return {
    props: {
      item: res.data,
    },
  };
}

const PageWrapper = ({ children, item }) => {
  const { id } = useRouter().query;

  const dispatch = useDispatch();

  const a = useRouter();
  const getAllData = useCallback(async (flag = true) => {
    if (a.pathname === "/" || flag) {
      await dispatch(await postsApi.endpoints.posts.initiate());
      if (!a.pathname.includes("/services"))
        await dispatch(await servicesApi.endpoints.services.initiate());
      await dispatch(await footerApi.endpoints.footer.initiate());
      await dispatch(
        await postsTextMainAboutUsApi.endpoints.mainAbout.initiate()
      );
      await dispatch(await postsMainProcessTextApi.endpoints.posts.initiate());
      await dispatch(await postsMainWhatWeDoTextApi.endpoints.posts.initiate());
      if (!a.pathname.includes("/what-we-do"))
        await dispatch(await postsWhatWeDoApi.endpoints.posts.initiate());
      await dispatch(
        await postsMainTechnologyFiltersApi.endpoints.posts.initiate()
      );
      await dispatch(await postsMainTechnologyApi.endpoints.posts.initiate());
      await dispatch(await postsMainOurProjectsApi.endpoints.posts.initiate());
      if (!a.pathname.includes("/portfolio")) {
        await dispatch(await postPortfolioApi.endpoints.posts.initiate());
        await dispatch(
          await portfolioFiltersApi.endpoints.portfolioFilters.initiate()
        );
      }
      //to do
      if (!a.pathname.includes("/about-us"))
        await dispatch(
          await abutUsCompanyOfExpertsApi.endpoints.about.initiate()
        );
      if (!a.pathname.includes("/blog")) {
        await dispatch(await postsBlogApi.endpoints.blog.initiate());
        await dispatch(await postsFilterNameBlogApi.endpoints.blog.initiate());
      }
      await dispatch(await postTestimonialsApi.endpoints.posts.initiate());
      await dispatch(await postsMainContactsTextApi.endpoints.posts.initiate());

      if (!a.pathname.includes("/terms-and-conditions")) {
        await dispatch(
          await postsPrivacyPolicyOrConditionTermsApi.endpoints.terms.initiate()
        );
      }
      if (!a.pathname.includes("/privacy-policy")) {
        await dispatch(
          await postsPrivacyPolicyOrConditionPolicyApi.endpoints.policy.initiate()
        );
      }
    }

    if (a.pathname.includes("/blog") || flag) {
      await dispatch(await postsBlogApi.endpoints.blog.initiate());
      await dispatch(await postsFilterNameBlogApi.endpoints.blog.initiate());
    }

    if (a.pathname.includes("/about-us") || flag) {
      await dispatch(await aboutApi.endpoints.about.initiate());
      await dispatch(await abutUsWhatWeDoApi.endpoints.about.initiate());
      await dispatch(await abutUsImpactApi.endpoints.about.initiate());
      await dispatch(await abutQuickFactsApi.endpoints.about.initiate());
      await dispatch(
        await abutUsCompanyOfExpertsApi.endpoints.about.initiate()
      );
    }

    if (a.pathname.includes("/careers") || flag) {
      await dispatch(await careersJobOpeningApi.endpoints.career.initiate());
      await dispatch(
        await postsTextCareersColourfulApi.endpoints.careersAbout.initiate()
      );
      await dispatch(
        await postsTextCareersAboutUsApi.endpoints.careersAbout.initiate()
      );
    }

    if (a.pathname.includes("/services") || flag) {
      await dispatch(await servicesApi.endpoints.services.initiate());
    }
    if (a.pathname.includes("/portfolio") || flag) {
      await dispatch(await postPortfolioApi.endpoints.posts.initiate());
      await dispatch(
        await portfolioFiltersApi.endpoints.portfolioFilters.initiate()
      );
    }
    if (a.pathname.includes("/what-we-do") || flag) {
      await dispatch(await postsWhatWeDoApi.endpoints.posts.initiate());
    }

    if (a.pathname.includes("/terms-and-conditions") || flag) {
      await dispatch(
        await postsPrivacyPolicyOrConditionTermsApi.endpoints.terms.initiate()
      );
    }
    if (a.pathname.includes("/privacy-policy") || flag) {
      await dispatch(
        await postsPrivacyPolicyOrConditionPolicyApi.endpoints.policy.initiate()
      );
    }

    if (!flag) {
      await getAllData(true);
    }
  }, []);

  useEffect(() => {
    dispatch(headerApi.endpoints.header.initiate());
    getAllData(false);
  }, [id]);

  return <div>{children}</div>;
};

export default PageWrapper;
