import { memo } from "react";
import { Col } from "../../atoms";
import { Checkbox } from "../../atoms";
import styles from "./Industry.module.scss";

const Industry = () => {
  return (
    <Col className={styles.industryCol}>
      <div className={styles.industryMain}>
        <Checkbox className={styles.checkbox} />
        <span className={styles.NameText}>Logistic</span>
      </div>
    </Col>
  );
};

export default memo(Industry);