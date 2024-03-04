import Image from "next/image";
import { memo } from "react";
import {   Paragraph } from "../../../atoms";
import Row from "../../../atoms/Row";
import Col from "../../../atoms/Col";

import styles from "../PortfolioMain.module.scss";

const BottomCarouselItem = ({ img, title, desc, onClick }) => {
  return (
    <Row className={styles.bottomCarouselItemWrapper} onClick={onClick}>
      <Col className={styles.imgWrapper}>
        <Image src={img} alt="logo" className={styles.img} />
      </Col>
      <Col className={styles.textWrapper}>
        <Paragraph className={styles.title}>{title}</Paragraph>
        <Paragraph className={styles.desc}>{desc}</Paragraph>
      </Col>
    </Row>
  );
};

export default memo(BottomCarouselItem);
