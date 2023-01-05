import React from "react";
import { Col, Paragraph, Row } from "components/atoms";
import styles from "./Test.module.scss";

const Test = () => {
  return (
    <Col
      className={styles.TestWrapper}
      shadow={"0px 0.2083336vw 0.781251vw rgba(0, 0, 0, 0.15)"}
    >
      <Row>
        <Col
          className={styles.ImageWrapper}
          shadow={"0px 0.2083336vw 0.781251vw rgba(0, 0, 0, 0.1)"}
          span={4}
        ></Col>

        <Col span={18} className={styles.TextWrapper}>
          <Paragraph className={styles.TestTitle}>Web Development</Paragraph>
          <Paragraph className={styles.TestDescription}>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut.
          </Paragraph>
        </Col>
      </Row>
    </Col>
  );
};

export default Test;
