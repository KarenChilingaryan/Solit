import { memo } from "react";
import { Col, Row } from "../../atoms";
import { HomeMainWithImage } from "../HomeMainWithImage";
import Button from "../../molecules/button/Button";
import WhatToKnow from "../../molecules/whatToKnow/WhatToKnow";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import SeoCard from "../../atoms/SEO";
import { seoData } from "../../../constants/seo";
import ContactForm from "../contactForm/ContactForm";
import earth from "../../../assets/img/earth.png";

import styles from "./careers.module.scss";

const Careers = () => {
  // const router = useRouter();

  // const careerTechnologyLongPresentation = useSelector(
  //   (state) =>
  //     state?.careerTechnologyLongPresentationApi?.queries?.[
  //       "careerTechnologyLongPresentation(undefined)"
  //     ]?.data
  // );

  // const handleClick = (id) => {
  //   router.push(`/careers/${id}`);
  // };

  return (
    <HomeMainWithImage firstImage={earth}>
      {/* <SeoCard details={seoData} /> */}
      <Row className={styles.content}>
        <Row className={styles.pageHeader}>
          <Row className={styles.title}>Careers</Row>
          <Row className={styles.subTitle}>
            <Col>Recommended</Col>
            <Col>Friends</Col>
          </Row>
          <Row className={styles.info}>
            Ex non nostrud ullamco ullamco cupidatat laboris eu nisi ut in
            fugiat. Sit labore ipsum veniam sint esse magna labore culpa dolore
            irure amet.
          </Row>
          <Button text={"Recommended"} transparentOpposite />
        </Row>

        <Row className={styles.weKnowSection}>
          <WhatToKnow
            title="If you haven't found position..."
            description="For further information don't hesitate to contact us. We would be happy to provide you with more information."
          />
        </Row>
        <Row className={styles.contactUsWrapper}>
          <ContactForm />
        </Row>
      </Row>
    </HomeMainWithImage>
  );
};

export default memo(Careers);
