import { memo } from "react";
import { Row, Col } from "../../atoms";
import ValueListItem from "../../molecules/valueListItem/ValueListItem";
import ValueTextItem from "../../molecules/valueTextItem/ValueTextItem";
import Button from "../../molecules/button/Button";

import styles from "./Values.module.scss";
import Link from "next/link";

const Values = () => {
  const data = {
    list: [
      {
        id: 1,
        text: "Learn & Develope",
      },
      {
        id: 2,
        text: "Team Work & Friendship",
      },
      {
        id: 3,
        text: "Transparency & Professionalism",
      },
      {
        id: 4,
        text: "Collaborate & Share",
      },
    ],

    textList: [
      {
        id: 1,
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      },
      {
        id: 2,
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      },
    ],
  };
  return (
    <Col className={styles.valuesMainWrapper}>
      <Row>
        <Col span={12} className={styles.valuesListItemWrapper}>
          {data.list.map((el) => (
            <ValueListItem text={el?.text} key={el?.id} />
          ))}
        </Col>
        <Col span={12}>
          <ValueTextItem data={data.textList} />
        </Col>
      </Row>
      <Col className={styles.buttonWrapper}>
        <Link href="/services">
          <Button text={"Our Services"} />
        </Link>
      </Col>
    </Col>
  );
};

export default memo(Values);
