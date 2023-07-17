import { memo } from "react";
import Image from "next/image";
import { Row, Col } from "../../atoms";
import cardIcon from "../../../assets/img/cardImage.png";

import styles from "./ServiceCard.module.scss";

const ServiceCard = ({ item, onClick, className }) => {
  return (
    <Col
      className={`${styles.serviceCardWrapper} ${className}`}
      span={7}
      onClick={onClick}
    >
      <Row align_items={"center"} className={styles.title_iconWrapper}>
        <Row className={styles.title}>{item?.title || "Mobile Development"}</Row>
        <Image className={styles.iconWrapper} src={item?.original_image_service  || cardIcon} width={300} height={500}/>
        <Row className={styles.description}>
          {item?.description || "It is a long established fact that a reader will be distracted by the readable content"}
        </Row>
      </Row>
    </Col>
  );
};

export default memo(ServiceCard);
