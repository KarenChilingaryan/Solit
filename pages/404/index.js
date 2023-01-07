import { Col, Paragraph, Row } from "../../components/atoms";
import Button from "../../components/molecules/button/Button";

import styles from "./error.module.scss";

export default function Custom404() {
  return (
    <Row>
      <Col className={styles.errorPage}>
        <Col className={styles.textSection}>
          <Paragraph className={styles.errorText}>ERROR</Paragraph>
          <Paragraph className={styles.errorCode}>404</Paragraph>
          <Paragraph className={styles.message}>Let’s contact!</Paragraph>
        </Col>
        <Row className={styles.buttonWrapper}>
          <Button text={"Home"} />
          <Button text={"Contuct Us"} />
        </Row>
      </Col>
    </Row>
  );
}
