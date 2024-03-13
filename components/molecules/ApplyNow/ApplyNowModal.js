import { memo, useEffect, useState } from "react";
import { Col, Row, FormItem, Form, Checkbox, Select } from "../../atoms";
import { Upload } from "antd";
import Image from "next/image";
import Button from "../button/Button";
import FloatInput from "../floatInput/FloatInput";
import upload from "../../../assets/img/icons/uploadBlack.svg";
import linkedin from "../../../assets/img/icons/u_linkedin.svg";
import u_link from "../../../assets/img/icons/u_link-alt.svg";
import close from "../../../assets/img/icons/close.svg";

import styles from "./ApplyNowModal.module.scss";

const ModalApplyNowForm = ({ style = {}, data, onSubmit, className, open }) => {
  const [form] = Form.useForm();
  const [file, setFile] = useState(null);
  const [onChangeCheckbox, setOnChangeCheckbox] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [disabled, setDisabled] = useState(false);

  const submitForm = async (values) => {
    const formData = {
      ...values,
      ["file_document"]: file,
    };
    setDisabled(true);
    try {
      await onSubmit(formData);
    } catch {}
    setDisabled(false);

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

  useEffect(() => {
    if (data.role) {
      form.setFieldValue("position", data.role);
    }
  }, [data, form]);

  const validateLinkedInUrl = (_, value) => {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

    if (!value || urlRegex.test(value)) {
      return Promise.resolve();
    }

    return Promise.reject("Please enter a valid  URL");
  };

  return (
    <Col className={`${styles.modalFormWrapper}`} style={style}>
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
        onFinish={(values) => {
          submitForm(values, data);
        }}
        className={styles.form}
      >
        <Row className={`${styles.inputSection} ${styles[className]}`}>
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
              label="Your full name"
              placeholder="Your full name"
              required={true}
              name="full_name"
            />
          </FormItem>
          <FormItem
            className={`${styles[errorMessage]}`}
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
            className={`${styles[errorMessage]}`}
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
          <FormItem
            name="level"
            className={`${styles[errorMessage]}`}
            rules={[
              {
                required: true,
                message: "Level is required",
              },
            ]}
          >
            <FloatInput
              label="Level"
              placeholder="Level"
              name="level"
              type="text"
              required={true}
              min={0}
            />
          </FormItem>

          <FormItem
            name="link_to_linkedin"
            className={`${styles.inputWithIcon} ${styles[errorMessage]}`}
            rules={[
              {
                required: true,
                message: "Linkedin is required",
              },
              {
                validator: validateLinkedInUrl,
                validateTrigger: "onSubmit",
              },
            ]}
          >
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
              isUpload
            />
          </FormItem>
          <FormItem
            name="link_to_github_or_portfolio"
            className={`${styles.inputWithIcon} ${styles[errorMessage]}`}
            rules={[
              {
                required: true,
                message: "Github is required",
              },
              {
                validator: validateLinkedInUrl,
                validateTrigger: "onSubmit",
              },
            ]}
          >
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
              isUpload
            />
          </FormItem>
          <FormItem
            name={"file_document"}
            className={`${styles.uploadItem}  ${file && styles.uploadedFile} ${
              styles[errorMessage]
            }`}
            rules={[
              {
                required: file ? false : true,
                message: "CV is required",
              },
            ]}
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
                isUpload={true}
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

          <FormItem name="cover_letter">
            <FloatInput
              label="Cover letter"
              placeholder="Cover letter"
              name="cover_letter"
            />
          </FormItem>

          <FormItem
            className={`${styles.accept} ${styles[errorMessage]} ${styles.fromApply}`}
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
              I accept your
              <a href="https://solit-llc.com/privacy-policy"> Privacy Policy</a>
            </Row>
          </FormItem>
        </Row>

        <Col className={styles.buttonWrapper}>
          <Button
            text="Submit"
            transparentBlue
            type="submit"
            disabled={disabled}
          />
        </Col>
      </Form>
    </Col>
  );
};

export default memo(ModalApplyNowForm);
