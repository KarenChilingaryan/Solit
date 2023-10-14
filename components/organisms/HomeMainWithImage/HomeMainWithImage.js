import { memo, useContext, useEffect, useRef, useState } from "react";
import { Breadcrumb } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Paragraph, SeoCard } from "../../atoms";
import rughtRow from "../../../assets/img/icons/u_arrow-up.svg";
import { BreadcrumbContext } from "../../../utils/hooks/contexts/bredcrumb";
import { postsSeoFieldsApi } from "../../../services/postsSeoFieldsApi";
import { websiteUrl } from "../../../utils/hooks/constants/pageUrl";

import styles from "./HomeMainWithImage.module.scss";

const HomeMainWithImage = ({ firstImage, className, children, seoName = '' }) => {
  const routes = useRouter()
  const [hideToTop, setHideToTop] = useState(false)
  const [seoData, setSeoData] = useState(null)
  const [percents, setPercents] = useState({
    percent0: 0,
    percent1: 0,
    percent2: 0,
    percent4: 0
  })

  console.log(className, 'className');

  const socialRef = useRef(null)
  const goToTop = useRef(null)
  const refContent = useRef(null)
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
      const goToTopElement = goToTop.current;
      if (!goToTopElement) return;

      const { top: goToTopTop, height: goToTopHeight } = goToTopElement.getBoundingClientRect();

      const targetElementContent = refContent.current;
      if (!targetElementContent) return;

      const { height: heightContent } = targetElementContent.getBoundingClientRect();

      const targetElement = socialRef.current;
      if (!targetElement) return;

      const { top, height } = targetElement.getBoundingClientRect();

      const parentElem = socialRef.current.children;
      if (parentElem) {

        const element01 = parentElem[0]?.children[0]?.children[1]?.clientWidth
        const element02 = parentElem[0]?.clientWidth - element01;
        const element03 = top + window?.scrollY + height - element02;
        const percent0 = ((element03 - heightContent) / element01) * 100;

        const element11 = parentElem[1]?.children[0]?.children[1]?.clientWidth
        const element12 = parentElem[1]?.clientWidth - element11;
        const element13 = top + window?.scrollY + height - element12 - parentElem[0]?.clientWidth;
        const percent1 = ((element13 - heightContent) / element11) * 100 - 25

        const element21 = parentElem[1]?.children[0]?.children[1]?.clientWidth
        const element22 = parentElem[1]?.clientWidth - element21;
        const element23 = top + window?.scrollY + height - element22 - parentElem[0]?.clientWidth - parentElem[1]?.clientWidth;
        const percent2 = ((element23 - heightContent) / element21) * 100 - 50

        // console.log(goToTopTop + window?.scrollY + goToTopHeight - heightContent);
        const percent4 = ((goToTopTop + window?.scrollY + goToTopHeight - heightContent) / goToTop.current.children[0].children[0].clientWidth) * 100;
        setPercents({
          percent0,
          percent1,
          percent2,
          percent4
        })
      }
    };
    setTimeout(() => {
      handleScroll();
    }, 1000)

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
      setSeoData(data)
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
    <div className={`${styles.content} ${styles[className]}`} ref={refContent}>
      {seoData &&
        <SeoCard details={
          {
            pageDescription: seoData?.meta_description,
            pageKeyWords: seoData?.meta_keywords,
            pageUrl: websiteUrl + routes.asPath,
            title: seoData?.meta_title,
          }}
        />
      }
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
        <div className={styles.socialSitesValues} ref={socialRef}>

          {data?.contact?.map((el, i) =>
            (el.name == "Telegram" || el.name == 'Linkedin' || el.name == 'Whatsapp') &&
            <Link href={el.link} target="_blank" key={i}>
              <div className={styles.site}>
                <Image src={el.logo} className={styles.image} width={80} height={80} alt="image"
                  style={{
                    ...(className == 'portfolioItem' && percents["percent" + i] && percents["percent" + i] + 25 > 0) ? {
                      filter: 'invert(0%) sepia(0%) saturate(0%) hue-rotate(0) brightness(0%) contrast(100%)'
                    } : {}
                  }}
                />
                <Paragraph className={styles.text} style={
                  {
                    ...(
                      className == 'portfolioItem' && percents['percent' + i] ?
                        {
                          backgroundImage: `linear-gradient(to right, black ${percents['percent' + i]}%, white ${percents['percent' + i]}%)`,
                          backgroundClip: 'text',
                          '-webkit-background-clip': 'text',
                          color: 'transparent',
                        }
                        : {
                          color: 'white'
                        }
                    )
                  }
                }>{el.name}</Paragraph>
              </div>
            </Link>
          )}
        </div>
      </div>
      {
        !hideToTop && (
          <div
            className={`${styles.socialSites} ${styles.socialSitesTop}`}
            onClick={scrallToTop}
            ref={goToTop}
          >
            <div className={styles.site}>
              <Paragraph className={styles.text}
                style={
                  {
                    ...(
                      className == 'portfolioItem' && percents['percent4'] ?
                        {
                          backgroundImage: `linear-gradient(to right, black ${percents['percent4']}%, white ${percents['percent4']}%)`,
                          backgroundClip: 'text',
                          '-webkit-background-clip': 'text',
                          color: 'transparent',
                        }
                        : {
                          color: 'white'
                        }
                    )
                  }
                }
              >Go To Top</Paragraph>
              <Image
                style={{
                  transform: 'rotate(90deg)',
                  ...(className == 'portfolioItem' && percents["percent4"] && percents["percent4"] - 125 > 0) ? {
                    filter: 'invert(0%) sepia(0%) saturate(0%) hue-rotate(0) brightness(0%) contrast(100%)'
                  } : {}
                }}
                src={rughtRow}
                className={styles.image}
                width={80}
                height={80}
                alt="image"
              />
            </div>
          </div>
        )
      }
      {
        firstImage && (
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
        )
      }
      {children}
    </div >
  );
};

export default memo(HomeMainWithImage);
