import { memo } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { Col, Paragraph } from "../../atoms";
import PortfolioSlider from "../../molecules/portfolioSlider/PortfolioSlider";
import Title from "../../molecules/title/Title";

import styles from "./PortfolioMain.module.scss";

const PortfolioMain = ({ data, main = false }) => {
  const first_details = data?.first_details;
  const second_details = data?.second_details;

  return (
    <Col
      className={`${styles.portfolioMainWrapper} ${main ? styles.mainPage : ""
        }`}
    >
      {data?.title && (
        <Title title={data?.title} lightBlueTitle align="center" />
      )}
      <PortfolioSlider main={main} images={data?.images} />

      <Paragraph className={styles.text}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        >{first_details}</ReactMarkdown>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        >{second_details}</ReactMarkdown>
      </Paragraph>
    </Col>
  );
};

export default memo(PortfolioMain);
