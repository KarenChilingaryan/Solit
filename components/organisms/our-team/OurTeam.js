import { memo } from "react";
import { Col, Paragraph, Row } from "../../atoms";
import svg from "../../../assets/img/serviceImg.svg";
import Button from "../../molecules/button/Button";
import ContactForm from "../contactForm/ContactForm";
import OurTeamCard from "../../molecules/ourTeamCard/OurTeamCard";
import HomeMainTexts from "../../molecules/homeMainTexts/HomeMainTexts";
import webIcon from "../../../assets/img/webIcon.svg";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import styles from "./OurTeam.module.scss";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Link from "next/link";

const OurTeam = () => {
  const router = useRouter();
  const { id } = useRouter().query;

  const ourTeam = useSelector(
    (state) => state?.ourTeamDetailApi?.queries?.[`ourTeamDetail("${id}")`]?.data
  );
  console.log(ourTeam);

  const buttonText = "Contact";

  return (
    <div className={styles.ourTeamMainWrapper}>
      <Row className={styles.leftSecton}>
        <Col>
          <HomeMainTexts result={ourTeam?.LeftText[0]?.painted_text} square h1 />
        </Col>
      </Row>

      <div className={styles.ourTeamTopWrapper}>
        <Col className={styles.leftDescription}>
          <Paragraph
            className={`${styles.title} ${styles.withoutMargin}`}
          >
            {ourTeam?.LeftText[0]?.title}
          </Paragraph>
          <Paragraph
            className={styles.description}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >{ourTeam?.LeftText[0]?.description}
            </ReactMarkdown>
          </Paragraph>
        </Col>
        <Col className={styles.cardSection}>
          {ourTeam?.RightData?.map((el, index) => (
            <OurTeamCard
              icon={el.dev_image || svg}
              title={el.dev_full_name}
              desc={el.description}
              position={el.dev_position}
              key={index}
              onClick={() => { }}
              skill={el.skill}
            />
          ))}
        </Col>
      </div>

      <Col className={styles.buttonWrapper}>
        <Link href="/contactus">
        <Button text={buttonText} />
        </Link>
      </Col>
      <ContactForm
        title={"Let’s Contact for Great"}
        style={{ background: "#105475" }}
        whiteTitle
      />
    </div>
  );
};

export default memo(OurTeam);
