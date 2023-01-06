import { memo } from "react";
import { Col, Row } from "../../atoms";
import svg from "../../../assets/img/serviceImg.svg";
import Button from "../../molecules/button/Button";
import ContactForm from "../contactForm/ContactForm";
import ServiceSmallCard from "../../molecules/serviceSmallCard/ServiceSmallCard";
import HomeMainTexts from "../../molecules/homeMainTexts/HomeMainTexts";
import webIcon from "../../../assets/img/webIcon.svg";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import styles from "./Services.module.scss";

const Services = () => {
  const router = useRouter();
  const services = useSelector(
    (state) => state?.servicesApi?.queries?.["services(undefined)"]?.data
  );

  const handleClick = (id) => {
    router.push(`services/${id}`);
  };

  const buttonText = "Let’s talk";

  return (
    <div className={styles.servicesMainWrapper}>
      <div className={styles.serviceTopWrapper}>
        <Row className={styles.leftSecton}>
          <Col>
            <HomeMainTexts result={services?.PointedTextServices[0]} square h1 />
          </Col>
          <Col className={styles.buttonWrapper}>
            <Button text={buttonText} />
          </Col>
        </Row>
        <Col className={styles.cardSection}>
          {services?.ServicesData?.map((el, index) => (
            <ServiceSmallCard
              icon={el.short_image || svg}
              title={el.title}
              desc={el.description}
              techIcon={el.logo_image || webIcon}
              key={index}
              onClick={() => handleClick(el.id)}
            />
          ))}
        </Col>
      </div>
      <ContactForm
        title={"Let’s Contact for Great"}
        style={{ background: "#105475" }}
        whiteTitle
      />
    </div>
  );
};

export default memo(Services);
