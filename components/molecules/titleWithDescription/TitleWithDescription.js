import { memo } from "react";
import { Paragraph } from "../../atoms";

import styles from "./TitleWithDescription.module.scss";

const TitleWithDescription = ({ title, description, fromCareers, reversed, className, last }) => {
  return (
    <div className={`${styles.block} ${fromCareers ? styles.fromCareersDescription : ''} ${reversed && fromCareers ? styles.descriptionTop : ''} ${styles[className]}`}>
      <Paragraph className={`${styles.title} ${last ? styles.titleLast : ''}`}>{title}</Paragraph>
      <Paragraph className={styles.description}>{description}</Paragraph>
    </div>
  );
};

export default memo(TitleWithDescription);
