import { memo } from "react";
import { HomeMain } from "../homeMain";
import { HomeMainWithImage } from "../HomeMainWithImage";
import bgImage from "../../../assets/img/main-bg.png";
import impactIcon from "../../../assets/img/u_adjust-circle.svg";
import aboutImage from "../../../assets/img/about-image.png";
import { Paragraph } from "../../atoms";
import AboutItem from "../../molecules/aboutItem/AboutItem";

import styles from "./AboutPage.module.scss";
import Image from "next/image";
import FactsItem from "../../molecules/factsItem/FactsItem";

const data = [1, 2, 3, 4]
const AboutPage = () => {
  console.log('stex em');
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
          <Paragraph className={styles.title}>Making a global & local impact</Paragraph>
          <div className={styles.impact}>
            {data.map(el => <AboutItem title={'Our Approach'} desc={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal'} icon={impactIcon} />)}
          </div>
          <div className={styles.descriptionBlock}>
            <Paragraph className={styles.title}>About us</Paragraph>
            <Paragraph className={styles.description}>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </Paragraph>
            <Paragraph className={styles.description}>
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </Paragraph>
          </div>
          <Image src={aboutImage} className={styles.aboutImage} />
          <Paragraph className={styles.title}>Quick facts</Paragraph>
          <div className={styles.quickFacts}>
            {data.map(el => <FactsItem title={'Years of experience'} result={10} />)}
          </div>
          <Paragraph className={styles.title}>What we do?</Paragraph>
          <Paragraph className={`${styles.description} ${styles.descriptionMt}`}>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
          </Paragraph>
        </div>
      </>

    </HomeMainWithImage>
  );
};

export default memo(AboutPage);
