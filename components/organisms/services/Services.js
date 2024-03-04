import { memo } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
// import { Row } from "../../atoms";
import Row from "../../atoms/Row";
import HomeMainWithImage from '../HomeMainWithImage/HomeMainWithImage'
import HomeMain from '../homeMain/HomeMain'
import bgImage from "../../../assets/img/main-bg-services.png";
const WhatToKnow = dynamic(() =>
  import("../../molecules/whatToKnow/WhatToKnow")
);
const ServiceCard = dynamic(() =>
  import("../../molecules/serviceCard/ServiceCard")
);

import styles from "./Services.module.scss";

const Services = () => {
  const router = useRouter();
  const handleClickDiscuss = () => {
    router.push(`/discuss-project`);
  };
  const services = useSelector(
    (state) => state?.servicesApi?.queries?.["services(undefined)"]?.data
  );

  const handleClick = (slug) => {
    router.push(`services/${slug}`);
  };

  return (
    <HomeMainWithImage firstImage={bgImage} seoName="services">
      <>
        <Row className={styles.content}>
          <HomeMain
            h1={true}
            data={{
              title: services?.data_text[0]?.title,
              firstSubtitle: services?.data_text[0]?.description,
            }}
            showMoreButton={true}
            ellipsis
          />

          <Row className={styles.services}>
            {services?.data_list?.map((item, i) => (
              <ServiceCard
                item={item}
                key={i}
                className={styles.serviceCard}
                onClick={() => handleClick(item.slug)}
              />
            ))}
          </Row>
          <Row className={styles.weKnowSection}>
            <WhatToKnow onClick={handleClickDiscuss} />
          </Row>
        </Row>
      </>
    </HomeMainWithImage>
  );
};

export default memo(Services);
