import { memo, useState, useEffect, useRef } from "react";
import { Input, FormItem } from "../../atoms";
import PhoneInput from "react-phone-input-2";

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

  const [country, setCountry] = useState(null);
  const [countryCode, setCountryCode] = useState(0);
  const [countryCode2, setCountryCode2] = useState(0);

  const handleChange = (e) => {
    if (countryCode != countryCode2 && countryCode != e) {
      setCountryCode(e);
      setCountryCode2(countryCode);
    }
  };

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

  useEffect(() => {
    type === "number" && getCountryInfo();
  }, [type]);

  useEffect(() => {
    const handleMouseOut = () => {
      console.log("Mouse out event triggered");
    };

    const phoneInput = document.querySelector(".react-tel-input input");

    if (phoneInput) {
      phoneInput.addEventListener("mouseout", handleMouseOut);

      return () => {
        phoneInput.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, []);
  return (
    <div
      className={`${styles.floatLabel} ${border && styles.floatLabelBorder}`}
      onBlur={() =>
        countryCode != countryCode2 || type == "number" ? null : setFocus(false)
      }
      onFocus={() => setFocus(true)}
    >
      {type == "number" ? (
        isOccupied || value ? (
          <PhoneInput
            onChange={(e, country, r, d) => {
              handleChange(country);
              onChange(e, country, r, d);
            }}
            country={country || ""}
            autoFormat={false}
            type="number"
            copyNumbersOnly={true}
            value={value}
            enableSearch={true}
            localization={country}
            inputStyle={{ width: "100%", border: "none" }}
            inputClass={phoneClass}
            buttonStyle={{ background: "transparent", border: "none" }}
            onBlur={() => setFocus(false)}
          />
        ) : (
          <Input {...rest} />
        )
      ) : (
        <Input
          onChange={(e) => {
            onChange(e);
          }}
          type={type}
          defaultValue={value}
          showUploadList={showUploadList}
          suffix={suffix}
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
