import { memo } from "react";
import { Row } from "../../atoms";
import bgImage from "../../../assets/img/main-bg.png";
import AboutItem from "../../molecules/aboutItem/AboutItem";
import WhatToKnow from "../../molecules/whatToKnow/WhatToKnow";
import { HomeMain } from "../homeMain";
import { HomeMainWithImage } from "../HomeMainWithImage";
import impactIcon from "../../../assets/img/u_adjust-circle.svg";

import styles from "./WhatWeDo.module.scss";

const WhatWeDo = () => {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <HomeMainWithImage firstImage={bgImage}>
      <>
        <Row className={styles.whatWeDoMainWrapper}>
          <HomeMain
            data={{
              title: "Where the stars meet",
              firstSubtitle:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo scelerisque nunc nec aliquet. Etiam lobortis erat libero, eget bibendum lorem congue nec. Ut pellentesque faucibus aliquet. In vitae est non eros placerat tristique ut ac lectus. Integer ultrices faucibus ultricies. Etiam posuere quam ligula, eu imperdiet nisi maximus vitae. Suspendisse ipsum quam, ullamcorper at blandit nec, lacinia sed ante. Nam a placerat nisi. Cras pretium, dolor viverra feugiat tempor, mi diam laoreet metus, ut elementum arcu odio eu velit. Sed condimentum dapibus quam id blandit. Pellentesque lorem nisl, interdum a dui quis, ullamcorper blandit mi. Vivamus fermentum, elit suscipit ullamcorper eleifend, eros mi consectetur nunc, sed placerat magna tortor sed leo. Vestibulum in augue sed felis aliquam placerat a euismod magna. Morbi egestas metus id lacus pharetra, congue congue est ornare Proin eu interdum ex. Cras odio dolor, laoreet in dui ut, rutrum tempus libero. Vivamus nec orci sapien. Maecenas sit amet turpis consectetur, mattis lorem vitae, luctus risus. Suspendisse maximus lorem dolor, eu consequat risus tempor non. In lobortis eu purus non feugiat. Pellentesque eleifend a turpis.",
              buttonText: "Let’s talk",
            }}
            ellipsis
          />
          <Row className={styles.ourServices}>
            {data.map((el, i) => (
              <AboutItem
                key={i}
                title={"Our Approach"}
                desc={
                  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
                }
                icon={impactIcon}
                weDo
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
