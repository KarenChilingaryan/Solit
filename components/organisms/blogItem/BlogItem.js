import { memo } from "react";
import styles from "./BlogItem.module.scss";
import { Paragraph, Row } from "../../atoms";
import { HomeMainWithImage } from "../HomeMainWithImage";
import imageBG from "../../../assets/img/career_bg.png"
import OurProjectCard from "../../molecules/ourProjectCard/OurProjectCard";
import ourPtojectImage from "../../../assets/img/unsplash_oXS1f0uZYV4.png";

export const dataProject = [
  "How to manage product backlog with data-driven techniques",
  "The AI development process - a comprehensive guide",
  "Applications of NLP in business and everyday life",
];

const BlogItem = () => {
  // const { id } = useRouter().query
  // const shortPresentationBlog = useSelector(
  //   (state) => state?.shortPresentationBlogApi?.queries?.["shortPresentationBlog(undefined)"]?.data
  // );

  // const blogItem = useSelector(
  //   (state) =>
  //     state?.blogItemApi?.queries?.[`blogItem("${id}")`]?.data
  // );

  return <div className={styles.careerPage}>
    <HomeMainWithImage firstImage={imageBG}>
      <div className={styles.content}>
        <div className={styles.bottomBlock}>

          <Paragraph className={styles.title}>Explore more</Paragraph>
          <Row className={styles.blockItems}>
            {dataProject.map((project, i) =>
              <OurProjectCard
                key={i}
                name={project}
                image={ourPtojectImage}
                more={project == "more"}
                component="blogs"
                blogItem="blogItem"
                blogs
              />
            )}
          </Row>
        </div>
      </div>
    </HomeMainWithImage>
  </div>;
};

export default memo(BlogItem);
