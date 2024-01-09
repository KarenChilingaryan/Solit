import { memo, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Tooltip } from "antd";
import { Paragraph } from "../../atoms";
import arrowLeft from "../../../assets/img/arrowLeft.svg";
import arrowRight from "../../../assets/img/arrowRight.svg";

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
  const handleResize = useCallback(async () => {
    if (tooltip) {
      setTooltip(false)
      const timeout = setTimeout(() => {
        setTooltip(true)
        clearTimeout(timeout)
      }, 200)
    }
  }, [])

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.imgBlock}>
        <div className={styles.iconBlock} onClick={() => changeTo("prev")}>
          <Image className={styles.arrowIcon} src={arrowLeft} alt="image" />
        </div>
        {tooltip && (
          <Tooltip
            overlayClassName="user-map-tooltip"
            color="#219FDB"
            title={TooltipElement(user.testimonial)}
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
                alt="image"
              />
              {user?.webp_flag && (
                <Image
                  className={styles.flag}
                  src={user?.webp_flag}
                  alt="image"
                  width={30}
                  height={30}
                />
              )}
            </div>
          </Tooltip>
        )}
        <div className={styles.iconBlock} onClick={() => changeTo("next")}>
          <Image className={styles.arrowIcon} src={arrowRight} alt="image" />
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
