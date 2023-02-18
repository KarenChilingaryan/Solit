import Image from "next/image";
import { memo } from "react";
import { Col, Row } from "../../atoms";
import arrow from "../../../assets/img/arrow.svg";

import styles from "./OurProjectCard.module.scss";

const OurProjectCard = ({ name, more, image }) => {
  return (
    <Col className={styles.mainWrapper}>
      <Col className={`${styles.imageContainer} ${more && styles.moreWrapper}`}>
        {!more ? (
          <>
            <Image src={image} alt="icon" className={styles.img} />
            <Row className={styles.positionSection}>
              <Row className={styles.name}>{name} </Row>
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
