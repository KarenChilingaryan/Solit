import { memo, useState } from "react";
import { HomeMain } from "../homeMain";
import { HomeMainWithImage } from "../HomeMainWithImage";
import bgImage from "../../../assets/img/main-bg.png";
import { Col, Paragraph, Row, Checkbox, Form, FormItem } from "../../atoms";
import { Slider } from "antd";
import Button from "../../molecules/button/Button";
import ModalWrapper from "../../molecules/Modal/Modal";
import Industry from "../../molecules/Industry/Industry";
import AddSpecialist from "../../molecules/AddSpecialist/AddSpecialist";
import PricingModal from "../../molecules/pricingModal/PricingModal";
import StackFooter from "../../molecules/stackFooter/StackFooter";
import { emailDiscussYourProject2Api } from "../../../services/emailDiscussYourProject2Api";

import styles from "./DiscussProjectStack.module.scss";
import { useDispatch } from "react-redux";

const data = [1, 2, 3, 4];
const data1 = ["Real Estate", 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55];

const stacks = [
  {
    name: "Front end",
    data: ["React.js", "ewewe", "trtrtr", "ytytyty", "uiuiuiu"],
  },
  {
    name: "Backend",
    data: ["zxzxz", "cvcvcvc", "bnbnbn", "nmnmnmnm", "vxvxvx", "vccvcvc"],
  },
  {
    name: "Database",
    data: ["field1", "field2", "field3 field3", "field4"],
  },
  {
    name: "Mobile",
    data: [
      "tttt",
      "tttt2",
      "ttttt3",
      "tttt4",
      "tttt5",
      "ttttt6",
      "ttttt7",
      "ttttt8",
    ],
  },
];

const stacks1 = [
  {
    data: ["UI/UX Designer", "bbb", "cccc", "dddd", "ffff"],
  },
  {
    data: ["qqq", "iOS Native", "wwww", "eeee", "rrrr", "tttt"],
  },
  {
    data: [
      "zzzz",
      " Android Native",
      "ccc",
      "bbb",
      "nnnn",
      "mmmmm",
      "ppp",
      "oooo",
    ],
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
    submitForm(form.getFieldsValue())
  };


  const submitForm = (values) => {
    const formData = {
      step_one: values.developers?.map((dev) => `${dev.name}-${dev.count}`).join(" ") || "",
      step_two: values.specialists?.map((spec) => `${spec.name}-${spec.count}`).join(" ") || "",
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
    const res = await dispatch(
      await emailDiscussYourProject2Api.endpoints.email.initiate(formData)
    );
  }

  return (
    <HomeMainWithImage firstImage={bgImage}>
      <>
        {modalFormData && <ModalWrapper open={open} width={"66vw"} setOpen={setOpen}>
          <PricingModal
            data={liveStacks}
            handleDelete={(item) => handleDelete(item)}
            dataForm={modalFormData}
            stackNames={["industry", "duration", "specialists", "developers"]}
            onSubmit={onSubmit}
          />
        </ModalWrapper>}
        {liveStacks?.length && (
          <StackFooter liveStacks={liveStacks} handleDelete={handleDelete} />
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
              <FormItem name="teamType" className={styles.buttons}>
                <Button
                  text="Mobile Application Development"
                  grayTextBtn
                  type="button"
                />
                <Button text="Team Augmentation" grayTextBtn type="button" />
              </FormItem>
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
