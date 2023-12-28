import { useState, useEffect, memo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Col, Paragraph } from "../../atoms";
import { HomeMainWithImage } from "../HomeMainWithImage";
import { HomeMain } from "../homeMain";
import { ReversedAboutUs } from "../reversedAboutUs";
import { Technology } from "../Technology";
import { Process } from "../Process";
import { WorldMap } from "../WorldMap";

const ServiceCard = dynamic(() =>
  import("../../molecules/serviceCard/ServiceCard")
);
const BorderedText = dynamic(
  () => import("../../molecules/borderedText/BorderedText"),
  { ssr: false }
);
const MapUser = dynamic(() => import("../../molecules/mapUser/MapUser"), {
  ssr: false,
});
const Button = dynamic(() => import("../../molecules/button/Button"));
const OurProjectCard = dynamic(
  () => import("../../molecules/ourProjectCard/OurProjectCard"),
  { ssr: false }
);
const WeDoCard = dynamic(() => import("../../molecules/weDoCard/WeDoCard"), {
  ssr: false,
});
const AboutCompany = dynamic(() =>
  import("../../molecules/aboutCompany/AboutCompany")
);
const ContactForm = dynamic(() => import("../contactForm/ContactForm"), {
  ssr: false,
});

// import ServiceCard from "../../molecules/serviceCard/ServiceCard";
// import BorderedText from "../../molecules/borderedText/BorderedText";
// import MapUser from "../../molecules/mapUser/MapUser";
// import Button from "../../molecules/button/Button";
// import OurProjectCard from "../../molecules/ourProjectCard/OurProjectCard";
// import WeDoCard from "../../molecules/weDoCard/WeDoCard";
// import AboutCompany from "../../molecules/aboutCompany/AboutCompany";
// import ContactForm from "../contactForm/ContactForm";
import ourProjectImage from "../../../assets/img/our-project_bg.png";
import services from "../../../assets/img/services.svg";
import process from "../../../assets/img/process.svg";
import whatWeDo from "../../../assets/img/what-we-do.svg";
import aboutUs from "../../../assets/img/about-us.svg";
import ourProjects from "../../../assets/img/our_projects.svg";
import testimonials from "../../../assets/img/testimonials.svg";
import contacts from "../../../assets/img/contacts.svg";
import technology from "../../../assets/img/technology.svg";

import styles from "./HomeContent.module.scss";

