import { memo, useState } from "react";
import { Input, FormItem } from "../../atoms";

import styles from "./FloatInput.module.scss";

const FloatInput = ({
  label,
  value,
  placeholder,
  type,
  required,
  onChange,
  showUploadList,
  suffix,
  rest,
}) => {
  const [focus, setFocus] = useState(false);

  if (!placeholder) placeholder = label;

  const isOccupied = focus || (value && value.length !== 0);

  const labelClass = isOccupied
    ? `${styles.label} ${styles.asLabel}`
    : `${styles.label} ${styles.asPlaceholder}`;

  const requiredMark = required ? (
    <span className={styles.textDanger}>*</span>
  ) : null;

  const handleKeyDown = (e) => {
    if (e.key === "e" || e.key === "." || e.key === ",") {
      e.preventDefault();
    }
  };

  return (
    <div
      className={styles.floatLabel}
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      <Input
        onChange={onChange}
        type={type}
        onKeyDown={(e) => (type == "number" ? handleKeyDown(e) : () => {})}
        defaultValue={value}
        showUploadList={showUploadList}
        suffix={suffix}
        {...rest}
      />
      <label className={labelClass}>
        {isOccupied ? label : placeholder} {requiredMark}
      </label>
    </div>
  );
};

export default memo(FloatInput);
