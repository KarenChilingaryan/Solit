import { memo } from "react";
import { Paragraph } from "../../atoms";

import styles from "./TitleWithDescription.module.scss";

const TitleWithDescription = ({ title, description }) => {
  return (
    <div className={styles.block}>
      <Paragraph className={styles.title}>{title}</Paragraph>
      <Paragraph className={styles.description}>{description}</Paragraph>
    </div>
  );
};

export default memo(TitleWithDescription);
