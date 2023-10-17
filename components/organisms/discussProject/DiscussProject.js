import { memo, useEffect, useState } from "react";
import { Slider } from "antd";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { HomeMain } from "../homeMain";
import { HomeMainWithImage } from "../HomeMainWithImage";
import bgImage from "../../../assets/img/main-bg-discuss.png";
import { Col, Paragraph, Row, Checkbox, FormItem, Form } from "../../atoms";
import Button from "../../molecules/button/Button";
import Industry from "../../molecules/Industry/Industry";
import StackFooter from "../../molecules/stackFooter/StackFooter";
import PricingModal from "../../molecules/pricingModal/PricingModal";
import ModalWrapper from "../../molecules/Modal/Modal";
import { emailDiscussYourProject1Api } from "../../../services/emailDiscussYourProject1Api";
import SuccessModal from "../successModal/SuccessModal";

import styles from "./DiscussProject.module.scss";

const data = ["Android", "iOS", "Cross-platform"];
const data1 = ["idea", "MVP", "Prototype/Specification"];
const data2 = ["Project manager", "Ui/UX Designer", "Business Analyst"];
const data3 = [
  "eCommers",
  "Finance",
  "Travel & Hospitality",
  "Telecom",
  "Media & Entertainment",
  "Enterprice",
  "Real Estate",
  "Helthcare",
  "iGaming",
  "Logistic",
  "eLerning",
  "Retail",
  "Automotive",
  "Manufacturing",
  "Aviation",
];

const formatter = (value) => `${value} month`;

