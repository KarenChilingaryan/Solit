import Image from "next/image";
import { memo, useEffect, useState } from "react";
import { Modal } from "antd";
import logo from "../../../assets/img/Logo.svg";
import close from "../../../assets/img/icons/close.svg";

import styles from "./Modal.module.scss";

const ModalWrapper = ({
  children,
  open,
  width,
  setOpen,
  style,
  classname,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);
  const [animationClass, setAnimationClass] = useState(false);

  const handleClose = () => {
    setAnimationClass("modalClose");
    setTimeout(() => {
      setVisible(false);
    }, 200);
  };

  const handleOpen = () => {
    setAnimationClass("modalOpen");
    setVisible(true);
  };
  const afterClose = () => {
    setAnimationClass("");
  };

  useEffect(() => {
    if (open != visible) {
      if (open) {
        handleOpen();
      } else {
        handleClose();
      }
    }
  }, [open]);

  return (
    <Modal
      onCancel={() => setOpen(false)}
      open={visible}
      afterClose={afterClose}
      title={<Image src={logo} className={styles.logo} alt="image" />}
      className={`${styles.modal} ${styles[animationClass]} ${classname} ${
        style && style
      }`}
      wrapClassName={styles.lll}
      footer={false}
      transitionName=""
      width={width}
      closeIcon={
        <Image
          src={close}
          className={styles.closeIcon}
          width="1.25vw"
          height="1.25vw"
          alt="image"
          onClick={() => setOpen(false)}
        />
      }
      {...rest}
    >
      {children}
    </Modal>
  );
};
export default memo(ModalWrapper);
