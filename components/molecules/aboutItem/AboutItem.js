import { memo } from "react";
import Image from "next/image";
import { Col, Row } from "../../atoms";

import styles from "./AboutItem.module.scss";

const AboutItem = ({ title, desc, icon, weDo = false, weDoWidth = false }) => {
  return (
    <Col
      className={`${styles.aboutItemWrapper}  ${
        weDoWidth ? styles.weDoWidth : ""
      }`}
    >
      <Row className={`${styles.content} ${weDo && styles.weDoContent}`}>
        <Image
          src={icon}
          className={styles.icon}
          alt={title}
          width={64}
          height={64}
        />
        {title && <Col className={styles.title}>{title}</Col>}
        {desc && <Col className={styles.desc}>{desc}</Col>}
      </Row>
    </Col>
  );
};

export default memo(AboutItem);
