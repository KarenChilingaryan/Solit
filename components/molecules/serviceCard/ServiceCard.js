import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Row, Col } from "../../atoms";
import cardIcon from "../../../assets/img/cardImage.png";
import arrow from "../../../assets/img/arrow.svg";

import styles from "./ServiceCard.module.scss";

const ServiceCard = ({ item, onClick, className, fromDetail, index, more }) => {
  return (
    <Col
      className={`${styles.serviceCardWrapper} ${className} ${
        styles[fromDetail]
      } ${more && styles.moreBorder}`}
      span={7}
      onClick={onClick}
    >
      <Link
        href={more ? "/services" : `/services/${item.slug}`}
        prefetch={false}
      >
        {!more ? (
          <Row align_items={"center"} className={styles.title_iconWrapper}>
            <Row className={styles.title}>
              {item?.title || "Mobile Development"}
            </Row>
            <Image
              className={styles.iconWrapper}
              src={item?.webp_image_service || cardIcon}
              width={300}
              height={500}
              alt="image"
            />
            <Row className={styles.description}>
              {item?.description ||
                "It is a long established fact that a reader will be distracted by the readable content"}
            </Row>
          </Row>
        ) : (
          <Row className={styles.more}>
            More <Image src={arrow} width={10} height={10} alt="image" />
          </Row>
        )}
      </Link>
    </Col>
  );
};

export default memo(ServiceCard);
