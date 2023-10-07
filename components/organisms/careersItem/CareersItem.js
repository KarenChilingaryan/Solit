import { memo, useEffect, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import ModalWrapper from "../../molecules/Modal/Modal";
import { HomeMainWithImage } from "../HomeMainWithImage";
import { Row, SeoCard } from "../../atoms";
import imageBG from "../../../assets/img/main-bg-career-detail.png";
import back from "../../../assets/img/icons/back.svg";
import share from "../../../assets/img/icons/share.svg";
import WhatToKnow from "../../molecules/whatToKnow/WhatToKnow";
import { postsCareersJobOpeningApi } from "../../../services/postsCareersJobOpeningApi";
import ModalForm from "../../molecules/modalForm/ModalForm";
import SuccessModal from "../../organisms/successModal/SuccessModal";
import { emailApplyForJobPositionApi } from "../../../services/emailApplyForJobPositionApi";
import { BreadcrumbContext } from "../../../utils/hooks/contexts/bredcrumb";
import { websiteUrl } from "../../../utils/hooks/constants/pageUrl";

import styles from "./careersItem.module.scss";

const CareersComponent = () => {
  const { breadcrumbElements, setBreadcrumbElements } = useContext(BreadcrumbContext);
  const router = useRouter()
  const { id } = router.query;
  const [openData, setOpenData] = useState(null);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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
    const data = careersJobOpeningApi.data_list.find(
      (el) => el.current_job_opening_detail == id
    );
    setOpenData(data);
  };

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
    } catch { }
  };

  useEffect(() => {
    if (postsCareersJobOpeningApiData && breadcrumbElements) {
      const newBred = [...breadcrumbElements?.slice(0, 3)]
      newBred[2] = { name: postsCareersJobOpeningApiData.breadcrumb, link: '/' };
      setBreadcrumbElements(newBred)
    }
  }, [postsCareersJobOpeningApiData])


  const handleResize = () => {
    setIsMobile(window.innerWidth <= 576); // Adjust the threshold as per your requirements
  };

  // Add event listener for window resize
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.careerPage}>
      <SeoCard
        details={
          {
            pageDescription: postsCareersJobOpeningApiData?.meta_description,
            pageKeyWords: postsCareersJobOpeningApiData?.meta_keywords,
            pageUrl: websiteUrl + router.asPath,
            title: postsCareersJobOpeningApiData?.meta_title,
          }
        }
      />
      <SuccessModal open={openSuccess} setOpen={setOpenSuccess} />
      <HomeMainWithImage firstImage={imageBG}>
        <div className={styles.content}>
          <div className={styles.bottomBlock}>
            <h1 className={styles.h1Title}>{postsCareersJobOpeningApiData?.html_h1_tag}</h1>
            <div
              className={styles.blockItemImage}
              dangerouslySetInnerHTML={{
                __html: postsCareersJobOpeningApiData?.first_part,
              }}
            />
            <div className={styles.backSection}>
              <div className={styles.back}>
                <Link href="/blog">
                  <Image src={back} alt="back" /> <span>{`Back ${isMobile ? '' : 'to all jobs'}`}</span>
                </Link>
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
          <ModalForm openData={openData} from={"apply"} onSubmit={onSubmit} />
        </ModalWrapper>
      </HomeMainWithImage>
    </div>
  );
};
export default memo(CareersComponent);
