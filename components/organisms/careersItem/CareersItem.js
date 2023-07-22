import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import styles from "./careersItem.module.scss";
import { HomeMainWithImage } from "../HomeMainWithImage";
import { Paragraph, Row } from "../../atoms";
import ImageAndText from "../../molecules/imageAndText/ImageAndText";
import image from "../../../assets/img/careers-detail.png"
import imageBG from "../../../assets/img/career_bg.png"
import WhatToKnow from "../../molecules/whatToKnow/WhatToKnow";
import { postsCareersJobOpeningApi } from "../../../services/postsCareersJobOpeningApi";


const CareersComponent = () => {
  const { id } = useRouter().query;
  const dispatch = useDispatch();
  const [postsCareersJobOpeningApiData, setPostsCareersJobOpeningApiData] = useState(null)
  const getData = async (id) => {
    const res = await dispatch(await postsCareersJobOpeningApi.endpoints.career.initiate(id));
    setPostsCareersJobOpeningApiData(res.data)
  }
  useEffect(() => {
    if (id) {
      getData(id)
    }
  }, [id])

  return (
    <div className={styles.careerPage}>
      <HomeMainWithImage firstImage={imageBG}>
        <div className={styles.content}>
          <div className={styles.bottomBlock}>
            <div className={styles.secondDescription} dangerouslySetInnerHTML={{ __html: postsCareersJobOpeningApiData?.first_part }} />
            <div className={styles.secondDescription} dangerouslySetInnerHTML={{ __html: postsCareersJobOpeningApiData?.pluses }} />
            <div className={styles.secondDescription} dangerouslySetInnerHTML={{ __html: postsCareersJobOpeningApiData?.requirements }} />
            <div className={styles.secondDescription} dangerouslySetInnerHTML={{ __html: postsCareersJobOpeningApiData?.responsibilities }} />
            <div className={styles.secondDescription} dangerouslySetInnerHTML={{ __html: postsCareersJobOpeningApiData?.last_part }} />
            
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
