import { memo } from "react";
import Image from "next/image";
import { Tooltip } from "antd";
import { Paragraph } from "../../atoms";
import arrowLeft from "../../../assets/img/arrowLeft.svg";
import arrowRight from "../../../assets/img/arrowRight.svg";
import teamMember from "../../../assets/img/teamMember.png";
import flag from "../../../assets/img/flag.svg";

import styles from "./MapUser.module.scss";

const MapUser = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgBlock}>
        <div className={styles.iconBlock}>
          <Image className={styles.arrowIcon} src={arrowLeft} />
        </div>
        <Tooltip color="#219FDB" title="prompt text dchjjhdscv jc sdgcj sdcv jdsgc jbdscj sdgcj">
          <div className={styles.imageBlock}>
            <Image src={teamMember} className={styles.userImage} />
            <Image className={styles.flag} src={flag} />
          </div>
        </Tooltip>
        <div className={styles.iconBlock}>
          <Image className={styles.arrowIcon} src={arrowRight} />
        </div>
      </div>
      <div className={styles.infoBlock}>
        <Paragraph className={styles.userName}>Jacob Jones</Paragraph>
        <Paragraph className={styles.userPosition}>Microfinance Loan Officer</Paragraph>
      </div>
    </div>
  );
};

export default memo(MapUser);
