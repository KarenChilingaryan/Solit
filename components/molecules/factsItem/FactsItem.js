import { memo } from "react";
import { Col } from "../../atoms";
import styles from "./FactsItem.module.scss";

const FactsItem = ({ title, result }) => {
  return (
    <Col className={styles.factsItemWrapper}>
      {result && <Col className={styles.result}>{result}</Col>}
      {title && <Col className={styles.title}>{title}</Col>}
    </Col>
  );
};

export default memo(FactsItem);
