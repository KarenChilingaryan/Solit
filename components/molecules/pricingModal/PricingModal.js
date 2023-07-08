import { memo } from "react";
import { Col, Paragraph, Row } from "../../atoms";
import Image from "next/image";
import minusBlackIcon from "../../../assets/img/icons/minusBlack.svg";
import plusBlackIcon from "../../../assets/img/icons/plusBlack.svg";
import close from "../../../assets/img/icons/closeIcon.svg";
import ModalForm from "../modalForm/ModalForm";

import styles from "./PricingModal.module.scss";

const PricingModal = ({ data, handleDelete }) => {
  return (
    <Row className={styles.content}>
      <Col className={styles.leftContent}>
        <Row className={styles.header}>
          <Paragraph className={styles.bigTitle}>
            Please, leave your contact details to proceed
          </Paragraph>
          <Paragraph className={styles.smallTitle}>
            Your personal data will be processed securely and wont be available
            to third parties.
          </Paragraph>
        </Row>
        <Row className={styles.summarySection}>
          <Paragraph className={styles.summary}>
            Summary of your request:
          </Paragraph>
          <Row className={styles.projType}>
            {data.map((item) => {
              if (
                item.category === "industry" ||
                item.category === "duration"
              ) {
                return (
                  <Col key={item} className={styles.itemWrapper}>
                    <Col className={styles.item}>{item.item}</Col>
                    <Image
                      src={close}
                      className={styles.icon}
                      onClick={() => handleDelete(item)}
                      alt="i"
                    />
                  </Col>
                );
              }
            })}
          </Row>

          <Row className={styles.specialists}>
            <Paragraph className={styles.specialistsTitle}>
              Specialists selected for your project:
            </Paragraph>

            {data.map((item) => {
              if (
                item.category === "specialists" ||
                item.category === "developers"
              ) {
                return (
                  <Col key={item} className={styles.itemWrapper}>
                    <Col className={styles.item}>{item.item}</Col>
                    <Image
                      src={close}
                      className={styles.icon}
                      onClick={() => handleDelete(item)}
                    />
                  </Col>
                );
              }
            })}
          </Row>
        </Row>
      </Col>
      <Col className={styles.rightContent}>
        <ModalForm />
      </Col>
    </Row>
  );
};

export default memo(PricingModal);
