import { memo } from "react";
import { Col, Paragraph, Row } from "../../atoms";

import styles from "./SuccessModal.module.scss";

const SuccessModal = ({ message }) => {
  return (
    <Row className={styles.content}>
      <Row className={styles.title}>Success</Row>
      <Row className={styles.message}>{message}</Row>
    </Row>
  );
};

export default memo(SuccessModal);
