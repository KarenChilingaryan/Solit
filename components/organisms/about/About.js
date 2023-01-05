import { memo } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Col, Row } from "../../atoms";
import bigLogo from "../../../assets/img/bigLogo.png";
import main4angle from "../../../assets/img/4angles.png";
import Title from "../../molecules/title/Title";
import Button from "../../molecules/button/Button";

import styles from "./About.module.scss";

const About = ({ data }) => {
  const data1 = [
    {
      id: 1,
      title: "",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    },
    {
      id: 2,
      title: "Our Team",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    },
    {
      id: 3,
      title: "Our Values",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    },
    {
      id: 4,
      title: "Our Aproach",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    },
  ];
  return (
    <div className={styles.aboutWrapper}>
      <Image src={main4angle} className={styles.leftImage} />
      <Col className={styles.titleWrapper}>
        <Title title={"About us"} />
      </Col>
      <Row align="space-between" className={styles.context}>
        <Col span={10}>
          <Image src={bigLogo} alt={"logo"} className={styles.logoImg} />
        </Col>
        <Col span={10} className={styles.text}>
          <Col className={styles.titleWrapperSmall}>
            <Title title={"About us"} />
          </Col>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >{data?.data?.[0]?.presentation_text}</ReactMarkdown>
        </Col>
      </Row>
      <Col className={styles.buttonWrapper}>
        <Button text="More" lightBlue />
      </Col>
    </div>
  );
};

export default memo(About);
