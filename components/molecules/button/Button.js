import { memo } from "react";
import Image from "next/image";
import cx from "classnames";

import styles from "./Button.module.scss";

const Button = ({
  text,
  whiteButton,
  boldBlue,
  boldWhite,
  lightBlue,
  transparent,
  icon,
}) => {
  return (
    <button
      className={cx(styles.button, {
        [styles.whiteButton]: whiteButton,
        [styles.boldBlue]: boldBlue,
        [styles.boldWhite]: boldWhite,
        [styles.lightBlue]: lightBlue,
        [styles.transparent]: transparent,
      })}
    >
      {text}
      {icon && <Image src={icon} />}
    </button>
  );
};

export default memo(Button);
