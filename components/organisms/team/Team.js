import { memo } from "react";
import { Row, Col } from "../../atoms";
import Title from "../../molecules/title/Title";
import TeamItem from "../../molecules/teamItem/TeamItem";
import teamIcon from "../../../assets/img/teamIcon.svg";
import Button from "../../molecules/button/Button";
import { useSelector } from "react-redux";

import styles from "./Team.module.scss";

const buttonText = "Our Portfolio";
const Team = () => {
  const aboutOurTeamTitle = useSelector(
    (state) => state?.aboutOurTeamTitleApi?.queries?.["aboutOurTeamTitle(undefined)"]?.data
  );
  return (
    <Col className={styles.teamMainWrapper}>
      <Col className={styles.titleWrapper}>
        <Title title={aboutOurTeamTitle ? aboutOurTeamTitle[0]?.presentation_title : ''} square={true} whiteTitle />
      </Col>
      <Row
        justify={"space-between"}
        gutter={[0, "2.864587vw"]}
        className={styles.teamItemsWrapper}
      >
        {aboutOurTeamTitle?.map((el, index) => (
          index ? <TeamItem key={el.id} img={el.image || teamIcon} title={el.title} desc={el.description} /> : <></>
        ))}
      </Row>

      <Col className={styles.buttonWrapper}>
        <Button text={buttonText} whiteButton />
      </Col>
    </Col>
  );
};

export default memo(Team);
