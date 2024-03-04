import { memo, useCallback, useContext, useEffect, useState } from "react";
import { Paragraph, SeoCard } from "../../atoms";
import Row from "../../atoms/Row";
import HomeMainWithImage from '../HomeMainWithImage/HomeMainWithImage'
import imageBG from "../../../assets/img/career_bg.png";
import OurProjectCard from "../../molecules/ourProjectCard/OurProjectCard";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { blogItemApi } from "../../../services/blogItemApi";
import { BreadcrumbContext } from "../../../utils/hooks/contexts/bredcrumb";
import { websiteUrl } from "../../../utils/hooks/constants/pageUrl";

import styles from "./BlogItem.module.scss";

export const dataProject = [
  "How to manage product backlog with data-driven techniques",
  "The AI development process - a comprehensive guide",
  "Applications of NLP in business and everyday life",
];

const BlogItem = () => {
  const { breadcrumbElements, setBreadcrumbElements } =
    useContext(BreadcrumbContext);
  const { id } = useRouter().query;
  const router = useRouter();

  const dispatch = useDispatch();
  const [blogItemData, setBlogItem] = useState(null);

  const getData = useCallback(async (id) => {
    const res = await dispatch(
      await blogItemApi.endpoints.blogItem.initiate(id)
    );
    setBlogItem(res.data);
  }, []);

  useEffect(() => {
    if (id) {
      getData(id);
    }
  }, [id]);

  const postsBlogApi = useSelector(
    (state) => state?.postsBlogApi?.queries?.["blog(undefined)"]?.data
  );

  const handleClick = (slug) => {
    router.push(`/blog/${slug}`);
  };

  useEffect(() => {
    if (blogItemData && breadcrumbElements) {
      const newBred = [...breadcrumbElements?.slice(0, 3)];
      newBred[2] = { name: blogItemData.breadcrumb, link: "/" };
      setBreadcrumbElements(newBred);
    }
  }, [blogItemData]);

  const getRandomValuesFromArray = (arr, numberOfValues) => {
    const copyArr = [...arr];

    for (let i = copyArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copyArr[i], copyArr[j]] = [copyArr[j], copyArr[i]];
    }

    return copyArr.slice(0, numberOfValues);
  };

  return (
    <div className={styles.careerPage}>
      <SeoCard
        details={{
          pageDescription: blogItemData?.meta_description,
          pageKeyWords: blogItemData?.meta_keywords,
          pageUrl: websiteUrl + router.asPath,
          title: blogItemData?.meta_title,
        }}
      />
      <HomeMainWithImage firstImage={imageBG}>
        <div className={styles.content}>
          <div className={styles.bottomBlock}>
            <h1 className={styles.h1Title}>{blogItemData?.html_h1_tag}</h1>
            <div
              className={styles.blockItemImage}
              dangerouslySetInnerHTML={{
                __html: blogItemData?.create_page_blog_detail || "",
              }}
            ></div>
            <Paragraph className={styles.title}>Explore more</Paragraph>
            <Row className={styles.blockItems}>
              {postsBlogApi?.data_list &&
                getRandomValuesFromArray(postsBlogApi?.data_list, 3)
                  ?.slice(0, 3)
                  ?.map((project, i) => (
                    <OurProjectCard
                      onClick={() => handleClick(project.slug)}
                      key={i}
                      name={project.title}
                      image={project?.webp_image_blog}
                      description={project.description}
                      more={project == "more"}
                      component="blogs"
                      blogItem="blogItem"
                      blogs
                    />
                  ))}
            </Row>
          </div>
        </div>
      </HomeMainWithImage>
    </div>
  );
};

export default memo(BlogItem);
