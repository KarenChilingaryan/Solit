import { memo, useEffect, useState } from "react";
import Image from "next/image";
import { Tooltip } from "antd";
import { Paragraph } from "../../atoms";
import arrowLeft from "../../../assets/img/arrowLeft.svg";
import arrowRight from "../../../assets/img/arrowRight.svg";
import flag from "../../../assets/img/flag.svg";

import styles from "./MapUser.module.scss";

const TooltipElement = (text) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    />
  );
};

const MapUser = ({ user, changeTo }) => {
  const [tooltip, setTooltip] = useState(true);

  useEffect(() => {
    setTooltip(false);
    setTimeout(() => {
      setTooltip(true);
    }, 100);
  }, [user]);

  return (
    <div className={styles.container}>
      <div className={styles.imgBlock}>
        <div className={styles.iconBlock}>
          <Image
            className={styles.arrowIcon}
            src={arrowLeft}
            alt=""
            onClick={() => changeTo("prev")}
          />
        </div>
        {tooltip && (
          <Tooltip
            color="#219FDB"
            title={TooltipElement(user.testimonial)}
            overlayClassName={styles.customTooltip}
            {...(window.innerWidth <= 1024 && window.innerWidth > 576
              ? { visible: true, placement: "left" }
              : window.innerWidth <= 576
              ? { visible: true }
              : { visible: true })}
          >
            <div className={styles.imageBlock}>
              <Image
                src={user.webp_testimonial_image}
                width={178}
                height={178}
                className={styles.userImage}
                alt=""
              />
              {user?.webp_flag && (
                <Image
                  className={styles.flag}
                  src={user?.webp_flag}
                  alt=""
                  width={30}
                  height={30}
                />
              )}
            </div>
          </Tooltip>
        )}
        <div className={styles.iconBlock}>
          <Image
            className={styles.arrowIcon}
            src={arrowRight}
            onClick={() => changeTo("next")}
            alt=""
          />
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
