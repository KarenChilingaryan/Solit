import { memo } from "react";
import Image from "next/image";
import styled from "styled-components";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useSelector } from "react-redux";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Carousel } from "antd";
import { Col } from "../../atoms";

import slider1 from "../../../assets/img/slider1.png";
import slider2 from "../../../assets/img/slider2.png";
import slider3 from "../../../assets/img/slider3.png";
import slider4 from "../../../assets/img/test1.png";

import styles from "./PortfolioSlider.module.scss";

const images = [slider1, slider2, slider3, slider1, slider2, slider4];

const PortfolioSlider = ({
  main = false,
  // images = []
}) => {
  const portfolioText = useSelector(
    (state) =>
      state?.portfolioTextApi?.queries?.["portfolioText(undefined)"]?.data
  );
  const CarouselWrapper = styled(Carousel)`
    > .slick-dots-bottom {
      position: relative;
      top: 0.2812542vw;
    }
    > .slick-dots li {
      width: 1.041668vw !important;
      margin-top: 1.041668vw;
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
    <Col
      className={`${styles.portfolioSliderMainWrapper} ${main ? styles.mainPage : ""
        }`}
    >
      <CarouselWrapper
        className={styles.sliderWrapper}
        slidesToShow={3}
        autoplay
      >
        {images?.map((el, index) => (
          <div key={index}>
            <Image src={el} alt="portfolio item" className={styles.img} />
          </div>
        ))}
      </CarouselWrapper>
      {main && (
        <Col className={styles.portfolioText}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >{portfolioText ? portfolioText[0].presentation_text : ""}</ReactMarkdown>
        </Col>
      )}
    </Col>
  );
};

export default memo(PortfolioSlider);
