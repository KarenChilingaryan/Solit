import { memo } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import styles from "./careersItem.module.scss";
import { HomeMainWithImage } from "../HomeMainWithImage";
import { Paragraph, Row } from "../../atoms";
import ImageAndText from "../../molecules/imageAndText/ImageAndText";
import image from "../../../assets/img/careers-detail.png"
import imageBG from "../../../assets/img/career_bg.png"


const CareersComponent = () => {
  const { id } = useRouter().query;
  const careerTechnologyItem = useSelector(
    (state) =>
      state?.careerTechnologyItemApi?.queries?.[`careerTechnologyItem("${id}")`]
        ?.data
  );

  return (
    <div className={styles.careerPage}>
      <HomeMainWithImage firstImage={imageBG}>
        <div className={styles.content}>
          <div className={styles.bottomBlock}>

            <Paragraph className={styles.title}>Explore more</Paragraph>
            <Row className={styles.blockItems}>
              {[1, 2, 3].map((el, index) =>
                <ImageAndText key={index} image={image} text={'How to build an AI assistant for your business or yourself'} />
              )}
            </Row>
          </div>
        </div>
      </HomeMainWithImage>
    </div>
  );
};
export default memo(CareersComponent);
