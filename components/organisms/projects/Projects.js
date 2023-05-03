import { memo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Col, Row } from "../../atoms";
import Title from "../../molecules/title/Title";
import Button from "../../molecules/button/Button";
import ProjectsCard from "../../molecules/projectsCard/ProjectsCard";
import projectIcon from "../../../assets/img/projectIcon.png";

import styles from "./Projects.module.scss";

export const projectData = [
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

const Projects = () => {
  const buttonText = "Our Portfolio";
  const router = useRouter();
  const onClick = (id) => {
    router.push(`/portfolio/${id}`);
  };
  return (
    <div className={styles.projectsWrapper}>
      <Col className={styles.titleWrapper}>
        <Title title={"Our Projects"} />
      </Col>

      <Row
        className={styles.projects}
        justify={"space-between"}
        gutter={[0, "3.645838vw"]}
      >
        {projectData?.map((el) => (
          <ProjectsCard
            key={el?.id}
            icon={el.icon}
            title={el?.title}
            desc={el?.desc}
            onClick={() => onClick(el.id)}
          />
        ))}
      </Row>

      <Col className={styles.buttonWrapper}>
        <Link href="/portfolio">
          <Button text={buttonText} />
        </Link>
      </Col>
    </div>
  );
};

export default memo(Projects);
