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
  whiteBlueBorder,
  grayTextBtnTech,
  lightBlueTech,
  classN
}) => {
  return (
    <button
      className={`${cx(styles.button, {
        [styles.whiteButton]: whiteButton,
        [styles.boldBlue]: boldBlue,
        [styles.boldWhite]: boldWhite,
        [styles.lightBlue]: lightBlue,
        [styles.lightBlueTech]: lightBlueTech,
        [styles.transparent]: transparent,
        [styles.transparentOpposite]: transparentOpposite,
        [styles.transparentBlue]: transparentBlue,
        [styles.grayTextBtn]: grayTextBtn,
        [styles.grayTextBtnTech]: grayTextBtnTech,
        [styles.whiteBlueBorder]: whiteBlueBorder,
      })} ${styles[classN]}`}
    >
      {text}
      {icon && <Image src={icon} />}
    </button>
  );
};

export default memo(Button);
