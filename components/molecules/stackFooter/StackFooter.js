import { memo, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "../button/Button";
import { Col, Row, Paragraph } from "../../atoms";
import close from "../../../assets/img/icons/closeIcon.svg";
import closeGray from "../../../assets/img/icons/close.svg";
import down from "../../../assets/img/down.svg";

import styles from "./StackFooter.module.scss";

const StackFooter = ({ liveStacks = [], handleDelete, onClick, onClose }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [toSmall, setToSmall] = useState(false);
  const scroll = useRef(null)
  // Check the viewport width on component mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1025);
    };

    handleResize(); // Check on component mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onSmall = () => {
    setToSmall(!toSmall);
  };

  useEffect(() => {
    if (scroll?.current) {
      const element = scroll.current;
      element.scrollTop = element.scrollHeight;
    }

  }, [liveStacks])

  useEffect(()=>{
    if (scroll?.current) {
      const element = scroll.current;
      element.scrollTop = toSmall ? 0 : element.scrollHeight;
    }
  },[toSmall])

  return (
    <Row className={`${styles.footer} ${toSmall && styles.transition}`}>
      <Row className={styles.footerContent}>
        <Paragraph className={styles.footerTitle}>Summary:</Paragraph>
        <div className={styles.shadow} />
        <div className={styles.scrollElement} ref={scroll}>
          <Row className={styles.items}>
            {liveStacks?.map((item, i) => (
              <Col key={i} className={styles.itemWrapper}>
                <Col className={styles.item}>{item.item}</Col>
                <Image
                  src={close}
                  className={styles.icon}
                  onClick={() => handleDelete(item)}
                  alt="image"
                />
              </Col>
            ))}
          </Row>
        </div>
      </Row>
      <Row className={styles.buttonWrapper}>
        <Button lightBlue text="Proceed" onClick={onClick} />
      </Row>
      <Image
        src={isSmallScreen ? down : closeGray}
        className={styles.closeIcon}
        width="1.25vw"
        height="1.25vw"
        alt="image"
        onClick={() => (!isSmallScreen ? onClose() : onSmall())}
      />
    </Row>
  );
};

export default memo(StackFooter);
