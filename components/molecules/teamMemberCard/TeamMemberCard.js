import Image from "next/image";
import { memo } from "react";
import { Col, IconWrapper, Row } from "../../atoms";

import teamMember from "../../../assets/img/teamMember.png";
import arrow from "../../../assets/img/arrow.svg";

import styles from "./TeamMemberCard.module.scss";

const TeamMember = ({ name, position, more }) => {
  return (
    <Col className={`${styles.imageContainer} ${more && styles.moreWrapper}`}>
      {!more ? (
        <>
          <Image src={teamMember} alt="icon" className={styles.img} />
          <Row className={styles.positionSection}>
            <Row className={styles.name}>Marvel Alina </Row>
            <Row className={styles.position}>UX/UI Designer</Row>
          </Row>
        </>
      ) : (
        <Row className={styles.more}>
          More <Image src={arrow} width={10} height={10} />
        </Row>
      )}
    </Col>
  );
};

export default memo(TeamMember);
