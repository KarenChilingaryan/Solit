import { memo } from "react";
import Image from "next/image";
import { Button as ShowMore, Col, Row, Tabs } from "../../atoms";
import Button from "../../molecules/button/Button";
import ourTeamBg from "../../../assets/img/our-team_bg.png";
import devIcon from "../../../assets/img/devIcon.svg";
import showMore from "../../../assets/img/showMore.svg";
import goRight from "../../../assets/img/goRigthArrow.svg";

import styles from "./WhatWeDo.module.scss";

// const Context = ({ icon, context, title }) => {
//   return (
//     <Row>
//       <Row className="contextHeader">
//         <Image src={icon} />
//         <Col className="contextTitle">{title}</Col>
//       </Row>
//       <Row className="context">{context}</Row>
//       <Button text="Show more" />
//     </Row>
//   );
// };

const WhatWeDo = () => {
  const onChange = (e) => {
    // setSize(e.target.value);
  };
  const context =
    "Obtain a top-of-the-class custom mobile application of any complexity with Andersen - a mobile app development company possessing deep expertise and knowledge of the latest mobile development frameworks With Andersen, you will get a source of solid IT expertise and well-honed skills in mobile software projects";
  const title = "Mobile Development";
  return (
    <div className={styles.container}>
      <Col className={styles.sectionWrapper}>
        <Col className={styles.whatWeDoWrapper}>
          <Col className={styles.title}>What we do?</Col>
          <Col className={styles.description}>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
            esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
            Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
            aute id deserunt nisi.
          </Col>
          <Tabs
            defaultActiveKey="1"
            type="card"
            className={styles.tabs}
            // size={size}
            items={new Array(7).fill(null).map((_, i) => {
              const id = String(i + 1);
              return {
                label: title,
                key: id,
                children: (
                  // <Context icon={devIcon} context={context} title={title} />
                  <Row className={styles.contextWrapper}>
                    <Row className={styles.contextHeader}>
                      <Image src={devIcon} className={styles.contextIcon} />
                      <Col className={styles.contextTitle}>{title}</Col>
                    </Row>
                    <Row className={styles.context}>{context}</Row>
                    <ShowMore className={styles.button}>
                      Show more <Image src={showMore} className={styles.btnImg} />
                    </ShowMore>
                  </Row>
                ),
              };
            })}
          />
        </Col>

        <Button text="More expertise" boldWhite icon={goRight} />

      </Col>
      <Image
        src={ourTeamBg}
        className={styles.backImage}
      />
    </div>
  );
};

export default memo(WhatWeDo);
