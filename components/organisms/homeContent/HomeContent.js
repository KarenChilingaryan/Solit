import { useState, useEffect } from "react";
import { memo } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";
import { HomeMain } from "../homeMain";
import { HomeMainWithImage } from "../HomeMainWithImage";
import { Col, Paragraph } from "../../atoms";
import { ReversedAboutUs } from "../reversedAboutUs";
import { Technology } from "../Technology";
import { Process } from "../Process";
import { WorldMap } from "../WorldMap";
import ServiceCard from "../../molecules/serviceCard/ServiceCard";
import BorderedText from "../../molecules/borderedText/BorderedText";
import teamMember from "../../../assets/img/teamMember.png";
import group from "../../../assets/img/Group.svg";
import group1 from "../../../assets/img/Group-1.svg";
import group2 from "../../../assets/img/Group-2.svg";
import whatWeDoImage from "../../../assets/img/what-we-do_bg.png";
import ourProjectImage from "../../../assets/img/our-project_bg.png";
import services from "../../../assets/img/services.svg"
import process from "../../../assets/img/process.svg"
import whatWeDo from "../../../assets/img/what-we-do.svg"
import aboutUs from "../../../assets/img/about-us.svg"
import ourProjects from "../../../assets/img/our_projects.svg"
import testimonials from "../../../assets/img/testimonials.svg"
import contacts from "../../../assets/img/contacts.svg"
import technology from "../../../assets/img/technology.svg"

import OurProjectCard from "../../molecules/ourProjectCard/OurProjectCard";
import WeDoCard from "../../molecules/weDoCard/WeDoCard";
import AboutCompany from "../../molecules/aboutCompany/AboutCompany";
import ContactForm from "../contactForm/ContactForm";
import bgImage from "../../../assets/img/main_bg.png";
import MapUser from "../../molecules/mapUser/MapUser";
import Button from "../../molecules/button/Button";

