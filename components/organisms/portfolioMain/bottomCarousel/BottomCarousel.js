import { memo } from "react";
import dynamic from 'next/dynamic';
import Link from "next/link";
import { Carousel } from "antd";
import { useRouter } from "next/router";
import img from "../../../../assets/img/img.png";
import BottomCarouselItem from "./BottomCarouselItem";
import { Col, Row } from "../../../atoms";
const Button = dynamic(() => import('../../molecules/button/Button'));


import styles from "../PortfolioMain.module.scss";

const BottomCarousel = ({ data }) => {
  const router = useRouter();
  const onClick = (slug) => {
    router.push(`/portfolio/${slug}`);
  };

  return (
    <Col className={styles.bottomCarouselSectionMainWrapper}>
      <Carousel
        slidesToShow={3}
        autoplay
        dots={false}
        responsive={[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
        ]}
      >
        {data?.map((el) => (
          <BottomCarouselItem
            key={el?.id}
            img={el?.logo_image || img}
            title={el?.title}
            desc={el?.technologies}
            onClick={() => onClick(el.slug)}
          />
        ))}
      </Carousel>

      <Row className={styles.buttonWrapper}>
        <Link href="/services" prefetch={false}>
          <Button text={"Our Services"} whiteButton />
        </Link>
        <Link href="/contact-us" prefetch={false}>
          <Button text={"Contact"} whiteButton />
        </Link>
      </Row>
    </Col>
  );
};

export default memo(BottomCarousel);
