import { memo, useEffect, useState } from "react";
import { Col, Row } from "../../atoms";
import Image from "next/image";
import { HomeMainWithImage } from "../HomeMainWithImage";
import Button from "../../molecules/button/Button";
import WhatToKnow from "../../molecules/whatToKnow/WhatToKnow";
import JobsTable from "../../molecules/jobsTable/JobsTable";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../contactForm/ContactForm";
import earth from "../../../assets/img/main-bg-careers.png";
import teamMember from "../../../assets/img/teamMember.png";
import worldMap from "../../../assets/img/career-world-pam.png";
import { ReversedAboutUs } from "../reversedAboutUs";
import ModalWrapper from "../../molecules/Modal/Modal";
import ModalForm from "../../molecules/modalForm/ModalForm";
import { emailApplyForJobPositionApi } from "../../../services/emailApplyForJobPositionApi";
import SuccessModal from "../successModal/SuccessModal";

import styles from "./careers.module.scss";

const Careers = () => {
  const [title, setTitle] = useState('')
  const [openSuccess, setOpenSuccess] = useState(false)
  const [openData, setOpenData] = useState(null);
  const [data, setData] = useState([]);
  const dispatch = useDispatch()

  const careersJobOpeningApi = useSelector(
    (state) => state?.careersJobOpeningApi?.queries?.["career(undefined)"]?.data
  );
  const postsTextCareersAboutUsApi = useSelector(
    (state) => state?.postsTextCareersAboutUsApi?.queries?.["careersAbout(undefined)"]?.data
  );
  const postsTextCareersColourfulApi = useSelector(
    (state) => state?.postsTextCareersColourfulApi?.queries?.["careersAbout(undefined)"]?.data
  );

  // const handleClick = (id) => {
  //   router.push(`/careers/${id}`);
  // };
  useEffect(() => {
    if (postsTextCareersAboutUsApi) {

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
            description: postsTextCareersAboutUsApi.about_us
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
            description: postsTextCareersAboutUsApi.our_team
          },
        },
      ];
      setData(data)
    }
  }, [postsTextCareersAboutUsApi])

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    try {
      const res = await dispatch(
        await emailApplyForJobPositionApi.endpoints.email.initiate(formData)
      );
      setOpenSuccess(true)
    } catch {

    }
  }

  return (
    <HomeMainWithImage firstImage={earth} setTitle={setTitle} seoName="careers">
      <SuccessModal open={openSuccess} setOpen={setOpenSuccess} />
      <Row className={styles.content}>
        <Row className={styles.pageHeader}>
          <h1 className={styles.title} style={{ margin: 0 }}>{title}</h1>
          <Row className={styles.subTitle}>
            <Col>{postsTextCareersColourfulApi?.default_text?.replace(postsTextCareersColourfulApi.painted_text, '')}</Col>
            <Col>{postsTextCareersColourfulApi?.painted_text}</Col>
          </Row>
          <Row className={styles.info}>
            {postsTextCareersColourfulApi?.description}
          </Row>
          <Button text="Recommended" transparentOpposite />
        </Row>
        <Image className={styles.worldMap} src={worldMap} alt="image" />
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
          <JobsTable data={careersJobOpeningApi?.data_list} setOpenData={setOpenData} />
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
        <ModalForm data={openData} from={'apply'} onSubmit={onSubmit} />
      </ModalWrapper>
    </HomeMainWithImage>
  );
};

export default memo(Careers);
