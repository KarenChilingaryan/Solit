import { memo } from "react";
import Image from "next/image";
import { Col, Link, Row } from "../../atoms";
import { HomeMainWithImage } from "../HomeMainWithImage";
import { HomeMain } from "../homeMain";
import portFolioImage from "../../../assets/img/portFolioImage.svg";
import react from "../../../assets/img/icons/reactjs.svg";
import WhatToKnow from "../../molecules/whatToKnow/WhatToKnow";
import OurProjectCard from "../../molecules/ourProjectCard/OurProjectCard";
import ourPtojectImage from "../../../assets/img/unsplash_oXS1f0uZYV4.png";
import { dataProject } from "../portfolios/Portfolios";
import arrow from "../../../assets/img/arrow.svg";

import styles from "./PortfolioItem.module.scss";
import Button from "../../molecules/button/Button";

const PortfolioItem = () => {
  // const { id } = useRouter().query;
  // const shortPresentationPortfolio = useSelector(
  //   (state) =>
  //     state?.shortPresentationPortfolioApi?.queries?.[
  //       "shortPresentationPortfolio(undefined)"
  //     ]?.data
  // );
  // const portfolio = useSelector(
  //   (state) => state?.portfolioApi?.queries?.[`portfolio("${id}")`]?.data
  // );
  const array = [1, 2, 3, 4, 5];
  return (
    <Row className={styles.profilePage}>
      <HomeMainWithImage>
        <Row className={styles.content}>
          <Row className={styles.itemDescription}>
            <Col className={styles.imageCard}>
              <Image src={portFolioImage} />
            </Col>
            <Col className={styles.testSection}>
              <HomeMain
                data={{
                  title: "Where the stars meet",
                  firstSubtitle:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo scelerisque nunc nec aliquet. Etiam lobortis erat libero, eget bibendum lorem congue nec. Ut pellentesque faucibus aliquet. In vitae est non eros placerat tristique ut ac lectus. Integer ultrices faucibus ultricies. Etiam posuere quam ligula, eu imperdiet nisi maximus vitae. Suspendisse ipsum quam, ullamcorper at blandit nec, lacinia sed ante. ",
                }}
              />
              <Row className={styles.stacks}>
                {array?.map((_, i) => (
                  <Image src={react} className={styles.icon} key={i} />
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
                title: "Where the stars meet",
                firstSubtitle:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo scelerisque nunc nec aliquet. Etiam lobortis erat libero, eget bibendum lorem congue nec. ",
              }}
            />
          </Row>
          <Row
            className={styles.projects}
            justify={"space-between"}
            gutter={[0, "3.645838vw"]}
          >
            {dataProject?.map(
              (project, i) =>
                i < 3 && (
                  <OurProjectCard
                    key={i}
                    name={project}
                    image={ourPtojectImage}
                    more={project == "more"}
                    width={"21.09334vw"}
                  />
                )
            )}
          </Row>
          <Row className={styles.buttonWrapper}>
            <Button icon={arrow} text="Go Back to Portfolio" />
          </Row>
          <Row className={styles.knowMoreSection}>
            <WhatToKnow color="#000" />
          </Row>
        </Row>
      </Row>
    </Row>
  );
};

export default memo(PortfolioItem);
