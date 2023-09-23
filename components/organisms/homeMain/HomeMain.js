import { memo, useState } from "react";
import Image from "next/image";
import { Col, Button as ShowMore } from "../../atoms";
import Button from "../../molecules/button/Button";
import HomeMainTexts from "../../molecules/homeMainTexts/HomeMainTexts";
import showMore from "../../../assets/img/angle-down.svg";

import styles from "./HomeMain.module.scss";

const HomeMain = ({ data, className, onClick, showMoreButton = false }) => {
  const [showMoreClass, setShowMoreClass] = useState(false);
  const [height, setHeight] = useState();
  const { title, secondSubtitle, firstSubtitle, buttonText } = data;
  const [heightStyle, setHeightStyle] = useState(false);

  return (
    <Col className={`${styles.MainWrapper} ${styles[className + "Block"]}`}>
      <HomeMainTexts
        title={title}
        secondSubtitle={secondSubtitle}
        firstSubtitle={firstSubtitle}
        ellipsis
        className={className}
        showMoreClassName={
          showMoreButton && !showMoreClass && height > 140
            ? "defaultShowMoreClass"
            : !showMoreButton
            ? ""
            : "showMoreClass"
        }
        setHeight={setHeight}
        heightStyle={heightStyle}
      />
      {buttonText && (
        <Col className={styles.buttonWrapper}>
          <Button text={buttonText} transparentOpposite onClick={onClick} />
        </Col>
      )}

      <ShowMore
        className={`${styles.button} ${showMoreButton && showMoreClass && styles.rotate}`}
        onClick={() => {
          setHeightStyle(true);
          setShowMoreClass(!showMoreClass);
        }}
      >
        Show More
        <Image src={showMore} className={styles.btnImg} alt="image" />
      </ShowMore>
    </Col>
  );
};

export default memo(HomeMain);
