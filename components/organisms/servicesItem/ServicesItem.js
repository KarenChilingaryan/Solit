import { memo } from "react";
import { Paragraph } from "../../atoms";
import Row from "../../atoms/Row";
import HomeMainWithImage from '../HomeMainWithImage/HomeMainWithImage'
import imageBG from "../../../assets/img/career_bg.png"
import { useSelector } from "react-redux";
import ServiceCard from "../../molecules/serviceCard/ServiceCard";

import styles from "./ServicesItem.module.scss";

const ServicesItem = ({ data }) => {
  const servicesData = useSelector(
    (state) => state?.servicesApi?.queries?.["services(undefined)"]?.data
  );
  
  const getRandomValuesFromArray = (arr, numberOfValues) => {
    const copyArr = [...arr];

    for (let i = copyArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copyArr[i], copyArr[j]] = [copyArr[j], copyArr[i]];
    }

    return copyArr.slice(0, numberOfValues);
  }

  return <div className={styles.careerPage}>
    <HomeMainWithImage firstImage={imageBG}>
      <div className={styles.content}>
        <div className={styles.bottomBlock}>
          <h1 className={styles.h1Title}>{data?.html_h1_tag}</h1>
          <div className={styles.blockItemImage} dangerouslySetInnerHTML={{ __html: data?.create_page_service_detail || "" }} />
          <Paragraph className={styles.title}>Explore more</Paragraph>
          <Row className={styles.blockItems}>
            {servicesData?.data_list && getRandomValuesFromArray(servicesData?.data_list, 3)?.map((item, i) =>
              <ServiceCard
                key={i}
                item={item}
                fromDetail={"fromDetail"}
              />
            )}
          </Row>
        </div>
      </div>
    </HomeMainWithImage>
  </div>;
};

export default memo(ServicesItem);
