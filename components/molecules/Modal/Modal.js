import Image from "next/image";
import { memo } from "react";
import { Col, Paragraph, Row } from "../../atoms";
import { Button, Modal, Animate } from "antd";
import logo from "../../../assets/img/Logo.svg";
import close from "../../../assets/img/icons/close.svg";

import styles from "./Modal.module.scss";

const ModalWrapper = ({ children, open, width }) => {
  return (
    <Modal
      open={open}
      title={<Image src={logo} className={styles.logo} alt="" />}
      className={styles.modal}
      wrapClassName={styles.lll}
      footer={false}
      width={width}
      closeIcon={<Image src={close} className={styles.closeIcon} width="1.25vw" height="1.25vw" alt="" />}
    >
      <Row></Row>
      {children}
    </Modal>
  );
};
export default memo(ModalWrapper);
