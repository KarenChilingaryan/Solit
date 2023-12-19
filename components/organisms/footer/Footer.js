import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Col, Row, Paragraph } from "../../atoms";
import logoFooter from "../../../assets/img/bigLogo.png";

import styles from "./Footer.module.scss";

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
        title: "Expertise",
        data: [
          {
            link: "/services",
            name: "Our Services",
          },
          {
            link: "/what-we-do",
            name: "Tech Stack",
          },
          {
            link: "/about-us",
            name: "About Us",
          },
          {
            link: "/portfolio",
            name: "Portfolio",
          },
          {
            link: "/careers",
            name: "Careers",
          },
        ],
      },
    },

    {
      company: {
        title: "Company",
        data: [
          {
            link: "/terms-and-conditions",
            name: "Terms and Conditions",
          },
          {
            link: "/privacy-policy",
            name: "Privacy Policy",
          },
          {
            link: "/blog",
            name: "Blog",
          },
          {
            link: "/contact-us",
            name: "Contact",
          },
        ],
      },
    },
  ];

  const footerApi = useSelector(
    (state) => state?.footerApi?.queries?.["footer(undefined)"]?.data
  );

  const info =
    footerApi && footerApi.office
      ? {
        address: footerApi.office.address,
        mail: footerApi.office.mail,
        number: footerApi.office.number,
      }
      : {};

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
              <Link href={el.link} key={idx} prefetch={false}>
                {el.name}
              </Link>
            </Paragraph>
          ))}
        </Col>
        <Col className={styles.companyWrapper}>
          <Paragraph className={styles.textTitle}>
            {dataDefault[2].company.title}
          </Paragraph>
          {dataDefault[2].company.data.map((el, idx) => (
            <Paragraph className={styles.text} key={idx}>
              <Link href={el.link} key={idx} prefetch={false}>
                {el.name}
              </Link>
            </Paragraph>
          ))}
        </Col>
        <Col className={styles.companyInfoWraper}>
          <Paragraph className={styles.textTitle}>Office</Paragraph>
          {
            Object.keys(info).map((el, idx) => <Link
              target="_blank"
              href={el == "address" ? footerApi?.office?.address_link : el === "mail" ? `mailto:${info[el]}?` : `tel:${info[el]}`}
              className={styles.text}
              key={idx}
            >
              {info[el]}
            </Link>
            )
          }
        </Col>
        <Col className={styles.socialIconsWrapper}>
          <Paragraph
            className={`${styles.socialIconsTitle} ${styles.textTitle}`}
          >
            Let’s Contact for Great
          </Paragraph>
          {footerApi &&
            footerApi?.contact?.map((item, index) => (
              <Link href={item.link} target="_blank" key={index} prefetch={false}>
                <Image
                  src={item.logo || linkedIn}
                  alt="logo"
                  className={styles.socialIcons}
                  width={300}
                  height={300}
                />
              </Link>
            ))}
        </Col>
      </Row>
    </div>
  );
};

export default memo(Footer);
