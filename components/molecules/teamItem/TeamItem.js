import { memo } from "react";
import Image from "next/image";
import { Row, Col, Paragraph } from "../../atoms";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import moreIcon from "../../../assets/img/moreIcon.svg";

import styles from "./TeamItem.module.scss";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const moreText = "More";
const TeamItem = ({ img, title, desc }) => {
  return (
    <Col className={styles.teamItemWrapper} span={10}>
      <Row className={styles.titleWrapper}>
        <Image src={img} alt="team icon" className={styles.img} />
        <Paragraph className={styles.title}>{title}</Paragraph>
      </Row>
      <Paragraph className={styles.desc}>
        <ReactMarkdown
          children={desc ? desc : ''}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        />
      </Paragraph>
      <Col className={styles.moreWrapper}>
        <Paragraph className={styles.more}>
          {moreText} <Image src={moreIcon} alt="more icon" />
        </Paragraph>
      </Col>
    </Col>
  );
};

export default memo(TeamItem);
