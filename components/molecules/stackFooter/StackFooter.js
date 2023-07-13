import { memo } from "react";
import { Col, Row, Paragraph } from "../../atoms";
import Image from "next/image";
import close from "../../../assets/img/icons/closeIcon.svg";

import styles from "./StackFooter.module.scss";

const StackFooter = ({ liveStacks = [], handleDelete }) => {
  return (
    <Row className={styles.footer}>
      <Row className={styles.footerContent}>
        <Paragraph className={styles.footerTitle}>
          Summary of your request:
        </Paragraph>
        <Row>
          {liveStacks?.map((item, i) => (
            <Col key={i} className={styles.itemWrapper}>
              <Col className={styles.item}>{item.item}</Col>
              <Image
                src={close}
                className={styles.icon}
                onClick={() => handleDelete(item)}
                alt=""
              />
            </Col>
          ))}
        </Row>
      </Row>
    </Row>
  );
};

export default memo(StackFooter);
