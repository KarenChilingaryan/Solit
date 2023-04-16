import { memo } from "react";
import { Row, Col, Paragraph } from "../../atoms";
import AboutCompany from "../../molecules/aboutCompany/AboutCompany";

import styles from "./CompanyOfExperts.module.scss";

const CompanyOfExperts = ({ aboutData }) => {
  return (
    <Row className = {styles.aboutCompanyOfExperts}> 
      <Paragraph className={styles.aboutCompanyTitle}>
        Company of experts
      </Paragraph>
      <div className={styles.aboutCompanyContent}>
        {aboutData?.map((about, i) => (
          <AboutCompany
            key={i}
            number={about.number}
            title={about.title}
            image={about.image}
            status={about.status}
          />
        ))}
      </div>
    </Row>
  )
};

export default memo(CompanyOfExperts);
