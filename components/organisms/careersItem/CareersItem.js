import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/router";

import { HomeMainWithImage } from "../HomeMainWithImage";
import { Paragraph, Row } from "../../atoms";
import ImageAndText from "../../molecules/imageAndText/ImageAndText";
import image from "../../../assets/img/careers-detail.png";
import imageBG from "../../../assets/img/career_bg.png";
import back from "../../../assets/img/icons/back.svg";
import share from "../../../assets/img/icons/share.svg";
import WhatToKnow from "../../molecules/whatToKnow/WhatToKnow";
import { postsCareersJobOpeningApi } from "../../../services/postsCareersJobOpeningApi";
import ModalForm from "../../molecules/modalForm/ModalForm";
import { Modal } from "antd";

import styles from "./careersItem.module.scss";

const CareersComponent = () => {
  const { id } = useRouter().query;
  const dispatch = useDispatch();
  const [postsCareersJobOpeningApiData, setPostsCareersJobOpeningApiData] =
    useState(null);
  const getData = async (id) => {
    const res = await dispatch(
      await postsCareersJobOpeningApi.endpoints.career.initiate(id)
    );
    setPostsCareersJobOpeningApiData(res.data);
  };
  useEffect(() => {
    if (id) {
      getData(id);
    }
  }, [id]);

  return (
    <div className={styles.careerPage}>
      <HomeMainWithImage firstImage={imageBG}>
        <div className={styles.content}>
          <div className={styles.bottomBlock}>
            <div
              className={styles.secondDescription}
              dangerouslySetInnerHTML={{
                __html: postsCareersJobOpeningApiData?.first_part,
              }}
            />
            <div className={styles.backSection}>
              <div className={styles.back}>
                <Image src={back} alt="back" /> <span>Back to all jobs</span>
              </div>
              <div className={styles.share}>
                <span>Share</span>
                <Image src={share} alt="share" />
              </div>
            </div>
            <div className={styles.info}>
              <span>Responsibilities</span>
              <div
                className={styles.secondDescription}
                dangerouslySetInnerHTML={{
                  __html: postsCareersJobOpeningApiData?.responsibilities,
                }}
              />
            </div>
            <div className={styles.info}>
              <span>requirements</span>
              <div
                className={styles.secondDescription}
                dangerouslySetInnerHTML={{
                  __html: postsCareersJobOpeningApiData?.requirements,
                }}
              />
            </div>
            <div className={styles.info}>
              <span>pluses</span>
              <div
                className={styles.secondDescription}
                dangerouslySetInnerHTML={{
                  __html: postsCareersJobOpeningApiData?.pluses,
                }}
              />
            </div>
            <div
              className={styles.secondDescription}
              dangerouslySetInnerHTML={{
                __html: postsCareersJobOpeningApiData?.last_part,
              }}
            />

            <Row className={styles.blockItems}>
              <WhatToKnow
                title="Apply for this Position"
                description="Please apply directly online and, if applicable, upload your materials as specified on the job posting. Fields marked with a * are required."
                buttonText="Apply Here"
              />
            </Row>
          </div>
        </div>
      </HomeMainWithImage>
    </div>
  );
};
export default memo(CareersComponent);
