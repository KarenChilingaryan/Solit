import { memo } from "react";
import { Col } from "../../atoms";
import styles from "./AboutItem.module.scss";

const AboutItem = ({ title, desc }) => {
  return (
    <Col className={styles.aboutItemWrapper}>
      {title && <Col className={styles.title}>{title}</Col>}
      {desc && <Col className={styles.desc}>{desc}</Col>}
    </Col>
  );
};

export default memo(AboutItem);
