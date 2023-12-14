import { memo, useEffect, useState } from "react";
import { Col, Row } from "../../atoms";
import Image from "next/image";
import { HomeMainWithImage } from "../HomeMainWithImage";
import WhatToKnow from "../../molecules/whatToKnow/WhatToKnow";
import JobsTable from "../../molecules/jobsTable/JobsTable";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../contactForm/ContactForm";
import user1 from "../../../assets/img/revers1.png";
import user2 from "../../../assets/img/revers2.png";
import user3 from "../../../assets/img/revers3.png";
import user4 from "../../../assets/img/revers4.png";
import worldMap from "../../../assets/img/career-world-pam.png";
import { ReversedAboutUs } from "../reversedAboutUs";
import ModalWrapper from "../../molecules/Modal/Modal";
import { emailApplyForJobPositionApi } from "../../../services/emailApplyForJobPositionApi";
import SuccessModal from "../successModal/SuccessModal";
import ModalApplyNowForm from "../../molecules/ApplyNow/ApplyNowModal";

import styles from "./careers.module.scss";

const Careers = () => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openData, setOpenData] = useState(null);
  const [data, setData] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const [top, setTop] = useState(0);
  const [isSafari, setIsSafari] = useState(0);
  const [isError, setIsError] = useState();

  const careersJobOpeningApi = useSelector(
    (state) => state?.careersJobOpeningApi?.queries?.["career(undefined)"]?.data
  );
  const postsTextCareersAboutUsApi = useSelector(
    (state) =>
      state?.postsTextCareersAboutUsApi?.queries?.["careersAbout(undefined)"]
        ?.data
  );
  const postsTextCareersColourfulApi = useSelector(
    (state) =>
      state?.postsTextCareersColourfulApi?.queries?.["careersAbout(undefined)"]
        ?.data
  );

  useEffect(() => {
    if (postsTextCareersAboutUsApi) {
      const data = [
        {
          users: [
            {
              name: "Marvel Alina ",
              position: "UX/UI Designer",
              image: user2,
            },
            {
              name: "Marvel Alina ",
              position: "UX/UI Designer",
              image: user4,
            },
          ],
          about: {
            title: "About us",
            description: postsTextCareersAboutUsApi.about_us,
          },
        },
        {
          users: [
            {
              name: "Marvel Alina ",
              position: "UX/UI Designer",
              image: user1,
            },
            {
              name: "Marvel Alina ",
              position: "UX/UI Designer",
              image: user3,
            },
          ],
          about: {
            title: "Our Team",
            description: postsTextCareersAboutUsApi.our_team,
          },
        },
      ];
      setData(data);
    }
  }, [postsTextCareersAboutUsApi]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    try {
      const res = await dispatch(
        await emailApplyForJobPositionApi.endpoints.email.initiate(formData)
      );
      setOpenSuccess(true);
      setOpenData(null);
      setIsError(res.isError);
      setTimeout(() => {
        setOpenSuccess(false);
        setClose();
      }, 3000);
    } catch {}
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const next = document.getElementById("__next");
    if (!!openData) {
      setTop(window.scrollY);
      next.style.top = `-${window.scrollY}px`;
      next.style.width = `100%`;
      next.style.position = `fixed`;
    }
  }, [openData]);

  const setClose = () => {
    const next = document.getElementById("__next");
    next.style.top = `-${window.scrollY}px`;
    next.style.width = `100%`;
    if (next.style.position == "fixed") {
      next.style.position = `inherit`;
    }
    if (top) {
      window.scrollTo(0, top);
    }
    setTop(0);
  };

  const win = typeof window != "undefined";
  useEffect(() => {
    if (win) {
      setIsSafari(navigator.userAgent.indexOf("Safari"));
      setChecked(true);
    }
  }, [win]);

  const smoothScroll = (targetElement, duration) => {
    const targetPosition = targetElement.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) {
        startTime = currentTime;
      }
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  };

  useEffect(() => {
    if ((checked && postsTextCareersColourfulApi, careersJobOpeningApi)) {
      if (localStorage.getItem("fromJob")) {
        setTimeout(() => {
          const doc = document.getElementById("to-jobs");
          if (doc) {
            smoothScroll(doc, 1000);
            localStorage.removeItem("fromJob");
          }
        }, 500);
      }
    }
  }, [checked, postsTextCareersColourfulApi, careersJobOpeningApi]);

  return (
    <HomeMainWithImage
      firstImage={
        "https://djnago-solit-static.s3.amazonaws.com/media/CACHE/images/images/converted_image_DRbxvv3/5912883b228f99df98543797ea56d711.webp"
      }
      seoName="careers"
    >
      <SuccessModal
        open={openSuccess}
        setOpen={(e) => {
          setClose();
          setOpenSuccess(e);
        }}
        success={!isError}
      />
      <Row className={styles.content}>
        <Row className={styles.pageHeader}>
          <h1 className={styles.title} style={{ margin: 0 }}>
            {postsTextCareersColourfulApi?.title}
          </h1>
          <Row className={styles.subTitle}>
            <Col>
              {postsTextCareersColourfulApi?.default_text?.replace(
                postsTextCareersColourfulApi.painted_text,
                ""
              )}
            </Col>
            <Col>{postsTextCareersColourfulApi?.painted_text}</Col>
          </Row>
          <Row className={styles.info}>
            {postsTextCareersColourfulApi?.description}
          </Row>
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
              last={i == data.length - 1}
            />
          ))}
        </div>
        {checked ? <div id="to-jobs"></div> : <></>}
        <div className={styles.secondInfo}>
          <div className={styles.secondTitle}>
            {careersJobOpeningApi?.data_text[0].title}
          </div>
          <div
            className={styles.secondDescription}
            dangerouslySetInnerHTML={{
              __html: careersJobOpeningApi?.data_text[0].description || "",
            }}
          />
        </div>
        <Row className={styles.jobTable}>
          <JobsTable
            data={careersJobOpeningApi?.data_list}
            setOpenData={setOpenData}
          />
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
          <ContactForm career={true} />
        </Row>
      </Row>
      {!!openData && (
        <ModalWrapper
          classname={"modalApplyNowForm"}
          open={!!openData}
          width={
            isMobile <= 1024 && isMobile > 576
              ? "52vw"
              : isMobile > 1024 && isMobile <= 1440
              ? "37vw"
              : "28vw"
          }
          setOpen={(e) => {
            setClose();
            setOpenData(e);
          }}
        >
          <ModalApplyNowForm data={openData} onSubmit={onSubmit} />
        </ModalWrapper>
      )}
    </HomeMainWithImage>
  );
};

export default memo(Careers);
