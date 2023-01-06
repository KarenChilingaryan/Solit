import { memo } from "react";
import {
  Col,
  Row,
  Input,
  TextArea,
  FormItem,
  Form,
  Paragraph,
} from "../../atoms";
import { Upload, Button as AntdButton } from "antd";
import Title from "../../molecules/title/Title";
import Button from "../../molecules/button/Button";

import styles from "./ContactForm.module.scss";

const props = {
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  accept: ".pdf",
  beforeUpload(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      console.log(file, "-----", resolve);
      // reader.onload = () => {
      // const img = document.createElement("img");
      // img.src = reader.result;
      // img.onload = () => {
      //   const canvas = document.createElement("canvas");
      //   canvas.width = img.naturalWidth;
      //   canvas.height = img.naturalHeight;
      //   const ctx = canvas.getContext("2d");
      //   ctx.drawImage(img, 0, 0);
      //   ctx.fillStyle = "red";
      //   ctx.textBaseline = "middle";
      //   ctx.font = "33px Arial";
      //   ctx.fillText("Ant Design", 20, 20);
      //   canvas.toBlob((result) => resolve(result));
      // };
      // };
    });
  },
};

const ContactForm = ({
  title,
  style = {},
  whiteButton = false,
  whiteTitle,
}) => {
  const [form] = Form.useForm();

  const submitForm = (values) => {
    const { email, name, Company, Position, Message, file } =
      form.getFieldsValue();
    console.log(email, name, Company, Position, Message, file);
    console.log(values);
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
        <Col className={styles.upload}>
          <Row className={styles.uploadButtonWrapper}>
            <Paragraph
              className={`${styles.largeText} ${
                whiteTitle ? styles.whiteText : ""
              }`}
            >
              Attach a file
            </Paragraph>
            <FormItem name={"file"}>
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
          <Row>
            <Paragraph
              className={`${styles.smallText} ${
                whiteTitle ? styles.whiteText : ""
              }`}
            >
              File is not attached
            </Paragraph>
          </Row>
        </Col>

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
