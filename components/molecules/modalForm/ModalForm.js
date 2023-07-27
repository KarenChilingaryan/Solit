import { memo, useState, useEffect, useMemo } from "react";
import { Col, Row, Input, FormItem, Form, Checkbox, Select } from "../../atoms";
import Image from "next/image";
import { Upload, Button as AntdButton } from "antd";
import Button from "../button/Button";
import { contactUsData } from "../../../constants/contactUs";
import { emailApi } from "../../../services/emailApi";
import { emailDiscussYourProject1Api } from "../../../services/emailDiscussYourProject1Api";
import { emailDiscussYourProject2Api } from "../../../services/emailDiscussYourProject2Api";
import { useDispatch } from "react-redux";
import FloatInput from "../floatInput/FloatInput";
import upload from "../../../assets/img/icons/uploadBlack.svg";
import contactBgImage from "../../../assets/img/contact_bg.png";
import arrow from "../../../assets/img/icons/selectIcon.svg";




import styles from "./ModalForm.module.scss";



const ModalForm = ({ style = {}, data, formData = null }) => {
  const [form] = Form.useForm();
  const [file, setFile] = useState(null);




  const dispatch = useDispatch();

  const email = (data.step_five === undefined) ? emailDiscussYourProject2Api : emailDiscussYourProject1Api;





  const submitForm = async (values, data) => {
    const formData = { ...values, ...data, file_cv: file };
    const newformData = new FormData();
    for (const key in formData) {
      newformData.append(key, formData[key]);
    }
    const res = await dispatch(await emailApi.endpoints.email.initiate(newformData));
  };



  return (
    <Col className={`${styles.modalFormWrapper}`} style={style}>
      <Form onFinish={(values) => {
        submitForm(values, data)
      }} className={styles.form} >
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
            <FloatInput label="Your full name" placeholder="Your full name" />
          </FormItem>
          <FormItem
            name="from_email"
            rules={[
              {
                type: "email",
                message: "The input is not a valid Email",
              },
              {
                required: true,
                message: "Email is required",
              },
            ]}
          >
            <FloatInput label="Email" placeholder="Email" name="from_email" />
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
            name="budget"
            rules={[
              {
                type: "select",
                message: "Please select your budget",
              },
              {
                required: true,
                message: "Budget is required",
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