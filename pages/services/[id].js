import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Col } from "../../components/atoms";
import Title from "../../components/molecules/title/Title";
import Filters from "../../components/organisms/filters/Filters";
import { usePortfolioQuery } from "../../services/portfolioApi";

import styles from "./serviceItem.module.scss";
import { useServiceItemQuery } from "../../services/servicesItemApi";
import PortfolioMain from "../../components/organisms/portfolioMain/PortfolioMain";

const ServiceItem = () => {
  const { id } = useRouter().query;

  const shortPresentationPortfolio = useSelector(
    (state) =>
      state?.shortPresentationPortfolioApi?.queries?.[
        "shortPresentationPortfolio(undefined)"
      ]?.data
  );

  const serviceItem = useSelector(
    (state) =>
      state?.serviceItemApi?.queries?.[`serviceItem("${id}")`]?.data
  );

  return (
    <Col className={styles.portfolioItemWrapper}>
      <Title title={serviceItem?.headline} lightBlueTitle />
      <PortfolioMain data={serviceItem} />
      <Filters data={shortPresentationPortfolio} />
    </Col>
  );
};

export default ServiceItem;
