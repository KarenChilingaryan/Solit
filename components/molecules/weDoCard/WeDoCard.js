import Image from "next/image";
import { memo } from "react";
import { Col, Row } from "../../atoms";

import styles from "./WeDoCard.module.scss";

import devIcon from "../../../assets/img/devIcon.svg";

const WeDoCard = ({ title, desc, icon }) => {
  return (
    <Col className={styles.weDoCardWrapper}>
      <Row className={styles.iconWrapper}>
        <Image src={devIcon} width={15} height={15} />
      </Row>
      <Col className={styles.development}>Android Development</Col>
      <Col className={styles.description}>
        Save time routing and tagging rules, and get insights on time before
        release collection of
      </Col>
    </Col>
  );
};

export default memo(WeDoCard);