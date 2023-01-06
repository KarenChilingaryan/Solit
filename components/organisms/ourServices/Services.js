import { memo } from "react";
import Title from "../../molecules/title/Title";
import { Col, Row } from "../../atoms";
import ServiceCard from "../../molecules/serviceCard/ServiceCard";
import Button from "../../molecules/button/Button";
import svg from "../../../assets/img/Web.svg";

import styles from "./Services.module.scss";
import Link from "next/link";

const Services = ({ data }) => {
  const buttonText = "Learn more";
  return (
    <div className={styles.servicesMainWrapper}>
      <Col className={styles.titleWrapper}>
        <Title title={data?.presentation_title} whiteTitle />
      </Col>
      <Row className={styles.serviceSection} gutter={[0, "2.083336vw"]}>
        {data?.data?.map((el) => (
          <ServiceCard
            icon={svg}
            title={el.title}
            desc={el.description}
            key={el}
          />
        ))}
      </Row>
      <Col className={styles.buttonWrapper}>
        <Link href="/services">
        <Button text={buttonText} whiteButton />
        </Link>
      </Col>
    </div>
  );
};

export default memo(Services);
