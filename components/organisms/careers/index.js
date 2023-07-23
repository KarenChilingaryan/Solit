import { memo, useState } from "react";
import { Col, Row } from "../../atoms";
import Image from "next/image";
import { HomeMainWithImage } from "../HomeMainWithImage";
import Button from "../../molecules/button/Button";
import WhatToKnow from "../../molecules/whatToKnow/WhatToKnow";
import JobsTable from "../../molecules/jobsTable/JobsTable";
import { useSelector } from "react-redux";
import ContactForm from "../contactForm/ContactForm";
import earth from "../../../assets/img/earth.png";
import teamMember from "../../../assets/img/teamMember.png";
import worldMap from "../../../assets/img/career-world-pam.png";
import { ReversedAboutUs } from "../reversedAboutUs";
import ModalWrapper from "../../molecules/Modal/Modal";

import styles from "./careers.module.scss";
import ModalForm from "../../molecules/modalForm/ModalForm";

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
  const [openData, setOpenData] = useState(null);
  // const router = useRouter();

  const careersJobOpeningApi = useSelector(
    (state) => state?.careersJobOpeningApi?.queries?.["career(undefined)"]?.data
  );

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
        <Image className={styles.worldMap} src={worldMap} />
        <div className={styles.aboutContent}>
          {data.map((row, i) => (
            <ReversedAboutUs
              key={i}
              users={row.users}
              about={row.about}
              reversed={i % 2}
              fromCareers={true}
              className={"careers"}
            />
          ))}
        </div>
        <div className={styles.secondInfo}>
          <div className={styles.secondTitle}>{careersJobOpeningApi?.data_text[0].title}</div>
          <div className={styles.secondDescription} dangerouslySetInnerHTML={{ __html: careersJobOpeningApi?.data_text[0].description || "" }} />
        </div>
        <Row>
          <JobsTable data={careersJobOpeningApi?.data_list} setOpenData={setOpenData}/>
        </Row>
        <Row className={styles.weKnowSection}>
          <WhatToKnow
            title="If you haven't found position..."
            description="For further information don't hesitate to contact us. We would be happy to provide you with more information."
            buttonText="Apply Here"
            onClick={() => setOpenData(true)}
          />
        </Row>
        <Row className={styles.contactUsWrapper}>
          <ContactForm />
        </Row>
      </Row>
      <ModalWrapper open={!!openData} width={"66vw"} setOpen={setOpenData}>
        <ModalForm openData={openData}/>
      </ModalWrapper>
    </HomeMainWithImage>
  );
};

export default memo(Careers);
