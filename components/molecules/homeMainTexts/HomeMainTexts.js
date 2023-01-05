import { memo } from "react";
import { Col, Paragraph } from "../../atoms";
import NextImage from "next/image";
import aboutSquare from '../../../assets/img/aboutSquare.png'

import styles from "./HomeMainTexts.module.scss";

const HomeMainTexts = ({ result, smallText, style = {}, margin = true, square = false, home = false }) => {
  const res = result?.default_text?.split(" ").map((txt, idx) =>
    result?.color_text.split(" ").includes(txt) ? (
      <span className={styles.coloredText} key={idx}>
        {txt}{" "}
      </span>
    ) : (
      <span
        className={result.white ? styles.normalWhiteText : styles.normalText}
        key={idx}
      >
        {txt}{" "}
      </span>
    )
  );
  return (
    <>
      <Col className={`${styles.bigTextWrapper} ${home ? styles.bigTextWrapperHome : ''}`} style={style}>
        {
          square &&
          <NextImage src={aboutSquare} className={styles.square} />
        }
        <Paragraph
          className={
            styles.bigText + ` ${margin ? "" : styles.bigTextWithoutMargin}`
          }
        >
          {res}
        </Paragraph>
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
