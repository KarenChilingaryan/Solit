import { memo } from "react";
import { Col, Paragraph } from "../../atoms";
import styles from "./HomeMainTexts.module.scss";

const HomeMainTexts = ({
  title,
  firstSubtitle,
  secondSubtitle,
  h1 = false,
  ellipsis,
  className,
  showMoreClassName
}) => {
  return (
    <>
      <Col
        className={`${styles.bigTextWrapper} ${ellipsis && styles.contentWrapper
          } ${styles[className]}`}
      >
        {h1 ? (
          <h1 className={styles.title}>{title}</h1>
        ) : (
          <Paragraph className={styles.title}>{title}</Paragraph>
        )}

        {firstSubtitle && (
          <div
            dangerouslySetInnerHTML={{ __html: firstSubtitle }}
            className={`${styles.firstSubtitle} ${ellipsis && styles.ellipsisText
              } ${styles[showMoreClassName]}`}
          />
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
