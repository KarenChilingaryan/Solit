import { memo, useState } from "react";
import { Input, FormItem } from "../../atoms";

import styles from "./FloatInput.module.scss";

const phoneValues = [
  "Backspace",
  "Delete",
  "Tab",
  "Enter",
  " ",
  "Shift",
  "Control",
  "Alt",
  "CapsLock",
  "Escape",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "F3",
  "F12",
  "Insert",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
];

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
  isUpload = false,
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
      !(
        (e.ctrlKey && (e.key === "a" || e.key === "A")) ||
        (e.ctrlKey && (e.key === "c" || e.key === "C")) ||
        (e.ctrlKey && (e.key === "v" || e.key === "V")) ||
        (e.ctrlKey && (e.key === "x" || e.key === "X"))
      ) &&
      !phoneValues.includes(e.key)
    ) {
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
          inputMode="text"
          {...rest}
        />
      ) : (
        <Input
          onChange={onChange}
          type={type}
          onKeyDown={(e) => (type == "number" ? handleKeyDown(e) : () => {})}
          defaultValue={value}
          showUploadList={showUploadList}
          suffix={suffix}
          status={type == "file" && !value && "warning"}
          value={value}
          {...rest}
        />
      )}
      <label
        className={`${labelClass} ${
          isUpload && !isOccupied ? styles.file : ""
        }`}
      >
        {isOccupied ? label : placeholder} {requiredMark}
      </label>
      {type == "file" && prefix}
    </div>
  );
};

export default memo(FloatInput);
