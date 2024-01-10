import { memo, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { HomeMain } from "../homeMain";
import { HomeMainWithImage } from "../HomeMainWithImage";
import bgImage from "../../../assets/img/main-bg-about.png";
import aboutImage from "../../../assets/img/about-image.png";
import { Paragraph } from "../../atoms";
import AboutItem from "../../molecules/aboutItem/AboutItem";
import FactsItem from "../../molecules/factsItem/FactsItem";
import WhatWeDo from "../../molecules/whatWeDo/WhatWeDo";
import WhatToKnow from "../../molecules/whatToKnow/WhatToKnow";
import { CompanyOfExperts } from "../CompanyOfExperts";

import styles from "./AboutPage.module.scss";

const AboutPage = () => {
  const [data, setData] = useState([]);
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/discuss-project`);
  };

  const handleClickDiscuss = () => {
    router.push(`/discuss-project`);
  };

  const aboutApi = useSelector(
    (state) => state?.aboutApi?.queries?.["about(undefined)"]?.data
  );
  const abutUsImpactApi = useSelector(
    (state) => state?.abutUsImpactApi?.queries?.["about(undefined)"]?.data
  );
  const abutQuickFactsApi = useSelector(
    (state) => state?.abutQuickFactsApi?.queries?.["about(undefined)"]?.data
  );
  const abutUsWhatWeDoApi = useSelector(
    (state) => state?.abutUsWhatWeDoApi?.queries?.["about(undefined)"]?.data
  );

  useEffect(() => {
    if (abutQuickFactsApi) {
      setData([
        {
          title: "Years of experience",
          value: abutQuickFactsApi.years_of_experience,
        },
        {
          title: "Experts",
          value: abutQuickFactsApi.experts,
        },
        {
          title: "Successful projects",
          value: abutQuickFactsApi.successful_projects,
        },
        {
          title: "Minutes to respond to a request",
          value: abutQuickFactsApi.minutes_to_respond_to_a_request,
        },
      ]);
    }
  }, [abutQuickFactsApi]);

  return (
    <HomeMainWithImage firstImage={bgImage} seoName="about_as">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.homeMain}>

            {abutUsImpactApi && (
              <HomeMain
                h1={true}
                data={{
                  title: abutUsImpactApi?.data_text[0]?.title,
                  firstSubtitle: abutUsImpactApi?.data_text[0]?.description,
                  buttonText: "Let’s talk",
                }}
                onClick={handleClick}
              />
            )}
          </div>
          <Paragraph className={styles.title}>
            Making a global & local impact
          </Paragraph>
          <div className={styles.impact}>
            {abutUsImpactApi &&
              abutUsImpactApi?.data_list.map((item, i) => (
                <AboutItem
                  key={i}
                  title={item.title}
                  desc={item.description}
                  icon={item.original_icons_impact_we_make}
                />
              ))}
          </div>
          <div className={styles.descriptionBlock}>
            <Paragraph className={styles.title}>
              {(aboutApi && aboutApi[0].title) || ""}
            </Paragraph>
            <div
              dangerouslySetInnerHTML={{
                __html: (aboutApi && aboutApi[0].description) || "",
              }}
              className={styles.description}
            />
          </div>
          <Image src={aboutImage} className={styles.aboutImage} alt="image" />
          <Paragraph className={styles.title}>Quick facts</Paragraph>
          <div className={styles.quickFacts}>
            {data.map((el, i) => (
              <FactsItem key={i} title={el.title} result={el.value} />
            ))}
          </div>

          <WhatWeDo data={abutUsWhatWeDoApi} />
          <WhatToKnow onClick={handleClickDiscuss} />
          <CompanyOfExperts />
        </div>
      </div>
    </HomeMainWithImage>
  );
};

export default memo(AboutPage);
