import { memo } from "react";
import { Col } from "../../atoms";
import Image from "next/image";
import styles from "./AboutItem.module.scss";

const AboutItem = ({ title, desc,icon }) => {
  return (
    <Col className={styles.aboutItemWrapper}>
      <Image src={icon} className={styles.icon} />
      {title && <Col className={styles.title}>{title}</Col>}
      {desc && <Col className={styles.desc}>{desc}</Col>}
    </Col>
  );
};

export default memo(AboutItem);
