import { memo } from "react";
import Image from "next/image";
import { Col } from "../../atoms";
import minusIcon from "../../../assets/img/icons/minus.svg";
import plusIcon from "../../../assets/img/icons/plus.svg";
import { useState } from "react";
import styles from "./AddSpecialist.module.scss";

const AddSpecialist = () => {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <Col className={styles.colContainer}>
      <div className={styles.divContainer}>
        <div>
          <Image className={styles.image} src={minusIcon} onClick={decrement} />
        </div>
        <div>
          <span className={styles.numberZero}>{count}</span>
        </div>
        <div>
          <Image className={styles.image} src={plusIcon} onClick={increment}  />
        </div>
        <div>
          <span className={styles.nameSpecialist}>Android Native</span>
        </div>
      </div>
    </Col>
  )
}

export default memo(AddSpecialist)