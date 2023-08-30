import { Breadcrumb } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Paragraph } from "../../atoms";
import rughtRow from "../../../assets/img/right-row.svg"

import styles from "./HomeMainWithImage.module.scss";

const HomeMainWithImage = ({ firstImage, className, children }) => {
  const routes = useRouter()
  const [breadcrumbElements, setBreadcrumbElements] = useState([])
  const [hideToTop, setHideToTop] = useState(false)

  const splitAndCapitalize = (str) => {
    const parts = str.split("/").filter((word) => word !== "");
    let currentLink = "";
    return parts.map((word, index) => {
      currentLink += `/${word}`;
      const wordsWithoutHyphen = word.split("-").join(" ");
      const capitalizedWords = wordsWithoutHyphen
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      return {
        name: capitalizedWords,
        link: currentLink,
      };
    });
  };

  useEffect(() => {
    if (routes) {
      setBreadcrumbElements([{ name: "Main", link: '/' }, ...splitAndCapitalize(routes.asPath)])
    }
  }, [routes])

  const data = useSelector(
    (state) => state?.footerApi?.queries?.["footer(undefined)"]?.data
  );

  const scrallToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 200) {
        setHideToTop(true)
      } else {
        setHideToTop(false)
      }
    };
    handleScroll()

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.content} ${styles[className]}`}>
      {
        breadcrumbElements?.length > 1 &&
        <Breadcrumb className={styles.breadcrumb} separator=">">
          {breadcrumbElements.map((el, index) =>
            <Breadcrumb.Item href={el.link} key={index}> {el.name}</Breadcrumb.Item>
          )}
        </Breadcrumb>
      }
      <div className={styles.socialSites}>
        {data?.contact?.map((el, i) =>
          (el.name == "Telegram" || el.name == 'Linkedin' || el.name == 'Whatsapp') &&
          <Link href={el.link} target="_blank" key={i}>
            <div className={styles.site}>
              <Image src={el.logo} className={styles.image} width={80} height={80} />
              <Paragraph className={styles.text}>{el.name}</Paragraph>
            </div>
          </Link>
        )}
      </div>
      {!hideToTop &&
        <div className={`${styles.socialSites} ${styles.socialSitesTop}`} onClick={scrallToTop}>
          <div className={styles.site}>
            <Paragraph className={styles.text}>Go To Top</Paragraph>
            <Image src={rughtRow} className={styles.image} width={80} height={80} />
          </div>
        </div>
      }
      {
        firstImage &&
        <Image
          src={firstImage}
          style={{
            width: "100%",
            height: "auto",
            position: "absolute",
            top: 0,
          }}
        />
      }
      {children}
    </div>
  );
};

export default memo(HomeMainWithImage);
