import { memo } from "react";
import Image from "next/image";
import { Row, Col, Paragraph } from "../../atoms";

import cardIcon from "../../../assets/img/cardImage.png";

import styles from "./ServiceCard.module.scss";

const ServiceCard = ({ icon, title, desc, onClick }) => {
  return (
    <Col className={styles.serviceCardWrapper} span={7} onClick={onClick}>
      <Row align_items={"center"} className={styles.title_iconWrapper}>
        <Row className={styles.title}>Mobile Development</Row>
        <Image className={styles.iconWrapper} src={cardIcon} />
        <Row className={styles.description}>
          It is a long established fact that a reader will be distracted by the
          readable content
        </Row>
      </Row>
    </Col>
  );
};

export default memo(ServiceCard);
