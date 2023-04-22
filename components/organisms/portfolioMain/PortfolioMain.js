import { memo } from "react";
import { Row } from "../../atoms";
import { HomeMainWithImage } from "../HomeMainWithImage";
import { HomeMain } from "../homeMain";
import bgImage from "../../../assets/img/main-bg.png";


import styles from "./PortfolioMain.module.scss";
import Portfolios from "../portfolios/Portfolios";
import WhatToKnow from "../../molecules/whatToKnow/WhatToKnow";

const PortfolioMain = ({ data, main = false }) => {
  return (
    <HomeMainWithImage firstImage={bgImage}>
      <>
        <div className={styles.content}>
          <HomeMain
            data={{
              title: "Where the stars meet",
              firstSubtitle:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo scelerisque nunc nec aliquet. Etiam lobortis erat libero, eget bibendum lorem congue nec. ",
            }}
          />
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
