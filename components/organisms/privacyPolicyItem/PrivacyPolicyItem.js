import { memo } from "react";
import { useSelector } from "react-redux";
import HomeMainWithImage from '../HomeMainWithImage/HomeMainWithImage'
import imageBG from "../../../assets/img/career_bg.png"

import styles from "./PrivacyPolicyItem.module.scss";


const PrivacyPolicyComponent = () => {
  const postsPrivacyPolicyOrConditionPolicyApi = useSelector(
    (state) => state?.postsPrivacyPolicyOrConditionPolicyApi?.queries?.["policy(undefined)"]?.data
  );

  return (
    <div className={styles.careerPage}>
      <HomeMainWithImage firstImage={imageBG}>
        <div className={styles.content}>
          <div className={styles.bottomBlock}>
            <div className={styles.blockItemImage} dangerouslySetInnerHTML={{ __html: postsPrivacyPolicyOrConditionPolicyApi && postsPrivacyPolicyOrConditionPolicyApi[0]?.create_page || "" }} />
          </div>
        </div>
      </HomeMainWithImage>
    </div>
  );
};
export default memo(PrivacyPolicyComponent);
