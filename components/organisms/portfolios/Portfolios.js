import { memo, useState } from "react";
import { Col, Row } from "../../atoms";
import ourPtojectImage from "../../../assets/img/unsplash_oXS1f0uZYV4.png";
import elipse from "../../../assets/img/Ellipse.png";
import OurProjectCard from "../../molecules/ourProjectCard/OurProjectCard";
import FilterButtons from "../filters/FilterButtons";

import styles from "./Portfolios.module.scss";
import Image from "next/image";

export const dataProject = [
  "Last Order",
  "First Order",
  "Forest Predictions",
  "The Rebellion",
  "Marketing Cleanup",
  "Sarfin Inc.",
  "Pear Computers",
  "Pear Computers",
];

const tags = [
  { id: 1, tag_name: "React" },
  { id: 16, tag_name: "Android" },
  { id: 17, tag_name: "iOS" },
];

const Portfolios = ({ data }) => {
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
        gutter={[0, "3.645838vw"]}
        style={{
          columnGap: '1.645838vw'
        }}

      >
        <Image className={styles.elipse} src={elipse} />
        {dataProject?.map((project, i) => (
          <OurProjectCard
            key={i}
            name={project}
            image={ourPtojectImage}
            more={project == "more"}
            component="portfolio"
          />
        ))}
      </Row>
    </Row>
  );
};

export default memo(Portfolios);
