import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { Slider } from "antd";
import { HomeMain } from "../homeMain";
import { HomeMainWithImage } from "../HomeMainWithImage";
import { Col, Paragraph, Row, Checkbox, Form, FormItem } from "../../atoms";
import { emailDiscussYourProject2Api } from "../../../services/emailDiscussYourProject2Api";
import Button from "../../molecules/button/Button";
import ModalWrapper from "../../molecules/Modal/Modal";
import Industry from "../../molecules/Industry/Industry";
import AddSpecialist from "../../molecules/AddSpecialist/AddSpecialist";
import PricingModal from "../../molecules/pricingModal/PricingModal";
import StackFooter from "../../molecules/stackFooter/StackFooter";
import bgImage from "../../../assets/img/main-bg-discuss-stack.png";
import SuccessModal from "../successModal/SuccessModal";

import styles from "./DiscussProjectStack.module.scss";

const data1 = [
  "eCommerce",
  "Finance",
  "Travel & Hospitality",
  "Telecom",
  "Media & Entertainment",
  "Enterprise",
  "Real Estate",
  "Healthcare",
  "iGaming",
  "Logistic",
  "eLearning",
  "Retail",
  "Automotive",
  "Manufacturing",
  "Aviation",
  "Other",
];

const stacks = [
  {
    name: "Mobile",
    data: [
      "Android native",
      "iOS native",
      "React native",
      "Flutter",
      "Xamarin",
      "Ionic",
    ],
  },
  {
    name: "Backend",
    data: ["Python", "Node.js", "Java", "PHP"],
  },
];

const stacks1 = [
  {
    data: ["Project manager", "UI/UX designer"],
  },
  {
    data: ["Business analyst", "DevOps engineer"],
  },
  {
    data: ["QA automation engineer"],
  },
];

const formatter = (value) => `${value} month`;

