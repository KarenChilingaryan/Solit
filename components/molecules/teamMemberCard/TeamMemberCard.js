import { memo } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Col, IconWrapper, Row } from "../../atoms";
import arrow from "../../../assets/img/arrow.svg";

import styles from "./TeamMemberCard.module.scss";


const TeamMember = ({ name, position, more, image, fromCareers }) => {
  const router = useRouter();
  const handleClick = (id) => {
    more && router.push(`/about-us`);
  };

  return (
    <Col className={`${styles.imageContainer} ${more && styles.moreWrapper} ${fromCareers && styles.fromCareers}`} onClick={handleClick}>
      {!more ? (
        <>
          <Image src={image} alt="icon" className={styles.img} loading="lazy" />
          <Row className={styles.positionSection}>
            <Row className={styles.name}>{name} </Row>
            <Row className={styles.position}>{position}</Row>
          </Row>
        </>
      ) : (
        <Row className={styles.more}>
          More <Image src={arrow} width={10} height={10} alt="image" />
        </Row>
      )}
    </Col>
  );
};

export default memo(TeamMember);
