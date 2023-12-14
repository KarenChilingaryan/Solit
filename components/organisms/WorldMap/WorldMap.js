import Image from "next/image";
import { memo } from "react";
import mapimage from "../../../assets/img/map-image.png";
import mapPersonActive from "../../../assets/img/mdi_person_pin _active.png";
import mapPersonDisActive from "../../../assets/img/mdi_person_pin.png";

import styles from "./WorldMap.module.scss";

const DEFAULT_WIDTH = 2000;
const DEFAULT_HEIGHT = 1100;

const WorldMap = ({ data, setActiveUser, activeUser }) => {
  return (
    <div className={styles.mapImage}>
      {data.map((el, index) => (
        <div
          onClick={() => {
            setActiveUser(el);
          }}
          key={index}
          style={{
            position: "absolute",
            left: `${(el.x / DEFAULT_WIDTH) * 100 - 2}%`,
            top: `${(el.y / DEFAULT_HEIGHT) * 100 - 6}%`,
          }}
          className={`${styles.personIcon} ${
            activeUser?.id == el.id && styles.activeUser
          }`}
        >
          <Image src={mapPersonActive} className={styles.active} alt="image" />
          <Image
            src={mapPersonDisActive}
            className={styles.disActive}
            alt="image"
          />
        </div>
      ))}
      <Image src={mapimage} alt="image" />
    </div>
  );
};

export default memo(WorldMap);
