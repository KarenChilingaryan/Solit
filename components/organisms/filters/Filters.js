import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "../../atoms";
import FilterButtons from "./FilterButtons";
import filterCover from "../../../assets/img/filterCover.png";
import prjImg from "../../../assets/img/projectIcon.png";
import test1 from "../../../assets/img/test1.png";
import Button from "../../molecules/button/Button";
import FiltersCard from "./FiltersCard";

import styles from "./Filters.module.scss";

const data = [
  {
    id: 1,
    title: "Kids 360",
    coverImg: filterCover,
    img: prjImg,
    sort: "mobile",
    subTitle: "#Android #Kotlin# Java#RXjava",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is...",
  },
  {
    id: 2,
    title: "Kids 360",
    coverImg: test1,
    img: prjImg,
    sort: "front",
    subTitle: "#Android #Kotlin# Java#RXjava",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is...",
  },
  {
    id: 3,
    title: "Kids 360#",
    coverImg: filterCover,
    img: prjImg,
    sort: "mobile",
    subTitle: "#Android #Kotlin# Java#RXjava",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is...",
  },
  {
    id: 4,
    title: "Kids 360",
    coverImg: filterCover,
    img: prjImg,
    sort: "mobile",
    subTitle: "#Android #Kotlin# Java#RXjava",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is...",
  },
  {
    id: 6,
    title: "Kids 360",
    coverImg: test1,
    img: prjImg,
    sort: "back",
    subTitle: "#Android #Kotlin# Java#RXjava",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is...",
  },
  {
    id: 7,
    title: "Kids 360",
    coverImg: filterCover,
    img: prjImg,
    sort: "front",
    subTitle: "#Android #Kotlin# Java#RXjava",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is...",
  },
  {
    id: 8,
    title: "Kids 360",
    coverImg: filterCover,
    img: prjImg,
    sort: "back",
    subTitle: "#Android #Kotlin# Java#RXjava",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is...",
  },
  {
    id: 9,
    title: "Kids 360",
    coverImg: test1,
    img: prjImg,
    sort: "mobile",
    subTitle: "#Android #Kotlin# Java#RXjava",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is...",
  },
  {
    id: 10,
    title: "Kids 360",
    coverImg: filterCover,
    img: prjImg,
    sort: "back",
    subTitle: "#Android #Kotlin# Java#RXjava",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is...",
  },
];

const Filters = () => {
  const [filteredData, setFilteredData] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const portfolio = useSelector(
    (state) =>
      state?.longPresentationPortfolioApi?.queries?.[
        "longPresentationPortfolio(undefined)"
      ]?.data
  );
  const [portfolioData, setPortfolioData] = useState(null);
  const tags = useSelector(
    (state) => state?.tagsApi?.queries?.["tags(undefined)"]?.data
  );

  const handleFilter = (id) => {
    const data = [...portfolio];
    const sortedData = data?.filter((el) => el?.id === id);
    setPortfolioData(sortedData);
  };

  useEffect(() => {
    if (portfolio && portfolio?.length) {
      setPortfolioData(portfolio);
    }
  }, [portfolio]);

  return (
    <Col className={styles.filtersMainWrapper}>
      <Row className={styles.filtersWrapper}>
        <Col className={styles.filterText}>Filters</Col>
        <Col>
          <FilterButtons
            name={"All"}
            className={selectedCategory === "All" ? "active" : ""}
            onClick={() => {
              setPortfolioData(portfolio);
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
      </Row>

      <Row className={styles.filtersSection}>
        {portfolioData?.map((el) => (
          <FiltersCard
            coverImg={el?.image}
            img={el?.logo_image}
            title={el?.title}
            subTitle={el?.technologies}
            desc={el?.description}
            id={el?.id}
            key={el?.id}
          />
        ))}
      </Row>

      <Col className={styles.buttonWrapper}>
        <Col className={styles.firstButton}>
          <Button text={"Our Services"} whiteButton />
        </Col>
        <Button text={"Contact"} whiteButton />
      </Col>
    </Col>
  );
};

export default memo(Filters);
