import { memo } from "react";

import styles from "./BorderedText.module.scss";
import Image from "next/image";

const BorderedText = ({ img }) => {
  return (
    <Image src={img} className={styles.text} />
  );
};

export default memo(BorderedText);
