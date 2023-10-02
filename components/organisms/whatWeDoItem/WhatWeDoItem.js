import { memo, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { HomeMainWithImage } from "../HomeMainWithImage";
import { Paragraph, Row, SeoCard } from "../../atoms";
import imageBG from "../../../assets/img/career_bg.png"
import AboutItem from "../../molecules/aboutItem/AboutItem";
import impactIcon from "../../../assets/img/u_adjust-circle.svg";
import { postsWhatWeDoDetailApi } from "../../../services/postsWhatWeDoDetailApi";

import styles from "./WhatWeDoItem.module.scss";
import WeDoCard from "../../molecules/weDoCard/WeDoCard";
import { BreadcrumbContext } from "../../../utils/hooks/contexts/bredcrumb";
import { websiteUrl } from "../../../utils/hooks/constants/pageUrl";


const WhatWeDoComponent = () => {
  const { breadcrumbElements, setBreadcrumbElements } = useContext(BreadcrumbContext);

  const router = useRouter()
  const { id } = router.query;
  const dispatch = useDispatch();
  const [postWhatWeDoDetail, setPostWhatWeDoDetail] = useState(null)
  const getData = async (id) => {
    const res = await dispatch(await postsWhatWeDoDetailApi.endpoints.whatDetail.initiate(id));
    setPostWhatWeDoDetail(res.data)
  }
  useEffect(() => {
    if (id) {
      getData(id)
    }
  }, [id])

  const postsWhatWeDoApi = useSelector(
    (state) => state?.postsWhatWeDoApi?.queries?.["posts(undefined)"]?.data
  );

  useEffect(() => {
    if (postWhatWeDoDetail && breadcrumbElements) {
      const newBred = [...breadcrumbElements?.slice(0, 3)]
      newBred[2] = { name: postWhatWeDoDetail.breadcrumb, link: '/' };
      setBreadcrumbElements(newBred)
    }
  }, [postWhatWeDoDetail])

  return (
    <div className={styles.careerPage}>
      <SeoCard
        details={
          {
            pageDescription: postWhatWeDoDetail?.meta_description,
            pageKeyWords: postWhatWeDoDetail?.meta_keywords,
            pageUrl: websiteUrl + router.asPath,
            title: postWhatWeDoDetail?.meta_title,
          }
        }
      />
      <HomeMainWithImage firstImage={imageBG}>
        <div className={styles.content}>

          <div className={styles.bottomBlock}>
            <h1 className={styles.h1Title}>{postWhatWeDoDetail?.html_h1_tag}</h1>
            <div className={styles.blockItemImage} dangerouslySetInnerHTML={{ __html: postWhatWeDoDetail?.create_page || "" }} />
            <Paragraph className={styles.title}>Explore more</Paragraph>
            <Row className={styles.blockItems}>
              {postsWhatWeDoApi?.data_list.slice(0, 3).map((el, i) =>
                <Link href={`/what-we-do/${el.slug}`} key={i}>
                  <WeDoCard
                    item={el}
                    fromDetail={true}
                  />
                </Link>
              )}
            </Row>
          </div>
        </div>
      </HomeMainWithImage>
    </div>
  );
};
export default memo(WhatWeDoComponent);
