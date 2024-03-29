import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Col, Paragraph, Row } from "../../components/atoms";
import Button from "../../components/molecules/button/Button";
import error from "../../assets/img/404error.png";

import styles from "./error.module.scss";

const Custom = () => {
  return (
    <Row>
      <Col className={styles.errorPage}>
        <Col className={styles.textSection}>
          <Paragraph className={styles.errorText}>Oops!</Paragraph>
          <Image src={error} className={styles.errorCode} alt="image" />
          <Paragraph className={styles.message}>Let’s contact!</Paragraph>
        </Col>
        <Row className={styles.buttonWrapper}>
          <Link href={"/"} prefetch={false}>
            <Button text={"Go back home"} transparentOpposite />
          </Link>
        </Row>
      </Col>
    </Row>
  );
}

export default memo(Custom);