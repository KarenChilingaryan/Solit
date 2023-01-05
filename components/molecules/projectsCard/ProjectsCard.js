import { memo } from "react";
import Image from "next/image";
import { Col, Row } from "../../atoms";

import styles from "./ProjectsCard.module.scss";

const ProjectsCard = ({ icon, title, desc }) => {
  return (
    <Col className={styles.projectsCardWrapper} span={7}>
      <Row>
        <Col span={7}>
          <Image src={icon} alt="icon" className={styles.img} />
        </Col>
        <Col className={styles.textsWrapper} span={16}>
          <Col className={styles.title}>{title}</Col>
          <Col className={styles.desc}>{desc}</Col>
        </Col>
      </Row>
    </Col>
  );
};

export default memo(ProjectsCard);
