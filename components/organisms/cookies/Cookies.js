import { memo } from "react";
import Image from "next/image";
import CookieConsent from "react-cookie-consent";
import { Typography } from "antd";
import Button from "../../molecules/button/Button";
import decline from "../../../assets/img/icons/close.svg"
import cookiesImage from "../../../assets/img/cookies-img.png"

import styles from "./Cookies.module.scss";

const Cookies = () => {
  return (
    <div>
      <CookieConsent
        location="bottom"
        buttonText={<Button transparentBlue text="Accept cookies" />}
        cookieName="myAwesomeCookieName2"
        containerClasses={styles.mainContainer}
        buttonWrapperClasses={styles.buttonContainer}
        contentClasses={styles.content}
        buttonClasses={styles.button}
        declineButtonClasses={styles.declineButton}
        disableStyles
        expires={150}
        enableDeclineButton
        declineButtonText={<Image width={24} height={24} src={decline} />}
      >
        <div className={styles.contentBlocks}>
          <Image width={96} height={96} src={cookiesImage} alt="cookiesLogo" />
          <div className={styles.logoContainer}>
            <Typography className={styles.title}>Our website uses cookies</Typography>
            <Typography className={styles.description}>Our website use cookies. By continuing, we assume your permission to deploy cookies as detailed in our Privacy Policy.</Typography>
          </div>
        </div>
      </CookieConsent>
    </div >
  );
};

export default memo(Cookies);
