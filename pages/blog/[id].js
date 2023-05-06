import { memo } from "react";
import { useRouter } from "next/router";
import React from "react";
import { Col } from "../../components/atoms";
import Title from "../../components/molecules/title/Title";
import BottomCarousel from "../../components/organisms/portfolioMain/bottomCarousel/BottomCarousel";
import PortfolioMain from "../../components/organisms/portfolioMain/PortfolioMain";
import { useBlogItemQuery } from "../../services/blogItemApi";

import styles from "./portfolioItem.module.scss";
import { useSelector } from "react-redux";
import BlogItem from "../../components/organisms/blogItem/BlogItem";

const BlogItemPage = () => {
  return <BlogItem />;
};

export default memo(BlogItemPage);
