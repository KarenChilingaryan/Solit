import { memo } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Col } from "../../atoms";
import ServiceSmallCard from "../../molecules/serviceSmallCard/ServiceSmallCard";
import HomeMainTexts from "../../molecules/homeMainTexts/HomeMainTexts";
import svg from "../../../assets/img/serviceImg.svg";
import webIcon from "../../../assets/img/webIcon.svg";
import SeoCard from "../../atoms/SEO";
import { seoData } from "../../../constants/seo";

import styles from "./careers.module.scss";

const Careers = () => {
  const router = useRouter();

  const careerTechnologyLongPresentation = useSelector(
    (state) =>
      state?.careerTechnologyLongPresentationApi?.queries?.[
        "careerTechnologyLongPresentation(undefined)"
      ]?.data
  );

  const handleClick = (id) => {
    router.push(`/careers/${id}`);
  };

  return (
    <div className={styles.careerPage}>
      <SeoCard details={seoData} />
      <HomeMainTexts
        result={{
          default_text: "We are looking for best talents!",
          color_text: "looking",
        }}
        style={{ margin: "0 auto" }}
        square
      />
      <Col className={styles.cardSection}>
        {careerTechnologyLongPresentation?.CareersData?.map((el) => (
          <ServiceSmallCard
            key={el}
            icon={el.image || svg}
            title={el.title}
            desc={el.description}
            techIcon={el.logo_image || webIcon}
            onClick={() => handleClick(el.id)}
            path="careers"
          />
        ))}
      </Col>
    </div>
  );
};

export default memo(Careers);
