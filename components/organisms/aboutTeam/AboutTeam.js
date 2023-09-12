import { memo } from "react";
import Image from "next/image";
import { Col, Paragraph, Row } from "../../atoms";

import styles from "./AboutTeam.module.scss";

import moreIcon from "../../../assets/img/more.svg";

const AboutTeam = ({ icon, title, description, onClick }) => {
  const moreText = "More";
  return (
    <div className={styles.aboutTeamWrapper}>
      <Image src={icon} className={styles.icon} alt="image"/>
      <Row className={styles.title}> Our React Native Developers</Row>
      <Row className={styles.context}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal
      </Row>
      <Paragraph className={styles.more} onClick={onClick}>
        {moreText} <Image src={moreIcon} alt="more icon" />
      </Paragraph>
    </div>
  );
};

export default memo(AboutTeam);
