import { memo } from "react";
import { Col, Row, Input, TextArea, FormItem, Form } from "../../atoms";
import Title from "../../molecules/title/Title";
import Button from "../../molecules/button/Button";

import styles from "./ContactForm.module.scss";

const ContactForm = ({
  title,
  style = {},
  whiteButton = false,
  whiteTitle,
}) => {
  const [form] = Form.useForm();

  const submitForm = (values) => {};
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
              name={"name"}
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
              name={"email"}
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

        <Row className={styles.row_2}>
          <Col span={7} className={styles.inputOdd}>
            <FormItem name={"Company"}>
              <Input className={styles.input} placeholder="Company" />
            </FormItem>
          </Col>
          <Col span={7}>
            <FormItem name={"Position"}>
              <Input className={styles.input} placeholder="Position" />
            </FormItem>
          </Col>
        </Row>

        <Row className={styles.textAreaWrapper}>
          <Col span={15}>
            <FormItem name={"Message"}>
              <TextArea className={styles.input} placeholder="Message" />
            </FormItem>
          </Col>
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
