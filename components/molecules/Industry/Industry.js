import { memo, useState } from "react";
import { Col } from "../../atoms";
import { Checkbox } from "../../atoms";

import styles from "./Industry.module.scss";

const Industry = ({ fullWidth = false, circle = false, value, onClick }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <Col
      className={`${styles.mainWrapper} ${fullWidth && styles.moreWrapper},  ${circle && styles.circleCheckbox
        }`}
      onClick={value == "Other" ? onClick : handleCheckboxChange}
    >
      {value != "Other" &&
        <Checkbox className={styles.checkbox} checked={isChecked} value={value} />
      }
      <span className={styles.nameSpecialist}>{value}</span>
    </Col>
  );
};

export default memo(Industry);
