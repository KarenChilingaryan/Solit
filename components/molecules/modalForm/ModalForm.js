import { memo, useState } from "react";
import { Col, Row, FormItem, Form, Checkbox, Select } from "../../atoms";
import Image from "next/image";
import Button from "../button/Button";
import FloatInput from "../floatInput/FloatInput";
import upload from "../../../assets/img/icons/uploadBlack.svg";
import arrow from "../../../assets/img/icons/selectIcon.svg";

import styles from "./ModalForm.module.scss";

const ModalForm = ({ title, style = {}, data, onSubmit, from = 'apply', className, secondCheckBox }) => {
  const [form] = Form.useForm();
  const [file, setFile] = useState(null);
  const [onChangeCheckbox, setOnChangeCheckbox] = useState(false);
  const [onChangeCheckboxNDA, setOnChangeCheckboxNDA] = useState(false);

  const submitForm = (values, data) => {
    const formData = {
      ...values,
      ...(data ? data : {}),
      file_document: file,
    };
    onSubmit(formData)
    form.resetFields()
  };

  return (
    <Col className={`${styles.modalFormWrapper}`} style={style}>
      <Form onFinish={(values) => {
        submitForm(values, data)
      }} className={styles.form} form={form} >
        <Row className={`${styles.inputSection} ${styles[className]}`}>
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

          <FormItem name="phon_number" >
            <FloatInput label="Phone number" placeholder="Phone number" name="phon_number" type="number" />
          </FormItem>
          <FormItem name={"upload_document"}>
            <FloatInput
              label={"Upload document"}
              placeholder={"Upload document"}
              name={"upload_document"}
              multiple
              type="file"
              accept=".pdf,.doc,.docx"
              prefix={<Image className={styles.suffix} src={upload} alt="image" />}
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
              suffixIcon={<Image src={arrow} alt="image" />}
              placeholder={
                <span className={styles.selectPlaceholder}>Your budget</span>
              }
            >
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </FormItem>
          <FormItem className={`${styles.accept} ${secondCheckBox && styles.acceptLeft}`}
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
              I accept your Privacy Policy
            </Row>
          </FormItem>
          {
            secondCheckBox &&
            <FormItem className={styles.accept}
              name="acceptNDA"
              rules={[
                {
                  required: true,
                  message: "NDA is required",
                },
              ]}
            >
              <Checkbox

                name="acceptNDA"
                onChange={() => {
                  setOnChangeCheckboxNDA(!onChangeCheckboxNDA);
                  if (onChangeCheckboxNDA) {
                    form.resetFields(["acceptNDA"]);
                  } else {
                    form.setFieldValue("acceptNDA", !onChangeCheckboxNDA);
                  }
                }}
                value={onChangeCheckboxNDA}
              />
              <Row className={styles.acceptText}>
                I want to protect my data by signing an NDA.
              </Row>
            </FormItem>
          }


        </Row>

        <Col className={styles.buttonWrapper}>
          <Button text="Submit" transparentBlue type="submit" />
        </Col>
      </Form>
    </Col>
  );
};

export default memo(ModalForm);
