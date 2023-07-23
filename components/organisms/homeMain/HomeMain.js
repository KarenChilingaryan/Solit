import { memo } from "react";
import { Col } from "../../atoms";
import Button from "../../molecules/button/Button";
import HomeMainTexts from "../../molecules/homeMainTexts/HomeMainTexts";

import styles from "./HomeMain.module.scss";


const HomeMain = ({ data, className, onClick }) => {
  const { title, secondSubtitle, firstSubtitle, buttonText } = data;

  return (
    <Col className={`${styles.MainWrapper} ${styles[className + 'Block']}`}>
      <HomeMainTexts
        title={title}
        secondSubtitle={secondSubtitle}
        firstSubtitle={firstSubtitle}
        ellipsis
        className={className}
      />
      {buttonText && (
        <Col className={styles.buttonWrapper}>
          <Button text={buttonText} transparentOpposite onClick={onClick} />
        </Col>
      )}
    </Col>
  );
};

export default memo(HomeMain);
