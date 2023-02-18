import { memo } from "react";
import { Paragraph } from "../../atoms";

import styles from "./BorderedText.module.scss";

const BorderedText = ({ text }) => {
  return (
    <Paragraph className={styles.text}>{text}</Paragraph>
  );
};

export default memo(BorderedText);
