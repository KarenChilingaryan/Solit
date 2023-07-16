import { memo, useState, useEffect } from "react";
import { Col, Row, Input, FormItem, Form, Checkbox, Select } from "../../atoms";
import Image from "next/image";
import { Upload, Button as AntdButton } from "antd";
import Button from "../button/Button";
import { contactUsData } from "../../../constants/contactUs";
import { emailApi } from "../../../services/emailApi";
import { useDispatch } from "react-redux";
import FloatInput from "../floatInput/FloatInput";
import upload from "../../../assets/img/icons/uploadBlack.svg";
import contactBgImage from "../../../assets/img/contact_bg.png";
import arrow from "../../../assets/img/icons/selectIcon.svg";

import styles from "./ModalForm.module.scss";

const ModalForm = ({
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
    <Col className={`${styles.modalFormWrapper}`} style={style}>
      <Form form={form} onFinish={submitForm} className={styles.form}>
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
              label="Your full name"
              placeholder="Your full name"
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
              label="Your full name"
              placeholder="Your full name"
              name="full_name"
            />
          </FormItem>

          <FormItem name="file_cv">
            <FloatInput
              label="About your project"
              placeholder="About your project"
              name="file_cv"
              multiple
              type="file"
              accept=".pdf,.doc,.docx"
              prefix={<Image className={styles.suffix} src={upload} />}
              onChange={(e) => {
                setFile(e.target.files);
              }}
              showUploadList={false}
              className={styles.uploadFile}
            />
          </FormItem>
          <FormItem name="comment">
            <FloatInput label="Comment" placeholder="Comment" name="comment" />
          </FormItem>
          <FormItem
            name="from_email"
            rules={[
              {
                type: "select",
                message: "The input is not valid Email",
              },
              {
                required: true,
                message: "Email is required",
              },
            ]}
          >
            <Select
              className={styles.select}
              suffixIcon={<Image src={arrow} />}
              placeholder={<span className={styles.selectPlaceholder}>Your budget</span>}
            >
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </FormItem>
          <FormItem name="accept" className={styles.accept}>
            <Checkbox />
            <Row className={styles.acceptText}>
              I accept your Privacy Policy
            </Row>
          </FormItem>
        </Row>

        <Col className={styles.buttonWrapper}>
          <Button text="Submit" transparentBlue type="submit" />
        </Col>
      </Form>
    </Col>
  );
};

export default memo(ModalForm);
