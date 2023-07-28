import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import styles from "./WhatWeDoItem.module.scss";
import { HomeMainWithImage } from "../HomeMainWithImage";
import { Paragraph, Row } from "../../atoms";
import imageBG from "../../../assets/img/career_bg.png"
import AboutItem from "../../molecules/aboutItem/AboutItem";
import impactIcon from "../../../assets/img/u_adjust-circle.svg";
import { postsWhatWeDoDetailApi } from "../../../services/postsWhatWeDoDetailApi";
import Link from "next/link";


const WhatWeDoComponent = () => {
  const { id } = useRouter().query;
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

  console.log(postsWhatWeDoApi, 'postsWhatWeDoApi');
  return (
    <div className={styles.careerPage}>
      <HomeMainWithImage firstImage={imageBG}>
        <div className={styles.content}>

          <div className={styles.bottomBlock}>
            <div className={styles.blockItemImage} dangerouslySetInnerHTML={{ __html: postWhatWeDoDetail?.create_page || "" }} />
            <Paragraph className={styles.title}>Explore more</Paragraph>
            <Row className={styles.blockItems}>
              {postsWhatWeDoApi?.data_list.slice(0, 3).map((el, i) =>
                <Link href={`/whatWeDo/${el.what_we_do_detail}`}>
                  <AboutItem
                    key={i}
                    title={el.title}
                    desc={el.description}
                    icon={el.original_logo_what_we_do}
                    weDo
                    weDoWidth
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
