import { memo, useRef, useState } from "react";
import { Col, Row, FormItem, Form, Checkbox } from "../../atoms";
import Image from "next/image";
import Button from "../../molecules/button/Button";
import { emailApi } from "../../../services/emailApi";
import { useDispatch } from "react-redux";
import FloatInput from "../../molecules/floatInput/FloatInput";
import upload from "../../../assets/img/uploadIcon.svg";
import contactBgImage from "../../../assets/img/contact_bg.png";
import contactUsBgImage from "../../../assets/img/contactus-background.png";

import styles from "./ContactForm.module.scss";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = ({
  title,
  style = {},
  data = null,
  fromContactPage = false,
}) => {
  const [form] = Form.useForm();
  const [file, setFile] = useState();
  const recaptchaRef = useRef(null);

  // const props = {
  //   name: "file",
  //   accept: "application/pdf",
  //   onRemove: (file) => {
  //     const index = fileList.indexOf(file);
  //     const newFileList = fileList.slice();
  //     newFileList.splice(index, 1);
  //     setFileList(newFileList);
  //   },
  //   beforeUpload(file) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     setFile(file);
  //   },
  // };
  const dispatch = useDispatch();

  const submitForm = async (values) => {
    const data = { ...values, file_cv: file };
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    const res = await dispatch(
      await emailApi.endpoints.email.initiate(formData)
    );
  };

  const setRecaptcha = (value) => {
    console.log(value, '?????????????????????');
  }

  return (
    <Col
      className={`${styles.contactFormWrapper} ${!title ? styles.withoutTitle : ""
        }`}
      style={style}
    >
      <Col
        className={styles.infoSection}
        style={{ ...(fromContactPage ? { paddingLeft: 0 } : {}) }}
      >
        <Row className={styles.title}>
          {data?.title || "Got a project in mind?"}
        </Row>
        <div
          className={styles.info}
          dangerouslySetInnerHTML={{
            __html:
              data?.description ||
              "Share the details of your project – like scope, timeframes, or business challenges you would like to solve. Our team will carefully study them and then we’ll figure out the next move together.",
          }}
        />
        {fromContactPage && (
          <Image
            src={contactUsBgImage}
            className={styles.contactUsImage}
            alt=""
          />
        )}
      </Col>
      <Col className={styles.formWrapper}>
        <Form form={form} onFinish={submitForm} className={styles.form} onFieldsChange={() => checkFormValidation(setRecaptcha, recaptchaRef.current)}>
          <Row className={styles.inputSection}>
            <FormItem
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
              <FloatInput label="Email" placeholder="Email" name="full_name" />
            </FormItem>
            <FormItem name="phone" >
              <FloatInput label="Phone" placeholder="Phone" name="phone" type="number" />
            </FormItem>
            <FormItem name="message">
              <FloatInput
                label="Message"
                placeholder="Message"
                name="message"
              />
            </FormItem>
            <FormItem name={"file_cv"}>
              <FloatInput
                label="About your project"
                placeholder="About your project"
                name="file_cv"
                multiple
                type="file"
                accept=".pdf,.doc,.docx"
                suffix={<Image className={styles.suffix} src={upload} />}
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
                showUploadList={false}
                className={`${styles.uploadFile} ${file && style.uploadedFile}`}
              />
            </FormItem>
            <FormItem name="accept" className={styles.accept}>
              <Checkbox />
              <Row className={styles.acceptText}>
                I accept your Privacy Policy
              </Row>
            </FormItem>
            <div className={styles.recaptcha}>
              <ReCAPTCHA ref={recaptchaRef}
                className={styles.recaptcha}
                onChange={() => checkFormValidation(true, form, setDisabled, recaptchaRef.current)}
                onExpired={() => setDisabled(true)}
                sitekey={"7LeAbKcdAAAAAOezcfoFK-tekV_H2V0IzTy5rUn-"} />
            </div>
          </Row>

          <Col className={styles.buttonWrapper}>
            <Button text="Send message" transparentBlue type="submit" />
          </Col>
        </Form>
      </Col>
      {
        !fromContactPage && (
          <Image
            src={contactBgImage}
            className={`${styles.backImage} ${styles.topBackImage}`}
          />
        )
      }
    </Col >
  );
};

export default memo(ContactForm);
