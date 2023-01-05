import { memo } from "react";
import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { Row, Col, Paragraph } from "../../atoms";

import styles from "./ServiceSmallCard.module.scss";

const ServiceSmallCard = ({ icon, title, desc, techIcon, onClick }) => {
  return (
    <Col
      className={styles.serviceCardWrapper}
      span={7}
      flex={1}
      onClick={onClick}
    >
      <Row align_items={"center"} className={styles.title_iconWrapper}>
        {techIcon && (
          <Col className={styles.techIconWrapper}>
            <Image className={styles.teschnoicalIcon} src={techIcon} />
          </Col>
        )}
        <Image
          className={
            styles.iconWrapper + ` ${techIcon ? "" : styles.iconWrapperLong}`
          }
          src={icon}
        />
      </Row>
      <Col>
        <Paragraph
          className={`${styles.title} ${techIcon ? "" : styles.withoutMargin}`}
        >
          {title}
        </Paragraph>
      </Col>
      <Col>
        <Paragraph
          className={`${styles.desc} ${techIcon ? "" : styles.withoutMargin}`}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >{desc || ""}</ReactMarkdown>
        </Paragraph>
      </Col>
    </Col>
  );
};
export default memo(ServiceSmallCard);
