import { memo } from "react";
import Image from "next/image";
import { Col, Paragraph, Row } from "../../atoms";
import Button from "../../molecules/button/Button";

import styles from "./WhatToKnow.module.scss";

const WhatToKnow = ({ color = "#fff" }) => {
  return (
    <Col className={styles.whatToKnowWrapper}>
      <Row className={styles.context}>
        <Row className={styles.title} color={color}>
          Want to know more?
        </Row>
        <Row className={styles.description} color={color}>
          For further information dont hesitate to contact us. We would be happy
          to provide you with more information.
        </Row>
        <Button text="Let’s talk" boldBlue className={styles.button} />
      </Row>
    </Col>
  );
};

export default memo(WhatToKnow);
