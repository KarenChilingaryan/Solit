import { memo } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import styles from "./WhatWeDoItem.module.scss";
import { HomeMainWithImage } from "../HomeMainWithImage";
import { Paragraph, Row } from "../../atoms";
import ImageAndText from "../../molecules/imageAndText/ImageAndText";
import image from "../../../assets/img/careers-detail.png"
import imageBG from "../../../assets/img/career_bg.png"
import AboutItem from "../../molecules/aboutItem/AboutItem";
import impactIcon from "../../../assets/img/u_adjust-circle.svg";


const WhatWeDoComponent = () => {
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
              {[1, 2, 3].map((el, i) =>
                <AboutItem
                  key={i}
                  title={"Our Approach"}
                  desc={
                    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
                  }
                  icon={impactIcon}
                  weDo
                  weDoWidth
                />
              )}
            </Row>
          </div>
        </div>
      </HomeMainWithImage>
    </div>
  );
};
export default memo(WhatWeDoComponent);
