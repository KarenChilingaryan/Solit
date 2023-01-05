import { memo } from "react";
import { Col } from "../../atoms";
import styles from "./HomeMain.module.scss";

import HomeMainTexts from "../../molecules/homeMainTexts/HomeMainTexts";
import Button from "../../molecules/button/Button";

const HomeMain = ({ data }) => {
  // const { color_text, default_text, description } = data;
  // const defaultText = "Your partner for software innovations";
  // const colorText = "software";

  // const smallText =
  //   "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal";

  const buttonText = "Let's talk";

  return (
    <Col className={styles.MainWrapper}>
      <HomeMainTexts result={data} smallText={data?.description} home h1/>
      <Col className={styles.buttonWrapper}>
        <Button text={buttonText} />
      </Col>
    </Col>
  );
};

export default memo(HomeMain);
