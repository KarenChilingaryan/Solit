import { memo, useState } from "react";
import { Col, Row, FormItem, Form, Checkbox, Select } from "../../atoms";
import { Upload } from "antd";
import Image from "next/image";
import Button from "../button/Button";
import FloatInput from "../floatInput/FloatInput";
import upload from "../../../assets/img/icons/uploadBlack.svg";
import arrow from "../../../assets/img/icons/selectIcon.svg";
import close from "../../../assets/img/icons/close.svg";

import styles from "./ModalForm.module.scss";

const ModalForm = ({
  title,
  style = {},
  data,
  onSubmit,
  className,
  secondCheckBox,
}) => {
  const [form] = Form.useForm();
  const [file, setFile] = useState(null);
  const [onChangeCheckbox, setOnChangeCheckbox] = useState(false);
  const [onChangeCheckboxNDA, setOnChangeCheckboxNDA] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [disabled, setDisabled] = useState(false);

  const submitForm = async (values, data) => {
    const formData = {
      ...values,
      ...(data ? data : {}),
      file_document: file,
    };
    setDisabled(true);
    try {
      await onSubmit(formData);
    } catch {}
    setDisabled(false);
    form.resetFields();
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
        onFinish={(values) => {
          submitForm(values, data);
        }}
        className={styles.form}
        form={form}
        onValuesChange={(changedValues, allValues) =>
          console.log(changedValues, allValues, "8888888888888")
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
              label="Email"
              placeholder="Email"
              name="from_email"
              required={true}
            />
          </FormItem>

          <FormItem
            className={`${styles[errorMessage]}`}
            name="phon_number"
            rules={[
              {
                required: true,
                message: "Phone number is required",
              },
            ]}
          >
            <FloatInput
              required={true}
              label="Phone number"
              placeholder="Phone number"
              name="phon_number"
              type="number"
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
                  file ? (
                    <></>
                  ) : (
                    <Image className={styles.suffix} src={upload} alt="image" />
                  )
                }
                value={file?.name || ""}
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

          <FormItem className={`${styles[errorMessage]}`} name="your_budget">
            <Select
              className={styles.select}
              suffixIcon={<Image src={arrow} alt="image" />}
              placeholder={
                <span className={styles.selectPlaceholder}>Your budget</span>
              }
            >
              <Select.Option value="Your Budget">Your Budget</Select.Option>
              <Select.Option value="Less than $20k">
                Less than $20k
              </Select.Option>
              <Select.Option value="$20k to $50k">$20k to $50k</Select.Option>
              <Select.Option value="More than $50k">
                More than $50k
              </Select.Option>
              <Select.Option value="Not sure">Not sure</Select.Option>
            </Select>
          </FormItem>
          <FormItem
            className={`${styles.accept} ${
              secondCheckBox && styles.acceptLeft
            } ${styles[errorMessage]}`}
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

          <FormItem
            className={`${styles.accept}  ${styles[errorMessage]}`}
            name="acceptNDA"
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

export default memo(ModalForm);
