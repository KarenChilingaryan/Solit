import { memo, useState, useEffect } from "react";
import { Col, Row, Input, FormItem, Form } from "../../atoms";
import Image from "next/image";
import { Upload, Button as AntdButton } from "antd";
import Button from "../../molecules/button/Button";
import { contactUsData } from "../../../constants/contactUs";
import { emailApi } from "../../../services/emailApi";
import { useDispatch } from "react-redux";

import cardIcon from "../../../assets/img/icons/file.svg";

import styles from "./ContactForm.module.scss";
import FloatInput from "../../molecules/floatInput/FloatInput";

const ContactForm = ({
  title,
  style = {},
  whiteButton = false,
  whiteTitle,
  talent = false,
}) => {
  const [form] = Form.useForm();
  const [file, setFile] = useState();

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
  // const dispatch = useDispatch();

  const submitForm = (values) => {
    // const data = { ...contactUsData, ...values, file_cv: file };
    // const formData = new FormData();
    // for (const key in data) {
    //   formData.append(key, data[key]);
    // }
    // const res = await dispatch(
    //   await emailApi.endpoints.email.initiate(formData)
    // );
  };

  console.log(file, "---");
  return (
    <Col
      className={`${styles.contactFormWrapper} ${
        !title ? styles.withoutTitle : ""
      }`}
      style={style}
    >
      <Form form={form} onFinish={submitForm} className={styles.form}>
        <Row className={styles.title}>Got a project in mind?</Row>
        <Row className={styles.info}>
          Share the details of your project – like scope, timeframes, or
          business challenges you would like to solve. Our team will carefully
          study them and then we’ll figure out the next move together.
        </Row>
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
              placeholder="Full Name"
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
          <FormItem name="message">
            <FloatInput label="Message" placeholder="Message" name="message" />
          </FormItem>
          <FormItem name={"file_cv"}>
            <FloatInput
              label="About your project"
              placeholder="About your project"
              name="file_cv"
              multiple
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => {
                setFile(e.target.files);
              }}
              showUploadList={false}
            />
          </FormItem>
        </Row>

        <Col className={styles.buttonWrapper}>
          <Button text="Send message" boldBlue type="submit" />
        </Col>
      </Form>
    </Col>
  );
};

export default memo(ContactForm);
