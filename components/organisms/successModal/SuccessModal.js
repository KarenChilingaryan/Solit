import { memo } from "react";
import { Paragraph } from "../../atoms";
import ModalWrapper from "../../molecules/Modal/Modal";

import styles from "./SuccessModal.module.scss";

const SuccessModal = ({ open, setOpen }) => {

  return <ModalWrapper open={open} width={"max-content"} setOpen={setOpen} centered>
    <div className={styles.content}>
      <Paragraph className={styles.title}>Success</Paragraph>
      <Paragraph className={styles.description}>Your information has been sent successfully. Our manager will process it and contact you. Good day!</Paragraph>
    </div>
  </ModalWrapper>;
};

export default memo(SuccessModal);
