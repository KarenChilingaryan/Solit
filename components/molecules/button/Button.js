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
  transparentOpposite,
  grayTextBtn,
  icon,
  transparentBlue,
  whiteBlueBorder
}) => {
  return (
    <button
      className={cx(styles.button, {
        [styles.whiteButton]: whiteButton,
        [styles.boldBlue]: boldBlue,
        [styles.boldWhite]: boldWhite,
        [styles.lightBlue]: lightBlue,
        [styles.transparent]: transparent,
        [styles.transparentOpposite]: transparentOpposite,
        [styles.transparentBlue]: transparentBlue,
        [styles.grayTextBtn]: grayTextBtn,
        [styles.whiteBlueBorder]: whiteBlueBorder,
      })}
    >
      {text}
      {icon && <Image src={icon} />}
    </button>
  );
};

export default memo(Button);
