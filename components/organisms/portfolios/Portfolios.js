import { memo, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
import { Col, Row } from "../../atoms";
import elipse from "../../../assets/img/Ellipse.png";
import OurProjectCard from "../../molecules/ourProjectCard/OurProjectCard";
import FilterButtons from "../filters/FilterButtons";
import Button from "../../molecules/button/Button";

import styles from "./Portfolios.module.scss";

const tags = [
  {
    id: 2,
    filter_name: "Android",
  },
  {
    id: 3,
    filter_name: "Back End",
  },
  {
    id: 1,
    filter_name: "IOS",
  },
];

const Portfolios = ({ data }) => {
  const router = useRouter();
  const [portfolioData, setPortfolioData] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState("All");
  console.log(data, "54654");
  const handleFilter = (id) => {
    if (id === "All") {
      setPortfolioData(data);
      return;
    }
    const sortedData = data?.filter((el) => el?.filter_name.includes(id));
    setPortfolioData(sortedData);
  };

  // const portfolioFilters = useSelector(
  //   (state) => state?.portfolioFilters?.queries?.["posts(undefined)"]?.data
  // );
  // console.log(portfolioFilters, '>>>>>>>>>>>>>>>>>>>>>');

  const handleClick = (id, slug) => {
    router.push(`/portfolio/${id}/${slug}`);
  };

  return (
    <Row className={styles.portfoliosWrapper}>
      <div className={styles.filtersBlock}>
        <Col className={styles.filters}>
          <Button
            text="All"
            lightBlueTech={selectedCategory === "All"}
            transparentBlue={selectedCategory !== "All"}
            onClick={() => handleFilter("All")}
          />
          {tags?.map((el, index) => (
            <Button
              key={index}
              text={el.filter_name}
              lightBlueTech={selectedCategory === el?.id}
              transparentBlue={selectedCategory !== el?.id}
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
        gutter={[0, "3.645838vw"]}
        style={{
          columnGap: "1.645838vw",
        }}
      >
        <Image className={styles.elipse} src={elipse} alt="image" />
        {data &&
          [...portfolioData]?.map((project, i) => (
            <OurProjectCard
              onClick={() =>
                handleClick(project.project_from_portfolio, project.slug)
              }
              key={i}
              more={project == "more"}
              component="portfolio"
              name={project.title}
              image={project.webp_image_portfolio}
              images={project?.technology_logos}
            />
          ))}
      </Row>
    </Row>
  );
};

export default memo(Portfolios);
