import { memo } from "react";
import { Col, Paragraph } from "../../atoms";

import styles from "./ContactFormColoredTitles.module.scss";

const ContactFormAbout = ({ background = "#DEF1FA" }) => {
  const defaultText = "We are the innovation you seek";
  const colorText = "innovation";

  const result = defaultText.split(" ").map((txt, idx) =>
    txt === colorText ? (
      <span className={styles.coloredText} key={idx}>
        {colorText}{" "}
      </span>
    ) : (
      <span className={styles.normalText} key={idx}>
        {txt}{" "}
      </span>
    )
  );
  return (
    <Col className={styles.contactFormAboutWrapper} style={{ background }}>
      <Paragraph className={styles.text}>{result}</Paragraph>
    </Col>
  );
};

export default memo(ContactFormAbout);
