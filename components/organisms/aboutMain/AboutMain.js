import { memo } from "react";
import { useSelector } from "react-redux";
import Button from "../../molecules/button/Button";
import { Row, Col } from "../../atoms";
import AboutMainItem from "../../molecules/aboutMainItem/AboutMainItem";
import Title from "../../molecules/title/Title";

import styles from "./AboutMain.module.scss";
import Link from "next/link";

const AboutMain = () => {
  const buttonText = "Our Services";
  const aboutUsCommunity = useSelector(
    (state) =>
      state?.aboutUsCommunityApi?.queries?.["aboutUsCommunity(undefined)"]?.data
  );
  return (
    <div className={styles.aboutPage}>
      <Col className={styles.titleWrapperSmall}>
        <Title title={"About us"} />
      </Col>
      <Col className={styles.aboutMainWrapper}>
        <Row
          justify={"space-between"}
          gutter={[0, "2.60417vw"]}
          className={styles.aboutItems}
        >
          {aboutUsCommunity?.map((el) => (
            <AboutMainItem
              key={el.id}
              title={el?.title}
              desc={el?.description}
            />
          ))}
        </Row>
      </Col>
      <Col className={styles.buttonWrapper}>
        <Link href="/services">
          <Button text={buttonText} lightBlue />
        </Link>
      </Col>
    </div>
  );
};

export default memo(AboutMain);
