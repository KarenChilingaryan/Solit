import { memo } from "react";
import Image from "next/image";
import Button from "../button/Button";
import { Col, Row, Paragraph } from "../../atoms";
import close from "../../../assets/img/icons/closeIcon.svg";

import styles from "./StackFooter.module.scss";

const StackFooter = ({ liveStacks = [], handleDelete, onClick }) => {
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
      <Button lightBlue text="Proceed" onClick={onClick} />
    </Row>
  );
};

export default memo(StackFooter);
