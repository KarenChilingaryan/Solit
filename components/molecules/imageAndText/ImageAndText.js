import { memo } from "react";
import Image from "next/image";
import { Paragraph } from "../../atoms";
import styles from "./ImageAndText.module.scss";

const ImageAndText = ({
  text,
  image
}) => {
  return (
    <div className={styles.block}>
      <Image src={image} className={styles.image}/>
      <Paragraph className={styles.text}>
        {text}

      </Paragraph>
    </div>
  );
};

export default memo(ImageAndText);
