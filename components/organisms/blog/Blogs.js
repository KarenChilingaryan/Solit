import { memo } from "react";
import { useRouter } from "next/router";
import { Col, Row } from "../../atoms";
import earth from "../../../assets/img/earth.png";
import { useSelector } from "react-redux";
import { HomeMainWithImage } from "../HomeMainWithImage";
import { HomeMain } from "../homeMain";
import { BlogsSection } from "../blogsSection";
import Portfolios from "../portfolios/Portfolios";

import styles from "./Blogs.module.scss";

const Blogs = () => {
  // const router = useRouter();
  // const longPresentationBlog = useSelector(
  //   (state) =>
  //     state?.longPresentationBlogApi?.queries?.[
  //       "longPresentationBlog(undefined)"
  //     ]?.data
  // );
  // const buttonServicesText = "Our Services";
  // const buttonContactText = "Contact Us";

  // const handleClick = (e) => {
  //   router.push(`blog/${e}`);
  // };
  return (
    <HomeMainWithImage firstImage={earth}>
      <Row className={styles.content}>
        <HomeMain
          data={{
            title: "Insights and advice from our expert team",
            firstSubtitle:
              "We know a lot about our niche. So we thought, why not share something with you? Learn, explore and stay on top of design and development (and not only) novelties with Merge blog. ",
          }}
        />
        <Row className={styles.blogsSection}>
          <BlogsSection />
        </Row>
      </Row>
    </HomeMainWithImage>
  );
};

export default memo(Blogs);
