import { memo } from "react";
import { Col, Paragraph } from "../../atoms";
import styles from "./HomeMainTexts.module.scss";
import Button from "../button/Button";

const HomeMainTexts = ({
  title,
  firstSubtitle,
  secondSubtitle,
  h1 = false,
}) => {
  return (
    <>
      <Col
        className={styles.bigTextWrapper}
      >
        {h1 ? (
          <h1
            className={
              styles.title
            }
          >
            {title}
          </h1>
        ) : (

          <Paragraph
            className={styles.title}
          >
            {title}
          </Paragraph>
        )}

        {firstSubtitle &&
          <Paragraph
            className={styles.firstSubtitle}
          >
            {firstSubtitle}
          </Paragraph>
        }

        {secondSubtitle &&
          <Paragraph
            className={`${styles.firstSubtitle} ${styles.secondSubtitle}`}
          >
            {secondSubtitle}
          </Paragraph>
        }
      </Col>

    </>
  );
};

export default memo(HomeMainTexts);
