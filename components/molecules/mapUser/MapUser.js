import { memo } from "react";
import Image from "next/image";
import { Tooltip } from "antd";
import { Paragraph } from "../../atoms";
import arrowLeft from "../../../assets/img/arrowLeft.svg";
import arrowRight from "../../../assets/img/arrowRight.svg";
import teamMember from "../../../assets/img/teamMember.png";
import flag from "../../../assets/img/flag.svg";

import styles from "./MapUser.module.scss";

const TooltipElement = (text) => {
  return <div dangerouslySetInnerHTML={{
    __html: text,
  }} />
}

const MapUser = ({ user }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgBlock}>
        <div className={styles.iconBlock}>
          <Image className={styles.arrowIcon} src={arrowLeft} />
        </div>
        <Tooltip color="#219FDB" title={TooltipElement(user.testimonial)} overlayClassName={styles.customTooltip}>
          <div className={styles.imageBlock}>
            <Image src={user.webp_testimonial_image} width={178} height={178} className={styles.userImage} />
            <Image className={styles.flag} src={flag} />
          </div>
        </Tooltip>
        <div className={styles.iconBlock}>
          <Image className={styles.arrowIcon} src={arrowRight} />
        </div>
      </div>
      <div className={styles.infoBlock}>
        <Paragraph className={styles.userName}>{user.name}</Paragraph>
        <Paragraph className={styles.userPosition}>{user.position}</Paragraph>
      </div>
    </div>
  );
};

export default memo(MapUser);
