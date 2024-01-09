import { memo, useEffect } from "react";
import { Col, Paragraph } from "../../atoms";

import styles from "./HomeMainTexts.module.scss";

const HomeMainTexts = ({
  title,
  firstSubtitle,
  secondSubtitle,
  h1 = false,
  ellipsis,
  className,
  showMoreClassName,
  setHeight,
  heightStyle,
}) => {
  useEffect(() => {
    const text1 = document.getElementById("text1");
    const text2 = document.getElementById("text2");
    let height1 = text1?.clientHeight;
    let height2 = text2?.clientHeight;
    if (isNaN(height1)) {
      height1 = 0;
    }
    if (isNaN(height2)) {
      height2 = 0;
    }
    setHeight(height1 + height2);
  }, [firstSubtitle, secondSubtitle]);
  return (
    <>
      <Col
        className={`${styles.bigTextWrapper} ${
          ellipsis && styles.contentWrapper
        } ${styles[className]} ${heightStyle && styles.heightStyle}`}
      >
        {h1 ? (
          <h1 className={styles.title}>{title}</h1>
        ) : (
          <Paragraph className={styles.title}>{title}</Paragraph>
        )}

        {firstSubtitle && (
          <div
            id="text1"
            className={`${styles.firstSubtitle} ${
              ellipsis && styles.ellipsisText
            } ${styles[showMoreClassName]}`}
          >
            {firstSubtitle}
          </div>
        )}
        <div className={styles[showMoreClassName + "Shadow"]}></div>
        {secondSubtitle && (
          <Paragraph
            className={`${styles.firstSubtitle} ${styles.secondSubtitle}`}
          >
            {secondSubtitle}
          </Paragraph>
        )}
      </Col>
    </>
  );
};

export default memo(HomeMainTexts);
