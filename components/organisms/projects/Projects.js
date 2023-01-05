import { memo } from "react";
import { Col, Row } from "../../atoms";
import Title from "../../molecules/title/Title";
import Button from "../../molecules/button/Button";
import ProjectsCard from "../../molecules/projectsCard/ProjectsCard";
import projectIcon from "../../../assets/img/projectIcon.png";

import styles from "./Projects.module.scss";

const Projects = () => {
  const buttonText = "Our Portfolio";

  const data = [
    {
      id: 1,
      icon: projectIcon,
      title: "Kids 360",
      desc: "#Android #Kotlin #Java #RXjava",
    },
    {
      id: 2,
      icon: projectIcon,
      title: "Kids 360",
      desc: "#Android #Kotlin #Java #RXjava",
    },
    {
      id: 3,
      icon: projectIcon,
      title: "Kids 360",
      desc: "#Android #Kotlin #Java #RXjava",
    },
    {
      id: 4,
      icon: projectIcon,
      title: "Kids 360",
      desc: "#Android #Kotlin #Java #RXjava",
    },
    {
      id: 5,
      icon: projectIcon,
      title: "Kids 360",
      desc: "#Android #Kotlin #Java #RXjava",
    },
    {
      id: 6,
      icon: projectIcon,
      title: "Kids 360",
      desc: "#Android #Kotlin #Java #RXjava",
    },
  ];
  return (
    <div className={styles.projectsWrapper}>
      <Col className={styles.titleWrapper}>
        <Title title={"Our Projects"} />
      </Col>

      <Row className={styles.projects} justify={"space-between"} gutter={[0, "3.645838vw"]}>
        {data?.map((el) => (
          <ProjectsCard
            key={el?.id}
            icon={el.icon}
            title={el?.title}
            desc={el?.desc}
          />
        ))}
      </Row>

      <Col className={styles.buttonWrapper}>
        <Button text={buttonText} />
      </Col>
    </div>
  );
};

export default memo(Projects);
