import { memo, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
import { Col, Row } from "../../atoms";
import elipse from "../../../assets/img/Ellipse.png";
import OurProjectCard from "../../molecules/ourProjectCard/OurProjectCard";
import FilterButtons from "../filters/FilterButtons";

import styles from "./Portfolios.module.scss";

const tags = [
  { id: 1, tag_name: "React" },
  { id: 16, tag_name: "Android" },
  { id: 17, tag_name: "iOS" },
];

const Portfolios = ({ data }) => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleFilter = (id) => {
    // const data = [...portfolio];
    // const sortedData = data?.filter((el) => el?.id === id);
    // setPortfolioData(sortedData);
  };

  const handleClick = (id) => {
    router.push(`/portfolio/${id}`);
  };


  return (
    <Row className={styles.portfoliosWrapper}>
      <div className={styles.filtersBlock}>
        <Col className={styles.filters}>
          <FilterButtons
            name={"All"}
            className={selectedCategory === "All" ? "active" : ""}
            onClick={() => {
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
      </div>
      <Row
        className={styles.projects}
        gutter={[0, "3.645838vw"]}
        style={{
          columnGap: '1.645838vw'
        }}

      >
        <Image className={styles.elipse} src={elipse} />
        {data && [...data]?.map((project, i) => (
          <OurProjectCard
            onClick={() => handleClick(project.project_from_portfolio)}
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
