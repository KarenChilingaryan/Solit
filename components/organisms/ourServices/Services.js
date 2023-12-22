import { memo } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const Title = dynamic(() => import("../../molecules/title/Title"));
const ServiceCard = dynamic(() =>
  import("../../molecules/serviceCard/ServiceCard")
);
const Button = dynamic(() => import("../../molecules/button/Button"));

import { useRouter } from "next/router";
import { Col, Row } from "../../atoms";
// import Title from "../../molecules/title/Title";
// import ServiceCard from "../../molecules/serviceCard/ServiceCard";
// import Button from "../../molecules/button/Button";
import svg from "../../../assets/img/Web.svg";

import styles from "./Services.module.scss";

const cardsData = [1, 2, 3, 4, 5];

const Services = ({ data }) => {
  const router = useRouter();
  const onClick = (slug) => {
    router.push(`/services/${slug}`);
  };
  const buttonText = "Learn more";
  return (
    <div className={styles.servicesMainWrapper}>
      <Col className={styles.titleWrapper}>
        <Title title={data?.presentation_title} whiteTitle />
      </Col>
      <Row className={styles.serviceSection} gutter={[0, "2.083336vw"]}>
        {cardsData?.map((el) => (
          <ServiceCard
            icon={svg}
            title={el.title}
            desc={el.description}
            key={el}
            onClick={() => onClick(el?.slug)}
          />
        ))}
      </Row>
      <Col className={styles.buttonWrapper}>
        <Link href="/services" prefetch={false}>
          <Button text={buttonText} whiteButton />
        </Link>
      </Col>
    </div>
  );
};

export default memo(Services);
