import { memo } from "react";
import { Row, Col } from "../../atoms";
import ValueDescription from "./ValueDescription";

import styles from "./ValueTextItem.module.scss";

const ValueTextItem = ({ data }) => {
  return (
    <Col className={styles.valueTextItemWrapper}>
      <Row className={styles.titleWrapper}>
        <Col className={styles.square}></Col>
        <Col className={styles.title}>Our Values</Col>
      </Row>
      {data?.map((el) => (
        <ValueDescription desc={el?.text} key={el?.id} />
      ))}
    </Col>
  );
};

export default memo(ValueTextItem);
