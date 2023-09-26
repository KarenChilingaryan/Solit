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

  const handleClick = (id, slug) => {
    router.push(`/portfolio/${id}/${slug}`);
  };
console.log(data,'>>>>>>>');

  return (
    <Row className={styles.portfoliosWrapper}>
      <div className={styles.filtersBlock}>
        <Col className={styles.filters}>
          <Button
            text="All"
            lightBlueTech={selectedCategory === "All"}
            transparentBlue={selectedCategory !== "All"}
            onClick={() => setSelectedCategory("All")}
          />
          {tags?.map((el, index) => (
            <Button
              key={index}
              text={el.tag_name}
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
          columnGap: '1.645838vw'
        }}

      >
        <Image className={styles.elipse} src={elipse} alt="image"/>
        {data && [...data]?.map((project, i) => (
          <OurProjectCard
            onClick={() => handleClick(project.project_from_portfolio, project.slug)}
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