const DiscussProjectStack = () => {
  const [form] = Form.useForm();
  const [projectStacks, setProjectStacks] = useState({
    developers: [],
    specialists: [],
  });
  const [liveStacks, setLiveStacks] = useState([]);
  const [open, setOpen] = useState(false);
  const [modalFormData, setModalFormData] = useState(null);
  const [openSuccess, setOpenSuccess] = useState(false);

  const dispatch = useDispatch();
  const handleFormValuesChange = (changedValues, allValues, kkk) => {
    getProjectData(allValues);
  };

  const handleFieldChange = (field, name, value) => {
    const updatedValues = [...projectStacks[field]];
    const index = updatedValues.findIndex((item) => item.name === name);
    if (value === 0) {
      if (index !== -1) {
        updatedValues.splice(index, 1);
      }
    } else {
      if (index !== -1) {
        updatedValues[index].count = value;
      } else {
        updatedValues.push({ name, count: value });
      }
    }
    setProjectStacks({ ...projectStacks, [field]: updatedValues });
    form.setFieldsValue({ [field]: updatedValues });
    getProjectData(form.getFieldsValue());
  };

  function getProjectData(projectStacks) {
    const data = [];

    const developers = [];
    projectStacks?.developers?.forEach((developer, index) => {
      data.push({
        category: "developers",
        name: developer.name,
        item: `${developer.name} - ${developer.count}`,
      });
      developers.push(developer);
    });

    projectStacks?.specialists?.forEach((specialist, index) => {
      data.push({
        category: "specialists",
        name: specialist.name,
        item: `${specialist.name} - ${specialist.count}`,
      });
    });

    projectStacks?.industry?.length &&
      data.push({ category: "industry", item: `${projectStacks.industry[0]}` });

    projectStacks.duration &&
      data.push({
        category: "duration",
        item: `${projectStacks.duration} months`,
      });

    const newProjectStacks = {
      developers: projectStacks?.developers || [],
      specialists: projectStacks?.specialists || [],
    };
    setProjectStacks(newProjectStacks);
    setLiveStacks([...data]);
  }

  const handleDelete = (item) => {
    const data = { ...form.getFieldsValue() };
    if (["developers", "specialists"].includes(item.category)) {
      if (item?.name) {
        data[item.category] = data[item.category].filter(
          (elem) => elem.name !== item.name
        );
      } else {
        data[item.category] = [];
      }
    } else if (item.category === "industry") {
      data[item.category] = [];
    } else if (item.category === "duration") {
      data[item.category] = undefined;
    }

    form.setFieldsValue(data);
    getProjectData(data);
    submitForm(form.getFieldsValue());
  };

  const submitForm = (values) => {
    const formData = {
      step_one:
        values.developers?.map((dev) => `${dev.name}-${dev.count}`).join(" ") ||
        "",
      step_two:
        values.specialists
          ?.map((spec) => `${spec.name}-${spec.count}`)
          .join(" ") || "",
      step_three: values.industry?.join(", ") || "",
      step_for: values.duration || "",
    };

    setModalFormData(formData);
    setOpen(true);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    try {
      const res = await dispatch(
        await emailDiscussYourProject2Api.endpoints.email.initiate(formData)
      );
      setOpenSuccess(true);
    } catch {}
  };

  return (
    <HomeMainWithImage firstImage={bgImage} seoName="discuss_your_project_2">
      <>
        <SuccessModal open={openSuccess} setOpen={setOpenSuccess} />
        {modalFormData && (
          <ModalWrapper open={open} width={"66vw"} setOpen={setOpen}>
            <PricingModal
              data={liveStacks}
              handleDelete={(item) => handleDelete(item)}
              dataForm={modalFormData}
              stackNames={["industry", "duration", "specialists", "developers"]}
              onSubmit={onSubmit}
            />
          </ModalWrapper>
        )}
        {!open && liveStacks?.length && (
          <StackFooter
            liveStacks={liveStacks}
            handleDelete={handleDelete}
            onClick={() => submitForm(form.getFieldsValue())}
          />
        )}
        <div className={styles.content}>
          <HomeMain
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
                    1. Specify the tech stack and the number of developers you
                    need per each technology?
                  </Paragraph>
                  <FormItem name="developers">
                    <Row className={styles.stackWrapper}>
                      {stacks.map((item, i) => (
                        <Col key={i} className={styles.stacks}>
                          <Paragraph className={styles.stackName}>
                            {item?.name}
                          </Paragraph>
                          {item?.data?.map((item) => (
                            <AddSpecialist
                              liveStacks={liveStacks}
                              key={item}
                              name={item}
                              onChange={handleFieldChange}
                              field="developers"
                            />
                          ))}
                        </Col>
                      ))}
                    </Row>
                  </FormItem>
                  <Button
                    text="Clear"
                    clear
                    onClick={() => handleDelete({ category: "developers" })}
                  />
                </Row>
                <Row className={styles.industries}>
                  <Paragraph className={styles.title}>
                    2. Extra specialists to add to the team:
                  </Paragraph>
                  <FormItem name="specialists">
                    <Row className={styles.specialistWrapper}>
                      {stacks1?.map((item, i) => (
                        <Col key={i} className={styles.stacks}>
                          {item?.data?.map((item) => (
                            <AddSpecialist
                              form={form}
                              key={item}
                              name={item}
                              field="specialists"
                              onChange={handleFieldChange}
                              liveStacks={liveStacks}
                            />
                          ))}
                        </Col>
                      ))}
                    </Row>
                  </FormItem>
                  <Button
                    text="Clear"
                    clear
                    onClick={() => handleDelete({ category: "specialists" })}
                  />
                </Row>
                <Row className={styles.industries}>
                  <Paragraph className={styles.title}>
                    3. Please specify your business industry
                  </Paragraph>
                  <FormItem name="industry">
                    <Checkbox.Group className={styles.checkboxes}>
                      {data1.map((item, i) => (
                        <Industry key={i} value={item} circle />
                      ))}
                    </Checkbox.Group>
                  </FormItem>
                  <Button
                    text="Clear"
                    clear
                    onClick={() => handleDelete({ category: "industry" })}
                  />
                </Row>
                <Row className={styles.industries}>
                  <Paragraph className={styles.title}>
                    4. What is the expected duration of your project?
                  </Paragraph>
                  <FormItem name="duration">
                    <Slider min={0} max={24} tooltip={{ formatter }} />
                  </FormItem>
                  <Row className={styles.monthsWrapper}>
                    <Col className={styles.month}>1 month</Col>
                    <Col className={styles.month}>6 months</Col>
                    <Col className={styles.month}>1 year</Col>
                    <Col className={styles.month}>1.5 years</Col>
                    <Col className={styles.month}>2+ years</Col>
                  </Row>
                  <Button
                    text="Clear"
                    clear
                    onClick={() => handleDelete({ category: "duration" })}
                  />
                </Row>
              </Row>
              <Button text="Get Pricing" transparentOpposite type="submit" />
            </Form>
          </Row>
        </div>
      </>
    </HomeMainWithImage>
  );
};

export default memo(DiscussProjectStack);
