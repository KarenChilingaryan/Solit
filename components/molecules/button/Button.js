import { memo, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import cx from "classnames";
import ModalWrapper from "../../molecules/Modal/Modal";
import SuccessModal from "../../organisms/successModal/SuccessModal";
import LetsTalkModal from "../letsTalkModal/letsTalkModal";

import styles from "./Button.module.scss";
import { emailLetsTalkApi } from "../../../services/emailLetsTalkApi";

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
}) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [openSuccess, setOpenSuccess] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

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

  return (
    <>
      <button
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
        {text}
        {icon && <Image src={icon} alt="image" />}
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
          setOpen={setOpen}
          style={styles.modal}
        >
          <LetsTalkModal
            open={open}
            openData={null}
            from={"lets"}
            onSubmit={onSubmit}
            className={"fromButton"}
          />
        </ModalWrapper>
      )}
      <SuccessModal open={openSuccess} setOpen={setOpenSuccess} />
    </>
  );
};

export default memo(Button);
