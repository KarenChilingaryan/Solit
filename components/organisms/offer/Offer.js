import { memo } from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "../../atoms";
import Title from "../../molecules/title/Title";
import OfferItem from "../../molecules/offerItem/OfferItem";
import offerLogo from "../../../assets/img/offerLogo.png";
import Button from "../../molecules/button/Button";

import styles from "./Offer.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const Offer = () => {
  const router = useRouter();

  const homepageAdditionalService = useSelector(
    (state) =>
      state?.homepageAdditionalServiceApi?.queries?.[
        "homepageAdditionalService(undefined)"
      ]?.data
  );

  const onClick = (id) => {
    router.push(`/careers/${id}`)
  }

  return (
    <div className={styles.offerMainWrapper}>
      <Col className={styles.titleWrapper}>
        <Title
          title={homepageAdditionalService?.presentation_title}
          whiteTitle
        />
      </Col>

      <Row className={styles.offers} justify={"space-evenly"}>
        {homepageAdditionalService?.data?.map((el) => (
          <OfferItem
            key={el?.id}
            img={el?.image || offerLogo}
            text={el?.title_name}
            onClick={()=> onClick(el?.id)}
          />
        ))}
      </Row>

      <Col className={styles.buttonWrapper}>
        <Link href="/careers">
          <Button text={"Learn more"} whiteButton />
        </Link>
      </Col>
    </div>
  );
};

export default memo(Offer);
