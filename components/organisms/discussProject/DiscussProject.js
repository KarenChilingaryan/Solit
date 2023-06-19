import { memo } from "react";
import { HomeMain } from "../homeMain";
import { HomeMainWithImage } from "../HomeMainWithImage";
import bgImage from "../../../assets/img/main-bg.png";
import aboutImage from "../../../assets/img/about-image.png";
import { Col, Paragraph, Row, Checkbox, FormItem, Form } from "../../atoms";
import Button from "../../molecules/button/Button";
import Industry from "../../molecules/Industry/Industry";
import { Slider } from "antd";

import styles from "./DiscussProject.module.scss";

const data = ["field1", "field2", "field3", "field4"];
const data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55];

const formatter = (value) => `${value} month`;

const DiscussProject = () => {
  const [form] = Form.useForm();

  const submitForm = (values) => {
    console.log(values, "99999999");
  };
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
            <Form form={form} onFinish={submitForm} className={styles.form}>
              <Row className={styles.buttons}>
                <Button text="Mobile Application Development" grayTextBtn />
                <Button text="Team Augmentation" grayTextBtn />
              </Row>
              <Row className={styles.industryDetails}>
                <Row className={styles.industries}>
                  <Paragraph className={styles.title}>
                    1. What type application would you like with Solit?
                  </Paragraph>
                  <FormItem name="applicationType">
                    <Checkbox.Group className={styles.checkboxes}>
                      {data.map((item) => (
                        <Industry value={item} key={item} />
                      ))}
                    </Checkbox.Group>
                  </FormItem>
                  <Button text="clear" clear />
                </Row>
                <Row className={styles.industries}>
                  <Paragraph className={styles.title}>
                    2. What is the current stage of your software development
                    process?
                  </Paragraph>
                  <FormItem name="currentStage">
                    <Checkbox.Group className={styles.checkboxes}>
                      {data.map((item) => (
                        <Industry value={item} key={item} circle />
                      ))}
                    </Checkbox.Group>
                  </FormItem>
                  <Button text="clear" clear />
                </Row>
                <Row className={styles.industries}>
                  <Paragraph className={styles.title}>
                    3. Do you need a professional consultation from any of the
                    specialist below?
                  </Paragraph>
                  <FormItem name="consultation">
                    <Checkbox.Group className={styles.checkboxes}>
                      {data.map((item) => (
                        <Industry value={item} fullWidth key={item} />
                      ))}
                    </Checkbox.Group>
                  </FormItem>
                  <Button text="clear" clear />
                </Row>
                <Row className={styles.industries}>
                  <Paragraph className={styles.title}>
                    4. Please specify your business industry
                  </Paragraph>
                  <FormItem name="industry">
                    <Checkbox.Group className={styles.checkboxes}>
                      {data1.map((item) => (
                        <Industry value={item} key={item} circle />
                      ))}
                    </Checkbox.Group>
                  </FormItem>
                  <Button text="clear" clear />
                </Row>
                <Row className={styles.industries}>
                  <Paragraph className={styles.title}>
                    5. What is the expected duration of your project?
                  </Paragraph>
                  <FormItem name="duration">
                    <Slider min={0} max={24} tooltip={{ formatter }} />
                  </FormItem>
                  <Row className={styles.monthsWrapper}>
                    <Col className={styles.month}>1 month</Col>
                    <Col className={styles.month}>6 month</Col>
                    <Col className={styles.month}>1 year</Col>
                    <Col className={styles.month}>1.5 year</Col>
                    <Col className={styles.month}>2+ year</Col>
                  </Row>
                  <Button text="clear" clear />
                </Row>
                <Button text="Get Pricing" transparentOpposite type="submit" />
              </Row>
            </Form>
          </Row>
        </div>
      </>
    </HomeMainWithImage>
  );
};

export default memo(DiscussProject);
