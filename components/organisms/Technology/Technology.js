import { memo } from "react";
import { Paragraph } from "../../atoms";
import Button from "../../molecules/button/Button";
import languageIcon from "../../../assets/img/php_color.svg";

import styles from "./Technology.module.scss";
import Image from "next/image";

const buttonsName = [
  "Back-End",
  "Front-End",
  "iOS",
  "Android",
  "Databases",
  "UI/UX tools",
];
const languages = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8,
  9, 1, 2, 3, 4, 5, 6, 7, 8, 9,
];
const Technology = () => {
  return (
    <div className={styles.container}>
      <Paragraph className={styles.title}>Technology</Paragraph>
      <Paragraph className={styles.description}>
        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
        esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit
        aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute
        id deserunt nisi.
      </Paragraph>
      <div className={styles.buttons}>
        {buttonsName.map((name, i) => (
          <Button text={name} transparent key={i} />
        ))}
      </div>
      <div className={styles.languages}>
        {languages.map((el, i) => (
          <div className={styles.languageBlock} key={i}>
            <Image src={languageIcon} className={styles.icon} />
            <Paragraph className={styles.name}>name</Paragraph>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Technology);
