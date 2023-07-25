import { memo } from "react";
import { useSelector } from "react-redux";
import ContactForm from "../contactForm/ContactForm";

import styles from "./ContactUses.module.scss";

const ContactUses = () => {
  const postsMainContactsTextApi = useSelector(
    (state) => state?.postsMainContactsTextApi?.queries?.["posts(undefined)"]?.data
  );
  return (
    <div className={styles.contactUsMainWrapper}>
      <div className={styles.contactUsHeader}>
        <ContactForm data={postsMainContactsTextApi ? postsMainContactsTextApi[0] : null} fromContactPage={true} />
      </div>
    </div>
  );
};

export default memo(ContactUses);
