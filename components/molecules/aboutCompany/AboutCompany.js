import Image from "next/image";
import { memo } from "react";
import { Col } from "../../atoms";

import styles from "./AboutCompany.module.scss";

const AboutCompany = ({ number, title, image, withOutBG }) => {
  return (
    <Col
      className={`${styles.card} ${
        withOutBG ? styles.withOutBG : styles.withBG
      }`}
    >
      <Col className={styles.mainWrapper}>
        <Image
          src={image}
          className={styles.image}
          alt={title}
          width={300}
          height={100}
        />
        <Col className={styles.info}>
          <p className={styles.number}>{number}</p>
          <Col className={styles.description}>
            <p className={styles.title}>{title}</p>
          </Col>
        </Col>
      </Col>
    </Col>
  );
};
export default memo(AboutCompany);
