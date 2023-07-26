import Image from "next/image";
import { Col, Link, Paragraph, Row } from "../../components/atoms";
import Button from "../../components/molecules/button/Button";
import error from "../../assets/img/404error.png"

import styles from "./error.module.scss";

export default function Custom404() {
  return (
    <Row>
      <Col className={styles.errorPage}>
        <Col className={styles.textSection}>
          <Paragraph className={styles.errorText}>ERROR</Paragraph>
          <Image href={error}/>
          <Paragraph className={styles.errorCode}>404</Paragraph>
          <Paragraph className={styles.message}>Let’s contact!</Paragraph>
        </Col>
        <Row className={styles.buttonWrapper}>
          <Link href={"/"}>
            <Button text={"Home"} />
          </Link>
          <Link href={"/contactus"}>
            <Button text={"Contuct Us"} />
          </Link>
        </Row>
      </Col>
    </Row>
  );
}
