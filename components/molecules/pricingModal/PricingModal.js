import { memo } from "react";
import { Col, Paragraph, Row } from "../../atoms";
import Image from "next/image";
import close from "../../../assets/img/icons/closeIcon.svg";
import ModalForm from "../modalForm/ModalForm";

import styles from "./PricingModal.module.scss";

const PricingModal = ({ data, handleDelete }) => {
  const filterDataByCategory = (category) => {
    return data.filter((item) => item.category === category);
  };

  return (
    <Row className={styles.content}>
      <Col className={styles.leftContent}>
        <Row className={styles.header}>
          <Paragraph className={styles.bigTitle}>
            Please, leave your contact details to proceed
          </Paragraph>
          <Paragraph className={styles.smallTitle}>
            Your personal data will be processed securely and won't be available
            to third parties.
          </Paragraph>
        </Row>
        <Row className={styles.summarySection}>
          <Paragraph className={styles.summary}>
            Summary of your request:
          </Paragraph>
          <Row className={styles.projType}>
            {filterDataByCategory("industry").map((item, index) => (
              <Col key={index} className={styles.itemWrapper}>
                <Col className={styles.item}>{item.item}</Col>
                <Image
                  src={close}
                  className={styles.icon}
                  onClick={() => handleDelete(item)}
                  alt="i"
                />
              </Col>
            ))}
            {filterDataByCategory("duration").map((item, index) => (
              <Col key={index} className={styles.itemWrapper}>
                <Col className={styles.item}>{item.item}</Col>
                <Image
                  src={close}
                  className={styles.icon}
                  onClick={() => handleDelete(item)}
                  alt="i"
                />
              </Col>
            ))}
          </Row>

          <Row className={styles.specialists}>
            <Paragraph className={styles.specialistsTitle}>
              Specialists selected for your project:
            </Paragraph>

            {filterDataByCategory("specialists").map((item, index) => (
              <Col key={index} className={styles.itemWrapper}>
                <Col className={styles.item}>{item.item}</Col>
                <Image
                  src={close}
                  className={styles.icon}
                  onClick={() => handleDelete(item)}
                  alt="i"
                />
              </Col>
            ))}

            {filterDataByCategory("developers").map((item, index) => (
              <Col key={index} className={styles.itemWrapper}>
                <Col className={styles.item}>{item.item}</Col>
                <Image
                  src={close}
                  className={styles.icon}
                  onClick={() => handleDelete(item)}
                  alt="i"
                />
              </Col>
            ))}
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
