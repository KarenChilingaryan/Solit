import { memo, useState, useEffect } from "react";
import { Input, FormItem } from "../../atoms";
import PhoneInput from "react-phone-input-2";
import es from "react-phone-input-2/lang/es.json";

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
  phoneClass,
  rest,
}) => {
  const [focus, setFocus] = useState(false);

  if (!placeholder) placeholder = label;

  let isOccupied = focus || (value && value.length !== 0);

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

  const [country, setCountry] = useState(null);
  // const [countryCode, setCountryCode] = useState();

  const getCountryInfo = async () => {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      setCountry(data.country.toLowerCase());
      return data.country;
    } catch (error) {
      console.log("Error fetching user information:", error);
      return null;
    }
  };

  // if (type === "number" && countryCode) {
  //   isOccupied = true;
  // }
  useEffect(() => {
    type === "number" && getCountryInfo();
  }, [type]);
  return (
    <div
      className={`${styles.floatLabel} ${border && styles.floatLabelBorder}`}
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      {/* {type == "file" && suffix} */}
      {type === "number" ? (
        isOccupied || value ? (
          <PhoneInput
            // onChange={(e, country, r, d) => setCountryCode(country)}
            country={country || ""}
            defaultMask="."
            type="number"
            copyNumbersOnly={true}
            value={value}
            enableSearch={true}
            localization={country}
            onChange={onChange}
            inputStyle={{ width: "100%", border: "none" }}
            inputClass={phoneClass}
            buttonStyle={{ background: "transparent", border: "none" }}
          />
        ) : (
          <Input {...rest} />
        )
      ) : (
        <Input
          onChange={(e) => {
            console.log(e);
            onChange(e);
          }}
          type={type}
          onKeyDown={(e) => (type == "number" ? handleKeyDown(e) : () => {})}
          defaultValue={value}
          showUploadList={showUploadList}
          suffix={suffix}
          // status={type == "file" && !value && "warning"}
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
