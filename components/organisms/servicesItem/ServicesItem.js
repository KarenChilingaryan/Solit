import { memo } from "react";
import styles from "./ServicesItem.module.scss";
import { Paragraph, Row } from "../../atoms";
import { HomeMainWithImage } from "../HomeMainWithImage";
import imageBG from "../../../assets/img/career_bg.png"
import { useSelector } from "react-redux";
import ServiceCard from "../../molecules/serviceCard/ServiceCard";

const ServicesItem = ({ data }) => {
  const servicesData = useSelector(
    (state) => state?.servicesApi?.queries?.["services(undefined)"]?.data
  );
  return <div className={styles.careerPage}>
    <HomeMainWithImage firstImage={imageBG}>
      <div className={styles.content}>
        <div className={styles.bottomBlock}>
          <div className={styles.blockItemImage} dangerouslySetInnerHTML={{ __html: data?.create_page_service_detail || "" }} />
          <Paragraph className={styles.title}>Explore more</Paragraph>
          <Row className={styles.blockItems}>
            {servicesData?.data_list.slice(0, 3)?.map((item, i) =>
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
