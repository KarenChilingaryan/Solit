import { memo } from "react";
import Image from "next/image";
import { Row, Col } from "../../atoms";
import cardIcon from "../../../assets/img/cardImage.png";

import styles from "./ServiceCard.module.scss";
import Link from "next/link";

const ServiceCard = ({ item, onClick, className, fromDetail, index }) => {
  return (
    <Col
      className={`${styles.serviceCardWrapper} ${className} ${styles[fromDetail]}`}
      span={7}
      onClick={onClick}
    >
      <Link href={`/services/${item?.service_detail}`}>
        <Row align_items={"center"} className={styles.title_iconWrapper}>
          <Row className={styles.title}>{item?.title || "Mobile Development"}</Row>
          <Image className={styles.iconWrapper} src={(index == 1 ? item?.webp_image_service : item?.original_image_service) || cardIcon} width={300} height={500} />
          <Row className={styles.description}>
            {item?.description || "It is a long established fact that a reader will be distracted by the readable content"}
          </Row>
        </Row>
      </Link>
    </Col>
  );
};

export default memo(ServiceCard);
