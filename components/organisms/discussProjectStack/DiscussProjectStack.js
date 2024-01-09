import { memo, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
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
import FloatInput from "../../molecules/floatInput/FloatInput";

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

const formatter = (value) => {
  if (value === 12) {
    return "1 year";
  } else if (value === 18) {
    return "1.5 years";
  } else if (value === 24) {
    return "2 years";
  } else if (value > 24) {
    return "2+ years";
  } else {
    return `${value} months`;
  }
};

const marks = {
  1: "Value for key 1",
  2: "Value for key 2",
  3: "Value for key 3",
  4: "Value for key 4",
  5: "Value for key 5",
  6: "Value for key 6",
  7: "Value for key 7",
  8: "Value for key 8",
  9: "Value for key 9",
  10: "Value for key 10",
  11: "Value for key 11",
  12: "Value for key 12",
  13: "Value for key 13",
  14: "Value for key 14",
  15: "Value for key 15",
  16: "Value for key 16",
  17: "Value for key 17",
  18: "Value for key 18",
  19: "Value for key 19",
  20: "Value for key 20",
  21: "Value for key 21",
  22: "Value for key 22",
  23: "Value for key 23",
  24: "Value for key 24",
};

const DiscussProjectStack = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const { asPath } = router;
  const [industryOther, setIndustryOther] = useState("");
  const [projectStacks, setProjectStacks] = useState({
    developers: [],
    specialists: [],
  });
  const [liveStacks, setLiveStacks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [modalFormData, setModalFormData] = useState(null);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [closeFooterStack, setCloseFooterStack] = useState(false);
  const [isSSR, setIsSSR] = useState(false);
  const [top, setTop] = useState(0);
  const [tooltip, setTooltip] = useState(true);
  const [month, setMonth] = useState(false);
  const [isError, setIsError] = useState();

  const dispatch = useDispatch();
  const handleFormValuesChange = (changedValues, allValues, kkk) => {
    getProjectData(allValues, changedValues?.duration);
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

  const getProjectData = (projectStacks, isMonth = false) => {
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

    if (projectStacks?.industry) {
      for (let i = 0; i < projectStacks?.industry.length; i++) {
        const element = projectStacks?.industry[i];
        data.push({ category: "industry", item: `${element}` });
      }
    }

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
    if (!month && !isMonth) {
      const newData = [];
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (element.category != "duration") newData.push(element);
      }
      setLiveStacks([...newData]);
    } else {
      setLiveStacks([...data]);
    }
  };

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
      if (item.item) {
        data[item.category] = data[item.category].filter(
          (elem) => elem !== item?.item
        );
      } else {
        data[item.category] = [];
      }
    } else if (item.category === "duration") {
      data[item.category] = undefined;
    }

    form.setFieldsValue(data);
    item.category === "duration" && form.setFieldValue("duration", 1);
    item.category === "duration" &&
      (data.duration = undefined) &&
      setMonth(false);
    item.category === "duration" && setMonth(false);
    getProjectData(data);
    submitForm(form.getFieldsValue(), true);
  };
  const handleChange = (category, name, value) => {
    const data = { ...form.getFieldsValue() };
    if (["developers", "specialists"].includes(category)) {
      for (let i = 0; i < data[category].length; i++) {
        if (value == 0) {
          data[category] = data[category].filter((elem) => elem.name !== name);
        } else if (data[category][i].name == name) {
          data[category][i].count = Number(value);
        }
      }
    }

    form.setFieldsValue(data);
    getProjectData(data);
    submitForm(form.getFieldsValue(), true);
  };

  const submitForm = (values, fromDelete = false) => {
    const formData = {
      step_one:
        values.developers
          ?.map((dev) => `${dev.name}-${dev.count}`)
          .join(", ") || "",
      step_two:
        values.specialists
          ?.map((spec) => `${spec.name}-${spec.count}`)
          .join(", ") || "",
      step_three: values.industry?.join(", ") || "",
      step_for: values?.duration ? values?.duration + " month" : "",
    };

    setModalFormData(formData);
    if (!fromDelete) {
      setOpen(true);
    }
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
      setModalFormData(null);
      setLiveStacks([]);
      setOpen(false);
      setIsError(res.isError);
      setTimeout(() => {
        setOpenSuccess(false);
        setClose();
        form.resetFields();
      }, 3000);
      return true;
    } catch { }
  };

  useEffect(() => {
    if (form) {
      form.setFieldValue("duration", 1);
    }
  }, []);

  const handleAdd = () => {
    setModalOpen(true);
  };

  const setValueinForm = (val) => {
    const formData = form.getFieldsValue()?.industry || [];
    const industry = [...formData, val];
    form.setFieldValue("industry", industry);
    getProjectData(form.getFieldsValue());
    setModalOpen(false);
    setIndustryOther("");
  };

  const handleButtonClick = (field, item) => {
    const currentValues = form.getFieldsValue();
    let updatedValues = {};

    if (field === "industry") {
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
  };

  const updateDuration = (state) => {
    const updatedValues = { ...form.getFieldsValue() };
    updatedValues.duration = state;
    form.setFieldsValue(updatedValues, true);
    getProjectData(updatedValues);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        setIsSSR(true);
      }, 1000);
    }
  }, []);

  useEffect(() => {
    const next = document.getElementById("__next");
    if (((modalFormData && open) || modalOpen) && !top) {
      setTop(window.scrollY);
      next.style.top = `-${window.scrollY}px`;
      next.style.width = `100%`;
      next.style.position = `fixed`;
    }
  }, [modalFormData, open, modalOpen, top]);

  const setClose = () => {
    const next = document.getElementById("__next");
    next.style.position = `inherit`;
    window.scrollTo(0, top);
    setTop(0);
    setIsSSR(false);
    setTimeout(() => {
      setIsSSR(true);
    }, 200);
  };
  const handleResize = useCallback(async () => {
    if (tooltip) {
      setTooltip(false);
      const timeout = setTimeout(() => {
        setTooltip(true);
        clearTimeout(timeout);
      }, 200);
    }
  }, [])

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HomeMainWithImage
      firstImage={bgImage}
      seoName="discuss_your_project_2"
      className="discuss"
    >
      {modalOpen && (
        <ModalWrapper
          classname="other-modal"
          open={modalOpen}
          setOpen={() => {
            setClose();
            setModalOpen(false);
            setIndustryOther("");
          }}
          style={styles.modal}
        >
          <Row
            style={{
              marginTop: "3vw",
            }}
          >
            <Form className={styles.form}>
              <FormItem
                rules={[
                  {
                    required: true,
                    message: "industry is required",
                  },
                ]}
                className={styles.industryInput}
              >
                <FloatInput
                  label="Industry"
                  placeholder="Industry"
                  value={industryOther}
                  onChange={(val) => setIndustryOther(val.target.value)}
                  required={true}
                />
              </FormItem>
              <Col className={styles.buttonWrapper}>
                <Button
                  text="Add industry"
                  transparentBlue
                  type="submit"
                  onClick={() => {
                    if (industryOther) {
                      setClose();
                      setValueinForm(industryOther);
                    }
                  }}
                />
              </Col>
            </Form>
          </Row>
        </ModalWrapper>
      )}
      <>
        <SuccessModal
          open={openSuccess}
          setOpen={(e) => {
            setClose();
            setOpenSuccess(e);
          }}
          success={!isError}
        />
        {modalFormData && (
          <ModalWrapper
            open={open}
            width={"66.7vw"}
            setOpen={(e) => {
              setClose();
              setOpen(e);
            }}
            classname="discuss"
          >
            <PricingModal
              data={liveStacks}
              handleDelete={(item) => handleDelete(item)}
              handleChange={handleChange}
              dataForm={modalFormData}
              stackNames={["specialists", "developers"]}
              stackNamesSecond={["industry", "duration"]}
              onSubmit={onSubmit}
              secondCheckBox={true}
            />
          </ModalWrapper>
        )}
        {!open && !modalOpen && liveStacks?.length && !closeFooterStack ? (
          <StackFooter
            liveStacks={liveStacks}
            handleDelete={handleDelete}
            onClick={() => submitForm(form.getFieldsValue())}
            onClose={() => {
              setCloseFooterStack(true);
            }}
          />
        ) : (
          <></>
        )}
        <div className={styles.content}>
          <div className={styles.mainTitle}>
            <HomeMain
              h1={true}
              data={{
                title: "Get fast response to for a fast solution",
              }}
            />
          </div>
          <Row className={styles.discussProject}>
            <Form
              form={form}
              onFinish={submitForm}
              className={styles.form}
              onValuesChange={handleFormValuesChange}
            >
              <div
                className={`${asPath == "/discuss-project-stack" &&
                  styles.currentStageDiscuss
                  } ${styles.buttons}`}
              >
                <Link href="/discuss-project" prefetch={false}>
                  <Button
                    text="Mobile Application Development"
                    grayTextBtn
                    type="button"
                  />
                </Link>
                <Link href="/discuss-project-stack" prefetch={false}>
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
                          {item?.data?.map((item, i) => (
                            <AddSpecialist
                              liveStacks={liveStacks}
                              key={i}
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
                        <Col
                          key={i}
                          onClick={() =>
                            item != "Other" &&
                            handleButtonClick("industry", item)
                          }
                          className={`${styles.clickableOption} ${form.getFieldsValue().consultation?.includes(item)
                              ? styles.selected
                              : ""
                            }`}
                        >
                          <Industry
                            value={item}
                            circle
                            onClick={() => handleAdd("industry")}
                          />
                        </Col>
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
                  <FormItem name="duration" className={styles.slider}>
                    <Slider
                      min={0}
                      defaultValue={1}
                      max={25}
                      onChange={(val) => {
                        setMonth(true);
                        if (val == 0) {
                          form.setFieldValue("duration", 1);
                        }
                      }}
                      tooltip={{
                        formatter,
                        ...(isSSR && tooltip
                          ? { open: true }
                          : { open: false }),
                      }}
                      marks={{
                        1: (
                          <span
                            onClick={() => {
                              setMonth(true);
                              getProjectData(form.getFieldsValue(), true);
                            }}
                          >
                            1 month
                          </span>
                        ),
                        6: (
                          <span
                            onClick={() => {
                              setMonth(true);
                              getProjectData(form.getFieldsValue(), true);
                            }}
                          >
                            6 month
                          </span>
                        ),
                        12: (
                          <span
                            onClick={() => {
                              setMonth(true);
                              getProjectData(form.getFieldsValue(), true);
                            }}
                          >
                            1 year
                          </span>
                        ),
                        18: (
                          <span
                            onClick={() => {
                              setMonth(true);
                              getProjectData(form.getFieldsValue(), true);
                            }}
                          >
                            1.5 year
                          </span>
                        ),
                        24: (
                          <span
                            onClick={() => {
                              setMonth(true);
                              getProjectData(form.getFieldsValue(), true);
                            }}
                          >
                            2 year
                          </span>
                        ),
                      }}
                    />
                  </FormItem>

                  <Button
                    text="Clear"
                    clear
                    onClick={() => {
                      setMonth(false);
                      handleDelete({ category: "duration" });
                    }}
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