const HomeContent = () => {
  const [activeUser, setActiveUser] = useState(null);
  const [data, setData] = useState([]);

  const router = useRouter();
  const handleClickDiscuss = () => {
    router.push(`/discuss-project`);
  };

  const handleClick = (slug) => {
    router.push(`/portfolio/${slug ? slug : ""}`);
  };

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

  const abutUsCompanyOfExpertsApi = useSelector(
    (state) =>
      state?.abutUsCompanyOfExpertsApi?.queries?.["about(undefined)"]?.data
  );
  const [windowWidth, setWindowWidth] = useState(0);
  const win = typeof window != "undefined";
  useEffect(() => {
    if (win) {
      setWindowWidth(window.innerWidth);
    }
  }, [win]);

  useEffect(() => {
    if (postsTextMainAboutUsApi) {
      const data = [
        {
          users: [
            {
              name: "",
              position: "",
              image:
                "https://djnago-solit-static.s3.amazonaws.com/media/CACHE/images/images/converted_image_T9mVlfy/bfe163750d160f367f419de8defec605.webp",
            },
            {
              name: "",
              position: "",
              image:
                "https://djnago-solit-static.s3.amazonaws.com/media/CACHE/images/images/converted_image_6CIr84m/f6151c816a15b29d1936fb7d3c40ad07.webp",
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
              name: "",
              position: "",
              image:
                "https://djnago-solit-static.s3.amazonaws.com/media/CACHE/images/images/converted_image_7LeBq5Y/df536f6c6cb91853f0285b5b3a998fcf.webp",
            },
            {
              name: "",
              position: "",
              image:
                "https://djnago-solit-static.s3.amazonaws.com/media/CACHE/images/images/converted_image_PMHlzHC/797c0ce2d36e54c97afc1a2d5b8389f3.webp",
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
              name: "",
              position: "",
              image:
                "https://djnago-solit-static.s3.amazonaws.com/media/CACHE/images/images/converted_image_35D1sa9/f0df76f443ec52346dcbfaa0030d24b5.webp",
            },
            {
              name: "",
              position: "",
              image:
                "https://djnago-solit-static.s3.amazonaws.com/media/CACHE/images/images/converted_image_35D1sa9/f0df76f443ec52346dcbfaa0030d24b5.webp",
              more: true,
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
      setActiveUser(postTestimonialsApi[0]);
    }
  }, [postTestimonialsApi]);

  const changeTo = (name, active) => {
    for (let i = 0; i < postTestimonialsApi.length; i++) {
      const element = postTestimonialsApi[i];
      if (element.id == active.id && name == "next") {
        if (i + 1 == postTestimonialsApi.length) {
          setActiveUser(postTestimonialsApi[0]);
        } else {
          setActiveUser(postTestimonialsApi[i + 1]);
        }
        break;
      } else if (element.id == active.id && name == "prev") {
        if (i == 0) {
          setActiveUser(postTestimonialsApi[postTestimonialsApi.length - 1]);
        } else {
          setActiveUser(postTestimonialsApi[i - 1]);
        }
        break;
      }
    }
  };

  return (
    <HomeMainWithImage
      firstImage={
        "https://djnago-solit-static.s3.amazonaws.com/media/CACHE/images/images/converted_image_cIYJOYx/a37f8744bbc1ccf790c213849c8f6079.webp"
      }
      seoName="main"
    >
      <>
        <div className={styles.content}>
          <HomeMain
            h1={true}
            data={{
              title: mainInfoData && mainInfoData[0]?.title,
              firstSubtitle: mainInfoData && mainInfoData[0]?.description,
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
            <Button
              text="Discuss your project"
              transparentOpposite
              onClick={() => router.push("/discuss-project")}
            />
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
          <div
            className={`${styles.borderedTextWhat} ${styles.borderedTextWhatTop}`}
          >
            <BorderedText img={whatWeDo} />
          </div>
          <div className={styles.projectContent}>
            <Image
              src={
                "https://djnago-solit-static.s3.amazonaws.com/media/CACHE/images/images/converted_image_Co2AOTl/15e3f62bc7a8ac88d251df66d27fda59.webp"
              }
              className={`${styles.backImage} ${styles.topBackImage}`}
              alt="image"
              width={windowWidth || 1920}
              height={windowWidth || 1920}
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
              alt="image"
            />
            <div className={styles.ourProjectsCards}>
              {postPortfolioApi &&
                [
                  ...postPortfolioApi?.data_list.slice(0, 7),
                  ...(postPortfolioApi?.data_list.length > 7 ? ["more"] : []),
                ]?.map((project, i) => (
                  <OurProjectCard
                    onClick={() => handleClick(project.slug)}
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
            {abutUsCompanyOfExpertsApi?.map((about, i) => (
              <AboutCompany
                key={i}
                number={about.rating_number}
                title={about.rating_text}
                image={about.original_logo_company_of_expert}
                withOutBG={true}
              />
            ))}
          </div>
          <div
            className={`${styles.borderedTextWhat} ${styles.borderedTextTestimonials}`}
          >
            <BorderedText img={testimonials} />
          </div>
          <div className={styles.mapContainer}>
            <div className={styles.worldMap}>
              {postTestimonialsApi && activeUser && (
                <WorldMap
                  data={postTestimonialsApi}
                  setActiveUser={setActiveUser}
                  activeUser={activeUser}
                />
              )}
            </div>
            <div className={styles.worldMapUser}>
              {activeUser && (
                <MapUser
                  user={activeUser}
                  changeTo={(name) => changeTo(name, activeUser)}
                />
              )}
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
        </div>
      </>
    </HomeMainWithImage>
  );
};

export default memo(HomeContent);
