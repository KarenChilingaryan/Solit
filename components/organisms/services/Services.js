import { memo } from "react";
import { useRouter } from "next/router";
import { Checkbox, Col, Row } from "../../atoms";
import bgImage from "../../../assets/img/main-bg.png";
import { HomeMainWithImage } from "../HomeMainWithImage";
import { HomeMain } from "../homeMain";
import WhatToKnow from "../../molecules/whatToKnow/WhatToKnow";
import ServiceCard from "../../molecules/serviceCard/ServiceCard";

import styles from "./Services.module.scss";

const Services = () => {
  const router = useRouter();
  // const services = useSelector(
  //   (state) => state?.servicesApi?.queries?.["services(undefined)"]?.data
  // );
  const services = [1, 2, 3, 4, 5, 6];
  const handleClick = (id) => {
    router.push(`services/${id}`);
  };

  return (
    <HomeMainWithImage firstImage={bgImage}>
      <>
        <Row className={styles.content}>
          <HomeMain
            data={{
              title: "Where the stars meet",
              firstSubtitle:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo scelerisque nunc nec aliquet. Etiam lobortis erat libero, eget bibendum lorem congue nec. Ut pellentesque faucibus aliquet. In vitae est non eros placerat tristique ut ac lectus. Integer ultrices faucibus ultricies. Etiam posuere quam ligula, eu imperdiet nisi maximus vitae. Suspendisse ipsum quam, ullamcorper at blandit nec, lacinia sed ante. Nam a placerat nisi. Cras pretium, dolor viverra feugiat tempor, mi diam laoreet metus, ut elementum arcu odio eu velit. Sed condimentum dapibus quam id blandit. Pellentesque lorem nisl, interdum a dui quis, ullamcorper blandit mi. Vivamus fermentum, elit suscipit ullamcorper eleifend, eros mi consectetur nunc, sed placerat magna tortor sed leo. Vestibulum in augue sed felis aliquam placerat a euismod magna. Morbi egestas metus id lacus pharetra, congue congue est ornare Proin eu interdum ex. Cras odio dolor, laoreet in dui ut, rutrum tempus libero. Vivamus nec orci sapien. Maecenas sit amet turpis consectetur, mattis lorem vitae, luctus risus. Suspendisse maximus lorem dolor, eu consequat risus tempor non. In lobortis eu purus non feugiat. Pellentesque eleifend a turpis.",
              buttonText: "Let’s talk",
            }}
            ellipsis
          />
          <Row className={styles.services}>
            {services.map((_, i) => (
              <ServiceCard key={i} className={styles.serviceCard} />
            ))}
          </Row>
          <Row className={styles.weKnowSection}>
            <WhatToKnow />
          </Row>
        </Row>
      </>
    </HomeMainWithImage>
  );
};

export default memo(Services);
