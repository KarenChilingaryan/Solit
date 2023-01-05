import { memo } from "react";
import Image from "next/image";
import { Row, Col, Paragraph } from "../../atoms";
import moreIcon from "../../../assets/img/dropdownRight.svg";

import styles from "./ServiceLargeCard.module.scss";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { ReactMarkdown } from "react-markdown/lib/react-markdown"


const ServiceLargeCard = ({ icon, title, desc, onClick }) => {
  const moreText = 'More'
  return (
    <Col className={styles.serviceCardWrapper} span={7} gagao={19}>
      <Row align_items={"center"} className={styles.title_iconWrapper}>
        <Image className={styles.iconWrapper} src={icon} />
      </Row>
      <Col className={styles.text_wrapper}>
        <Paragraph className={styles.title}>{title}</Paragraph>

        <Paragraph className={styles.desc}>
        <ReactMarkdown
            children={desc || ''}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          />
        </Paragraph>
      <Paragraph className={styles.more} onClick={onClick}>
        {moreText} <Image src={moreIcon} alt="more icon" />
      </Paragraph>
      </Col>
    </Col>
  );
};

export default memo(ServiceLargeCard);
