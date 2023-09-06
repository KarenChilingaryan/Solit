import { memo, useState } from "react";
import { Col, Row, FormItem, Form, Checkbox, Select } from "../../atoms";
import Image from "next/image";
import Button from "../button/Button";
import FloatInput from "../floatInput/FloatInput";
import upload from "../../../assets/img/icons/uploadBlack.svg";

import styles from "./LetsTalkModal.module.scss";

const ModalLetsTalkForm = ({
  title,
  style = {},
  data,
  onSubmit,
  from = "apply",
  className,
}) => {
  const [form] = Form.useForm();
  const [file, setFile] = useState(null);
  const [onChangeCheckbox, setOnChangeCheckbox] = useState(false);

  const submitForm = (values, data) => {
    const formData = {
      ...values,
      ...(data ? data : {}),
      [from == "apply" ? "file_cv" : "file_document"]: file,
    };
    onSubmit(formData);
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
          {from == "apply" && (
            <FormItem
              name="position"
              rules={[
                {
                  required: true,
                  message: "Position is required",
                },
              ]}
            >
              <FloatInput label="Position" placeholder="Position" />
            </FormItem>
          )}
          {from == "apply" && (
            <FormItem
              name="level"
              rules={[
                {
                  required: true,
                  message: "Level is required",
                },
              ]}
            >
              <FloatInput label="Level" placeholder="Level" />
            </FormItem>
          )}
          {from == "apply" && (
            <FormItem
              name="link_to_linkedin"
              rules={[
                {
                  required: true,
                  message: "Linkedin link is required",
                },
              ]}
            >
              <FloatInput
                label="Link to LinkedIn *"
                placeholder="Link to LinkedIn *"
              />
            </FormItem>
          )}
          {from == "apply" && (
            <FormItem
              name="link_to_github_or_portfolio"
              rules={[
                {
                  required: true,
                  message: "Github link is required",
                },
              ]}
            >
              <FloatInput
                label="Link to Github/Portfolio"
                placeholder="Link to Github/Portfolio"
              />
            </FormItem>
          )}
          {from != "apply" && (
            <FormItem name="phone_number">
              <FloatInput
                label="Phone number"
                placeholder="Phone number"
                name="phone_number"
                type="number"
                required={true}
              />
            </FormItem>
          )}
          <FormItem
            name={"file_document"}
            className={styles.uploadItem}
          >
            <FloatInput
              label={"Upload document"}
              placeholder={"Upload document"}
              name={"file_document"}
              multiple
              type="file"
              accept=".pdf,.doc,.docx"
              suffix={<Image className={styles.suffix} src={upload} alt="" />}
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
              showUploadList={false}
              className={`${styles.uploadFile} ${file && style.uploadedFile}`}
            />
          </FormItem>
          {from != "apply" && (
            <FormItem name="comment">
              <FloatInput
                label="Comment"
                placeholder="Comment"
                name="comment"
              />
            </FormItem>
          )}
          {from == "apply" && (
            <FormItem name="cover_letter">
              <FloatInput
                label="Cover letter"
                placeholder="Cover letter"
                name="cover_letter"
              />
            </FormItem>
          )}
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

export default memo(ModalLetsTalkForm);
