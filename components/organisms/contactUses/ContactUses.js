import { memo } from "react";
import { useSelector } from "react-redux";
import ContactForm from "../contactForm/ContactForm";

import styles from "./ContactUses.module.scss";

const ContactUses = () => {
  return (
    <div className={styles.contactUsMainWrapper}>
      <div className={styles.contactUsHeader}>
        <ContactForm data={{title: 'Contact with us', description: "Share the details of your project – like scope, timeframes, or business challenges you'd like to solve. Our team will carefully study them and then we’ll figure out the next move together."}} fromContactPage={true} />
      </div>
    </div>
  );
};

export default memo(ContactUses);
