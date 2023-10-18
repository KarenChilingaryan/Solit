import { memo, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Button from "../../molecules/button/Button";
import { Col, Row } from "../../atoms";
import elipse from "../../../assets/img/Ellipse.png";
import OurProjectCard from "../../molecules/ourProjectCard/OurProjectCard";

import styles from "./BlogsSection.module.scss";

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
  const [blogsData, setBlogsData] = useState(data);
  const containerRef = useRef(null);
  const postsFilterNameBlogApi = useSelector(
    (state) => state?.postsFilterNameBlogApi?.queries?.["blog(undefined)"]?.data
  );

  const handleFilter = (id) => {
    if (id === "All") {
      setBlogsData(data);
      return;
    }
    const data1 = [...data];
    const sortedData = data1?.filter((el) => el?.filter_name.includes(id));
    setBlogsData(sortedData);
  };

  const handleClick = (slug) => {
    router.push(`/blog/${slug}`);
  };

  useEffect(() => {
    setBlogsData(data);
  }, [data]);

  const scrollButtonToCenter = (e) => {
    const container = containerRef.current;
    if (container) {
      if (e.target) {
        const button = e.target;
        const containerWidth = container.clientWidth;
        const buttonOffsetLeft = button.offsetLeft;
        const buttonWidth = button.clientWidth;
        const scrollLeft =
          buttonOffsetLeft - (containerWidth - buttonWidth) / 2;
        container.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }
  };
  return (
    <Row className={styles.portfoliosWrapper}>
      <div className={styles.filtersBlock} ref={containerRef}>
        <Col className={styles.filters}>
          <Button
            {...(selectedCategory === "All"
              ? { lightBlueTech: true }
              : { transparentBlue: true })}
            text={"All"}
            onClick={(e) => {
              setBlogsData(data);
              scrollButtonToCenter(e);
              setSelectedCategory("All");
            }}
          />
          {postsFilterNameBlogApi?.map((el) => (
            <Button
              text={el.name}
              key={el.id}
              {...(selectedCategory === el?.id
                ? { lightBlueTech: true }
                : { transparentBlue: true })}
              onClick={(e) => {
                handleFilter(el?.id);
                scrollButtonToCenter(e);
                setSelectedCategory(el?.id);
              }}
            />
          ))}
        </Col>
      </div>
      <Row
        className={styles.projects}
        justify={"space-between"}
        gutter={[0, "4.9375076vw"]}
      >
        <Image className={styles.elipse} src={elipse} alt="image" />
        {data &&
          blogsData &&
          blogsData?.map((project, i) => (
            <OurProjectCard
              onClick={() => handleClick(project.slug)}
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
