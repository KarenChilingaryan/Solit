import { memo } from "react";
import Image from "next/image";
import { Col, Row, Paragraph } from "../../atoms";

import logoFooter from "../../../assets/img/logoFooter.png";
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
          {data &&
            <div className={styles.infoBlock}>
              <Paragraph className={styles.infoText}>
                {data[0]?.address}
              </Paragraph>
              <Paragraph className={styles.infoText}>{data[0].company_mail}</Paragraph>
              <Paragraph className={styles.infoText}>
                {data[0]?.phone_number}
              </Paragraph>
            </div>
          }
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
        {data &&
          <Col className={styles.socialIconsWrapper}>
            {data[0]?.social_link?.map(item =>
              <Image src={linkedIn} alt="logo" className={styles.socialIcons} key={item.name} />
            )}
          </Col>
        }
      </Row>
    </div>
  );
};

export default memo(Footer);
