import { memo, useEffect, useRef, useState } from "react";
import { FormItem, Form, Checkbox } from "../../atoms";
import Row from "../../atoms/Row";
import Image from "next/image";
import dynamic from "next/dynamic";
import ReCAPTCHA from "react-google-recaptcha";
import { Upload } from "antd";
import Button from "../../molecules/button/Button";
import { emailApi } from "../../../services/emailApi";
import { useDispatch } from "react-redux";
import FloatInput from "../../molecules/floatInput/FloatInput";
import Col from "../../atoms/Col";
import upload from "../../../assets/img/uploadIcon.svg";
import contactBgImage from "../../../assets/img/contact_bg.png";
import contactUsBgImage from "../../../assets/img/contactus-background.png";
import close from "../../../assets/img/icons/close.svg";
import { checkFormValidation } from "../../../utils/hooks/checkRecaptchaValidation";
import SuccessModal from "../successModal/SuccessModal";

import styles from "./ContactForm.module.scss";

const ContactForm = ({
  title,
  style = {},
  data = null,
  fromContactPage = false,
  h1 = false,
  career = false,
}) => {
  const [form] = Form.useForm();
  const [file, setFile] = useState();
  const recaptchaRef = useRef();
  const [openSuccess, setOpenSuccess] = useState(false);
  const [onChangeCheckbox, setOnChangeCheckbox] = useState(false);
  const [top, setTop] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const dispatch = useDispatch();

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 576);
  };

  // Add event listener for window resize
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const changeRecaptcha = (value) => {
    !isMobile && form.setFieldValue("recaptcha", value);
  };
  const setClose = () => {
    const next = document.getElementById("__next");
    next.style.top = `-${window.scrollY}px`;
    next.style.width = `100%`;
    next.style.position = `inherit`;
    if (top) {
      window.scrollTo(0, top);
    }
    setTop(0);
  };

  const hideScroll = () => {
    const next = document.getElementById("__next");
    if (openSuccess) {
      setTop(window.scrollY);
      next.style.top = `-${window.scrollY}px`;
      next.style.width = `100%`;
      next.style.position = `fixed`;
    }
  };
  const submitForm = async (values) => {
    const data = { ...values, file_cv: file };
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    setDisabled(true);
    try {
      const res = await dispatch(
        await emailApi.endpoints.email.initiate(formData)
      );
      setOpenSuccess(true);
      hideScroll();
      setTimeout(() => {
        setOpenSuccess(false);
        setClose();
        form.resetFields();
        setFile(null);
      }, 3000);
    } catch {}
    setDisabled(false);
  };

  const props = {
    onRemove: () => {
      setFile(null);
    },
    beforeUpload: (file) => {
      setFile(file);
      return false;
    },
    fileList: file ? [file] : [],
  };

  return (
    <Col
      className={`${styles.contactFormWrapper} ${
        !title ? styles.withoutTitle : ""
      }`}
      style={style}
    >
      <Col
        className={`${styles.infoSection} ${
          career && styles.infoSectionCareer
        }`}
        style={{ ...(fromContactPage ? { paddingLeft: 0 } : {}) }}
      >
        {h1 ? (
          <h1 className={styles.title} style={{ margin: 0 }}>
            {data?.title}
          </h1>
        ) : (
          <Row className={styles.title}>
            {data?.title || "Got a project in mind?"}
          </Row>
        )}
        <div className={styles.info}>
          {data?.description ||
            "Share the details of your project – like scope, timeframes, or business challenges you would like to solve. Our team will carefully study them and then we’ll figure out the next move together."}
        </div>
        {fromContactPage && (
          <Image
            src={contactUsBgImage}
            className={styles.contactUsImage}
            alt="image"
          />
        )}
      </Col>
      <Col className={styles.formWrapper}>
        <Form
          onFinishFailed={() => {
            setErrorMessage("errorMessageLeft");
            setTimeout(() => {
              setErrorMessage("errorMessageRight");
              setTimeout(() => {
                setErrorMessage("");
              }, 100);
            }, 100);
          }}
          form={form}
          onFinish={submitForm}
          className={styles.form}
        >
          <Row className={styles.inputSection}>
            <FormItem
              className={`${styles[errorMessage]}`}
              name="full_name"
              rules={[
                {
                  required: true,
                  message: "Name is required",
                },
              ]}
            >
              <FloatInput
                label="Full Name"
                placeholder="Your Full Name"
                name="full_name"
              />
            </FormItem>
            <FormItem
              className={`${styles[errorMessage]}`}
              name="from_email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid Email",
                },
                {
                  required: true,
                  message: "Email is required",
                },
              ]}
            >
              <FloatInput
                label="Your email address"
                placeholder="Your email address"
                name="from_email"
              />
            </FormItem>
            <FormItem name="phone_number">
              <FloatInput
                label="Phone"
                placeholder="Phone"
                name="phone_number"
                type="number"
                value={""}
                formatter={(value) => value.replace("e", "")}
                phoneClass="phoneInputBlack"
              />
            </FormItem>
            <FormItem name="message">
              <FloatInput
                label="Message"
                placeholder="Message"
                name="message"
              />
            </FormItem>
            <FormItem
              name={"file_cv"}
              className={`${styles.uploadItem}  ${file && styles.uploadedFile}`}
            >
              <Upload {...props} name="file_cv" className={styles.uploadAntd}>
                <FloatInput
                  label={"About your project"}
                  placeholder={"About your project"}
                  name={"file_cv"}
                  type="text"
                  disabled
                  readOnly={true}
                  suffix={
                    file ? null : (
                      <Image
                        className={styles.suffix}
                        src={upload}
                        alt="image"
                      />
                    )
                  }
                  value={file?.name || ""}
                />
              </Upload>
              {file && (
                <div className={styles.removeFile}>
                  <Image
                    src={close}
                    width={16}
                    height={16}
                    onClick={() => setFile(null)}
                    alt=""
                  />
                </div>
              )}
            </FormItem>
          </Row>
          <FormItem
            className={`${styles.accept} ${styles[errorMessage]}`}
            name="accept"
            rules={[
              {
                required: true,
                message: "Accept is required",
              },
            ]}
          >
            <Checkbox
              name="accept"
              onChange={() => {
                setOnChangeCheckbox(!onChangeCheckbox);
                if (onChangeCheckbox) {
                  form.resetFields(["accept"]);
                } else {
                  form.setFieldValue("accept", !onChangeCheckbox);
                }
              }}
              value={onChangeCheckbox}
            />
            <Row className={styles.acceptText}>
              I accept your{" "}
              <a href="https://solit-llc.com/privacy-policy"> Privacy Policy</a>
            </Row>
          </FormItem>
          {!isMobile && (
            <FormItem
              className={`${styles.recaptchaForm} ${styles[errorMessage]}`}
              name="recaptcha"
              rules={[
                {
                  required: true,
                  message: "ReCAPTCHA is required",
                },
              ]}
            >
              <ReCAPTCHA
                ref={recaptchaRef}
                style={{ width: "300px" }}
                className={styles.recaptcha}
                onChange={() =>
                  checkFormValidation(changeRecaptcha, recaptchaRef.current)
                }
                sitekey="6Lee0CIoAAAAAB_dq-qSv6jLMpVn--g2ny42Ww_D"
              />
            </FormItem>
          )}

          <Col className={styles.buttonWrapper}>
            <Button
              text="Send message"
              transparentBlue
              type="submit"
              disabled={disabled}
            />
          </Col>
        </Form>
      </Col>
      {!fromContactPage && (
        <Image
          src={contactBgImage}
          className={`${styles.backImage} ${styles.topBackImage}`}
          alt="image"
        />
      )}
      <SuccessModal open={openSuccess} setOpen={setOpenSuccess} />
    </Col>
  );
};

export default memo(ContactForm);
