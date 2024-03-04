import { memo } from "react";
// import { Row } from "../../atoms";
import Row from "../../atoms/Row";
import earth from "../../../assets/img/main-bg-blogs.png";
import { useSelector } from "react-redux";
import HomeMainWithImage from '../HomeMainWithImage/HomeMainWithImage'
import HomeMain from '../homeMain/HomeMain'
import { BlogsSection } from "../blogsSection";

import styles from "./Blogs.module.scss";

const Blogs = () => {
  const postsBlogApi = useSelector(
    (state) => state?.postsBlogApi?.queries?.["blog(undefined)"]?.data
  );

  return (
    <HomeMainWithImage firstImage={earth} seoName="blog">
      <Row className={styles.content}>
        <HomeMain
          h1={true}
          data={{
            title: postsBlogApi?.data_text[0].title,
            firstSubtitle: postsBlogApi?.data_text[0].description,
          }}
          className={"blog"}
        />
        <Row className={styles.blogsSection}>
          <BlogsSection data={postsBlogApi?.data_list} />
        </Row>
      </Row>
    </HomeMainWithImage>
  );
};

export default memo(Blogs);
