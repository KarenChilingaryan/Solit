
import Image from "next/image";
import { memo } from "react";
import mapimage from '../../../assets/img/map-image.png';
import mapPersonActive from '../../../assets/img/mdi_person_pin _active.png';
import mapPersonDisActive from '../../../assets/img/mdi_person_pin.png';

import styles from "./WorldMap.module.scss";

const DEFAULT_WIDTH = 2000
const DEFAULT_HEIGHT = 1100

const markers = [
  { x: 1200, y: 500 },
  { x: 1000, y: 300 },
  { x: 800, y: 900 },
  { x: 1800, y: 250 },
]

const WorldMap = ({ data, setActiveUser }) => {
  return <div className={styles.mapImage}>
    {data.map((el, index) =>
      <div onClick={() => { setActiveUser(el) }} key={index} style={{
        position: 'absolute',
        left: `${el.x / DEFAULT_WIDTH * 100 - 2}%`,
        top: `${el.y / DEFAULT_HEIGHT * 100 - 6}%`
      }} className={styles.personIcon}>
        <Image src={mapPersonActive} className={styles.active} />
        <Image src={mapPersonDisActive} className={styles.disActive} />
      </div>
    )}
    <Image src={mapimage} />
  </div>
};

export default memo(WorldMap);

