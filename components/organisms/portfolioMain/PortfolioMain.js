import { memo } from "react";
import { Row } from "../../atoms";
import Portfolios from "../portfolios/Portfolios";
import { HomeMainWithImage } from "../HomeMainWithImage";
import WhatToKnow from "../../molecules/whatToKnow/WhatToKnow";
import { HomeMain } from "../homeMain";
import bgImage from "../../../assets/img/blogs_bg.png";

import styles from "./PortfolioMain.module.scss";

const PortfolioMain = ({ data, main = false }) => {
  return (
    <HomeMainWithImage firstImage={bgImage}>
      <>
        <div className={styles.content}>
          <div className={styles.contentDescription}>
            <HomeMain
              data={{
                title: data?.name_service_detail,
                firstSubtitle:
                  data?.create_page_service_detail
              }}
            />
          </div>
          <Row className={styles.portfoliosSection}>
            <Portfolios />
          </Row>
          <Row className={styles.knowMoreSection}>
            <WhatToKnow />
          </Row>
        </div>
      </>
    </HomeMainWithImage>
  );
};

export default memo(PortfolioMain);
