import { memo, useState } from "react";
import { Col, Row } from "../../atoms";
import ourPtojectImage from "../../../assets/img/unsplash_oXS1f0uZYV4.png";
import elipse from "../../../assets/img/Ellipse.png";
import OurProjectCard from "../../molecules/ourProjectCard/OurProjectCard";
import FilterButtons from "../filters/FilterButtons";

import styles from "./BlogsSection.module.scss";
import Image from "next/image";

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

const tags = [
  { id: 1, tag_name: "React" },
  { id: 16, tag_name: "Android" },
  { id: 17, tag_name: "iOS" },
];

const BlogsSection = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  // const tags = useSelector(
  //   (state) => state?.tagsApi?.queries?.["tags(undefined)"]?.data
  // );

  const handleFilter = (id) => {
    // const data = [...portfolio];
    // const sortedData = data?.filter((el) => el?.id === id);
    // setPortfolioData(sortedData);
  };
  return (
    <Row className={styles.portfoliosWrapper}>
      {/* <Filters/> */}
      <Col className={styles.filters}>
        <FilterButtons
          name={"All"}
          className={selectedCategory === "All" ? "active" : ""}
          onClick={() => {
            // setPortfolioData(portfolio);
            setSelectedCategory("All");
          }}
        />
        {tags?.map((el) => (
          <FilterButtons
            name={el.tag_name}
            key={el.id}
            className={selectedCategory === el?.id ? "active" : ""}
            onClick={() => {
              handleFilter(el?.id);
              setSelectedCategory(el?.id);
            }}
          />
        ))}
      </Col>
      <Row
        className={styles.projects}
        justify={"space-between"}
        gutter={[0, "6vw"]}
      >
        <Image className={styles.elipse} src={elipse}/>
        {dataProject?.map((project, i) => (
          <OurProjectCard
            key={i}
            name={project}
            image={ourPtojectImage}
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
