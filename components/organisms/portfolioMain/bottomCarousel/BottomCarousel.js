import { memo } from "react";
import { Carousel } from "antd";
import img from "../../../../assets/img/img.png";
import styles from "../PortfolioMain.module.scss";
import BottomCarouselItem from "./BottomCarouselItem";
import { Col, Row } from "../../../atoms";
import Button from "../../../molecules/button/Button";

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
          />
        ))}
      </Carousel>

      <Row className={styles.buttonWrapper}>
        <Button text={"Our Services"} whiteButton />
        <Button text={"Contact"} whiteButton />
      </Row>
    </Col>
  );
};

export default memo(BottomCarousel);
