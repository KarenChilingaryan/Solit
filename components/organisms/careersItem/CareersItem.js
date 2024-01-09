import { memo, useEffect, useContext, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import ModalWrapper from "../../molecules/Modal/Modal";
import { HomeMainWithImage } from "../HomeMainWithImage";
import { Paragraph, Row, SeoCard } from "../../atoms";
import imageBG from "../../../assets/img/main-bg-career-detail.png";
import copyImage from "../../../assets/img/icons/copy-icon-25.png";
import ModalApplyNowForm from "../../molecules/ApplyNow/ApplyNowModal";
import back from "../../../assets/img/icons/back.svg";
import share from "../../../assets/img/icons/share.svg";
import WhatToKnow from "../../molecules/whatToKnow/WhatToKnow";
import { postsCareersJobOpeningApi } from "../../../services/postsCareersJobOpeningApi";
import SuccessModal from "../../organisms/successModal/SuccessModal";
import { emailApplyForJobPositionApi } from "../../../services/emailApplyForJobPositionApi";
import { BreadcrumbContext } from "../../../utils/hooks/contexts/bredcrumb";
import { websiteUrl } from "../../../utils/hooks/constants/pageUrl";
import {
  LinkedinShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";
import { Modal, Tooltip } from "antd";
import Button from "../../molecules/button/Button";

import styles from "./careersItem.module.scss";

const CareersComponent = () => {
  const { breadcrumbElements, setBreadcrumbElements } =
    useContext(BreadcrumbContext);
  const router = useRouter();
  const { id } = router.query;
  const [openData, setOpenData] = useState(null);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openShareModal, setOpenShareModal] = useState(false);
  const [copy, setCopy] = useState("");
  const [top, setTop] = useState(0);
  const [isError, setIsError] = useState();

  const goBack = () => {
    localStorage.setItem("fromJob", true);
    router.push("/careers");
  };

  const dispatch = useDispatch();
  const [postsCareersJobOpeningApiData, setPostsCareersJobOpeningApiData] =
    useState(null);

  const getData = useCallback(async (id) => {
    const res = await dispatch(
      await postsCareersJobOpeningApi.endpoints.career.initiate(id)
    );
    setPostsCareersJobOpeningApiData(res.data);
  }, []);

  useEffect(() => {
    if (id) {
      getData(id);
    }
  }, [id]);

  const findAndSetData = () => {
    setOpenData({ role: postsCareersJobOpeningApiData?.html_h1_tag });
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
      setOpenData(null);
      setIsError(res.isError);
      setTimeout(() => {
        setOpenSuccess(false);
        setClose();
      }, 3000);
    } catch { }
  };

  useEffect(() => {
    if (postsCareersJobOpeningApiData && breadcrumbElements) {
      const newBred = [...breadcrumbElements?.slice(0, 3)];
      newBred[2] = {
        name: postsCareersJobOpeningApiData.breadcrumb,
        link: "/",
      };
      setBreadcrumbElements(newBred);
    }
  }, [postsCareersJobOpeningApiData, breadcrumbElements, setBreadcrumbElements]);

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

  const socialData = useSelector(
    (state) => state?.footerApi?.queries?.["footer(undefined)"]?.data
  );

  const copyText = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopy("copied!");
    setTimeout(() => {
      setCopy("");
    }, 1000);
  };

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
    next.style.position = `inherit`;
    window.scrollTo(0, top);
    setTop(0);
  };

  return (
    <div className={styles.careerPage}>
      <Modal
        open={openShareModal}
        onCancel={() => setOpenShareModal(false)}
        footer={<></>}
        className="share-careers"
      >
        {socialData && (
          <div className={styles.shareButtons}>
            <div>
              <Paragraph className={styles.title}>
                Share this job position
              </Paragraph>
              <Paragraph className={styles.description}>
                {postsCareersJobOpeningApiData?.html_h1_tag}
              </Paragraph>
            </div>
            <TelegramShareButton url={socialData.contact[2].link}>
              <Button
                transparentBlue
                text="Share on telegram"
                icon={socialData.contact[2].logo}
              />
            </TelegramShareButton>
            <WhatsappShareButton url={socialData.contact[1].link}>
              <Button
                transparentBlue
                text="Share on Whatsapp"
                icon={socialData.contact[1].logo}
              />
            </WhatsappShareButton>
            <LinkedinShareButton url={socialData.contact[0].link}>
              <Button
                transparentBlue
                text="Share on Linkedin"
                icon={socialData.contact[0].logo}
              />
            </LinkedinShareButton>
            <div className={styles.shareLink}>
              {copy && <div className={styles.copyButtonTooltip}>{copy}</div>}
              <Image
                src={copyImage}
                width={20}
                height={20}
                onClick={() => {
                  copyText();
                }}
                alt=""
              />
              {window?.location.href}
            </div>
          </div>
        )}
      </Modal>
      <SeoCard
        details={{
          pageDescription: postsCareersJobOpeningApiData?.meta_description,
          pageKeyWords: postsCareersJobOpeningApiData?.meta_keywords,
          pageUrl: websiteUrl + router.asPath,
          title: postsCareersJobOpeningApiData?.meta_title,
        }}
      />
      <SuccessModal
        open={openSuccess}
        setOpen={(e) => {
          setClose();
          setOpenSuccess(e);
        }}
        success={!isError}
      />
      <HomeMainWithImage firstImage={imageBG}>
        <div className={styles.content}>
          <div className={styles.bottomBlock}>
            <h1 className={styles.h1Title}>
              {postsCareersJobOpeningApiData?.html_h1_tag}
            </h1>
            <div
              className={styles.blockItemImage}
              dangerouslySetInnerHTML={{
                __html: postsCareersJobOpeningApiData?.first_part,
              }}
            />
            <div className={styles.backSection}>
              <div className={styles.back}>
                <span onClick={goBack}>
                  <Image src={back} alt="back" />{" "}
                  <span>{`Back ${isMobile ? "" : "to all jobs"}`}</span>
                </span>
              </div>
              <div
                className={styles.share}
                onClick={() => setOpenShareModal(true)}
              >
                <span>Share</span>
                <Image src={share} alt="share" />
              </div>
            </div>
            <div className={styles.info}>
              <span className={styles.responsibilities}>Responsibilities</span>
              <div
                className={styles.secondDescription}
                dangerouslySetInnerHTML={{
                  __html: postsCareersJobOpeningApiData?.responsibilities,
                }}
              />
            </div>
            <div className={styles.info}>
              <span className={styles.responsibilities}>Requirements</span>
              <div
                className={styles.secondDescription}
                dangerouslySetInnerHTML={{
                  __html: postsCareersJobOpeningApiData?.requirements,
                }}
              />
            </div>
            <div className={styles.info}>
              <span className={styles.responsibilities}>Pluses</span>
              <div
                className={styles.secondDescription}
                dangerouslySetInnerHTML={{
                  __html: postsCareersJobOpeningApiData?.pluses,
                }}
              />
            </div>
            <div
              className={`${styles.secondDescription} ${styles.secondDescriptionLast}`}
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
        {openData && (
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
    </div>
  );
};
export default memo(CareersComponent);
