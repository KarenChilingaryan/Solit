import { memo, useState } from "react";
import { Col } from "../../atoms";
import { Checkbox } from "../../atoms";

import styles from "./Industry.module.scss";

const Industry = ({ fullWidth = false, circle = false }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Col
      className={`${styles.mainWrapper} ${fullWidth && styles.moreWrapper},  ${
        circle && styles.circleCheckbox
      }`}
      onClick={handleCheckboxChange}
    >
      <Checkbox className={styles.checkbox} checked={isChecked} />
      <span className={styles.nameSpecialist}>Logistic</span>
    </Col>
  );
};

export default memo(Industry);
