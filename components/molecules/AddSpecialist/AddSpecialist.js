import { memo, useState } from "react";
import Image from "next/image";
import { Col } from "../../atoms";
import minusIcon from "../../../assets/img/icons/minus.svg";
import plusIcon from "../../../assets/img/icons/plus.svg";

import styles from "./AddSpecialist.module.scss";

const AddSpecialist = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    const newcount = count - 1;
    if (newcount >= 0) {
      setCount(newcount);
    }
  }

  return (
    <Col className={styles.mainWrapper}>
      <Col onClick={decrement}>
        <Image className={styles.iconminus} src={minusIcon} />
      </Col>
      <Col className={styles.countSpecialist}>
        <span>{count}</span>
      </Col>
      <Col onClick={increment}>
        <Image className={styles.iconplus} src={plusIcon} />
      </Col>
      <Col className={styles.nameSpecialist}>Android Native</Col>
    </Col>
  );
};

export default memo(AddSpecialist);
