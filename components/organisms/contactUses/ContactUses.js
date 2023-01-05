import { memo } from "react";
import HomeMainTexts from "../../molecules/homeMainTexts/HomeMainTexts";
import ContactForm from "../contactForm/ContactForm";

import styles from "./ContactUses.module.scss";

const ContactUses = () => {
  return (
    <div className={styles.contactUsMainWrapper}>
      <div className={styles.contactUsHeader}>
        <HomeMainTexts
          result={{
            default_text: "Let’s contact for the great!",
            color_text: "contact",
          }}
          style={{ margin: "0 auto" }}
          square
        />
      </div>
      <ContactForm
        style={{ background: "#DEF1FA" }}
      />
    </div>
  );
};

export default memo(ContactUses);
