import { memo } from "react";
import { Paragraph } from "../../atoms";

import styles from "./ValueTextItem.module.scss";

const ValueDescription = ({ desc }) => {
  return <Paragraph className={styles.desc}>{desc}</Paragraph>;
};

export default memo(ValueDescription);
