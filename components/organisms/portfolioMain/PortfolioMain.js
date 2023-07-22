import { memo } from "react";
import { Row } from "../../atoms";
import Portfolios from "../portfolios/Portfolios";
import { HomeMainWithImage } from "../HomeMainWithImage";
import WhatToKnow from "../../molecules/whatToKnow/WhatToKnow";
import { HomeMain } from "../homeMain";
import bgImage from "../../../assets/img/blogs_bg.png";

import styles from "./PortfolioMain.module.scss";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const PortfolioMain = ({ data, main = false }) => {
  const router = useRouter()
  const handleClickDiscuss = () => {
    router.push(`/discussProject`);
  };

  const postPortfolioApi = useSelector(
    (state) => state?.postPortfolioApi?.queries?.["posts(undefined)"]?.data
  );

  return (
    <HomeMainWithImage firstImage={bgImage}>
      <>
        <div className={styles.content}>
          <div className={styles.contentDescription}>
            <HomeMain
              data={{
                title: postPortfolioApi?.data_text[0]?.title,
                firstSubtitle:
                  postPortfolioApi?.data_text[0]?.description
              }}
            />
          </div>
          <Row className={styles.portfoliosSection}>
            <Portfolios data={postPortfolioApi?.data_list} />
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
