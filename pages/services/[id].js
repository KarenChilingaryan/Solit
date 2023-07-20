import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { serviceItemApi } from "../../services/servicesItemApi";
import { Col } from "../../components/atoms";
import PortfolioMain from "../../components/organisms/portfolioMain/PortfolioMain";

import styles from "./serviceItem.module.scss";

const ServiceItem = () => {
  const { id } = useRouter().query;
  const dispatch = useDispatch();
  const [postServiceApiData, setPostServiceApiData] = useState(null)
  const getData = async (id) => {
    const res = await dispatch(await serviceItemApi.endpoints.serviceItem.initiate(id));
    setPostServiceApiData(res.data)
  }
  useEffect(() => {
    if (id) {
      getData(id)
    }
  }, [id])

  return (
    <Col className={styles.portfolioItemWrapper}>
      <PortfolioMain data={postServiceApiData} />
    </Col>
  );
};

export default ServiceItem;
