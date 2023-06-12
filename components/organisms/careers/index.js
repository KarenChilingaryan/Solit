import { memo } from "react";
import { Col, Row } from "../../atoms";
import { HomeMainWithImage } from "../HomeMainWithImage";
import Button from "../../molecules/button/Button";
import WhatToKnow from "../../molecules/whatToKnow/WhatToKnow";
import JobsTable from "../../molecules/jobsTable/JobsTable";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import SeoCard from "../../atoms/SEO";
import { seoData } from "../../../constants/seo";
import ContactForm from "../contactForm/ContactForm";
import earth from "../../../assets/img/earth.png";
import teamMember from "../../../assets/img/teamMember.png";
import worldMap from "../../../assets/img/career-world-pam.png";

import styles from "./careers.module.scss";
import { ReversedAboutUs } from "../reversedAboutUs";
import Image from "next/image";
const data = [
  {
    users: [
      {
        name: "Marvel Alina ",
        position: "UX/UI Designer",
        image: teamMember,
      },
      {
        name: "Marvel Alina ",
        position: "UX/UI Designer",
        image: teamMember,
      },
    ],
    about: {
      title: "About us",
      description:
        "It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    },
  },
  {
    users: [
      {
        name: "Marvel Alina ",
        position: "UX/UI Designer",
        image: teamMember,
      },
      {
        name: "Marvel Alina ",
        position: "UX/UI Designer",
        image: teamMember,
      },
    ],
    about: {
      title: "Our Team",
      description:
        "It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    },
  },
];
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
          <Button text="Recommended" transparentOpposite />
        </Row>
        <Image className={styles.worldMap} src={worldMap}/>
        <div className={styles.aboutContent}>
          {data.map((row, i) => (
            <ReversedAboutUs
              key={i}
              users={row.users}
              about={row.about}
              reversed={i % 2}
              fromCareers={true}
            />
          ))}
        </div>
        <div className={styles.secondInfo}>
          <div className={styles.secondTitle}>
            Current Job Openings
          </div>
          <div className={styles.secondDescription}>
            Take a look and see if there is something that fits your skill set.
          </div>
        </div>
        <Row>
          <JobsTable />
        </Row>
        <Row className={styles.weKnowSection}>
          <WhatToKnow
            title="If you haven't found position..."
            description="For further information don't hesitate to contact us. We would be happy to provide you with more information."
            buttonText="Apply Here"
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
