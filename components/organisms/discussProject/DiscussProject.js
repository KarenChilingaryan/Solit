import { memo, useState } from "react";
import { Radio, Slider } from "antd";
import { HomeMain } from "../homeMain";
import { HomeMainWithImage } from "../HomeMainWithImage";
import bgImage from "../../../assets/img/main-bg.png";
import aboutImage from "../../../assets/img/about-image.png";
import { Col, Paragraph, Row, Checkbox, FormItem, Form } from "../../atoms";
import Button from "../../molecules/button/Button";
import Industry from "../../molecules/Industry/Industry";
import StackFooter from "../../molecules/stackFooter/StackFooter";
import PricingModal from "../../molecules/pricingModal/PricingModal";
import ModalWrapper from "../../molecules/Modal/Modal";

import styles from "./DiscussProject.module.scss";

const data = ["field1", "field2", "field3", "field4"];
const data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55];

const formatter = (value) => `${value} month`;

const DiscussProject = () => {
  const [form] = Form.useForm();
  const [liveStacks, setLiveStacks] = useState([]);
  const [open, setOpen] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [selectedValue, setSelectedValue] = useState("none");

  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const submitForm = (values) => {
    setOpen(true);
  };

  const handleFormValuesChange = (changedValues, allValues, kkk) => {
    getProjectData(allValues);
  };

  function getProjectData(projectStacks) {
    const data = [];

    projectStacks?.applicationType?.forEach((type) => {
      data.push({
        category: "applicationType",
        name: type,
        item: type,
      });
    });

    projectStacks?.currentStage?.forEach((stage) => {
      data.push({
        category: "currentStage",
        name: stage,
        item: stage,
      });
    });

    projectStacks?.consultation?.forEach((consult) => {
      data.push({
        category: "consultation",
        name: consult,
        item: consult,
      });
    });

    projectStacks?.industry?.forEach((consult) => {
      data.push({ category: "industry", item: consult, name: consult });
    });
    projectStacks.duration &&
      data.push({
        category: "duration",
        item: `${projectStacks.duration} months`,
      });

    setLiveStacks([...data]);
  }

  const handleDelete = (item) => {
    const updatedStacks = liveStacks.filter(
      (stack) => stack.name !== item.name
    );
    setLiveStacks(updatedStacks);

    const updatedValues = { ...form.getFieldsValue() };

    switch (item.category) {
      case "applicationType":
      case "currentStage":
      case "consultation":
        updatedValues[item.category] = updatedValues[item.category].filter(
          (value) => value !== item.name
        );
        break;
      case "industry":
        updatedValues.industry = updatedValues.industry.filter(
          (value) => value !== item.item
        );
        break;
      case "duration":
        updatedValues.duration = undefined;
        break;
      default:
        break;
    }

    form.setFieldsValue(updatedValues, true);
  };


  const handleClear = (field) => {
    const updatedStacks = liveStacks.filter(
      (stack) => stack.category !== field
    );
    setLiveStacks(updatedStacks);

    const updatedValues = { ...form.getFieldsValue() };

    switch (field) {
      case "applicationType":
      case "currentStage":
      case "consultation":
        updatedValues[field] = [];
        break;
      case "industry":
        updatedValues.industry = [];
        break;
      case "duration":
        updatedValues.duration = undefined;
        break;
      default:
        break;
    }

    form.setFieldsValue(updatedValues, true);
  };
  return (
    <HomeMainWithImage firstImage={bgImage}>
      <>
        <ModalWrapper open={open} width={"66vw"} setOpen={setOpen}>
          <PricingModal
            data={liveStacks}
            handleDelete={(item) => handleDelete(item)}
          />
        </ModalWrapper>
        {liveStacks?.length && (
          <StackFooter
            liveStacks={liveStacks}
            handleDelete={(item) => handleDelete(item)}
          />
        )}
        <div className={styles.content}>
          <HomeMain
            data={{
              title: "Get fast response to for a fast solution",
            }}
          />
          <Row className={styles.discussProject}>
            <Form
              form={form}
              onFinish={submitForm}
              className={styles.form}
              onValuesChange={handleFormValuesChange}
            >
              <FormItem name="applicationStack">
                <Radio.Group
                  buttonStyle="solid"
                  defaultValue={"none"}
                  value={selectedValue}
                  onChange={handleRadioChange}
                  className={styles.buttons}
                >
                  <Radio.Button
                    className={`${styles.grayTextBtn} ${
                      selectedValue === "Mobile Application Development"
                        ? styles.selectedButton
                        : ""
                    }`}
                    value="Mobile Application Development"
                  >
                    Mobile Application Development
                  </Radio.Button>
                  <Radio.Button
                    className={`${styles.grayTextBtn} ${
                      selectedValue === "Team Augmentation"
                        ? styles.selectedButton
                        : ""
                    }`}
                    value="Team Augmentation"
                  >
                    Team Augmentation
                  </Radio.Button>
                </Radio.Group>
              </FormItem>
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
                  <Button
                    text="clear"
                    clear
                    onClick={() => handleClear("applicationType")}
                  />
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
                  <Button
                    text="clear"
                    clear
                    onClick={() => handleClear("currentStage")}
                  />
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
                  <Button
                    text="clear"
                    clear
                    onClick={() => handleClear("consultation")}
                  />
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
                  <Button
                    text="clear"
                    clear
                    onClick={() => handleClear("industry")}
                  />
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
                  <Button
                    text="clear"
                    clear
                    onClick={() => handleClear("duration")}
                  />
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