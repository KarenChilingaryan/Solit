import { memo } from "react";
import { Col } from "../../atoms";
import styles from "./HomeMain.module.scss";

import HomeMainTexts from "../../molecules/homeMainTexts/HomeMainTexts";
import Button from "../../molecules/button/Button";

const HomeMain = ({ data, ellipsis = false, className }) => {
  const { title, secondSubtitle, firstSubtitle, buttonText } = data;

  return (
    <Col className={`${styles.MainWrapper} ${styles[className +'Block']}`}>
      <HomeMainTexts
        title={title}
        secondSubtitle={secondSubtitle}
        firstSubtitle={firstSubtitle}
        ellipsis
        className={className}
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
