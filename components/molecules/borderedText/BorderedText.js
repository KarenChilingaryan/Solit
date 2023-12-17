import Image from "next/image";
import { memo } from "react";

import styles from "./BorderedText.module.scss";

const BorderedText = ({ img }) => {
  return <Image src={img} className={styles.text} alt="image" />;
};

export default memo(BorderedText);
