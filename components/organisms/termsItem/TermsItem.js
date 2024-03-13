import { memo } from "react";
import { useSelector } from "react-redux";
import { HomeMainWithImage } from "../HomeMainWithImage";
import imageBG from "../../../assets/img/career_bg.png";

import styles from "./TermsItem.module.scss";

const TermsComponent = () => {
  const postsPrivacyPolicyOrConditionTermsApi = useSelector(
    (state) =>
      state?.postsPrivacyPolicyOrConditionTermsApi?.queries?.[
        "terms(undefined)"
      ]?.data
  );

  return (
    <div className={styles.careerPage}>
      <HomeMainWithImage firstImage={imageBG}>
        <div className={styles.content}>
          <div className={styles.bottomBlock}>
            <div
              className={styles.blockItemImage}
              dangerouslySetInnerHTML={{
                __html:
                  (postsPrivacyPolicyOrConditionTermsApi &&
                    postsPrivacyPolicyOrConditionTermsApi[0]?.create_page) ||
                  "",
              }}
            />
          </div>
        </div>
      </HomeMainWithImage>
    </div>
  );
};
export default memo(TermsComponent);
