import { memo, useContext, useEffect, useRef, useState } from "react";
import { Breadcrumb } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Paragraph, SeoCard } from "../../atoms";
import rughtRow from "../../../assets/img/right.svg";
import { BreadcrumbContext } from "../../../utils/hooks/contexts/bredcrumb";
import { postsSeoFieldsApi } from "../../../services/postsSeoFieldsApi";
import { websiteUrl } from "../../../utils/hooks/constants/pageUrl";

import styles from "./HomeMainWithImage.module.scss";

const HomeMainWithImage = ({
  firstImage,
  className,
  children,
  seoName = "",
}) => {
  const routes = useRouter();
  const [hideToTop, setHideToTop] = useState(false);
  const [seoData, setSeoData] = useState(null);
  const dispatch = useDispatch();

  const { breadcrumbElements, setBreadcrumbElements } =
    useContext(BreadcrumbContext);

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
      setBreadcrumbElements([
        { name: "Main", link: "/" },
        ...splitAndCapitalize(routes.asPath).slice(0, 1),
      ]);
    }
  }, [routes]);

  const data = useSelector(
    (state) => state?.footerApi?.queries?.["footer(undefined)"]?.data
  );

  const scrallToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 200) {
        setHideToTop(false);
      } else {
        setHideToTop(false);
      }
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getSeoData = async () => {
    const res = await dispatch(
      await postsSeoFieldsApi.endpoints.seoData.initiate(seoName)
    );
    const data = res?.data ? res?.data[0] : null;
    if (data) {
      setSeoData(data);
    }
  };

  useEffect(() => {
    if (seoName) {
      getSeoData();
    }
  }, [seoName]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 200) {
        setHideToTop(false);
      } else {
        setHideToTop(false);
      }
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const lastBreadcrumb = document.getElementById("last-breadcrumb");
    if (lastBreadcrumb) {
      lastBreadcrumb.scrollIntoView({ behavior: "smooth", block: "end", inline: 'end' });
    }
  }, [breadcrumbElements]);

  return (
    <div className={`${styles.content} ${styles[className]}`}>
      {seoData && (
        <SeoCard
          details={{
            pageDescription: seoData?.meta_description,
            pageKeyWords: seoData?.meta_keywords,
            pageUrl: websiteUrl + routes.asPath,
            title: seoData?.meta_title,
          }}
        />
      )}
      {breadcrumbElements?.length > 1 && (
        <div ref={containerRef} className={styles.scrollContainer}>
          <Breadcrumb
            className={styles.breadcrumb}
            separator={<Image src={rughtRow} width={24} height={24} alt="" />}
          >
            {breadcrumbElements.map((el, index) => (
              <Breadcrumb.Item
                href={el.link}
                key={index}
                id={index == breadcrumbElements.length - 1 && "last-breadcrumb"}
              >
                {" "}
                {el.name}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </div>
      )}
      <div className={styles.socialSites}>
        {data?.contact?.map(
          (el, i) =>
            (el.name == "Telegram" ||
              el.name == "Linkedin" ||
              el.name == "Whatsapp") && (
              <Link href={el.link} target="_blank" key={i}>
                <div className={styles.site}>
                  <Image
                    src={el.logo}
                    className={styles.image}
                    width={80}
                    height={80}
                    alt="image"
                  />
                  <Paragraph className={styles.text}>{el.name}</Paragraph>
                </div>
              </Link>
            )
        )}
      </div>
      {!hideToTop && (
        <div
          className={`${styles.socialSites} ${styles.socialSitesTop}`}
          onClick={scrallToTop}
        >
          <div className={styles.site}>
            <Paragraph className={styles.text}>Go To Top</Paragraph>
            <Image
              src={rughtRow}
              className={styles.image}
              width={80}
              height={80}
              alt="image"
            />
          </div>
        </div>
      )}
      {firstImage && (
        <Image
          alt="image"
          src={firstImage}
          style={{
            width: "100%",
            height: "auto",
            position: "absolute",
            top: 0,
          }}
        />
      )}
      {children}
    </div>
  );
};

export default memo(HomeMainWithImage);
