import { memo } from "react";
import { Carousel } from "antd";
import { Col } from "../..//atoms";
import Title from "../..//molecules/title/Title";
import TestimonialsItem from "../..//molecules/testimonialsItem/TestimonialsItem";
import testimonialsImg from "../../../assets/img/testimonialsImg.png";

import styles from "./Testimonials.module.scss";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Testimonials = () => {
  const testimonialsFlagTitle = useSelector(
    (state) => state?.testimonialsFlagTitleApi?.queries?.["testimonialsFlagTitle(undefined)"]?.data
  );
  const CarouselWrapper = styled(Carousel)`
    > .slick-dots li {
      width: 1.041668vw !important;
    }
    > .slick-dots li button {
      width: 0.781251vw;
      height: 0.781251vw;
      background: #fff !important;
    }
    > .slick-dots li.slick-active button {
      width: 0.781251vw;
      height: 0.781251vw;
      transform: rotate(45deg);
      background: #00ff96 !important;
    }
  `;
  
  return (
    <div className={styles.testimonialsMainWrapper}>
      <Col className={styles.titleWrapper}>
        <Title title={testimonialsFlagTitle?.presentation_title || ''} lightBlueTitle />
      </Col>
      <Col className={styles.a}>
        <CarouselWrapper
          slidesToShow={2}
          autoplay
          autoplaySpeed={3000}
          slidesToScroll={2}
        >
          {testimonialsFlagTitle?.data_testimonials?.map((el) => (
            <TestimonialsItem
              key={el?.id}
              img={el?.client_image || testimonialsImg}
              desc={el?.description_testimonials}
              author={el?.client_position}
              id={el?.id}
            />
          ))}
        </CarouselWrapper>
      </Col>
    </div>
  );
};

export default memo(Testimonials);
