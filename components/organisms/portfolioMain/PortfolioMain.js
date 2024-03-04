import { memo } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const Portfolios = dynamic(() => import("../portfolios/Portfolios"));
const WhatToKnow = dynamic(() =>
  import("../../molecules/whatToKnow/WhatToKnow")
);
// import { Row } from "../../atoms";
import Row from "../../atoms/Row";
// import Portfolios from "../portfolios/Portfolios";
import HomeMainWithImage from '../HomeMainWithImage/HomeMainWithImage'
// import WhatToKnow from "../../molecules/whatToKnow/WhatToKnow";
import HomeMain from '../homeMain/HomeMain'
import bgImage from "../../../assets/img/main-bg-portfolio.png";

import styles from "./PortfolioMain.module.scss";

const PortfolioMain = () => {
  const router = useRouter();
  const handleClickDiscuss = () => {
    router.push(`/discuss-project`);
  };

  const postPortfolioApi = useSelector(
    (state) => state?.postPortfolioApi?.queries?.["posts(undefined)"]?.data
  );

  return (
    <HomeMainWithImage firstImage={bgImage} seoName="portfolio">
      <>
        <div className={styles.content}>
          <div className={styles.contentDescription}>
            <HomeMain
              h1={true}
              data={{
                title: postPortfolioApi?.data_text[0]?.title,
                firstSubtitle: postPortfolioApi?.data_text[0]?.description,
              }}
            />
          </div>
          <Row className={styles.portfoliosSection}>
            {postPortfolioApi?.data_list && (
              <Portfolios data={postPortfolioApi?.data_list} />
            )}
          </Row>
          <Row className={styles.knowMoreSection}>
            <WhatToKnow onClick={handleClickDiscuss} />
          </Row>
        </div>
      </>
    </HomeMainWithImage>
  );
};

export default memo(PortfolioMain);
