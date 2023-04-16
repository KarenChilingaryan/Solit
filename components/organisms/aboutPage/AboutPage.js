import { memo } from "react";
import Image from "next/image";
import { HomeMain } from "../homeMain";
import { HomeMainWithImage } from "../HomeMainWithImage";
import bgImage from "../../../assets/img/main-bg.png";
import impactIcon from "../../../assets/img/u_adjust-circle.svg";
import aboutImage from "../../../assets/img/about-image.png";
import { Paragraph } from "../../atoms";
import AboutItem from "../../molecules/aboutItem/AboutItem";
import FactsItem from "../../molecules/factsItem/FactsItem";
import WhatWeDo from "../../molecules/whatWeDo/WhatWeDo";
import WhatToKnow from "../../molecules/whatToKnow/WhatToKnow";
import AboutCompany from "../../molecules/aboutCompany/AboutCompany";
import { CompanyOfExperts } from "../CompanyOfExperts";

import group from "../../../assets/img/Group.svg";
import group1 from "../../../assets/img/Group-1.svg";
import group2 from "../../../assets/img/Group-2.svg";

import styles from "./AboutPage.module.scss" ;

const data = [1, 2, 3, 4];
const aboutData = [
  {
    number: "4.5",
    title: "RATING OF THE",
    image: group,
    status: "COMPANY",
  },
  {
    number: "100%",
    title: "JOB",
    image: group2,
    status: "SUCCESS",
  },
  {
    number: "5.0",
    title: "RATING OF THE",
    image: group1,
    status: "COMPANY",
  },
];
const AboutPage = () => {
  console.log("stex em");
  return (
    <HomeMainWithImage firstImage={bgImage}>
      <>
        <div className={styles.content}>
          <HomeMain
            data={{
              title: "Where the stars meet",
              firstSubtitle:
                "2023 will be the year of digital transformation for all sectors. Stay on top of your performance with our IT talent!",
              buttonText: "Let’s talk",
            }}
          />
          <Paragraph className={styles.title}>
            Making a global & local impact
          </Paragraph>
          <div className={styles.impact}>
            {data.map((el, i) => (
              <AboutItem
                key={i}
                title={"Our Approach"}
                desc={
                  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"
                }
                icon={impactIcon}
              />
            ))}
          </div>
          <div className={styles.descriptionBlock}>
            <Paragraph className={styles.title}>About us</Paragraph>
            <Paragraph className={styles.description}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et (The
              Extremes of Good and Evil) by Cicero, written in 45 BC. This book
              is a treatise on the theory of ethics, very popular during the
              Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit
              amet.., comes from a line in section 1.10.32.
            </Paragraph>
            <Paragraph className={styles.description}>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from de Finibus Bonorum et Malorumby Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </Paragraph>
          </div>
          <Image src={aboutImage} className={styles.aboutImage} />
          <Paragraph className={styles.title}>Quick facts</Paragraph>
          <div className={styles.quickFacts}>
            {data.map((el, i) => (
              <FactsItem key={i} title={"Years of experience"} result={10} />
            ))}
          </div>

          <WhatWeDo />
          <WhatToKnow />
          <CompanyOfExperts aboutData={aboutData} />
        </div>
      </>
    </HomeMainWithImage>
  );
};

export default memo(AboutPage);
