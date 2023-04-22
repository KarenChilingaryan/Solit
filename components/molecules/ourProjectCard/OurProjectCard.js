import Image from "next/image";
import { memo } from "react";
import { Col, Row } from "../../atoms";
import arrow from "../../../assets/img/arrow.svg";
import react from "../../../assets/img/icons/reactjs.svg";

import styles from "./OurProjectCard.module.scss";

const array = [1, 2, 3, 4, 5];

const OurProjectCard = ({ name, more, image, width }) => {
  return (
    <Col className={styles.mainWrapper} width={width}>
      <Col
        className={`${styles.imageContainer} ${more && styles.moreWrapper}`}
        width={width}
      >
        {!more ? (
          <>
            <Image src={image} alt="icon" className={styles.img} />
            <Row className={styles.positionSection}>
              <Row className={styles.name}>{name} </Row>
              <Row className={styles.stacks}>
                {array?.map((_, i) => (
                  <Image src={react} className={styles.icon} key={i} />
                ))}
              </Row>
            </Row>
          </>
        ) : (
          <Row className={styles.more}>
            More <Image src={arrow} width={10} height={10} />
          </Row>
        )}
      </Col>
    </Col>
  );
};

export default memo(OurProjectCard);
