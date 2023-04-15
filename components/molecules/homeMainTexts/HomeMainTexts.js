import { memo } from "react";
import { Col, Paragraph } from "../../atoms";
import styles from "./HomeMainTexts.module.scss";
import Button from "../button/Button";

const HomeMainTexts = ({
  title,
  firstSubtitle,
  secondSubtitle,
  h1 = false,
  ellipsis,
}) => {
  return (
    <>
      <Col
        className={`${styles.bigTextWrapper}  ${
          ellipsis && styles.contentWrapper
        }`}
      >
        {h1 ? (
          <h1 className={styles.title}>{title}</h1>
        ) : (
          <Paragraph className={styles.title}>{title}</Paragraph>
        )}

        {firstSubtitle && (
          <Paragraph
            className={`${styles.firstSubtitle} ${
              ellipsis && styles.ellipsisText
            }`}
          >
            {firstSubtitle}
          </Paragraph>
        )}

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
