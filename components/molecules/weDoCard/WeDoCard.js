import { memo } from "react";
import Image from "next/image";
import { Col, Row } from "../../atoms";

import styles from "./WeDoCard.module.scss";

import devIcon from "../../../assets/img/devIcon.svg";

const WeDoCard = ({ item }) => {
  return (
    <Col className={styles.weDoCardWrapper}>
      <Row className={styles.iconWrapper}>
        <Image src={item?.original_logo_what_we_do || devIcon} className={styles.icon} width={40} height={40}/>
      </Row>
      <Col className={styles.development}>{item?.title || "Android Development"}</Col>
      <div className={styles.description}
        dangerouslySetInnerHTML={{
          __html: item?.description || " Save time routing and tagging rules, and get insights on time before release collection of"
        }}
      />
    </Col>
  );
};

export default memo(WeDoCard);
