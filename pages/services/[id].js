import React, { useCallback, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { serviceItemApi } from "../../services/servicesItemApi";
import { Col, SeoCard } from "../../components/atoms";
import ServicesItem from "../../components/organisms/servicesItem/ServicesItem";
import { BreadcrumbContext } from "../../utils/hooks/contexts/bredcrumb";
import { websiteUrl } from "../../utils/hooks/constants/pageUrl";

import styles from "./serviceItem.module.scss";

const ServiceItem = () => {
  const router = useRouter()
  const { breadcrumbElements, setBreadcrumbElements } = useContext(BreadcrumbContext);
  const { id } = useRouter().query;
  const dispatch = useDispatch();
  const [postServiceApiData, setPostServiceApiData] = useState(null)

  const getData = useCallback(async (id) => {
    const res = await dispatch(await serviceItemApi.endpoints.serviceItem.initiate(id));
    setPostServiceApiData(res.data)
  }, [])

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
  }, [postServiceApiData ])
  return (
    <Col className={styles.portfolioItemWrapper}>
      <SeoCard details={
        {
          pageDescription: postServiceApiData?.meta_description,
          pageKeyWords: postServiceApiData?.meta_keywords,
          pageUrl: websiteUrl + router.asPath,
          title: postServiceApiData?.meta_title,
        }
      } />
      <ServicesItem data={postServiceApiData} />
    </Col>
  );
};

export default ServiceItem;
