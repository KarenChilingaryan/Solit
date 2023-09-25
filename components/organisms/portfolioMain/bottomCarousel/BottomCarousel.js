import { memo } from "react";
import { Carousel } from "antd";
import img from "../../../../assets/img/img.png";
import styles from "../PortfolioMain.module.scss";
import BottomCarouselItem from "./BottomCarouselItem";
import { Col, Row } from "../../../atoms";
import Button from "../../../molecules/button/Button";
import Link from "next/link";
import { useRouter } from "next/router";

// const data = [
//   {
//     id: 1,
//     image: img,
//     title: "Meditative Minds",
//     desc: "#Android #Kotlin #Java#RXjava",
//   },
//   {
//     id: 2,
//     image: img,
//     title: "Huma",
//     desc: "#Android #Kotlin #Java#RXjava",
//   },
//   {
//     id: 3,
//     image: img,
//     title: "Nmible",
//     desc: "#Android #Kotlin #Java#RXjava",
//   },
//   {
//     id: 4,
//     image: img,
//     title: "Meditative Minds",
//     desc: "#Android #Kotlin #Java#RXjava",
//   },
//   {
//     id: 5,
//     image: img,
//     title: "Huma",
//     desc: "#Android #Kotlin #Java#RXjava",
//   },
//   {
//     id: 6,
//     image: img,
//     title: "Nmible",
//     desc: "#Android #Kotlin #Java#RXjava",
//   },
// ];

const BottomCarousel = ({ data }) => {
  const router = useRouter();
  const onClick = (id, slug) => {
    router.push(`/portfolio/${id}/${slug}`);
  }

  return (
    <Col className={styles.bottomCarouselSectionMainWrapper}>
      <Carousel slidesToShow={3} autoplay dots={false} responsive={[
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        }
      ]}>
        {data?.map((el) => (
          <BottomCarouselItem
            key={el?.id}
            img={el?.logo_image || img}
            title={el?.title}
            desc={el?.technologies}
            onClick={() => onClick(el.id, el.slug)}
          />
        ))}
      </Carousel>

      <Row className={styles.buttonWrapper}>
        <Link href="/services">
          <Button text={"Our Services"} whiteButton />
        </Link>
        <Link href="/contact-us">
          <Button text={"Contact"} whiteButton />
        </Link>
      </Row>
    </Col>
  );
};

export default memo(BottomCarousel);
