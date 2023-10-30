import { memo } from "react";
import Image from "next/image";
import Button from "../button/Button";
import { Col, Row, Paragraph } from "../../atoms";
import close from "../../../assets/img/icons/closeIcon.svg";
import closeGray from "../../../assets/img/icons/close.svg";

import styles from "./StackFooter.module.scss";

const StackFooter = ({ liveStacks = [], handleDelete, onClick, onClose }) => {
  return (
    <Row className={styles.footer}>
      <Row className={styles.footerContent}>
        <Paragraph className={styles.footerTitle}>
          Summary:
        </Paragraph>
        <Row className={styles.items}>
          {liveStacks?.map((item, i) => (
            <Col key={i} className={styles.itemWrapper}>
              <Col className={styles.item}>{item.item}</Col>
              <Image
                src={close}
                className={styles.icon}
                onClick={() => handleDelete(item)}
                alt="image"
              />
            </Col>
          ))}
        </Row>
      </Row>
      <Row className={styles.buttonWrapper}>
        <Button lightBlue text="Proceed" onClick={onClick} />
      </Row>
      <Image
        src={closeGray}
        className={styles.closeIcon}
        width="1.25vw"
        height="1.25vw"
        alt="image"
        onClick={onClose}
      />
    </Row>
  );
};

export default memo(StackFooter);
