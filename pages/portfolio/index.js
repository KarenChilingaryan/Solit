import { memo } from "react";
import PortfolioMain from "../../components/organisms/portfolioMain/PortfolioMain";

const Portfolio = () => {
  return <PortfolioMain main={true} />;
};

export default memo(Portfolio);
