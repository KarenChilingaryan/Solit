import { memo } from "react";
import cx from "classnames";

import styles from "./Button.module.scss";

const Button = ({ text, whiteButton, boldBlue, boldWhite, lightBlue }) => {
  return (
    <button
      className={cx(styles.button, {
        [styles.whiteButton]: whiteButton,
        [styles.boldBlue]: boldBlue,
        [styles.boldWhite]: boldWhite,
        [styles.lightBlue]: lightBlue,
      })}
    >
      {text}
    </button>
  );
};

export default memo(Button);
