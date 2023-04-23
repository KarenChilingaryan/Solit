import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { Col } from "../../components/atoms";
import PortfolioMain from "../../components/organisms/portfolioMain/PortfolioMain";
import { portfolioApi, usePortfolioQuery } from "../../services/portfolioApi";
import { PortfolioItem } from "../../components/organisms/portfolioItem";

import styles from "./portfolioItemPage.module.scss";

const PortfolioItemPage = () => {
  return <PortfolioItem />;
};

export default PortfolioItemPage;
