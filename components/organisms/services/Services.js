import { memo } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Row } from "../../atoms";
import { HomeMainWithImage } from "../HomeMainWithImage";
import { HomeMain } from "../homeMain";
import bgImage from "../../../assets/img/main-bg-services.png";
import WhatToKnow from "../../molecules/whatToKnow/WhatToKnow";
import ServiceCard from "../../molecules/serviceCard/ServiceCard";

import styles from "./Services.module.scss";

const Services = () => {
  const router = useRouter();
  const handleClickDiscuss = () => {
    router.push(`/discuss-project`);
  };
  const services = useSelector(
    (state) => state?.servicesApi?.queries?.["services(undefined)"]?.data
  );

  const handleClick = (id, slug) => {
    router.push(`services/${id}/${slug}`);
  };

  return (
    <HomeMainWithImage firstImage={bgImage}>
      <>
        <Row className={styles.content}>
          <HomeMain
            data={{
              title: services?.data_text[0]?.title,
              firstSubtitle:
                services?.data_text[0]?.description
            }}
            showMoreButton={true}
            ellipsis
          />

          <Row className={styles.services}>
            {services?.data_list?.map((item, i) => (
              <ServiceCard item={item} key={i} className={styles.serviceCard} onClick={() => handleClick(item.service_detail, item.slug)} />
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
