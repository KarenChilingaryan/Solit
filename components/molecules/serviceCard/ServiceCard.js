import { memo } from "react";
import Image from "next/image";
import { Row, Col, Paragraph } from "../../atoms";
import styles from "./ServiceCard.module.scss";

const ServiceCard = ({ icon, title, desc, onClick }) => {
  return (
    <Col className={styles.serviceCardWrapper} span={7} onClick={onClick}>
      <Row align_items={"center"} className={styles.title_iconWrapper}>
        <Image className={styles.iconWrapper} src={icon} />
        <Col>
          <Paragraph className={styles.title}>{title}</Paragraph>
        </Col>
      </Row>
      <Col>
        <Paragraph className={styles.desc}>{desc}</Paragraph>
      </Col>
    </Col>
  );
};

export default memo(ServiceCard);
