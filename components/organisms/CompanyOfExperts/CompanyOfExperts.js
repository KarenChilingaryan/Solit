import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Row, Col, Paragraph } from "../../atoms";
import AboutCompany from "../../molecules/aboutCompany/AboutCompany";

import styles from "./CompanyOfExperts.module.scss";

const CompanyOfExperts = () => {
  const abutUsCompanyOfExpertsApi = useSelector(
    (state) => state?.abutUsCompanyOfExpertsApi?.queries?.["about(undefined)"]?.data
  );

  return (
    <Row className = {styles.aboutCompanyOfExperts}> 
      <Paragraph className={styles.aboutCompanyTitle}>
        Company of experts
      </Paragraph>
      <div className={styles.aboutCompanyContent}>
        {abutUsCompanyOfExpertsApi?.map((about, i) => (
          <AboutCompany
            key={i}
            number={about.rating_number}
            title={about.rating_text}
            image={about.original_logo_company_of_expert}
          />
        ))}
      </div>
    </Row>
  )
};

export default memo(CompanyOfExperts);
