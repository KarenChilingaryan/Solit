import { memo } from "react";
import Image from "next/image";
import { Col, Row, Paragraph } from "../../atoms";

import logoFooter from "../../../assets/img/bigLogo.png";
import fb from "../../../assets/img/fb.png";
import linkedIn from "../../../assets/img/linkedin.png";
import telegram from "../../../assets/img/telegram.png";
import styles from "./Footer.module.scss";
import { useFooterQuery } from "../../../services/footerApi";

const Footer = () => {
  const dataDefault = [
    {
      info: {
        address: "TGA Business Center, Abelyan 6/4",
        mail: "solit@gmail.com",
        phone: "+2-25-635-65",
      },
    },
    {
      expertise: {
        title: "EXPERTISE",
        data: ["Our Services", "Tech Stack", "Portfolio", "Careers"],
      },
    },

    {
      company: {
        title: "COMPANY",
        data: [
          "About Us",
          "Terms and Conditions",
          "Privacy Policy",
          "Testimonials",
          "Blog",
          "Contact",
        ],
      },
    },
  ];
  const footer = useFooterQuery();
  const { data } = footer;

  return (
    <div className={styles.footerWrapper}>
      <Row className={styles.footerBlock}>
        <Col className={styles.infoWrapper}>
          <Image src={logoFooter} alt="logo" className={styles.footerLogo} />
        </Col>
        <Col className={styles.expertiseWrapper}>
          <Paragraph className={styles.textTitle}>
            {dataDefault[1].expertise.title}
          </Paragraph>
          {dataDefault[1].expertise.data.map((el, idx) => (
            <Paragraph className={styles.text} key={idx}>
              {el}
            </Paragraph>
          ))}
        </Col>
        <Col className={styles.companyWrapper}>
          <Paragraph className={styles.textTitle}>
            {dataDefault[2].company.title}
          </Paragraph>
          {dataDefault[2].company.data.map((el, idx) => (
            <Paragraph className={styles.text} key={idx}>
              {el}
            </Paragraph>
          ))}
        </Col>
        <Col className={styles.companyInfoWraper}>
          <Paragraph className={styles.textTitle}>
            Office
          </Paragraph>
          {Object.values(dataDefault[0].info).map((el, idx) => (
            <Paragraph className={styles.text} key={idx}>
              {el}
            </Paragraph>
          ))}
        </Col>
        <Col className={styles.socialIconsWrapper}>
          <Paragraph className={`${styles.socialIconsTitle} ${styles.textTitle}`} style={{ ...(data ? { color: 'transparent' } : {}) }}>Let’s Contact for Great</Paragraph>
          {/* data && data[0]?.social_link? */}
          {[
            { name: 'hhhhh' },
            { name: 'hhhhh' },
            { name: 'hhhhh' },
            { name: 'hhhhh' },
            { name: 'hhhhh' },
            { name: 'hhhhh' },
          ].map((item, index) =>
            <Image src={linkedIn} alt="logo" className={styles.socialIcons} key={index} />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default memo(Footer);
