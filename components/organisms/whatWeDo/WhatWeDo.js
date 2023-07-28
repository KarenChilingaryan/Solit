import { memo } from "react";
import { Row } from "../../atoms";
import bgImage from "../../../assets/img/main-bg-what-we-do.png";
import AboutItem from "../../molecules/aboutItem/AboutItem";
import WhatToKnow from "../../molecules/whatToKnow/WhatToKnow";
import { HomeMain } from "../homeMain";
import { HomeMainWithImage } from "../HomeMainWithImage";
import styles from "./WhatWeDo.module.scss";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";

const WhatWeDo = () => {
  const router = useRouter();
  const handleClickDiscuss = () => {
    router.push(`/discuss-project`);
  };

  const postsWhatWeDoApi = useSelector(
    (state) => state?.postsWhatWeDoApi?.queries?.["posts(undefined)"]?.data
  );
  const handleClick = (id) => {
    router.push(`/discuss-project`);
  };

  return (
    <HomeMainWithImage firstImage={bgImage}>
      <>
        <Row className={styles.whatWeDoMainWrapper}>
          <HomeMain
            data={{
              title: postsWhatWeDoApi?.data_text[0].title,
              firstSubtitle: postsWhatWeDoApi?.data_text[0].description,
              buttonText: "Let’s talk",
            }}
            onClick={handleClick}
          />
          <Row className={styles.ourServices}>
            {postsWhatWeDoApi?.data_list.map((el, i) => (
              <Link href={`/what-we-do/${el.what_we_do_detail}`} key={i}>
                <AboutItem
                  weDo
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
