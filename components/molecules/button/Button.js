import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import cx from "classnames";
import { emailApplyForJobPositionApi } from "../../../services/emailApplyForJobPositionApi";
import ModalWrapper from "../../molecules/Modal/Modal";
import ModalForm from "../modalForm/ModalForm";

import styles from "./Button.module.scss";

const Button = ({
  text,
  whiteButton,
  boldBlue,
  boldWhite,
  lightBlue,
  transparent,
  transparentOpposite,
  grayTextBtn,
  icon,
  transparentBlue,
  clear,
  whiteBlueBorder,
  grayTextBtnTech,
  lightBlueTech,
  classN,
  onClick,
  type = "button",
}) => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    const res = await dispatch(
      await emailApplyForJobPositionApi.endpoints.email.initiate(formData)
    );
  }

  return (
    <>
      <button
        className={`${cx(styles.button, {
          [styles.whiteButton]: whiteButton,
          [styles.boldBlue]: boldBlue,
          [styles.boldWhite]: boldWhite,
          [styles.lightBlue]: lightBlue,
          [styles.lightBlueTech]: lightBlueTech,
          [styles.transparent]: transparent,
          [styles.transparentOpposite]: transparentOpposite,
          [styles.transparentBlue]: transparentBlue,
          [styles.grayTextBtn]: grayTextBtn,
          [styles.clear]: clear,
          [styles.grayTextBtnTech]: grayTextBtnTech,
          [styles.whiteBlueBorder]: whiteBlueBorder,
        })} ${styles[classN]}`}
        type={type}
        {...(onClick ? {
          onClick: (e) => {
            if (text == 'Let’s talk') {
              setOpen(true)
            } else {
              onClick(e)
            }
          }
        } : {})}
      >
        {text}
        {icon && <Image src={icon} alt="" />}
      </button>
      {text == 'Let’s talk' &&
        <ModalWrapper open={open} width={"66vw"} setOpen={setOpen}>
          <ModalForm openData={null} fromApply={true} onSubmit={onSubmit} />
        </ModalWrapper>
      }
    </>
  );
};

export default memo(Button);
