import { memo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
import { Col, Row } from "../../atoms";
import elipse from "../../../assets/img/Ellipse.png";
import OurProjectCard from "../../molecules/ourProjectCard/OurProjectCard";
import FilterButtons from "../filters/FilterButtons";
import Button from "../../molecules/button/Button";

import styles from "./Portfolios.module.scss";

const Portfolios = ({ data }) => {
  const router = useRouter();
  const [portfolioData, setPortfolioData] = useState(data);
  const containerRef = useRef(null);
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

  const portfolioFiltersApi = useSelector(
    (state) =>
      state?.portfolioFiltersApi?.queries?.["portfolioFilters(undefined)"]?.data
  );

  const handleClick = (slug) => {
    router.push(`/portfolio/${slug}`);
  };
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
            text="All"
            lightBlueTech={selectedCategory === "All"}
            transparentBlue={selectedCategory !== "All"}
            onClick={(e) => {
              scrollButtonToCenter(e);
              handleFilter("All");
              setSelectedCategory("All");
            }}
          />
          {portfolioFiltersApi?.map((el, index) => (
            <Button
              key={index}
              text={el.filter_name}
              lightBlueTech={selectedCategory === el?.id}
              transparentBlue={selectedCategory !== el?.id}
              onClick={(e) => {
                scrollButtonToCenter(e);
                handleFilter(el?.id);
                setSelectedCategory(el?.id);
              }}
            />
          ))}
        </Col>
      </div>
      <Row
        className={styles.projects}
        gutter={[0, "5vw"]}
        style={{
          columnGap: "1.645838vw",
        }}
      >
        <Image className={styles.elipse} src={elipse} alt="image" />
        {data &&
          portfolioData &&
          [...portfolioData]?.map((project, i) => (
            <OurProjectCard
              onClick={() =>
                handleClick(project.slug)
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
