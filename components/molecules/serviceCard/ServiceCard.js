import { memo } from "react";
import Image from "next/image";
import { Row, Col } from "../../atoms";

import styles from "./ServiceCard.module.scss";

const ServiceCard = ({ item, onClick, className }) => {
  return (
    <Col
      className={`${styles.serviceCardWrapper} ${className}`}
      span={7}
      onClick={onClick}
    >
      <Row align_items={"center"} className={styles.title_iconWrapper}>
        <Row className={styles.title}>{item.title}</Row>
        <Image className={styles.iconWrapper} src={item.original_image_service} width={300} height={500}/>
        <Row className={styles.description}>
          {item.description}
        </Row>
      </Row>
    </Col>
  );
};

export default memo(ServiceCard);