import styles from "./HomeContent.module.scss";

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
  const [activeUser, setActiveUser] = useState(null);
  const [data, setData] = useState([]);

  const router = useRouter();
  const handleClickDiscuss = () => {
    router.push(`/discuss-project`);
  };

  const handleClick = (id) => {
    router.push(`/portfolio/${id}`);
  };

  const win = typeof window;

  const mainInfoData = useSelector(
    (state) => state?.postsApi?.queries?.["posts(undefined)"]?.data
  );

  const postsMainOurProjectsApi = useSelector(
    (state) =>
      state?.postsMainOurProjectsApi?.queries?.["posts(undefined)"]?.data
  );

  const servicesData = useSelector(
    (state) => state?.servicesApi?.queries?.["services(undefined)"]?.data
  );

  const postsMainWhatWeDoTextApi = useSelector(
    (state) =>
      state?.postsMainWhatWeDoTextApi?.queries?.["posts(undefined)"]?.data
  );
  const postsMainContactsTextApi = useSelector(
    (state) =>
      state?.postsMainContactsTextApi?.queries?.["posts(undefined)"]?.data
  );
  const postsTextMainAboutUsApi = useSelector(
    (state) =>
      state?.postsTextMainAboutUsApi?.queries?.["mainAbout(undefined)"]?.data
  );
  const postsWhatWeDoApi = useSelector(
    (state) => state?.postsWhatWeDoApi?.queries?.["posts(undefined)"]?.data
  );
  const postPortfolioApi = useSelector(
    (state) => state?.postPortfolioApi?.queries?.["posts(undefined)"]?.data
  );

  const postTestimonialsApi = useSelector(
    (state) => state?.postTestimonialsApi?.queries?.["posts(undefined)"]?.data
  );

  console.log(postTestimonialsApi, 'postTestimonialsApi');

  useEffect(() => {
    if (postsTextMainAboutUsApi) {
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
            description: postsTextMainAboutUsApi.about_us,
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
            description: postsTextMainAboutUsApi.our_team,
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
            description: postsTextMainAboutUsApi.our_values,
          },
        },
      ];
      setData(data);
    }
  }, [postsTextMainAboutUsApi]);

  useEffect(() => {
    if (postTestimonialsApi) {
      setActiveUser(postTestimonialsApi[0])
    }
  }, [postTestimonialsApi])
  return (
    <HomeMainWithImage firstImage={bgImage}>
      <>
        <div className={styles.content}>
          <HomeMain
            data={{
              title: mainInfoData ? mainInfoData[0]?.title : "",
              firstSubtitle: mainInfoData ? mainInfoData[0]?.description : "",
              buttonText: "Let’s talk",
            }}
            onClick={handleClickDiscuss}
          />
          <div className={styles.servicesMain}>
            <div
              className={`${styles.borderedText} ${styles.borderedTextBottom}`}
            >
              <BorderedText img={services} />
            </div>
            <div className={styles.services}>
              {servicesData &&
                [
                  ...servicesData?.data_list.slice(0, 5),
                  ...(servicesData?.data_list.length > 5 ? ["more"] : []),
                ]?.map((item, i) => (
                  <ServiceCard
                    item={item}
                    key={i}
                    index={i}
                    more={item == "more"}
                  />
                ))}
            </div>
          </div>
          <Col className={styles.servicesMainButton}>
            <Link href={"/discuss-project"}>
              <Button text="Discuss your project" transparentOpposite />
            </Link>
          </Col>
          <div
            className={`${styles.borderedText} ${styles.borderedTextMargin}`}
          >
            <BorderedText img={aboutUs} />
          </div>
        </div>
        <div className={styles.afterAboutContent}>
          <div className={styles.aboutContent}>
            {data.map((row, i) => (
              <ReversedAboutUs
                key={i}
                users={row.users}
                about={row.about}
                reversed={i % 2}
              />
            ))}
          </div>
          <div className={styles.borderedTextWhat}>
            <BorderedText img={process} />
          </div>
          <Process />
          <div className={styles.borderedTextWhat}>
            <BorderedText img={whatWeDo} />

          </div>
          <div className={styles.projectContent}>
            <Image
              src={whatWeDoImage}
              className={`${styles.backImage} ${styles.topBackImage}`}
            />
            <Paragraph className={styles.title}>
              {postsMainWhatWeDoTextApi
                ? postsMainWhatWeDoTextApi[0].title
                : ""}
            </Paragraph>
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{
                __html: postsMainWhatWeDoTextApi
                  ? postsMainWhatWeDoTextApi[0].description
                  : "",
              }}
            />
            {postsWhatWeDoApi &&
              [
                ...postsWhatWeDoApi?.data_list.slice(0, 5),
                ...(postsWhatWeDoApi?.data_list.length <= 5 ? ["more"] : []),
              ]?.map((project, i) => <WeDoCard key={i} item={project} />)}
          </div>
          <div className={styles.technology}>
            <div
              className={`${styles.borderedTextWhat} ${styles.borderedTextProject}`}
            >
              <BorderedText img={technology} />
            </div>
            <Technology />
          </div>

          <div className={styles.projectContent}>
            <div
              className={`${styles.borderedTextWhat} ${styles.borderedTextProject}`}
            >
              <BorderedText img={ourProjects} />
            </div>
            <div>
              <Paragraph className={styles.title}>
                {postsMainOurProjectsApi
                  ? postsMainOurProjectsApi[0]?.title
                  : ""}
              </Paragraph>
              <div
                className={styles.description}
                dangerouslySetInnerHTML={{
                  __html: postsMainOurProjectsApi
                    ? postsMainOurProjectsApi[0]?.description
                    : "",
                }}
              />
            </div>
            <Image
              src={ourProjectImage}
              className={`${styles.backImageSecond} ${styles.backImage}`}
            />
            <div className={styles.ourProjectsCards}>
              {postPortfolioApi &&
                [
                  ...postPortfolioApi?.data_list.slice(0, 7),
                  ...(postPortfolioApi?.data_list.length > 7 ? ["more"] : []),
                ]?.map((project, i) => (
                  <OurProjectCard
                    onClick={() => handleClick(project.id)}
                    key={i}
                    name={project.title}
                    image={project.webp_image_portfolio}
                    more={project == "more"}
                    component="home"
                    images={project?.technology_logos}
                  />
                ))}
            </div>
          </div>
          <div className={styles.aboutCompanyContent}>
            {aboutData.map((about, i) => (
              <AboutCompany
                withOutBG={true}
                key={i}
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
            <BorderedText img={testimonials} />
          </div>
          <div className={styles.mapContainer}>
            <div className={styles.worldMap}> {postTestimonialsApi && <WorldMap data={postTestimonialsApi} setActiveUser={setActiveUser} activeUser={activeUser}/>}</div>
            <div className={styles.worldMapUser}>
              {activeUser && <MapUser user={activeUser} />}
            </div>
          </div>
          <div className={styles.contactBlock}>
            <div
              className={`${styles.borderedTextWhat} ${styles.borderedTextTestimonials}`}
            >
              <BorderedText img={contacts} />
            </div>
            <ContactForm
              data={
                postsMainContactsTextApi ? postsMainContactsTextApi[0] : null
              }
            />
          </div>
          {/* <AboutItem
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
          /> */}
          {/* <WhatWeDo /> */}
        </div>
      </>
      {/* <WhatToKnow /> */}
    </HomeMainWithImage>
  );
};

export default memo(HomeContent);
