import { Breadcrumb } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";
import { useFooterQuery } from "../../../services/footerApi";
import { Paragraph } from "../../atoms";

import styles from "./HomeMainWithImage.module.scss";

const HomeMainWithImage = ({ firstImage, className, children }) => {
  const routes = useRouter()
  const [breadcrumbElements, setBreadcrumbElements] = useState([])

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

  const footer = useFooterQuery();
  const { data } = footer;
  
  return (
    <div className={`${styles.content} ${styles[className]}`}>
      <Breadcrumb className={styles.breadcrumb} separator=">">
        {breadcrumbElements.map((el, index) =>
          <Breadcrumb.Item href={el.link}key={index}> {el.name}</Breadcrumb.Item>
        )}
      </Breadcrumb>
      <div className={styles.socialSites}>

        {data?.contact?.map((el, i) =>
          <Link href={el.link} target="_blank" key={i}>
            <div className={styles.site}>
              <Image src={el.logo} className={styles.image} width={80} height={80} />
              <Paragraph className={styles.text}>{el.name}</Paragraph>
            </div>
          </Link>
        )}
      </div>
      <Image
        src={firstImage}
        style={{
          width: "100%",
          height: "auto",
          position: "absolute",
          top: 0,
        }}
      />
      {children}
    </div>
  );
};

export default memo(HomeMainWithImage);
