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
  title,
  style = {},
  data,
  onSubmit,
  from = "apply",
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
    // setFile(null);
    // form.resetFields();
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

  return (
    <Col className={`${styles.modalFormWrapper}`} style={style}>
      <Row className={styles.textWrapper}>
        <Row className={styles.bigText}>
          Please, leave your contact details to proceed
        </Row>
        <Row className={styles.smallText}>
          Your personal data will be processed securely and wont be available to
          third parties.
        </Row>
      </Row>

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
            />
          </FormItem>
          <FormItem
            name="project_manager"
            rules={[
              {
                required: true,
                message: "Project manager is required",
              },
            ]}
          >
            <FloatInput
              label="Position"
              placeholder="Project manager"
              name="project_manager"
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

          <FormItem name="linkedin" className={styles.inputWithIcon}>
            <FloatInput
              label="Linkedin"
              placeholder="Link to LinkedIn"
              name="linkedin"
              type="text"
              required={true}
              min={0}
              suffix={
                <Image className={styles.suffix} src={linkedin} alt="image" />
              }
            />
          </FormItem>
          <FormItem name="portfolio" className={styles.inputWithIcon}>
            <FloatInput
              label="Portfolio"
              placeholder="Link to Github/Portfolio"
              name="portfolio"
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
                label={"Upload document"}
                placeholder={"Upload document"}
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

          <FormItem name="cover_latter">
            <FloatInput
              label="Cover letter"
              placeholder="Cover letter"
              name="cover_latter"
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
