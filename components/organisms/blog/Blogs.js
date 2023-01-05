import { memo } from "react";
import { useRouter } from 'next/router'
import styles from "./Blogs.module.scss";
import { Col, Row } from "../../atoms";
import svg from "../../../assets/img/serviceImg.svg";
import Button from "../../molecules/button/Button";
import ServiceSmallCard from "../../molecules/serviceSmallCard/ServiceSmallCard";
import ServiceLargeCard from "../../molecules/serviceLargeCard/ServiceLargeCard";
import { useSelector } from "react-redux";
import { longPresentationBlogApi } from "../../../services/longPresentationBlogApi";

const Blogs = () => {
  const router = useRouter();
  const longPresentationBlog = useSelector(
    (state) => state?.longPresentationBlogApi?.queries?.["longPresentationBlog(undefined)"]?.data
  );
  const buttonServicesText = "Our Services";
  const buttonContactText = "Contact Us";

  const handleClick = (e) => {
    router.push(`blog/${e}`);
  };
  return (
    <div className={styles.blogsMainWrapper}>
      <Row className={styles.blogsCards}>
        {longPresentationBlog?.map((el, index) => (
          index % 5 !== 0 ?
            <ServiceSmallCard
              icon={svg}
              title={el.title}
              desc={el.description}
              key={el}
              onClick={() => handleClick(el.id)}
            /> :
            <ServiceLargeCard
              icon={svg}
              title={el.title}
              desc={el.description}
              key={el}
              onClick={() => handleClick(el.id)}
            />
        ))}
      </Row>
      <Col className={styles.buttonWrapper}>
        <Button text={buttonServicesText} lightBlue />
        <Button text={buttonContactText} lightBlue />
      </Col>
    </div>
  );
};

export default memo(Blogs);
