import { memo } from "react";
import { Col } from "../../atoms";
import { Checkbox } from "../../atoms";
import styles from "./Industry.module.scss";
import { useState } from "react";

const Industry = ({ name, more, width, height, blogs = false }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Col
      className={`${styles.mainWrapper} ${blogs && styles.moreWrapper}`}
      onClick={handleCheckboxChange}
    >
      <Checkbox className={styles.checkbox} checked={isChecked} />
      <span className={styles.nameSpecialist}>Logistic</span>
    </Col>
  );
};

export default memo(Industry);

