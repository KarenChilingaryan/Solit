import { memo } from "react";
import { Col } from "../../atoms";
import styles from "./HomeMain.module.scss";

import HomeMainTexts from "../../molecules/homeMainTexts/HomeMainTexts";
import Button from "../../molecules/button/Button";

const HomeMain = ({ data, ellipsis = false }) => {
  const { title, secondSubtitle, firstSubtitle, buttonText } = data;

  return (
    <Col className={styles.MainWrapper}>
      <HomeMainTexts
        title={title}
        secondSubtitle={secondSubtitle}
        firstSubtitle={firstSubtitle}
        ellipsis
      />
      <Col className={styles.buttonWrapper}>
        <Button text={buttonText} boldBlue />
      </Col>
    </Col>
  );
};

export default memo(HomeMain);
