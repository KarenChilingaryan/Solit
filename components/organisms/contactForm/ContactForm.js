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
import ReCAPTCHA from "react-google-recaptcha";
import { checkFormValidation } from "../../../utils/hooks/checkRecaptchaValidation";
import SuccessModal from "../successModal/SuccessModal";
import { Upload } from "antd";

import styles from "./ContactForm.module.scss";

const ContactForm = ({
  title,
  style = {},
  data = null,
  fromContactPage = false,
  h1 = false,
  career = false
}) => {
  const [form] = Form.useForm();
  const [file, setFile] = useState();
  const recaptchaRef = useRef();
  const [openSuccess, setOpenSuccess] = useState(false);
  const [onChangeCheckbox, setOnChangeCheckbox] = useState(false);

  const dispatch = useDispatch();

  const submitForm = async (values) => {
    const data = { ...values, file_cv: file };
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    try {
      const res = await dispatch(
        await emailApi.endpoints.email.initiate(formData)
      );
      setOpenSuccess(true);
      setTimeout(() => {
        setOpenSuccess(false);
      }, 3000);
      form.resetFields()
      setFile(null)
    } catch { }
  };

  const setRecaptcha = (value) => {
    // console.log(value, "?????????????????????");
  };
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (!/^[^eE]*$/.test(inputValue)) {
      // If 'e' or 'E' is detected, prevent the input change
      return;
    }
    return true; // Continue with the change if it's valid
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
      className={`${styles.contactFormWrapper} ${!title ? styles.withoutTitle : ""
        }`}
      style={style}
    >
      <Col
        className={`${styles.infoSection} ${career && styles.infoSectionCareer}`}
        style={{ ...(fromContactPage ? { paddingLeft: 0 } : {}) }}
      >
        {h1 ?
          <h1 className={styles.title} style={{ margin: 0 }}>{data?.title}</h1> :
          <Row className={styles.title}>
            {data?.title || "Got a project in mind?"}
          </Row>
        }
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
            alt="image"
          />
        )}
      </Col>
      <Col className={styles.formWrapper}>
        <Form
          form={form}
          onFinish={submitForm}
          className={styles.form}
          onFieldsChange={() =>
            checkFormValidation(setRecaptcha, recaptchaRef.current)
          }
        >
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
                value={''}
                formatter={(value) => value.replace("e", "")}
                onChange={(e) => handleInputChange(e)}
              />
            </FormItem>
            <FormItem name="message">
              <FloatInput
                label="Message"
                placeholder="Message"
                name="message"
              />
            </FormItem>
            <FormItem name={"file_cv"} className={`${styles.uploadItem}  ${file && styles.uploadedFile}`}>
              {/* <FloatInput
                border={true}
                label="About your project"
                placeholder="About your project"
                name="file_cv"
                multiple
                type="file"
                accept=".pdf,.doc,.docx"
                prefix={<Image className={styles.suffix} src={upload} alt="image" />}
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
                showUploadList={false}
                className={`${styles.uploadFile}`}
              /> */}
              <Upload {...props} name="file_cv" className={styles.uploadAntd}>
                <FloatInput label={"About your project"}
                  placeholder={"About your project"}
                  name={"file_cv"} type="text" disabled readOnly={true}
                  suffix={<Image className={styles.suffix} src={upload} alt="image" />}
                  value={file?.name || ''}
                />
              </Upload>
            </FormItem>
            <FormItem
              name="accept"
              className={styles.accept}
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
                I accept your   <a href="https://solit-llc.com/privacy-policy"> Privacy Policy</a>
              </Row>
            </FormItem>
            {/* <div className={styles.recaptcha}> */}
            <ReCAPTCHA
              ref={recaptchaRef}
              style={{ width: "300px" }}
              className={styles.recaptcha}
              onChange={() =>
                checkFormValidation(
                  setDisabled,
                  recaptchaRef.current
                )
              }
              onExpired={() => setDisabled(true)}
              sitekey="6Lee0CIoAAAAAB_dq-qSv6jLMpVn--g2ny42Ww_D"
            />
            {/* </div> */}
          </Row>

          <Col className={styles.buttonWrapper}>
            <Button text="Send message" transparentBlue type="submit" />
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
