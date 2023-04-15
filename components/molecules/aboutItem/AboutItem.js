import { memo } from "react";
import { Col, Row } from "../../atoms";
import Image from "next/image";
import styles from "./AboutItem.module.scss";

const AboutItem = ({ title, desc, icon, weDo = false }) => {
  return (
    <Col className={styles.aboutItemWrapper}>
      <Row className={`${styles.content} ${weDo && styles.weDoContent}`}>
        <Image src={icon} className={styles.icon} />
        {title && <Col className={styles.title}>{title}</Col>}
        {desc && <Col className={styles.desc}>{desc}</Col>}
      </Row>
    </Col>
  );
};

export default memo(AboutItem);