const DiscussProject = () => {
  const [form] = Form.useForm();
  const [liveStacks, setLiveStacks] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("none");
  const [modalFormData, setModalFormData] = useState(null);
  const [openSuccess, setOpenSuccess] = useState(false)
  const [closeFooterStack, setCloseFooterStack] = useState(false)


  const dispatch = useDispatch();

  const submitForm = (values, fromDelete = false) => {
    const formData = {
      step_one: values.applicationType?.join(" ") || "",
      step_two: values.currentStage?.join(" ") || "",
      step_three: values.consultation?.join(", ") || "",
      step_for: values.industry?.join(", ") || "",
      step_five: values.duration || "",
    };

    setModalFormData(formData);
    if (!fromDelete) {
      setOpen(true);
    }
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
      data.push({
        category: "industry",
        item: consult,
        name: consult,
      });
    });

    projectStacks.duration &&
      data.push({
        category: "duration",
        item: `${projectStacks.duration} months`,
      });

    setLiveStacks(data);
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
    submitForm(form.getFieldsValue(), true);
  };

  useEffect(() => {
    if (form) {
      form.setFieldValue('duration', 1)
    }
  }, [])

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

  const handleButtonClick = (field, item) => {
    const currentValues = form.getFieldsValue();
    let updatedValues = {};

    if (
      field === "applicationType" ||
      field === "currentStage" ||
      field === "consultation"
    ) {
      const isItemSelected = currentValues[field]?.includes(item);
      updatedValues = {
        ...currentValues,
        [field]: isItemSelected
          ? currentValues[field].filter((value) => value !== item)
          : [...(currentValues[field] || []), item],
      };
      form.setFieldsValue(updatedValues, true);
    } else if (field === "industry") {
      const isItemSelected = currentValues[field]?.includes(item);
      updatedValues = {
        ...currentValues,
        [field]: isItemSelected
          ? currentValues[field].filter((value) => value !== item)
          : [...(currentValues[field] || []), item],
      };
      form.setFieldsValue(updatedValues, true);
    } else if (field === "duration") {
      updatedValues = {
        ...currentValues,
        [field]: item,
      };
    }

    getProjectData(updatedValues);

    setSelectedValue(updatedValues.applicationStack || "none");
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    try {
      const res = await dispatch(
        await emailDiscussYourProject1Api.endpoints.email.initiate(formData)
      );
      setOpenSuccess(true)
    } catch {

    }
  };

  return (
    <HomeMainWithImage firstImage={bgImage} seoName="discuss_your_project_1">
      <>
        <SuccessModal open={openSuccess} setOpen={setOpenSuccess} />
        {modalFormData && (
          <ModalWrapper open={open} width={"66.7vw"} setOpen={setOpen} classname="discuss">
            <PricingModal
              data={liveStacks}
              handleDelete={(item) => handleDelete(item)}
              dataForm={modalFormData}
              stackNames={[
                "applicationType",
                "currentStage",
                "consultation",
                "industry",
                "duration",
              ]}
              onSubmit={onSubmit}
            />
          </ModalWrapper>
        )}
        {!open && liveStacks?.length && !closeFooterStack && (
          <StackFooter
            liveStacks={liveStacks}
            handleDelete={(item) => handleDelete(item)}
            onClick={() => submitForm(form.getFieldsValue())}
            onClose={() => { setCloseFooterStack(true) }}
          />
        )}
        <div className={styles.content}>
          <HomeMain
            h1={true}
            data={{
              title: "Get fast response for a fast solution",
            }}
          />
          <Row className={styles.discussProject}>
            <Form
              form={form}
              onFinish={submitForm}
              className={styles.form}
              onValuesChange={handleFormValuesChange}
            >
              <div className={styles.buttons}>
                <Link href="/discuss-project">
                  <Button
                    text="Mobile Application Development"
                    grayTextBtn
                    type="button"
                  />
                </Link>
                <Link href="/discuss-project-stack">
                  <Button text="Team Augmentation" grayTextBtn type="button" />
                </Link>
              </div>
              <Row className={styles.industryDetails}>
                <Row className={styles.industries}>
                  <Paragraph className={styles.title}>
                    1. What type application would you like with Solit?
                  </Paragraph>
                  <FormItem name="applicationType">
                    <Checkbox.Group className={styles.checkboxes}>
                      {data.map((item) => (
                        <Col
                          key={item}
                          onClick={() =>
                            handleButtonClick("applicationType", item)
                          }
                          className={`${styles.clickableOption} ${form
                            .getFieldsValue()
                            .applicationType?.includes(item)
                            ? styles.selected
                            : ""
                            }`}
                        >
                          <Industry value={item} />
                        </Col>
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
                      {data1.map((item) => (
                        <Col
                          key={item}
                          onClick={() =>
                            handleButtonClick("currentStage", item)
                          }
                          className={`${styles.clickableOption} ${form.getFieldsValue().currentStage?.includes(item)
                            ? styles.selected
                            : ""
                            }`}
                        >
                          <Industry value={item} circle />
                        </Col>
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
                    specialists below?
                  </Paragraph>
                  <FormItem name="consultation">
                    <Checkbox.Group className={styles.checkboxes}>
                      {data2.map((item) => (
                        <Col
                          key={item}
                          onClick={() =>
                            handleButtonClick("consultation", item)
                          }
                          className={`${styles.clickableOption} ${form.getFieldsValue().consultation?.includes(item)
                            ? styles.selected
                            : ""
                            }`}
                        >
                          <Industry value={item} fullWidth />
                        </Col>
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
                      {data3.map((item) => (
                        <Col
                          key={item}
                          onClick={() => handleButtonClick("industry", item)}
                          className={`${styles.clickableOption} ${form.getFieldsValue().industry?.includes(item)
                            ? styles.selected
                            : ""
                            }`}
                        >
                          <Industry value={item} circle />
                        </Col>
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
                    <Slider min={0} defaultValue={1} max={24} tooltip={{ formatter }} />
                  </FormItem>
                  <Row className={styles.monthsWrapper}>
                    <Col className={styles.month}>1 month</Col>
                    <Col className={styles.month}>6 months</Col>
                    <Col className={styles.month}>1 year</Col>
                    <Col className={styles.month}>1.5 years</Col>
                    <Col className={styles.month}>2+ years</Col>
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
