import { memo } from "react";

import styles from "./TitledText.module.scss";

const TitledText = ({ title, description, subTitle, short = false }) => {
  return (
    <div className={short ? styles.shortBlock : styles.block}>
      {title && <b className={styles.title}>{title}: </b>}
      {subTitle && (
        <span className={styles.description}>
          {subTitle} <br />
        </span>
      )}
      <span className={styles.description}>{description}</span>
    </div>
  );
};

export default memo(TitledText);
