import { memo } from "react";
import { HomeMain } from "../homeMain";
import { HomeMainWithImage } from "../HomeMainWithImage";
import bgImage from "../../../assets/img/main-bg.png";
import aboutImage from "../../../assets/img/about-image.png";
import { Col, Paragraph, Row } from "../../atoms";
import Button from "../../molecules/button/Button";
import Industry from "../../molecules/Industry/Industry";
import { Slider } from "antd";

import styles from "./DiscussProject.module.scss";

const data = [1, 2, 3, 4];
const data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55];

const formatter = (value) => `${value} month`;

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
              <Button text="Mobile Application Development" grayTextBtn />
              <Button text="Team Augmentation" grayTextBtn />
            </Row>
            <Row className={styles.industryDetails}>
              <Row className={styles.industries}>
                <Paragraph className={styles.title}>
                  1. What type application would you like with Solit?
                </Paragraph>
                <Row className={styles.checkboxes}>
                  {data.map((item) => (
                    <Industry key={item} />
                  ))}
                </Row>
                <Button text="clear" clear />
              </Row>
              <Row className={styles.industries}>
                <Paragraph className={styles.title}>
                  2. What type application would you like with Solit?
                </Paragraph>
                <Row className={styles.checkboxes}>
                  {data.map((item) => (
                    <Industry key={item} circle />
                  ))}
                </Row>
                <Button text="clear" clear />
              </Row>
              <Row className={styles.industries}>
                <Paragraph className={styles.title}>
                  3. What type application would you like with Solit?
                </Paragraph>
                <Row className={styles.checkboxes}>
                  {data.map((item) => (
                    <Industry fullWidth key={item} />
                  ))}
                </Row>
                <Button text="clear" clear />
              </Row>
              <Row className={styles.industries}>
                <Paragraph className={styles.title}>
                  4. What type application would you like with Solit?
                </Paragraph>
                <Row className={styles.checkboxes}>
                  {data1.map((item) => (
                    <Industry key={item} circle />
                  ))}
                </Row>
                <Button text="clear" clear />
              </Row>
              <Row className={styles.industries}>
                <Paragraph className={styles.title}>
                  5. What is the expected duration of your project?
                </Paragraph>
                <Slider min={0} max={24} tooltip={{ formatter }} />
                <Row className={styles.monthsWrapper}>
                  <Col className={styles.month}>1 month</Col>
                  <Col className={styles.month}>6 month</Col>
                  <Col className={styles.month}>1 year</Col>
                  <Col className={styles.month}>1.5 year</Col>
                  <Col className={styles.month}>2+ year</Col>
                </Row>
                <Button text="clear" clear />
              </Row>
            </Row>
          </Row>
        </div>
      </>
    </HomeMainWithImage>
  );
};

export default memo(DiscussProject);
