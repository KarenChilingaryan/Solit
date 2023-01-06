import { memo, useState } from "react";
import {
  Col,
  Row,
  Input,
  TextArea,
  FormItem,
  Form,
  Paragraph,
} from "../../atoms";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import { Upload, Button as AntdButton } from "antd";
import Title from "../../molecules/title/Title";
import Button from "../../molecules/button/Button";
import { contactUsData } from "../../../constants/contactUs";

import styles from "./ContactForm.module.scss";

import "react-phone-number-input/style.css";

const ContactForm = ({
  title,
  style = {},
  whiteButton = false,
  whiteTitle,
  talent = false,
}) => {
  const [form] = Form.useForm();
  const [file, setFile] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const props = {
    accept: ".pdf",
    beforeUpload(file) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        setFile(file);
      });
    },
  };

  const submitForm = (values) => {
    const data = { ...contactUsData, ...values, file_cv: file };
  };

  return (
    <Col
      className={`${styles.contactFormWrapper} ${
        !title ? styles.withoutTitle : ""
      }`}
      style={style}
    >
      {title && (
        <Col className={styles.titleWrapper}>
          <Title title={title} whiteTitle={whiteTitle} />
        </Col>
      )}
      <Form form={form} onFinish={submitForm} className={styles.form}>
        <Row className={styles.row_1}>
          <Col span={7} className={styles.inputOdd}>
            <FormItem
              name={"full_name"}
              rules={[
                {
                  required: true,
                  message: "Name is required",
                },
              ]}
            >
              <Input className={styles.input} placeholder="Full Name*" />
            </FormItem>
          </Col>
          <Col span={7}>
            <FormItem
              name={"from_email"}
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
              <Input className={styles.input} placeholder="Email*" />
            </FormItem>
          </Col>
        </Row>

        {!talent ? (
          <Row className={styles.row_2}>
            <Col span={7} className={styles.inputOdd}>
              <FormItem name={"position_and_company"}>
                <Input
                  className={styles.input}
                  placeholder="Position and Company"
                />
              </FormItem>
            </Col>
            <Col span={7} className={styles.phoneCol}>
              <FormItem
                name={"phon"}
                rules={[
                  {
                    validator: async (_, number) => {
                      if (!isValidPhoneNumber(number)) {
                        return Promise.reject(
                          new Error("Invalid phone number")
                        );
                      }
                    },
                  },
                ]}
              >
                {/* <Input className={styles.input} placeholder="Phone" /> */}
                <PhoneInput
                  className={styles.phoneInput}
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                />
              </FormItem>
            </Col>
          </Row>
        ) : (
          <Row className={styles.row_2}>
            <Col span={7} className={styles.inputOdd}>
              <FormItem
                name={"position_you_want_to_work_in"}
                rules={[
                  {
                    required: true,
                    message: "Position you want to work in  is required",
                  },
                ]}
              >
                <Input
                  className={styles.input}
                  placeholder="Position you want to work in"
                />
              </FormItem>
            </Col>
            <Col span={7}>
              <FormItem
                name={"level"}
                rules={[
                  {
                    required: true,
                    message: "Level  is required",
                  },
                ]}
              >
                <Input className={styles.input} placeholder="Level" />
              </FormItem>
            </Col>
          </Row>
        )}

        <Row className={styles.textAreaWrapper}>
          <Col span={15}>
            <FormItem name={"message"}>
              <TextArea className={styles.input} placeholder="Message" />
            </FormItem>
          </Col>
        </Row>
        <Row className={styles.upload}>
          <Col className={styles.uploadButtonWrapper}>
            <Paragraph
              className={`${styles.largeText} ${
                whiteTitle ? styles.whiteText : ""
              }`}
            >
              {!talent ? "Attach a file" : " Attach your CV*"}
            </Paragraph>
            <Paragraph
              className={`${styles.smallText} ${
                whiteTitle ? styles.whiteText : ""
              }`}
            >
              File is not attached
            </Paragraph>
          </Col>
          <FormItem name={"file_cv"}>
            <Upload {...props}>
              <AntdButton
                className={`${styles.fileUpload} ${
                  whiteTitle ? styles.whiteBorder : ""
                }`}
              >
                PDF file
              </AntdButton>
            </Upload>
          </FormItem>
        </Row>

        <Col className={styles.buttonWrapper}>
          {whiteButton ? (
            <Button text={"Submit"} boldWhite />
          ) : (
            <Button text={"Submit"} />
          )}
        </Col>
      </Form>
    </Col>
  );
};

export default memo(ContactForm);
