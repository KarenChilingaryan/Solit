import { memo } from "react";
import { Col } from "../../atoms";
import Button from "../../molecules/button/Button";
import HomeMainTexts from "../../molecules/homeMainTexts/HomeMainTexts";

import styles from "./HomeMain.module.scss";


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
      {buttonText && (
        <Col className={styles.buttonWrapper}>
          <Button text={buttonText} transparentOpposite />
        </Col>
      )}
    </Col>
  );
};

export default memo(HomeMain);
