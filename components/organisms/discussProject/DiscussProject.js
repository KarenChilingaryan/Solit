import { memo } from "react";
import Image from "next/image";
import { HomeMain } from "../homeMain";
import { HomeMainWithImage } from "../HomeMainWithImage";
import bgImage from "../../../assets/img/main-bg.png";
import aboutImage from "../../../assets/img/about-image.png";
import { Paragraph, Row } from "../../atoms";
import Button from "../../molecules/button/Button";
import Industry from "../../molecules/Industry/Industry";

import styles from "./DiscussProject.module.scss";

const data = [1, 2, 3, 4];

const DiscussProject = () => {
  console.log("stex em");
  return (
    <HomeMainWithImage firstImage={bgImage}>
      <>
        <div className={styles.content}>
          <HomeMain
            data={{
              title: "Get fast response to for a fast solution",
            }}
          />
          <Row className={styles.discussProject}>
            <Row className={styles.buttons}>
              <Button text="Mobile Application Development" />
              <Button text="Team Augmentation" />
            </Row>
            <Row className={styles.industryDetails}>
              <Row className={styles.industries}>
                <Paragraph className={styles.title}>
                  1. What type application would you like with Solit?
                </Paragraph>
                <Row>
                  {data.map((item) => (
                    <Industry key={item} />
                  ))}
                </Row>
                <Button text="clear" />
              </Row>
              <Row className={styles.industries}>
                <Paragraph className={styles.title}>
                  2. What type application would you like with Solit?
                </Paragraph>
                <Row>
                  {data.map((item) => (
                    <Industry key={item} />
                  ))}
                </Row>
                <Button text="clear" />
              </Row>
              <Row className={styles.industries}>
                <Paragraph className={styles.title}>
                  3. What type application would you like with Solit?
                </Paragraph>
                <Row>
                  {data.map((item) => (
                    <Industry fullWidth key={item} />
                  ))}
                </Row>
                <Button text="clear" />
              </Row>
              <Row className={styles.industries}>
                <Paragraph className={styles.title}>
                  4. What type application would you like with Solit?
                </Paragraph>
                <Row>
                  {data.map((item) => (
                    <Industry key={item} />
                  ))}
                </Row>
                <Button text="clear" />
              </Row>
            </Row>
          </Row>
        </div>
      </>
    </HomeMainWithImage>
  );
};

export default memo(DiscussProject);
