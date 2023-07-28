import { memo, useEffect, useState } from "react";
import styles from "./BlogItem.module.scss";
import { Paragraph, Row } from "../../atoms";
import { HomeMainWithImage } from "../HomeMainWithImage";
import imageBG from "../../../assets/img/career_bg.png"
import OurProjectCard from "../../molecules/ourProjectCard/OurProjectCard";
import ourPtojectImage from "../../../assets/img/unsplash_oXS1f0uZYV4.png";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { blogItemApi } from "../../../services/blogItemApi";

export const dataProject = [
  "How to manage product backlog with data-driven techniques",
  "The AI development process - a comprehensive guide",
  "Applications of NLP in business and everyday life",
];

const BlogItem = () => {
  const { id } = useRouter().query
  const router = useRouter();

  const dispatch = useDispatch();
  const [blogItemData, setBlogItem] = useState(null)
  const getData = async (id) => {
    const res = await dispatch(await blogItemApi.endpoints.blogItem.initiate(id));
    setBlogItem(res.data)
  }
  useEffect(() => {
    if (id) {
      getData(id)
    }
  }, [id])

  const postsBlogApi = useSelector(
    (state) =>
      state?.postsBlogApi?.queries?.[
        "blog(undefined)"
      ]?.data
  );

  const handleClick = (id) => {
    router.push(`/blog/${id}`);
  };

  return <div className={styles.careerPage}>
    <HomeMainWithImage firstImage={imageBG}>
      <div className={styles.content}>
        <div className={styles.bottomBlock}>
          <div className={styles.blockItemImage} dangerouslySetInnerHTML={{ __html: blogItemData?.create_page_blog_detail || "" }}>
          </div>
          <Paragraph className={styles.title}>Explore more</Paragraph>
          <Row className={styles.blockItems}>
            {postsBlogApi?.data_list?.slice(0, 3)?.map((project, i) =>
              <OurProjectCard
                onClick={() => handleClick(project.blog_detail)}
                key={i}
                name={project.title}
                image={project?.original_image_blog}
                description={project.description}
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
