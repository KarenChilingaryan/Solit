import { memo, useState } from "react";
import { Col, Row, FormItem, Form, Checkbox, Select } from "../../atoms";
import Image from "next/image";
import Button from "../button/Button";
import FloatInput from "../floatInput/FloatInput";
import upload from "../../../assets/img/icons/uploadBlack.svg";
import arrow from "../../../assets/img/icons/selectIcon.svg";

import styles from "./ModalForm.module.scss";

const ModalForm = ({ title, style = {}, data, onSubmit }) => {
  const [file, setFile] = useState(null);

  const submitForm = (values, data) => {
    const formData = {
      ...values,
      ...data,
      file_document: file,
    };
    onSubmit(formData)
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

          <FormItem name="file_document">
            <FloatInput
              label="About your project"
              placeholder="About your project"
              name="file_document"
              multiple
              type="file"
              accept=".pdf,.doc,.docx"
              prefix={<Image className={styles.suffix} src={upload} />}
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
              showUploadList={false}
              className={styles.uploadFile}
            />
          </FormItem>
          <FormItem name="comment">
            <FloatInput label="Comment" placeholder="Comment" name="comment" />
          </FormItem>
          <FormItem name="comment" name="phon_number" >
            <FloatInput label="Phone number" placeholder="Phone number" name="phon_number" type="number" />
          </FormItem>
          
          <FormItem
            name="your_budget"
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
              placeholder={
                <span className={styles.selectPlaceholder}>Your budget</span>
              }
            >
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </FormItem>
          <FormItem className={styles.accept}>
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
