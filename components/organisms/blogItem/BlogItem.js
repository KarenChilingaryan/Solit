import { memo } from "react";
import { useRouter } from "next/router";
import styles from "./BlogItem.module.scss";
import { Col, Row } from "../../atoms";
import svg from "../../../assets/img/serviceImg.svg";
import Button from "../../molecules/button/Button";
import ServiceSmallCard from "../../molecules/serviceSmallCard/ServiceSmallCard";
import ServiceLargeCard from "../../molecules/serviceLargeCard/ServiceLargeCard";
import { useSelector } from "react-redux";
import SeoCard from "../../atoms/SEO";
import { seoData } from "../../../constants/seo";
import Link from "next/link";
import Title from "../../molecules/title/Title";

const BlogItem = () => {
  // const { id } = useRouter().query
  // const shortPresentationBlog = useSelector(
  //   (state) => state?.shortPresentationBlogApi?.queries?.["shortPresentationBlog(undefined)"]?.data
  // );

  // const blogItem = useSelector(
  //   (state) =>
  //     state?.blogItemApi?.queries?.[`blogItem("${id}")`]?.data
  // );

  return <></>;
};

export default memo(BlogItem);
