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
  const postsBlogApi = useSelector(
    (state) =>
      state?.postsBlogApi?.queries?.[
        "blog(undefined)"
      ]?.data
  );
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
            title: postsBlogApi?.data_text[0].title,
            firstSubtitle:
              postsBlogApi?.data_text[0].description
          }}
        />
        <Row className={styles.blogsSection}>
          <BlogsSection data={postsBlogApi?.data_list}/>
        </Row>
      </Row>
    </HomeMainWithImage>
  );
};

export default memo(Blogs);
