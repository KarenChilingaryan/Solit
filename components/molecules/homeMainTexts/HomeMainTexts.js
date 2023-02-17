import { memo } from "react";
import { Col, Paragraph } from "../../atoms";
import NextImage from "next/image";
import aboutSquare from "../../../assets/img/aboutSquare.png";

import styles from "./HomeMainTexts.module.scss";

const HomeMainTexts = ({
  bigText,
  smallText,
  style = {},
  margin = true,
  square = false,
  home = false,
  h1 = false,
}) => {
  return (
    <>
      <Col
        className={`${styles.bigTextWrapper} ${
          home ? styles.bigTextWrapperHome : ""
        }`}
        style={style}
      >
        {h1 ? (
          <h1
            className={
              styles.bigText + ` ${margin ? "" : styles.bigTextWithoutMargin}`
            }
          >
            {bigText}
          </h1>
        ) : (
          <Paragraph
            className={
              styles.bigText + ` ${margin ? "" : styles.bigTextWithoutMargin}`
            }
          >
            {bigText}
          </Paragraph>
        )}
      </Col>
      {smallText && (
        <Col className={styles.smallTextWrapper}>
          <Paragraph className={styles.smallText}>{smallText}</Paragraph>
        </Col>
      )}
    </>
  );
};

export default memo(HomeMainTexts);
