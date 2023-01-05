import { memo } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Col, Row } from "../../atoms";
import filterCover from "../../../assets/img/filterCover.png";

import styles from "./Filters.module.scss";

const FiltersCard = ({ coverImg, img, title, subTitle, desc, id }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/portfolio/${id}`);
  };

  return (
    <Col
      className={styles.filterCardMainWrapper}
      md={6}
      sm={8}
      xs={12}
      onClick={handleClick}
    >
      <Col>
        <Image
          src={coverImg || filterCover}
          alt={"cover"}
          className={styles.coverImg}
          //   style={{ width: "380px", height: "323px" }}
        />
      </Col>

      <Col className={styles.wrapper}>
        <Row
          style={{
            display: "grid",
            gridTemplateColumns: "24% auto",
            gap: "20px",
          }}
        >
          <Image
            src={img || filterCover}
            alt={"portfolio"}
            className={styles.prjImg}
          />
          <Col className={styles.textWrapper}>
            <Col className={styles.title}>{title}</Col>
            <Col className={styles.subTitle}>{subTitle}</Col>
          </Col>
        </Row>
        <Col className={styles.desc}>{desc}</Col>
      </Col>
    </Col>
  );
};

export default memo(FiltersCard);
