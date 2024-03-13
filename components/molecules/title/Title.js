import { memo } from "react";
import cx from "classnames";
import { Row, Col } from "../../atoms/index";

import styles from "./Title.module.scss";

const Title = ({ title, whiteTitle, lightBlueTitle, square = false, align, border }) => {
  return (
    <Row justify={align ?? "center"} align="center" className={border ? styles.borderTitle : ''}>
      {square && <Col className={styles.square}></Col>}

      <div
        className={cx(styles.title, {
          [styles.whiteTitle]: whiteTitle,
          [styles.lightBlueTitle]: lightBlueTitle,
        })}
        align="center"
      >
        {title}
      </div>
    </Row>
  );
};

export default memo(Title);
