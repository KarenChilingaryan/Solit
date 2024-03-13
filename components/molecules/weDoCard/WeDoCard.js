import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Col, Row } from "../../atoms";
import devIcon from "../../../assets/img/devIcon.svg";
import arrow from "../../../assets/img/arrow.svg";

import styles from "./WeDoCard.module.scss";

const WeDoCard = ({ item, fromDetail }) => {
  return (
    <Link
      href={
        item != "more" ? `/what-we-do/${item.slug}` : "/what-we-do"
      }
      prefetch={false}
    >
      <Col
        className={`${styles.weDoCardWrapper} ${fromDetail && styles.fromDetail} ${
          item === "more" && styles.moreWrapper
        }`}
      >
        {item != "more" ? (
          <>
            <Row className={styles.iconWrapper}>
              <Image
                src={item?.original_logo_what_we_do || devIcon}
                className={styles.icon}
                width={40}
                height={40}
                alt="image"
              />
            </Row>
            <Col className={styles.development}>
              {item?.title || "Android Development"}
            </Col>
            <div
              className={styles.description}
            >
              {item?.description}
            </div>
          </>
        ) : (
          <Row className={styles.more}>
            More <Image src={arrow} width={10} height={10} alt="image" />
          </Row>
        )}
      </Col>
    </Link>
  );
};

export default memo(WeDoCard);
