import { memo, useState } from "react";
import { Col, Row } from "../../atoms";
import elipse from "../../../assets/img/Ellipse.png";
import OurProjectCard from "../../molecules/ourProjectCard/OurProjectCard";
import FilterButtons from "../filters/FilterButtons";

import styles from "./BlogsSection.module.scss";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export const dataProject = [
  "How to manage product backlog with data-driven techniques",
  "The AI development process - a comprehensive guide",
  "Applications of NLP in business and everyday life",
  "How to build an AI assistant for your business or yourself",
  "Applications of NLP in healthcare: how AI is transforming the industry",
  "The AI development process - a comprehensive guide",
  "Creating custom AI solutions for your business: all you need to know",
  "The best AI APIs everyone should know about",
  "How do chatbots work?",
];

const BlogsSection = ({ data }) => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const postsFilterNameBlogApi = useSelector(
    (state) =>
      state?.postsFilterNameBlogApi?.queries?.[
        "blog(undefined)"
      ]?.data
  );

  const handleFilter = (id) => {
    // const data = [...portfolio];
    // const sortedData = data?.filter((el) => el?.id === id);
    // setPortfolioData(sortedData);
  };

  const handleClick = (id) => {
    router.push(`/blog/${id}`);
  };

  return (
    <Row className={styles.portfoliosWrapper}>
      <div className={styles.filtersBlock}>
        <Col className={styles.filters}>
          <FilterButtons
            name={"All"}
            className={selectedCategory === "All" ? "active" : ""}
            onClick={() => {
              // setPortfolioData(portfolio);
              setSelectedCategory("All");
            }}
          />
          {postsFilterNameBlogApi?.map((el) => (
            <FilterButtons
              name={el.name}
              key={el.id}
              className={selectedCategory === el?.id ? "active" : ""}
              onClick={() => {
                handleFilter(el?.id);
                setSelectedCategory(el?.id);
              }}
            />
          ))}
        </Col>
      </div>
      <Row
        className={styles.projects}
        justify={"space-between"}
        gutter={[0, "6vw"]}
      >
        <Image className={styles.elipse} src={elipse} alt="image" />
        {data?.map((project, i) => (
          <OurProjectCard
            onClick={() => handleClick(project.blog_detail)}
            key={i}
            name={project.title}
            image={project?.webp_image_blog}
            description={project.description}
            more={project == "more"}
            component="blogs"
            blogs
          />
        ))}
      </Row>
    </Row>
  );
};

export default memo(BlogsSection);
