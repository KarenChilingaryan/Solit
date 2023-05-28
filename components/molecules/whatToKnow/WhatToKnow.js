import { memo } from "react";
import { Col, Row } from "../../atoms";
import Button from "../../molecules/button/Button";

import styles from "./WhatToKnow.module.scss";

const WhatToKnow = ({
  color = "#fff",
  title = "Want to know more?",
  description = "For further information dont hesitate to contact us. We would be happyto provide you with more information.",
  buttonText = "Let’s talk",
}) => {
  return (
    <Col className={styles.whatToKnowWrapper}>
      <Row className={styles.context}>
        {title && (
          <Row className={styles.title} color={color}>
            {title}
          </Row>
        )}
        {description && (
          <Row className={styles.description} color={color}>
            {description}
          </Row>
        )}
        <Button
          text={buttonText}
          transparentOpposite
          className={styles.button}
        />
      </Row>
    </Col>
  );
};

export default memo(WhatToKnow);
