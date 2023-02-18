import Image from "next/image";
import { memo } from "react";
import { useSelector } from "react-redux";
import bgImage from "../../../assets/img/main_bg.png"
import linkedin from "../../../assets/img/icons/u_linkedin-alt.svg"
import telegram from "../../../assets/img/icons/u_telegram-alt.svg"
import whatsapp from "../../../assets/img/icons/u_whatsapp-alt.svg"
import { HomeMain } from "../homeMain";
import { Paragraph } from "../../atoms";
import ServiceCard from "../../molecules/serviceCard/ServiceCard";
import TeamMemberCard from "../../molecules/teamMemberCard/TeamMemberCard";
import BorderedText from "../../molecules/borderedText/BorderedText";
import TitleWithDescription from "../../molecules/titleWithDescription/TitleWithDescription";
import teamMember from "../../../assets/img/teamMember.png";
import styles from "./HomeMainWithImage.module.scss";
import { ReversedAboutUs } from "../reversedAboutUs";

const data = [
  {
    users: [
      {
        name: 'Marvel Alina ',
        position: 'UX/UI Designer',
        image: teamMember
      },
      {
        name: 'Marvel Alina ',
        position: 'UX/UI Designer',
        image: teamMember
      },
    ],
    about: {
      title: 'About us',
      description: 'It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal'
    }
  },
  {
    users: [
      {
        name: 'Marvel Alina ',
        position: 'UX/UI Designer',
        image: teamMember
      },
      {
        name: 'Marvel Alina ',
        position: 'UX/UI Designer',
        image: teamMember
      },
    ],
    about: {
      title: 'Our Team',
      description: 'It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal'
    }
  },
  {
    users: [
      {
        name: 'Marvel Alina ',
        position: 'UX/UI Designer',
        image: teamMember
      },
      {
        name: 'Marvel Alina ',
        position: 'UX/UI Designer',
        image: teamMember
      },
    ],
    about: {
      title: 'Our Values',
      description: 'It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal'
    }
  }
]

const services = [1, 2, 3, 4, 5, 6]
const HomeMainWithImage = () => {

  const mainInfoData = useSelector(
    (state) => state?.postsApi?.queries?.["posts(undefined)"]?.data
  );

  return (
    <div>
      <div className={styles.socialSites}>
        <div className={styles.site}>
          <Image src={linkedin} className={styles.image} />
          <Paragraph className={styles.text}>Linkedin</Paragraph>
        </div>
        <div className={styles.site}>
          <Image src={telegram} className={styles.image} />
          <Paragraph className={styles.text}>Telegram</Paragraph>
        </div>
        <div className={styles.site}>
          <Image src={whatsapp} className={styles.image} />
          <Paragraph className={styles.text}>Whatsapp</Paragraph>
        </div>
      </div>
      <Image src={bgImage} style={{
        width: '100%',
        height: 'auto',
        position: 'absolute',
        top: 0,
      }} />
      <div className={styles.content}>
        <HomeMain
          data={{
            title: "Your partner for software innovations",
            firstSubtitle: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            secondSubtitle: "The point of using Lorem Ipsum is that it has a more-or-less normal",
            buttonText: "Let’s talk"
          }}
        />
        <div className={styles.servicesMain}>
          <div className={`${styles.borderedText} ${styles.borderedTextBottom}`}>

            <BorderedText text='Services' />
          </div>
          <div className={styles.services}>
            {services.map(() =>
              <ServiceCard />
            )}
          </div>
        </div>
        <div className={`${styles.borderedText} ${styles.borderedTextMargin}`}>
          <BorderedText text='About us' />
        </div>
      </div>
      <div className={styles.afterAboutContent}>
        <div className={styles.aboutContent}>

          {
            data.map((row, index) =>

              <ReversedAboutUs users={row.users} about={row.about} reversed={index % 2} />
            )
          }
        </div>
        <div className={styles.borderedTextWhat}>
          <BorderedText text='What we do' />
        </div>
      </div>
    </div>
  );
};

export default memo(HomeMainWithImage);
