import { memo } from "react";
import { Paragraph } from "../../atoms";
import Row from "../../atoms/Row";
import Image from "next/image";
import Col from "../../atoms/Col";
import close from "../../../assets/img/icons/closeIcon.svg";
import minus from "../../../assets/img/icons/u_minus.svg";
import plus from "../../../assets/img/icons/u_plus.svg";
import ModalForm from "../modalForm/ModalForm";

import styles from "./PricingModal.module.scss";

const PricingModal = ({
  data,
  handleDelete,
  handleChange,
  dataForm,
  stackNames = [],
  stackNamesSecond,
  onSubmit,
  secondCheckBox,
}) => {
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
            {
              "Your personal data will be processed securely and won't be available to third parties."
            }
          </Paragraph>
        </Row>
        <Row className={styles.summarySection}>
          <Paragraph className={styles.summary}>
            {data && data.length
              ? "Summary of your request:"
              : "You haven't chosen additional options."}
          </Paragraph>

          {stackNamesSecond && (
            <Row className={styles.projType}>
              {stackNamesSecond.map((name) =>
                filterDataByCategory(name).map((item, index) => (
                  <Col key={index} className={styles.itemWrapper}>
                    <Col className={styles.item}>{item.item}</Col>
                    <Image
                      src={close}
                      className={styles.icon}
                      onClick={() => handleDelete(item)}
                      alt="i"
                    />
                  </Col>
                ))
              )}
            </Row>
          )}
          <Row className={styles.projType}>
            {stackNamesSecond && data && data.length ? (
              <Paragraph className={styles.specialistsTitle}>
                Specialists selected for your project:
              </Paragraph>
            ) : (
              <></>
            )}
            {stackNames.map((name) =>
              filterDataByCategory(name).map((item, index) => {
                const split = stackNamesSecond && item?.item?.split(" - ");
                return stackNamesSecond ? (
                  <Col key={index} className={styles.itemWrapper}>
                    <Col className={styles.item}>{split[0]}</Col>
                    <Image
                      src={minus}
                      className={styles.iconChange}
                      onClick={() =>
                        handleChange(
                          item.category,
                          split[0],
                          Number(split[1]) - 1
                        )
                      }
                      alt="i"
                    />
                    <Col className={styles.iconChangeValue}>{split[1]}</Col>
                    <Image
                      src={plus}
                      className={styles.iconChange}
                      onClick={() =>
                        handleChange(
                          item.category,
                          split[0],
                          Number(split[1]) + 1
                        )
                      }
                      alt="i"
                    />
                  </Col>
                ) : (
                  <Col key={index} className={styles.itemWrapper}>
                    <Col className={styles.item}>{item.item}</Col>
                    <Image
                      src={close}
                      className={styles.icon}
                      onClick={() => handleDelete(item)}
                      alt="i"
                    />
                  </Col>
                );
              })
            )}
          </Row>
        </Row>
      </Col>
      <Col className={styles.rightContent}>
        <ModalForm
          data={dataForm}
          onSubmit={onSubmit}
          secondCheckBox={secondCheckBox}
        />
      </Col>
    </Row>
  );
};

export default memo(PricingModal);
