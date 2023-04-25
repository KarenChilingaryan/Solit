import Image from "next/image";
import { memo } from "react";
import { Col, Paragraph } from "../../atoms";
import styles from "./AboutCompany.module.scss";
const AboutCompany = ({ number, title, image, status }) => {
  return (
    <Col className={styles.card}>
      <Col className={styles.mainWrapper}>
        <Image src={image} className={styles.image} />
        <Col className={styles.info}>
          <p className={styles.number}>{number}</p>
          <Col className={styles.description}>
            <p className={styles.title}>{title}</p>
            <p className={styles.status}>{status}</p>
          </Col>
        </Col>
      </Col>
    </Col>
  );
};
export default memo(AboutCompany);
