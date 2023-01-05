import { memo } from "react";
import Title from "../../components/molecules/title/Title";
import Filters from "../../components/organisms/filters/Filters";
import PortfolioMain from "../../components/organisms/portfolioMain/PortfolioMain";

const Portfolio = () => {
  return (
    <>
      <Title title="Portfolio" />
      <PortfolioMain main={true} />
      <Filters />
    </>
  );
};

export default memo(Portfolio);
