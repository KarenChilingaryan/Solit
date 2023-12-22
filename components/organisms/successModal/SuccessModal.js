import { memo, useEffect, useState } from "react";
import dynamic from 'next/dynamic';

import { Paragraph } from "../../atoms";
const ModalWrapper = dynamic(() => import('../../molecules/Modal/Modal'));


import styles from "./SuccessModal.module.scss";

const SuccessModal = ({ open, setOpen, success = true }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <ModalWrapper
      open={open}
      width={
        isMobile < 576
          ? "91vw"
          : isMobile <= 1024 && isMobile > 576
          ? "58vw"
          : isMobile > 1024 && isMobile <= 1440
          ? "37vw"
          : "38vw"
      }
      setOpen={setOpen}
      centered
    >
      <div className={styles.content}>
        <Paragraph
          className={styles.title}
          style={{ color: !success ? "red" : "black" }}
        >
          {!success ? "Failed" : "Success"}
        </Paragraph>
        <Paragraph className={styles.description}>
          Your information has been sent successfully. Our manager will process
          it and contact you. Good day!
        </Paragraph>
      </div>
    </ModalWrapper>
  );
};

export default memo(SuccessModal);
