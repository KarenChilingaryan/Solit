import Image from "next/image";
import { memo } from "react";
import { Col, Row } from "../../atoms";
import arrow from "../../../assets/img/arrow.svg";
import react from "../../../assets/img/icons/reactjs.svg";

import styles from "./OurProjectCard.module.scss";

const OurProjectCard = ({
  name,
  more,
  image,
  images,
  blogs = false,
  component,
  blogItem = "",
  onClick,
  description,
}) => {
  const array = [1, 2, 3, 4, 5];
  return (
    <Col
      className={`${styles.mainWrapper} ${styles["mainWrapper-" + component]} ${
        more && styles.moreCard
      }`}
      onClick={onClick}
    >
      <Col
        className={`${styles.imageContainer} ${more && styles.moreWrapper} ${
          styles[component]
        } ${styles[blogItem]}`}
      >
        {!more ? (
          <>
            <Image
              src={image}
              alt="icon"
              className={styles.img}
              width={400}
              height={400}
            />
            <Row className={`${styles.positionSection}`}>
              <Row className={styles.name}>{name} </Row>
              <Row className={styles.stacks}>
                {!blogs &&
                  (images || array)?.map((item, i) => (
                    <Image
                      src={item?.original_logo || react}
                      className={styles.icon}
                      key={i}
                      width={100}
                      height={100}
                      alt="image"
                    />
                  ))}
                {blogs && (
                  <Col className={styles.blogDescription}>
                    {description ||
                      "Let’s now explore how to manage your backlog using product data and provide tips and best practices to implement in your workflow."}
                  </Col>
                )}
              </Row>
            </Row>
          </>
        ) : (
          <Row className={styles.more}>
            More <Image src={arrow} width={10} height={10} alt="image" />
          </Row>
        )}
      </Col>
    </Col>
  );
};

export default memo(OurProjectCard);
