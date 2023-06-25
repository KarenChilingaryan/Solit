import Image from "next/image";
import { memo, useEffect, useState } from "react";
import linkedin from "../../../assets/img/icons/u_linkedin-alt.svg";
import telegram from "../../../assets/img/icons/u_telegram-alt.svg";
import whatsapp from "../../../assets/img/icons/u_whatsapp-alt.svg";
import { Paragraph } from "../../atoms";

import styles from "./HomeMainWithImage.module.scss";

const HomeMainWithImage = ({ firstImage,className, children }) => {
  return (
    <div className={`${styles.content} ${styles[className]}`}>
      <div className={styles.socialSites}>
        <div className={styles.site}>
          <Image src={linkedin} className={styles.image} />
          <Paragraph className={styles.text}>Linkedin</Paragraph>
        </div>
        <div className={styles.site}>
          <Image src={telegram} className={styles.image} />
          <Paragraph className={styles.text}>Telegram</Paragraph>
        </div>
        <div className={styles.site}>
          <Image src={whatsapp} className={styles.image} />
          <Paragraph className={styles.text}>Whatsapp</Paragraph>
        </div>
      </div>
      <Image
        src={firstImage}
        style={{
          width: "100%",
          height: "auto",
          position: "absolute",
          top: 0,
        }}
      />
      {children}
    </div>
  );
};

export default memo(HomeMainWithImage);
