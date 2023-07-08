import { memo } from "react";
import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { Row, Col, Paragraph } from "../../atoms";

import styles from "./OurTeamCard.module.scss";

const OurTeamCard = ({ icon, title, desc, onClick, position, skill }) => {
  return (
    <Col
      className={styles.ourTeamCardWrapper}
      span={7}
      flex={1}
      onClick={onClick}
    >
      <Row className={styles.title_iconWrapper}>
        <Col>
          <Image
            className={
              styles.iconWrapper
            }
            src={icon}
          />
        </Col>
        <Col className={styles.skill}>
          {skill?.map((el, index) => <div className={styles.skillItem} key={index}>{el?.skill}</div>)}
        </Col>
      </Row>
      <Col>
        <Paragraph
          className={styles.title}
        >
          {title}
        </Paragraph>
      </Col>
      <Col>
        <Paragraph
          className={styles.subTitle}
        >
          {position}
        </Paragraph>
      </Col>
      <Col>
        <Paragraph
          className={styles.desc}
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
export default memo(OurTeamCard);
