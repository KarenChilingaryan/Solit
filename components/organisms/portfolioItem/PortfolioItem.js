import { memo, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
import { Col, Row, SeoCard } from "../../atoms";
import { HomeMainWithImage } from "../HomeMainWithImage";
import { HomeMain } from "../homeMain";
import { portfolioApi } from "../../../services/portfolioApi";
import Button from "../../molecules/button/Button";
import WhatToKnow from "../../molecules/whatToKnow/WhatToKnow";
import OurProjectCard from "../../molecules/ourProjectCard/OurProjectCard";
import arrow from "../../../assets/img/arrow.svg";
import { BreadcrumbContext } from "../../../utils/hooks/contexts/bredcrumb";
import { websiteUrl } from "../../../utils/hooks/constants/pageUrl";

import styles from "./PortfolioItem.module.scss";

const PortfolioItem = () => {
  const { breadcrumbElements, setBreadcrumbElements } =
    useContext(BreadcrumbContext);
  const { id } = useRouter().query;
  const router = useRouter();
  const handleClickDiscuss = () => {
    router.push(`/discuss-project`);
  };

  const dispatch = useDispatch();
  const [postPortfolioApiData, setPostPortfolioApiData] = useState(null);

  const postPortfolioApi = useSelector(
    (state) => state?.postPortfolioApi?.queries?.["posts(undefined)"]?.data
  );
  const handleClick = (slug) => {
    router.push(`/portfolio/${slug}`);
  };

  const getData = async (id) => {
    const res = await dispatch(
      await portfolioApi.endpoints.portfolio.initiate(id)
    );
    setPostPortfolioApiData(res.data);
  };
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

  return (
    <Row className={styles.profilePage}>
      <SeoCard
        details={
          {
            pageDescription: postPortfolioApiData?.meta_description,
            pageKeyWords: postPortfolioApiData?.meta_keywords,
            pageUrl: websiteUrl + router.asPath,
            title: postPortfolioApiData?.meta_title,
          }
        }
      />
      <HomeMainWithImage className={"portfolioItem"}>
        <Row className={styles.content}>
          <Row className={styles.itemDescription}>
            <Col className={styles.imageCard}>
              <Image
                src={postPortfolioApiData?.webp_image}
                width={1000}
                height={1900}
                alt="image"
              />
            </Col>
            <Col className={styles.testSection}>
              <HomeMain
                h1={true}
                data={{
                  title: postPortfolioApiData?.title,
                  firstSubtitle: postPortfolioApiData?.description,
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
              postPortfolioApi?.data_list?.map(
                (project, i) =>
                  i < 3 && (
                    <OurProjectCard
                      onClick={() => handleClick(project.slug)}
                      key={i}
                      component="portfolio"
                      name={project.title}
                      image={project.webp_image_portfolio}
                      more={project == "more"}
                      images={project?.technology_logos}
                    />
                  )
              )}
          </Row>
          <Row className={styles.buttonWrapper}>
            <Button icon={arrow} text="Go Back to Portfolio" />
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
