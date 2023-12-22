import { memo } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Row } from "../../atoms";
import bgImage from "../../../assets/img/main-bg-what-we-do.png";
import { HomeMain } from "../homeMain";
import { HomeMainWithImage } from "../HomeMainWithImage";
const AboutItem = dynamic(() => import("../../molecules/aboutItem/AboutItem"));
const WhatToKnow = dynamic(() =>
  import("../../molecules/whatToKnow/WhatToKnow")
);

import styles from "./WhatWeDo.module.scss";

const WhatWeDo = () => {
  const router = useRouter();
  const handleClickDiscuss = () => {
    router.push(`/discuss-project`);
  };

  const postsWhatWeDoApi = useSelector(
    (state) => state?.postsWhatWeDoApi?.queries?.["posts(undefined)"]?.data
  );
  const handleClick = () => {
    router.push(`/discuss-project`);
  };

  return (
    <HomeMainWithImage firstImage={bgImage} seoName="what_we_do">
      <>
        <Row className={styles.whatWeDoMainWrapper}>
          <HomeMain
            h1={true}
            data={{
              title: postsWhatWeDoApi?.data_text[0].title,
              firstSubtitle: postsWhatWeDoApi?.data_text[0].description,
            }}
            showMoreButton={true}
            onClick={handleClick}
          />

          <Row className={styles.ourServices}>
            {postsWhatWeDoApi?.data_list.map((el, i) => (
              <Link
                href={`/what-we-do/${el.slug}`}
                key={i}
                className={styles.block}
                prefetch={false}
              >
                <AboutItem
                  weDo
                  weDoWidth
                  title={el.title}
                  desc={el.description}
                  icon={el.original_logo_what_we_do}
                />
              </Link>
            ))}
          </Row>
          <Row className={styles.weKnowSection}>
            <WhatToKnow onClick={handleClickDiscuss} />
          </Row>
        </Row>
      </>
    </HomeMainWithImage>
  );
};

export default memo(WhatWeDo);
