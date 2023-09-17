import { memo, useState } from "react";
import { Input, FormItem } from "../../atoms";

import styles from "./FloatInput.module.scss";

const phoneValues = [8, 46, 9, 13, 32, 16, 17, 18, 20, 27, 37, 39, 38, 40, 114, 123, 45, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 107]

const FloatInput = ({
  label,
  value,
  placeholder,
  type,
  required,
  onChange,
  showUploadList,
  suffix,
  prefix,
  border,
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
    if (
      !((e.ctrlKey && (e.key === 'a' || e.key === 'A'))
        || (e.ctrlKey && (e.key === 'c' || e.key === 'C'))
        || (e.ctrlKey && (e.key === 'v' || e.key === 'V'))
        || (e.ctrlKey && (e.key === 'x' || e.key === 'X')))
      && !phoneValues.includes(e.keyCode)) {
      e.preventDefault();
    }
  };
  return (
    <div
      className={`${styles.floatLabel} ${border && styles.floatLabelBorder}`}
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      {type == "file" && suffix}
      {type == "file" ? (
        <input
          onChange={onChange}
          type={type}
          defaultValue={value}
          showUploadList={showUploadList}
          suffix={suffix}
          {...rest}
        />
      ) : (
        <Input
          onChange={onChange}
          type={type}
          onKeyDown={(e) => (type == "number" ? handleKeyDown(e) : () => { })}
          defaultValue={value}
          showUploadList={showUploadList}
          suffix={suffix}
          status={type == "file" && !value && "warning"}
          {...rest}
        />
      )}
      <label className={labelClass}>
        {isOccupied ? label : placeholder} {requiredMark}
      </label>
      {type == 'file' && prefix}
    </div>
  );
};

export default memo(FloatInput);
