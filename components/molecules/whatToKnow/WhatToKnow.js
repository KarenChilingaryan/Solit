import { memo } from "react";
import Image from "next/image";
import { Col, Row } from "../../atoms";
import Button from "../../molecules/button/Button";

import styles from "./WhatToKnow.module.scss";

const WhatToKnow = () => {
  return (
    <Col className={styles.whatToKnowWrapper}>
      <Row className={styles.context}>

      <Row className={styles.title}>Want to know more?</Row>
      <Col className={styles.description}>
        For further information dont hesitate to contact us. We would be happy
        to provide you with more information.
      </Col>
      <Button text="Let’s talk" boldBlue className={styles.button}/>
      </Row>
    </Col>
  );
};

export default memo(WhatToKnow);
