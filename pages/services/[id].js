import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { serviceItemApi } from "../../services/servicesItemApi";
import { Col } from "../../components/atoms";
import ServicesItem from "../../components/organisms/servicesItem/ServicesItem";

import styles from "./serviceItem.module.scss";
import { BreadcrumbContext } from "../../utils/hooks/contexts/bredcrumb";

const ServiceItem = () => {
  const { breadcrumbElements, setBreadcrumbElements } = useContext(BreadcrumbContext);
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


  useEffect(() => {
    if (postServiceApiData && breadcrumbElements) {
      const newBred = [...breadcrumbElements?.slice(0, 3)]
      newBred[2] = { name: postServiceApiData.breadcrumb, link: '/' };
      setBreadcrumbElements(newBred)
    }
  }, [postServiceApiData])
  return (
    <Col className={styles.portfolioItemWrapper}>
      <ServicesItem data={postServiceApiData} />
    </Col>
  );
};

export default ServiceItem;
