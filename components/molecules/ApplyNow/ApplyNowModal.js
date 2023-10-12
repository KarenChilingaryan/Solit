import { memo, useEffect, useState } from "react";
import { Col, Row, FormItem, Form, Checkbox, Select } from "../../atoms";
import Image from "next/image";
import Button from "../button/Button";
import FloatInput from "../floatInput/FloatInput";
import upload from "../../../assets/img/icons/uploadBlack.svg";
import linkedin from "../../../assets/img/icons/u_linkedin.svg"
import u_link from "../../../assets/img/icons/u_link-alt.svg"
import styles from "./ApplyNowModal.module.scss";
import { Upload } from "antd";

const ModalApplyNowForm = ({
  style = {},
  data,
  onSubmit,
  className,
  open,
}) => {
  const [form] = Form.useForm();
  const [file, setFile] = useState(null);
  const [onChangeCheckbox, setOnChangeCheckbox] = useState(false);

  const submitForm = (values) => {
    const formData = {
      ...values,
      ["file_document"]: file,
    };
    onSubmit(formData);
    setFile(null);
    form.resetFields();
  };

  useEffect(() => {
    if (!open) {
      setFile(null);
      form.resetFields();
    }
  }, [open]);

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

  useEffect(()=>{
    if(data.position){
      form.setFieldValue('position', data.position)
      form.disabled
    }
  }, [data])

  return (
    <Col className={`${styles.modalFormWrapper}`} style={style}>
      <Form
        form={form}
        onFinish={(values) => {
          submitForm(values, data);
        }}
        className={styles.form}
      >
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
            <FloatInput
              label="Your full name"
              placeholder="Your full name"
              required={true}
              name="full_name"
            />
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
            <FloatInput
              label="Your email address"
              placeholder="Your email address"
              name="from_email"
              required={true}
            />
          </FormItem>
          <FormItem
            name="position"
            rules={[
              {
                required: true,
                message: "Position is required",
              },
            ]}
          >
            <FloatInput
              label="Position"
              placeholder="Position"
              name="position"
              required={true}
            />
          </FormItem>
          <FormItem name="level">
            <FloatInput
              label="Level"
              placeholder="Level"
              name="level"
              type="text"
              required={true}
              min={0}
            />
          </FormItem>

          <FormItem name="link_to_linkedin" className={styles.inputWithIcon}>
            <FloatInput
              label="Linkedin"
              placeholder="Link to LinkedIn"
              name="link_to_linkedin"
              type="text"
              required={true}
              min={0}
              suffix={
                <Image className={styles.suffix} src={linkedin} alt="image" />
              }
            />
          </FormItem>
          <FormItem name="link_to_github_or_portfolio" className={styles.inputWithIcon}>
            <FloatInput
              label="Portfolio"
              placeholder="Link to Github/Portfolio"
              name="link_to_github_or_portfolio"
              type="text"
              required={true}
              min={0}
              suffix={
                <Image className={styles.suffix} src={u_link} alt="image" />
              }
            />
          </FormItem>
          <FormItem
            name={"file_document"}
            className={`${styles.uploadItem}  ${file && styles.uploadedFile}`}
          >
            <Upload
              {...props}
              name="file_document"
              className={styles.uploadAntd}
            >
              <FloatInput
                required={true}
                label={"Upload your CV"}
                placeholder={"Upload your CV"}
                name={"file_document"}
                type="text"
                disabled
                readOnly={true}
                suffix={
                  <Image className={styles.suffix} src={upload} alt="image" />
                }
                value={file?.name || ""}
              />
            </Upload>
          </FormItem>

          <FormItem name="cover_letter">
            <FloatInput
              label="Cover letter"
              placeholder="Cover letter"
              name="cover_letter"
            />
          </FormItem>

          <FormItem
            className={styles.accept}
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
        </Row>

        <Col className={styles.buttonWrapper}>
          <Button text="Submit" transparentBlue type="submit" />
        </Col>
      </Form>
    </Col>
  );
};

export default memo(ModalApplyNowForm);
