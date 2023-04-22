
import { memo } from "react";
import { Row, Col, Paragraph } from "../../atoms";
import React, { useState } from 'react';




import styles from "./Industry.module.scss";
import { Checkbox } from "../../atoms";

const Industry = () => {
  
     return(
  <Col className={styles.industryCol}> 
    <div className={styles.industryMain}>
         <Checkbox className={styles.checkbox} />
         <span className={styles.NameText}>Logistic</span>
    </div>
  </Col>
   )
} 
export default memo(Industry)