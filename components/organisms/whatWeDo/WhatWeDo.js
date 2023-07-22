import { memo } from "react";
import { Row } from "../../atoms";
import bgImage from "../../../assets/img/main-bg.png";
import AboutItem from "../../molecules/aboutItem/AboutItem";
import WhatToKnow from "../../molecules/whatToKnow/WhatToKnow";
import { HomeMain } from "../homeMain";
import { HomeMainWithImage } from "../HomeMainWithImage";
import impactIcon from "../../../assets/img/u_adjust-circle.svg";

import styles from "./WhatWeDo.module.scss";
import { useSelector } from "react-redux";

const WhatWeDo = () => {
  const data = [1, 2, 3, 4, 5, 6];
  const postsWhatWeDoApi = useSelector(
    (state) => state?.postsWhatWeDoApi?.queries?.["posts(undefined)"]?.data
  );

  console.log(postsWhatWeDoApi?.data_text[0].description);
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
            ellipsis
          />
          <Row className={styles.ourServices}>
            {postsWhatWeDoApi?.data_list.map((el, i) => (
              <AboutItem
                key={i}
                icon={impactIcon}
                weDo
                title={el.title}
                desc={el.description}
                icon={el.original_logo_what_we_do}
              />
            ))}
          </Row>
          <Row className={styles.weKnowSection}>
            <WhatToKnow />
          </Row>
        </Row>
      </>
    </HomeMainWithImage>
  );
};

export default memo(WhatWeDo);
