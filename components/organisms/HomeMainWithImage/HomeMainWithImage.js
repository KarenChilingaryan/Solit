import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import { useFooterQuery } from "../../../services/footerApi";
import { Paragraph } from "../../atoms";

import styles from "./HomeMainWithImage.module.scss";

const HomeMainWithImage = ({ firstImage, className, children }) => {
  const footer = useFooterQuery();
  const { data } = footer;
  return (
    <div className={`${styles.content} ${styles[className]}`}>
      <div className={styles.socialSites}>

        {data?.contact?.map((el, i) =>
          <Link href={el.link} target="_blank" key={i}>
            <div className={styles.site}>
              <Image src={el.logo} className={styles.image} width={80} height={80} />
              <Paragraph className={styles.text}>{el.name}</Paragraph>
            </div>
          </Link>
        )}
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
