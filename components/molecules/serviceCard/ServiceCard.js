import { memo } from "react";
import Image from "next/image";
import { Row, Col } from "../../atoms";
import cardIcon from "../../../assets/img/cardImage.png";
import arrow from "../../../assets/img/arrow.svg";

import styles from "./ServiceCard.module.scss";
import Link from "next/link";

const ServiceCard = ({ item, onClick, className, fromDetail, index, more }) => {
  return (
    <Col
      className={`${styles.serviceCardWrapper} ${className} ${styles[fromDetail]} ${more && styles.moreBorder}`}
      span={7}
      onClick={onClick}
    >
      <Link href={more ? "/services" : `/services/${item?.service_detail}`}>
        {!more ?
          <Row align_items={"center"} className={styles.title_iconWrapper}>
            <Row className={styles.title}>{item?.title || "Mobile Development"}</Row>
            <Image className={styles.iconWrapper} src={item?.webp_image_service || cardIcon} width={300} height={500} />
            <Row className={styles.description}>
              {item?.description || "It is a long established fact that a reader will be distracted by the readable content"}
            </Row>
          </Row> :
          <Row className={styles.more}>
            More <Image src={arrow} width={10} height={10} />
          </Row>
        }
      </Link>
    </Col>
  );
};

export default memo(ServiceCard);
