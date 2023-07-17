import { memo, useEffect, useState } from "react";
import Image from "next/image";
import { Col, Input } from "../../atoms";
import minusIcon from "../../../assets/img/icons/minus.svg";
import plusIcon from "../../../assets/img/icons/plus.svg";

import styles from "./AddSpecialist.module.scss";

const AddSpecialist = ({ field, name, onChange, liveStacks }) => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    onChange(field, name, count + 1);
  }

  function decrement() {
    const newCount = count - 1;
    if (newCount >= 0) {
      setCount(newCount);
      onChange(field, name, newCount);
    }
  }

  useEffect(() => {
    const elem = liveStacks.find(el => el?.name == name && el.category == field)
    if (!elem) {
      setCount(0)
    }
  }, [liveStacks])

  return (
    <Col className={styles.mainWrapper} key={name}>
      <Col onClick={decrement}>
        <Image className={styles.minusIcon} src={minusIcon} alt={name} />
      </Col>
      <Col className={styles.countSpecialist}>
        <Input value={count} readonly className={styles.input} />
      </Col>
      <Col onClick={increment}>
        <Image className={styles.plusIcon} src={plusIcon} alt={name} />
      </Col>
      <Col className={styles.nameSpecialist}>{name}</Col>
    </Col>
  );
};

export default memo(AddSpecialist);
