import { memo } from "react";
import Image from "next/image";
import { Col, Row, Paragraph } from "../../atoms";

import logoFooter from "../../../assets/img/bigLogo.png";
import fb from "../../../assets/img/fb.png";
import linkedIn from "../../../assets/img/linkedin.png";
import telegram from "../../../assets/img/telegram.png";
import styles from "./Footer.module.scss";
import { useFooterQuery } from "../../../services/footerApi";
import Link from "next/link";

const Footer = () => {
  const dataDefault = [
    {
      info: {
        address: "TGA Business Center, Abelyan 6/4",
        mail: "solit@gmail.com",
        number: "+2-25-635-65",
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

  const info = data && data.office ? {
    address: data.office.address,
    mail: data.office.mail,
    number: data.office.number,
  } : {};
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
          {Object.values(info).map((el, idx) => (
            <Paragraph className={styles.text} key={idx}>
              {el}
            </Paragraph>
          ))}
      </Col>
      <Col className={styles.socialIconsWrapper}>
        <Paragraph className={`${styles.socialIconsTitle} ${styles.textTitle}`} >Let’s Contact for Great</Paragraph>
        {/* data && data[0]?.social_link? */}
        {data && data?.contact?.map((item, index) =>
          <Link href={item.link} target="_blank" key={index}>
            <Image src={item.logo || linkedIn} alt="logo" className={styles.socialIcons} width={50} height={50} />
          </Link>
        )}
      </Col>
    </Row>
    </div >
  );
};

export default memo(Footer);
