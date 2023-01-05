import { memo } from "react";
import Image from "next/image";
import { Col, Row, Paragraph } from "../../atoms";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import styles from "./TestimonialsItem.module.scss";

const TestimonialsItem = ({ img, desc, author, id }) => {
  return (
    <div className={styles.testimonialsMainWrapper}>
      <Col className={styles.testimonialsWrapper}>
        {id % 2 ? (
          <Row>
            <Col span={12} className={styles.imgWrapper}>
              <Image
                src={img}
                alt="testimonial author"
                className={styles.img}
              />
            </Col>
            <Col className={styles.testimonialsTextWrapper}>
              <Paragraph className={styles.desc}><ReactMarkdown
                children={desc ? desc : ''}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
              /></Paragraph>
              <Paragraph className={styles.author}>{author}</Paragraph>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col className={styles.testimonialsTextWrapperEven} span={12}>
              <Paragraph className={styles.desc}>
                <ReactMarkdown
                  children={desc ? desc : ''}
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                />
              </Paragraph>
              <Paragraph className={styles.author}>{author}</Paragraph>
            </Col>
            <Col className={styles.imgWrapperEven}>
              <Image
                src={img}
                alt="testimonial author"
                className={styles.img}
              />
            </Col>
          </Row>
        )}
      </Col>
    </div>
  );
};

export default memo(TestimonialsItem);
