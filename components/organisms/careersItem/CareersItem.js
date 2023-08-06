import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/router";
import ModalWrapper from "../../molecules/Modal/Modal";
import { HomeMainWithImage } from "../HomeMainWithImage";
import { Row } from "../../atoms";
import imageBG from "../../../assets/img/main-bg-career-detail.png";
import back from "../../../assets/img/icons/back.svg";
import share from "../../../assets/img/icons/share.svg";
import WhatToKnow from "../../molecules/whatToKnow/WhatToKnow";
import { postsCareersJobOpeningApi } from "../../../services/postsCareersJobOpeningApi";
import ModalForm from "../../molecules/modalForm/ModalForm";
import SuccessModal from "../../organisms/successModal/SuccessModal";
import { emailApplyForJobPositionApi } from "../../../services/emailApplyForJobPositionApi";

import styles from "./careersItem.module.scss";

const CareersComponent = () => {
  const { id } = useRouter().query;
  const [openData, setOpenData] = useState(null)
  const [openSuccess, setOpenSuccess] = useState(false)
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

  const careersJobOpeningApi = useSelector(
    (state) => state?.careersJobOpeningApi?.queries?.["career(undefined)"]?.data
  );

  const findAndSetData = () => {
    const data = careersJobOpeningApi.data_list.find(el => el.current_job_opening_detail == id)
    setOpenData(data)
  }

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
    <div className={styles.careerPage}>
      <SuccessModal open={true} setOpen={setOpenSuccess} />
      <HomeMainWithImage firstImage={imageBG}>
        <div className={styles.content}>
          <div className={styles.bottomBlock}>
            <div
              className={styles.blockItemImage}
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
                onClick={findAndSetData}
              />
            </Row>
          </div>
        </div>
        <ModalWrapper open={!!openData} width={"66vw"} setOpen={setOpenData}>
          <ModalForm openData={openData} fromApply={true} onSubmit={onSubmit} />
        </ModalWrapper>
      </HomeMainWithImage>
    </div>
  );
};
export default memo(CareersComponent);
