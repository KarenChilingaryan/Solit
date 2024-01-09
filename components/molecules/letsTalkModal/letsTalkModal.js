import { memo, useEffect, useState } from "react";
import { Col, Row, FormItem, Form, Checkbox } from "../../atoms";
import Image from "next/image";
import { Upload } from "antd";
import Button from "../button/Button";
import FloatInput from "../floatInput/FloatInput";
import upload from "../../../assets/img/icons/uploadBlack.svg";
import close from "../../../assets/img/icons/close.svg";

import styles from "./LetsTalkModal.module.scss";

const ModalLetsTalkForm = ({
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
  const [errorMessage, setErrorMessage] = useState("");
  const [disabled, setDisabled] = useState(false);

  const submitForm = async (values, data) => {
    const formData = {
      ...values,
      ...(data ? data : {}),
      [from == "apply" ? "file_cv" : "file_document"]: file,
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

  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
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
        onValuesChange={(changedValues, allValues) =>
          console.log(changedValues, allValues, "kkkkkkkkkk")
        }
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
            name="phone_number"
            rules={[
              {
                required: true,
                message: "Phone number is required",
              },
            ]}
          >
            <FloatInput
              label="Phone number"
              placeholder="Phone number"
              name="phone_number"
              type="number"
              required={true}
              min={0}
              phoneClass="phoneInput"
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

          <FormItem name="comment">
            <FloatInput label="Comment" placeholder="Comment" name="comment" />
          </FormItem>
        </Row>
        <FormItem
          className={`${styles.accept} ${styles[errorMessage]}`}
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
            I accept your{" "}
            <a href="https://solit-llc.com/privacy-policy"> Privacy Policy</a>
          </Row>
        </FormItem>

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

export default memo(ModalLetsTalkForm);
