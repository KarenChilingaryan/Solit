import { memo, useState } from "react";
import Image from "next/image";
import { HomeMain } from "../homeMain";
import { HomeMainWithImage } from "../HomeMainWithImage";
import bgImage from "../../../assets/img/main-bg.png";
import close from "../../../assets/img/icons/closeIcon.svg";
import aboutImage from "../../../assets/img/about-image.png";
import { Col, Paragraph, Row, Checkbox, Form, FormItem } from "../../atoms";
import { Slider } from "antd";
import Button from "../../molecules/button/Button";
import ModalWrapper from "../../molecules/Modal/Modal";
import Industry from "../../molecules/Industry/Industry";
import AddSpecialist from "../../molecules/AddSpecialist/AddSpecialist";

import styles from "./DiscussProjectStack.module.scss";
import PricingModal from "../../molecules/pricingModal/PricingModal";

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

  const submitForm = (values) => {
    setOpen(true);
    console.log(values, "+++++++++++");
  };

  const handleFormValuesChange = (changedValues, allValues, kkk) => {
    console.log("Form values changed:", changedValues);
    console.log("All form values:", allValues);
    console.log(allValues, "<<<<<<<<<<");
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

    projectStacks?.developers?.forEach((developer, index) => {
      data.push({
        category: "developers",
        name: developer.name,
        item: `${developer.name} - ${developer.count}`,
      });
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

    setLiveStacks([...data]);
  }
  console.log(liveStacks, ">>>>>>>>");

  const handleDelete = (item) => {
    let data = form.getFieldsValue();

    if (["developers", "specialists"].includes(item.category)) {
      data[item.category] = data[item.category].filter(
        (elem) => elem.name !== item.name
      );
      projectStacks[item.category] = projectStacks[item.category].filter(
        (elem) => elem.name !== item.name
      );
    } else if (item.category === "industry") {
      data[item.category] = [];
    } else if (item.category === "duration") {
      data[item.category] = undefined;
    }

    form.setFieldsValue(data);
    getProjectData(data);
  };

  return (
    <HomeMainWithImage firstImage={bgImage}>
      <>
        <ModalWrapper open={open} width={"66vw"}>
          <PricingModal />
        </ModalWrapper>
        {liveStacks?.length && (
          <Row className={styles.footer}>
            <Row className={styles.footerContent}>
              <Paragraph className={styles.footerTitle}>
                Summary of your request:
              </Paragraph>
              <Row>
                {liveStacks.map((item) => (
                  <Col key={item} className={styles.itemWrapper}>
                    <Col className={styles.item}>{item.item}</Col>
                    <Image
                      src={close}
                      className={styles.icon}
                      onClick={() => handleDelete(item)}
                    />
                  </Col>
                ))}
              </Row>
            </Row>
          </Row>
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
              <FormItem name="teamType" className={styles.buttons}>
                <Button text="Mobile Application Development" grayTextBtn />
                <Button text="Team Augmentation" grayTextBtn />
              </FormItem>
              <Row className={styles.industryDetails}>
                <Row className={styles.industries}>
                  <Paragraph className={styles.title}>
                    1.Specify the tech stack and the number of developers you
                    need per each technology?
                  </Paragraph>
                  <FormItem name="developers">
                    <Row className={styles.stackWrapper}>
                      {stacks.map((item) => (
                        <Col key={item.name} className={styles.stacks}>
                          <Paragraph className={styles.stackName}>
                            {item?.name}
                          </Paragraph>
                          {item?.data?.map((item) => (
                            <AddSpecialist
                              name={item}
                              onChange={handleFieldChange}
                              field="developers"
                              key={item}
                            />
                          ))}
                        </Col>
                      ))}
                    </Row>
                  </FormItem>
                  <Button text="clear" clear />
                </Row>
                <Row className={styles.industries}>
                  <Paragraph className={styles.title}>
                    2. Extra specialist to add to the team:
                  </Paragraph>
                  <FormItem name="specialists">
                    <Row className={styles.specialistWrapper}>
                      {stacks1?.map((item) => (
                        <Col key={item.name} className={styles.stacks}>
                          {item?.data?.map((item) => (
                            <AddSpecialist
                              name={item}
                              key={item}
                              field="specialists"
                              onChange={handleFieldChange}
                            />
                          ))}
                        </Col>
                      ))}
                    </Row>
                  </FormItem>
                  <Button text="clear" clear />
                </Row>
                <Row className={styles.industries}>
                  <Paragraph className={styles.title}>
                    4. What is the expected duration of your project?
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