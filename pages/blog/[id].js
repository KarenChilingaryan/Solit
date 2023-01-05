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

const BlogItem = () => {
  const { id } = useRouter().query
  const shortPresentationBlog = useSelector(
    (state) => state?.shortPresentationBlogApi?.queries?.["shortPresentationBlog(undefined)"]?.data
  );

  const blogItem = useSelector(
    (state) =>
      state?.blogItemApi?.queries?.[`blogItem("${id}")`]?.data
  );

  return (
    <Col className={styles.blogItemWrapper}>
      <Title title={blogItem?.headline} whiteTitle />
      <PortfolioMain data={blogItem} />
      <BottomCarousel data={shortPresentationBlog}/>
    </Col>
  );
};

export default memo(BlogItem);
