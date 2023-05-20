import { memo } from "react";
import { HomeMain } from "../homeMain";
import { HomeMainWithImage } from "../HomeMainWithImage";
import bgImage from "../../../assets/img/main-bg.png";
import aboutImage from "../../../assets/img/about-image.png";
import { Col, Paragraph, Row, Checkbox } from "../../atoms";
import { Slider } from "antd";
import Button from "../../molecules/button/Button";
import Industry from "../../molecules/Industry/Industry";
import AddSpecialist from "../../molecules/AddSpecialist/AddSpecialist";

import styles from "./DiscussProjectStack.module.scss";

const data = [1, 2, 3, 4];
const data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55];

const stacks = [
  {
    name: "Front end",
    data: ["field1", "field2", "field3", "field4", "field5"],
  },
  {
    name: "Backend",
    data: ["field1", "field2 field2", "field3", "field4", "field5", "field6"],
  },
  {
    name: "Database",
    data: ["field1", "field2", "field3 field3", "field4"],
  },
  {
    name: "Mobile",
    data: [
      "field1",
      "field2",
      "field3",
      "field4",
      "field5",
      "field6 field6",
      "field7",
      "field8",
    ],
  },
];

const stacks1 = [
  {
    data: ["field1", "field2", "field3", "field4", "field5"],
  },
  {
    data: ["field1", "iOS Native", "field3", "field4", "field5", "field6"],
  },
  {
    data: [
      "field1",
      " Android Native",
      "field3",
      "field4",
      "field5",
      "field6 field6",
      "field7",
      "field8",
    ],
  },
];

const formatter = (value) => `${value} month`;

const DiscussProjectStack = () => {
  console.log("stex em");
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
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
            <Row className={styles.buttons}>
              <Button text="Mobile Application Development" grayTextBtn />
              <Button text="Team Augmentation" grayTextBtn />
            </Row>
            <Row className={styles.industryDetails}>
              <Row className={styles.industries}>
                <Paragraph className={styles.title}>
                  1.Specify the tech stack and the number of developers you need
                  per each technology?
                </Paragraph>
                <Row onChange={onChange} className={styles.stackWrapper}>
                  {stacks.map((item) => (
                    <Col key={item.name} className={styles.stacks}>
                      <Paragraph className={styles.stackName}>
                        {item?.name}
                      </Paragraph>
                      {item?.data?.map((item) => (
                        <AddSpecialist name={item} key={item} />
                      ))}
                    </Col>
                  ))}
                </Row>
                <Button text="clear" clear />
              </Row>
              <Row className={styles.industries}>
                <Paragraph className={styles.title}>
                  2. Extra specialist to add to the team:
                </Paragraph>
                <Row onChange={onChange} className={styles.specialistWrapper}>
                  {stacks1?.map((item) => (
                    <Col key={item.name} className={styles.stacks}>
                      {item?.data?.map((item) => (
                        <AddSpecialist name={item} key={item} />
                      ))}
                    </Col>
                  ))}
                </Row>
                <Button text="clear" clear />
              </Row>
              <Row className={styles.industries}>
                <Paragraph className={styles.title}>
                  4. What is the expected duration of your project?
                </Paragraph>
                <Checkbox.Group
                  onChange={onChange}
                  className={styles.checkboxes}
                >
                  {data1.map((item) => (
                    <Industry value={item} key={item} circle />
                  ))}
                </Checkbox.Group>
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
            <Button text="Get Pricing" transparentOpposite />
          </Row>
        </div>
      </>
    </HomeMainWithImage>
  );
};

export default memo(DiscussProjectStack);
