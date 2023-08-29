import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import cx from "classnames";
import { emailApplyForJobPositionApi } from "../../../services/emailApplyForJobPositionApi";
import ModalWrapper from "../../molecules/Modal/Modal";
import ModalForm from "../modalForm/ModalForm";
import SuccessModal from "../../organisms/successModal/SuccessModal";

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
}) => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch();
  const [openSuccess, setOpenSuccess] = useState(false)

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    try {
      const res = await dispatch(
        await emailApplyForJobPositionApi.endpoints.email.initiate(formData)
      );
      setOpenSuccess(true)
    } catch {

    }
  }

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
          <ModalForm openData={null} from={'lets'} onSubmit={onSubmit} className={"fromButton"}/>
        </ModalWrapper>
      }
      <SuccessModal open={openSuccess} setOpen={setOpenSuccess} />
    </>
  );
};

export default memo(Button);
