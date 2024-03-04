import { memo, useCallback, useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
import { SeoCard } from "../../atoms";
import Row from "../../atoms/Row";
import HomeMainWithImage from '../HomeMainWithImage/HomeMainWithImage'
import HomeMain from '../homeMain/HomeMain'
import { portfolioApi } from "../../../services/portfolioApi";
import Button from "../../molecules/button/Button";
import WhatToKnow from "../../molecules/whatToKnow/WhatToKnow";
import Col from "../../atoms/Col";
import arrow from "../../../assets/img/arrow.svg";
import { BreadcrumbContext } from "../../../utils/hooks/contexts/bredcrumb";
import { websiteUrl } from "../../../utils/hooks/constants/pageUrl";
import PortfolioCard from "../../molecules/portfolioCard/PortfolioCard";

import styles from "./PortfolioItem.module.scss";

const PortfolioItem = () => {
  const { breadcrumbElements, setBreadcrumbElements } =
    useContext(BreadcrumbContext);
  const { id } = useRouter().query;
  const router = useRouter();
  const mainContainer = useRef(null);
  const itemDescription = useRef(null);
  const [padding, setPadding] = useState(1);
  const handleClickDiscuss = () => {
    router.push(`/discuss-project`);
  };

  const dispatch = useDispatch();
  const [postPortfolioApiData, setPostPortfolioApiData] = useState(null);

  const postPortfolioApi = useSelector(
    (state) => state?.postPortfolioApi?.queries?.["posts(undefined)"]?.data
  );

  const handleClick = (page, slug) => {
    router.push(`${page}/${slug}`);
  };

  const getData = useCallback(async (id) => {
    const res = await dispatch(
      await portfolioApi.endpoints.portfolio.initiate(id)
    );
    setPostPortfolioApiData(res.data);
  }, []);

  useEffect(() => {
    if (id) {
      getData(id);
    }
  }, [id]);

  useEffect(() => {
    if (postPortfolioApiData && breadcrumbElements) {
      const newBred = [...breadcrumbElements?.slice(0, 3)];
      newBred[2] = { name: postPortfolioApiData.breadcrumb, link: "/" };
      setBreadcrumbElements(newBred);
    }
  }, [postPortfolioApiData]);

  const getRandomValuesFromArray = (arr, numberOfValues) => {
    const copyArr = [...arr];

    for (let i = copyArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copyArr[i], copyArr[j]] = [copyArr[j], copyArr[i]];
    }

    return copyArr.slice(0, numberOfValues);
  };

  useEffect(() => {
    if (postPortfolioApiData && itemDescription?.current) {
      const dif =
        (780 / (1280 / itemDescription.current.offsetWidth) -
          itemDescription.current.children[1].children[0].children[0]
            .clientHeight) *
        (2.3 / (1280 / itemDescription.current.offsetWidth));
      setPadding(dif > 110 ? 110 : dif);
    }
  }, [itemDescription, postPortfolioApiData]);

  return (
    <Row className={styles.profilePage} ref={mainContainer}>
      <SeoCard
        details={{
          pageDescription: postPortfolioApiData?.meta_description,
          pageKeyWords: postPortfolioApiData?.meta_keywords,
          pageUrl: websiteUrl + router.asPath,
          title: postPortfolioApiData?.meta_title,
        }}
      />
      <HomeMainWithImage
        className={"portfolioItem"}
        mainContainer={mainContainer}
      >
        <Row className={styles.content}>
          <Row
            className={styles.itemDescription}
            style={{
              ...(padding >= 0 ? { paddingTop: padding / 32 + "vw" } : {}),
            }}
            ref={itemDescription}
          >
            <Col className={styles.imageCard}>
              {postPortfolioApiData?.webp_image && (
                <Image
                  src={postPortfolioApiData?.webp_image}
                  width={1000}
                  height={1900}
                  alt="image"
                />
              )}
            </Col>
            <Col className={styles.testSection}>
              <HomeMain
                h1={true}
                data={{
                  title: postPortfolioApiData?.title,
                  firstSubtitle:
                    postPortfolioApiData?.description
                }}
                className={"prtfolioItem"}
              />
              <Row className={styles.stacks}>
                {postPortfolioApiData?.technology_logos?.map((item, i) => (
                  <Image
                    src={item?.original_logo}
                    className={styles.icon}
                    key={i}
                    width={400}
                    height={200}
                    alt="image"
                  />
                ))}
              </Row>
            </Col>
          </Row>
        </Row>
      </HomeMainWithImage>
      <Row className={styles.whiteSection}>
        <Row className={styles.portfoliosSection}>
          <Row className={styles.text}>
            <HomeMain
              data={{
                title: postPortfolioApi?.data_text[0]?.title,
                firstSubtitle: postPortfolioApi?.data_text[0]?.description,
              }}
              className={"prtfolioItemDesc"}
            />
          </Row>
          <Row
            className={styles.projects}
            justify={"space-between"}
            gutter={[0, "3.645838vw"]}
          >
            {postPortfolioApi &&
              getRandomValuesFromArray(postPortfolioApi?.data_list, 3)?.map(
                (project, i) => (
                  <PortfolioCard
                    onClick={() => handleClick("/portfolio", project.slug)}
                    key={i}
                    component="portfolioItem"
                    name={project.title}
                    image={project.webp_image_portfolio}
                    more={project == "more"}
                    images={project?.technology_logos}
                  />
                )
              )}
          </Row>
          <Row className={styles.buttonWrapper}>
            <Button
              icon={arrow}
              text="Go Back to Portfolio"
              onClick={() => handleClick("/portfolio", "")}
            />
          </Row>
          <Row className={styles.knowMoreSection}>
            <WhatToKnow
              color="#000"
              className={"transparentOppositeBlack"}
              onClick={handleClickDiscuss}
            />
          </Row>
        </Row>
      </Row>
    </Row>
  );
};

export default memo(PortfolioItem);
