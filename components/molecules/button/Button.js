import { memo, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Spin } from "antd";
import cx from "classnames";
// import ModalWrapper from "../../molecules/Modal/Modal";
// import SuccessModal from "../../organisms/successModal/SuccessModal";
// import LetsTalkModal from "../letsTalkModal/letsTalkModal";
const ModalWrapper = dynamic(() => import("../../molecules/Modal/Modal"));
const SuccessModal = dynamic(() =>
  import("../../organisms/successModal/SuccessModal")
);
const LetsTalkModal = dynamic(() => import("../letsTalkModal/letsTalkModal"));
import { emailLetsTalkApi } from "../../../services/emailLetsTalkApi";

import styles from "./Button.module.scss";

const Button = ({
  text,
  whiteButton,
  boldWhite,
  lightBlue,
  transparentOpposite,
  grayTextBtn,
  icon,
  transparentBlue,
  clear,
  grayTextBtnTech,
  lightBlueTech,
  classN,
  onClick,
  type = "button",
  disabled = false,
}) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [openSuccess, setOpenSuccess] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [top, setTop] = useState(0);

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    try {
      const res = await dispatch(
        await emailLetsTalkApi.endpoints.email.initiate(formData)
      );
      setOpenSuccess(true);
      setOpen(false);
      setTimeout(() => {
        setOpenSuccess(false);
        setClose();
      }, 3000);
    } catch {}
  };

  const handleResize = () => {
    setIsTablet(window.innerWidth); // Adjust the threshold as per your requirements
  };

  // Add event listener for window resize
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const next = document.getElementById("__next");
    if ((text == "Let’s talk" && open) || openSuccess) {
      setTop(window.scrollY);
      next.style.top = `-${window.scrollY}px`;
      next.style.width = `100%`;
      next.style.position = `fixed`;
    }
  }, [text, open, openSuccess]);

  const setClose = () => {
    const next = document.getElementById("__next");
    next.style.top = `-${window.scrollY}px`;
    next.style.width = `100%`;
    next.style.position = `inherit`;
    if (top) {
      window.scrollTo(0, top);
    }
    setTop(0);
  };

  return (
    <>
      <button
        disabled={disabled}
        className={`${cx(styles.button, {
          [styles.whiteButton]: whiteButton,
          [styles.boldWhite]: boldWhite,
          [styles.lightBlue]: lightBlue,
          [styles.lightBlueTech]: lightBlueTech,
          [styles.transparentOpposite]: transparentOpposite,
          [styles.transparentBlue]: transparentBlue,
          [styles.grayTextBtn]: grayTextBtn,
          [styles.clear]: clear,
          [styles.grayTextBtnTech]: grayTextBtnTech,
        })} ${styles[classN]}`}
        type={type}
        {...(onClick
          ? {
              onClick: (e) => {
                if (text == "Let’s talk") {
                  setOpen(true);
                } else {
                  onClick(e);
                }
              },
            }
          : {})}
      >
        {disabled && <Spin size="small" delay={5} />}
        {text}
        {icon && <Image src={icon} alt="image" width={18} height={18} />}
      </button>
      {text == "Let’s talk" && (
        <ModalWrapper
          open={open}
          width={
            isTablet <= 1024 && isTablet > 576
              ? "52vw"
              : isTablet > 1024 && isTablet <= 1440
              ? "37vw"
              : "28vw"
          }
          setOpen={(e) => {
            setClose();
            setOpen(e);
          }}
          style={styles.modal}
        >
          <LetsTalkModal
            from={"lets"}
            onSubmit={onSubmit}
            className={"fromButton"}
          />
        </ModalWrapper>
      )}
      <SuccessModal
        open={openSuccess}
        setOpen={(e) => {
          setOpenSuccess(e);
          setClose();
        }}
      />
    </>
  );
};

export default memo(Button);
