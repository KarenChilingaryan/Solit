import { memo } from "react";
import Image from "next/image";
import { Col, Paragraph } from "../../atoms";
import styles from "./OfferItem.module.scss";

const OfferItem = ({ img, text }) => {
  return (
    <Col className={styles.offerItemMainWrapper} span={2}>
      <Col>
        <Image src={img} alt={"offer logo"} className={styles.img} />
      </Col>
      <Col>
        <Paragraph className={styles.offerItemText}>{text}</Paragraph>
      </Col>
    </Col>
  );
};

export default memo(OfferItem);
