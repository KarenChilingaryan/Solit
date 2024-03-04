import { memo } from "react";
import ContactForm from "../contactForm/ContactForm";
import HomeMainWithImage from '../HomeMainWithImage/HomeMainWithImage'

import styles from "./ContactUses.module.scss";

const ContactUses = () => {
  return (
    <HomeMainWithImage seoName="contact_us">
      <div className={styles.contactUsMainWrapper}>
        <div className={styles.contactUsHeader}>
          <ContactForm
            h1={true}
            data={{
              title: "Contact with us",
              description:
                "Share the details of your project – like scope, timeframes, or business challenges you'd like to solve. Our team will carefully study them and then we’ll figure out the next move together.",
            }}
            fromContactPage={true}
          />
        </div>
      </div>
    </HomeMainWithImage>
  );
};

export default memo(ContactUses);
