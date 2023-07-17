import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { aboutApi } from "../../services/aboutApi";
import { aboutOurTeamTitleApi } from "../../services/aboutOurTeamTitleApi";
import { aboutUsCommunityApi } from "../../services/aboutUsCommunityApi";
import { blogItemApi } from "../../services/blogItemApi";
import { careerTechnologyItemApi } from "../../services/careerTechnologyItemApi";
import { careerTechnologyLongPresentationApi } from "../../services/careerTechnologyLongPresentationApi";
import { headerApi } from "../../services/header";
import { homepageAdditionalServiceApi } from "../../services/homepageAdditionalServiceApi";
import { longPresentationBlogApi } from "../../services/longPresentationBlogApi";
import { longPresentationPortfolioApi } from "../../services/longPresentationPortfolioApi";
import { ourServicesApi } from "../../services/ourServicesApi";
import { ourTeamDetailApi } from "../../services/ourTeamDetail";
import { portfolioApi } from "../../services/portfolioApi";
import { portfolioTextApi } from "../../services/portfolioTextApi";
import { postsApi } from "../../services/postsApi";
import { postsMainOurProjectsApi } from "../../services/postsMainOurProjectsApi";
import { postsMainProcessTextApi } from "../../services/postsMainProcessTextApi";
import { servicesApi } from "../../services/servicesApi";
import { serviceItemApi } from "../../services/servicesItemApi";
import { shortPresentationBlogApi } from "../../services/shortPresentationBlogApi";
import { shortPresentationPortfolioApi } from "../../services/shortPresentationPortfolioApi";
import { tagsApi } from "../../services/tagsApi";
import { testimonialsFlagTitleApi } from "../../services/testimonialsFlagTitleApi";

export async function getServerSideProps(context) {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users/`);

  return {
    // will be passed to the page component as props
    props: {
      item: res.data,
    },
  };
}

const PageWrapper = ({ children, item }) => {
  const { id } = useRouter().query


  const dispatch = useDispatch()

  const a = useRouter()
  if (a.pathname === '/') {

  }
  const getAllData = async (flag = true) => {
    if (a.pathname === '/' && flag || a.pathname !== '/' && !flag) {
      await dispatch(await postsApi.endpoints.posts.initiate())
      await dispatch(await postsMainOurProjectsApi.endpoints.posts.initiate())
      await dispatch(await postsMainProcessTextApi.endpoints.posts.initiate())
      await dispatch(await aboutApi.endpoints.about.initiate())
      await dispatch(await ourServicesApi.endpoints.ourServices.initiate())
      await dispatch(await homepageAdditionalServiceApi.endpoints.homepageAdditionalService.initiate())
      await dispatch(await testimonialsFlagTitleApi.endpoints.testimonialsFlagTitle.initiate())
      await dispatch(await servicesApi.endpoints.services.initiate())
    }

    if (a.pathname.includes('/portfolio') && flag || !a.pathname.includes('/portfolio') && !flag) {
      await dispatch(await portfolioTextApi.endpoints.portfolioText.initiate())
      await dispatch(await longPresentationPortfolioApi.endpoints.longPresentationPortfolio.initiate())
      await dispatch(await tagsApi.endpoints.tags.initiate())
      await dispatch(await shortPresentationPortfolioApi.endpoints.shortPresentationPortfolio.initiate())
      if (id) {
        await dispatch(await portfolioApi.endpoints.portfolio.initiate(id))
      }
    }

    if (a.pathname.includes('/blog') && flag || !a.pathname.includes('/blog') && !flag) {
      await dispatch(await longPresentationBlogApi.endpoints.longPresentationBlog.initiate())
      // await dispatch(await shortPresentationBlogApi.endpoints.shortPresentationBlog.initiate())
      if (id) {
        await dispatch(await blogItemApi.endpoints.blogItem.initiate(id))
      }
    }

    if (a.pathname.includes('/services') && flag || !a.pathname.includes('/services') && !flag) {
      if (id) {
        await dispatch(await serviceItemApi.endpoints.serviceItem.initiate(id))
      }
    }

    if (a.pathname.includes('/aboutus') && flag || !a.pathname.includes('/aboutus') && !flag) {
      await dispatch(await aboutUsCommunityApi.endpoints.aboutUsCommunity.initiate())
      await dispatch(await aboutOurTeamTitleApi.endpoints.aboutOurTeamTitle.initiate())
    }

    if (a.pathname.includes('/careers') && flag || !a.pathname.includes('/careers') && !flag) {
      await dispatch(await careerTechnologyLongPresentationApi.endpoints.careerTechnologyLongPresentation.initiate())
      if (id) {
        await dispatch(await careerTechnologyItemApi.endpoints.careerTechnologyItem.initiate(id))
      }
    }

    if (a.pathname.includes('/our-team') && flag || !a.pathname.includes('/our-team') && !flag) {
      if (id) {
        await dispatch(await ourTeamDetailApi.endpoints.ourTeamDetail.initiate(id))
      }
    }

    if (flag) {
      await getAllData(false)
    }
  }

  useEffect(() => {
    dispatch(headerApi.endpoints.header.initiate())
    getAllData()
  }, [id])

  return <div>{children}</div>;
};

export default PageWrapper;
