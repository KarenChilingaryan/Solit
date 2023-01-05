import { Row, Col } from "../../atoms";
import { memo } from "react";

import styles from "./ValueListItem.module.scss";

const ValueListItem = ({ text }) => {
  return (
    <Row className={styles.valueListWrapper}>
      <Col className={styles.square}></Col>
      <Col className={styles.text}>{text}</Col>
    </Row>
  );
};

export default memo(ValueListItem);
