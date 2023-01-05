import { memo } from "react";
import { Row, Col, Paragraph } from "../../atoms";

import styles from "./AboutMainItem.module.scss";

const AboutMainItem = ({ title, desc }) => {
  return (
    <Col className={styles.aboutMainItemWrapper} span={11}>
      <Row className={styles.titleWrapper}>
        <Col className={styles.square}></Col>
        <Paragraph className={styles.title}>{title}</Paragraph>
      </Row>
      <Col className={styles.desc}>{desc}</Col>
    </Col>
  );
};

export default memo(AboutMainItem);
