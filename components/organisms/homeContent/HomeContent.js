import Image from "next/image";
import { memo } from "react";
import { HomeMain } from "../homeMain";
import ServiceCard from "../../molecules/serviceCard/ServiceCard";
import BorderedText from "../../molecules/borderedText/BorderedText";
import teamMember from "../../../assets/img/teamMember.png";
import group from "../../../assets/img/Group.svg";
import group1 from "../../../assets/img/Group-1.svg";
import group2 from "../../../assets/img/Group-2.svg";
import whatWeDoImage from "../../../assets/img/what-we-do_bg.png";
import ourProjectImage from "../../../assets/img/our-project_bg.png";
import ourPtojectImage from "../../../assets/img/unsplash_oXS1f0uZYV4.png";
import { ReversedAboutUs } from "../reversedAboutUs";
import OurProjectCard from "../../molecules/ourProjectCard/OurProjectCard";
import WeDoCard from "../../molecules/weDoCard/WeDoCard";
import AboutCompany from "../../molecules/aboutCompany/AboutCompany";
import ContactForm from "../contactForm/ContactForm";
import AboutItem from "../../molecules/aboutItem/AboutItem";
import FactsItem from "../../molecules/factsItem/FactsItem";
import { AboutTeam } from "../aboutTeam";
import bgImage from "../../../assets/img/main_bg.png";
import reactSvg from "../../../assets/img/icons/react.svg";
import { WorldMap } from "../WorldMap";
import MapUser from "../../molecules/mapUser/MapUser";
import { Technology } from "../Technology";
import { Process } from "../Process";
import { HomeMainWithImage } from "../HomeMainWithImage";

import styles from "./HomeContent.module.scss";
import { useState } from "react";
import { useEffect } from "react";
import WhatWeDo from "../../molecules/whatWeDo/WhatWeDo";
import WhatToKnow from "../../molecules/whatToKnow/WhatToKnow";
const data = [
  {
    users: [
      {
        name: "Marvel Alina ",
        position: "UX/UI Designer",
        image: teamMember,
      },
      {
        name: "Marvel Alina ",
        position: "UX/UI Designer",
        image: teamMember,
      },
    ],
    about: {
      title: "About us",
      description:
        "It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    },
  },
  {
    users: [
      {
        name: "Marvel Alina ",
        position: "UX/UI Designer",
        image: teamMember,
      },
      {
        name: "Marvel Alina ",
        position: "UX/UI Designer",
        image: teamMember,
      },
    ],
    about: {
      title: "Our Team",
      description:
        "It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    },
  },
  {
    users: [
      {
        name: "Marvel Alina ",
        position: "UX/UI Designer",
        image: teamMember,
      },
      {
        name: "Marvel Alina ",
        position: "UX/UI Designer",
        image: teamMember,
      },
    ],
    about: {
      title: "Our Values",
      description:
        "It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    },
  },
];
const dataProject = [
  "Last Order",
  "First Order",
  "Forest Predictions",
  "The Rebellion",
  "Marketing Cleanup",
  "Sarfin Inc.",
  "Pear Computers",
  "more",
];

const services = [1, 2, 3, 4, 5, 6];
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

const HomeContent = () => {
  const [isSSR, setIsSSR] = useState(false);

  const win = typeof window;

  useEffect(() => {
    if (win) {
      setIsSSR(true);
    }
  }, [win]);
  return (
    <HomeMainWithImage firstImage={bgImage}>
      <>
        <div className={styles.content}>
          <HomeMain
            data={{
              title: "Your partner for software innovations",
              firstSubtitle:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
              secondSubtitle:
                "The point of using Lorem Ipsum is that it has a more-or-less normal",
              buttonText: "Let’s talk",
            }}
          />
          <div className={styles.servicesMain}>
            <div
              className={`${styles.borderedText} ${styles.borderedTextBottom}`}
            >
              <BorderedText text="Services" />
            </div>
            <div className={styles.services}>
              {services.map(() => (
                <ServiceCard />
              ))}
            </div>
            {/* <WeDoCard />Karennn */}
          </div>
          <div
            className={`${styles.borderedText} ${styles.borderedTextMargin}`}
          >
            <BorderedText text="About us" />
          </div>
        </div>
        <div className={styles.afterAboutContent}>
          <div className={styles.aboutContent}>
            {data.map((row, index) => (
              <ReversedAboutUs
                users={row.users}
                about={row.about}
                reversed={index % 2}
              />
            ))}
          </div>
          <div className={styles.borderedTextWhat}>
            <BorderedText text="Process" />
          </div>
          <Process />
          <div className={styles.borderedTextWhat}>
            <BorderedText text="What we do" />
          </div>
          <div className={styles.projectContent}>
            <Image
              src={whatWeDoImage}
              className={`${styles.backImage} ${styles.topBackImage}`}
            />
            {services.map((project) => (
              <WeDoCard />
            ))}
          </div>
          <div className={styles.technology}>
            <div
              className={`${styles.borderedTextWhat} ${styles.borderedTextProject}`}
            >
              <BorderedText text="Technology" />
            </div>
            <Technology />
          </div>

          <div className={styles.projectContent}>
            <div
              className={`${styles.borderedTextWhat} ${styles.borderedTextProject}`}
            >
              <BorderedText text="Our Projects" />
            </div>
            <Image src={ourProjectImage} className={styles.backImage} />
            {dataProject.map((project) => (
              <OurProjectCard
                name={project}
                image={ourPtojectImage}
                more={project == "more"}
              />
            ))}
          </div>
          <div className={styles.aboutCompanyContent}>
            {aboutData.map((about) => (
              <AboutCompany
                number={about.number}
                title={about.title}
                image={about.image}
                status={about.status}
              />
            ))}
          </div>
          <div
            className={`${styles.borderedTextWhat} ${styles.borderedTextTestimonials}`}
          >
            <BorderedText text="Testimonials" />
          </div>
          <div className={styles.mapContainer}>
            <div className={styles.worldMap}>{isSSR && <WorldMap />}</div>
            <div className={styles.worldMapUser}>
              <MapUser />
            </div>
          </div>
          <div
            className={`${styles.borderedTextWhat} ${styles.borderedTextTestimonials}`}
          >
            <BorderedText text="Contacts" />
          </div>
          <ContactForm />
          <AboutItem
            title={"Our Approach"}
            desc={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"
            }
            icon={reactSvg}
          />
          <FactsItem title={"Years of experience"} result="16" />
          <AboutTeam
            icon={reactSvg}
            description={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"
            }
            title={"Our Android Developers"}
          />
          <WhatWeDo />
        </div>
      </>
      <WhatToKnow/>
    </HomeMainWithImage>
  );
};

export default memo(HomeContent);
