import { memo, useState } from "react";
import Image from "next/image";
import { Col, Button as ShowMore } from "../../atoms";
import Button from "../../molecules/button/Button";
import HomeMainTexts from "../../molecules/homeMainTexts/HomeMainTexts";
import showMore from "../../../assets/img/u_plus-circle.svg";

import styles from "./HomeMain.module.scss";

const HomeMain = ({ data, className, onClick, showMoreButton = false }) => {
  const [showMoreClass, setShowMoreClass] = useState("");
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
          showMoreButton && !showMoreClass && height > 230
            ? "defaultShowMoreClass"
            : !showMoreButton
            ? ""
            : showMoreClass
        }
        setHeight={setHeight}
        heightStyle={heightStyle}
      />
      {buttonText && (
        <Col className={styles.buttonWrapper}>
          <Button text={buttonText} transparentOpposite onClick={onClick} />
        </Col>
      )}
      {showMoreButton && !showMoreClass && height > 200 && (
        <ShowMore
          className={styles.button}
          onClick={() => {
            setHeightStyle(true);
            setShowMoreClass("showMoreClass");
          }}
        >
          Show more{" "}
          <Image src={showMore} className={styles.btnImg} alt="image" />
        </ShowMore>
      )}
    </Col>
  );
};

export default memo(HomeMain);
