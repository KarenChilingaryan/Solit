import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { Col } from "../../components/atoms";
import Title from "../../components/molecules/title/Title";
import BottomCarousel from "../../components/organisms/portfolioMain/bottomCarousel/BottomCarousel";
import PortfolioMain from "../../components/organisms/portfolioMain/PortfolioMain";
import { portfolioApi, usePortfolioQuery } from "../../services/portfolioApi";

import styles from "./portfolioItem.module.scss";

const PortfolioItem = () => {
  const { id } = useRouter().query
  const shortPresentationPortfolio = useSelector(
    (state) => state?.shortPresentationPortfolioApi?.queries?.["shortPresentationPortfolio(undefined)"]?.data
  );
  const portfolio = useSelector(
    (state) => state?.portfolioApi?.queries?.[`portfolio("${id}")`]?.data
  );

  return (
    <Col className={styles.portfolioItemWrapper}>
      <Title title={portfolio?.headline} lightBlueTitle />
      <PortfolioMain data={portfolio} />
      <BottomCarousel data={shortPresentationPortfolio} />
    </Col>
  );
};

export default PortfolioItem;
