import { memo, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
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
import FloatInput from "../../molecules/floatInput/FloatInput";

import styles from "./DiscussProject.module.scss";

const data = ["Android", "iOS", "Cross-platform"];
const data1 = ["idea", "MVP", "Prototype Specification"];
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
  "Other",
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

const DiscussProject = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const { asPath } = router;
  const [liveStacks, setLiveStacks] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("none");
  const [modalFormData, setModalFormData] = useState(null);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [closeFooterStack, setCloseFooterStack] = useState(false);
  const [modalOpen, setModalOpen] = useState("");
  const [otherValue, setOtherValue] = useState("");
  const [isSSR, setIsSSR] = useState(false);
  const [top, setTop] = useState(0);
  const [tooltip, setTooltip] = useState(true);
  const [month, setMonth] = useState(false);
  const [isError, setIsError] = useState();
  const dispatch = useDispatch();

  const submitForm = (values, fromDelete = false) => {
    const formData = {
      step_one: values.applicationType?.join(", ") || "",
      step_two: values.currentStage?.join(", ") || "",
      step_three: values.consultation?.join(", ") || "",
      step_for: values.industry?.join(", ") || "",
      step_five: values?.duration ? values?.duration + " month" : "",
    };

    setModalFormData(formData);
    if (!fromDelete) {
      setOpen(true);
    }
  };
  const [prevWidth, setPrevWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const handleResize = useCallback(async () => {
    if (typeof window !== "undefined") {
      const currentWidth = window.innerWidth;

      if (currentWidth !== prevWidth) {
        setTooltip(false);

        const timeout = setTimeout(() => {
          setTooltip(true);
        }, 200);

        setPrevWidth(currentWidth);

        return () => clearTimeout(timeout);
      }
    }
  }, [prevWidth]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [prevWidth, handleResize]);

  const handleFormValuesChange = (changedValues, allValues, kkk) => {
    getProjectData(allValues);
  };

  function getProjectData(projectStacks, isMonth = false) {
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
        item:
          projectStacks.duration > 24
            ? `2+ years`
            : `${projectStacks.duration} months`,
      });

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
        form.setFieldValue("duration", 1);
        updatedValues.duration = 1;
        setMonth(false);
        break;
      default:
        break;
    }

    form.setFieldsValue(updatedValues, true);
    submitForm(form.getFieldsValue(), true);
  };

  useEffect(() => {
    if (form) {
      form.setFieldValue("duration", 1);
    }
  }, []);

  const handleClear = (field) => {
    const updatedStacks = liveStacks.filter(
      (stack) => stack.category !== field
    );
    console.log(liveStacks);
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
        updatedValues.duration = 1;
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

    if (!month) {
      updatedValues["duration"] = undefined;
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
      setIsError(res.isError);
      setOpenSuccess(true);
      setTimeout(() => {
        setOpenSuccess(false);
        setClose();
        form.resetFields();
      }, 3000);
      setModalFormData(null);
      setOpen(false);
      setLiveStacks([]);
      return true;
    } catch {}
  };

  const setValueinForm = (val) => {
    const formData = form.getFieldsValue()[modalOpen] || [];
    const other = [...formData, val];
    form.setFieldValue(modalOpen, other);
    getProjectData(form.getFieldsValue());
    setModalOpen("");
    setOtherValue("");
  };

  const handleAdd = (name) => {
    setModalOpen(name);
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
  }, [modalFormData, open, modalOpen]);

  const setClose = () => {
    const next = document.getElementById("__next");
    next.style.position = `inherit`;
    window.scrollTo(0, top);
    setTop(0);
  };

  return (
    <HomeMainWithImage
      firstImage={bgImage}
      seoName="discuss_your_project_1"
      className="discuss"
    >
      <>
        {modalOpen && (
          <ModalWrapper
            classname="other-modal"
            open={modalOpen}
            setOpen={() => {
              setClose();
              setModalOpen("");
              setOtherValue("");
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
                    value={otherValue}
                    onChange={(val) => setOtherValue(val.target.value)}
                    required={true}
                  />
                </FormItem>
                <Col className={styles.buttonWrapper}>
                  <Button
                    text="Add industry"
                    transparentBlue
                    type="submit"
                    onClick={() => {
                      if (otherValue) {
                        setClose();
                        setValueinForm(otherValue);
                      }
                    }}
                  />
                </Col>
              </Form>
            </Row>
          </ModalWrapper>
        )}
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
        {!open && !modalOpen && liveStacks?.length && !closeFooterStack ? (
          <StackFooter
            liveStacks={liveStacks}
            handleDelete={(item) => handleDelete(item)}
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
                className={`${
                  asPath == "/discuss-project" && styles.currentStageDiscuss
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
                          className={`${styles.clickableOption} ${
                            form
                              .getFieldsValue()
                              .applicationType?.includes(item)
                              ? styles.selected
                              : ""
                          }`}
                        >
                          <Industry
                            value={item}
                            onClick={() => handleAdd("applicationType")}
                          />
                        </Col>
                      ))}
                    </Checkbox.Group>
                  </FormItem>
                  <Button
                    text="Clear"
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
                          className={`${styles.clickableOption} ${
                            form.getFieldsValue().currentStage?.includes(item)
                              ? styles.selected
                              : ""
                          }`}
                        >
                          <Industry
                            value={item}
                            circle
                            onClick={() => handleAdd("currentStage")}
                          />
                        </Col>
                      ))}
                    </Checkbox.Group>
                  </FormItem>
                  <Button
                    text="Clear"
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
                          className={`${styles.clickableOption} ${
                            form.getFieldsValue().consultation?.includes(item)
                              ? styles.selected
                              : ""
                          }`}
                        >
                          <Industry
                            value={item}
                            fullWidth
                            onClick={() => handleAdd("consultation")}
                          />
                        </Col>
                      ))}
                    </Checkbox.Group>
                  </FormItem>
                  <Button
                    text="Clear"
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
                          onClick={() =>
                            item != "Other" &&
                            handleButtonClick("industry", item)
                          }
                          className={`${styles.clickableOption} ${
                            form.getFieldsValue().industry?.includes(item)
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
                    onClick={() => handleClear("industry")}
                  />
                </Row>
                <Row className={styles.industries}>
                  <Paragraph className={styles.title}>
                    5. What is the expected duration of your project?
                  </Paragraph>
                  <FormItem name="duration" className={styles.slider}>
                    <Slider
                      min={0}
                      defaultValue={1}
                      max={25}
                      onChange={(val) => {
                        if (val == 0) {
                          form.setFieldValue("duration", 1);
                        }
                        setMonth(true);
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
                      handleClear("duration");
                    }}
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
