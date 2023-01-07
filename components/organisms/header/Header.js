import { memo, useState } from "react";
import _ from "lodash";
import Link from "next/link";
import cx from "classnames";
import { useRouter } from "next/router";
import menuLogoWhite from "../../../assets/img/bigLogo.png";
import hamburger from "../../../assets/img/hamburger.svg";
import dropdown from "../../../assets/img/dropdown.svg";
import Button from "../../molecules/button/Button";
import Image from "next/image";
import { useSelector } from "react-redux";

import styles from "./Header.module.scss";

const Header = () => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(true);
  const data = useSelector(
    (state) => state?.headerApi?.queries?.["header(undefined)"]?.data
  );

  const [filteredData, setFilteredData] = useState("none");

  const routes = ["/", "/about", "/blog"];

  const secondaryUrl = !routes.includes(router.pathname);

  return (
    <div
      className={cx(styles.headerWrapper, {
        [styles.headerWrapperDark]: secondaryUrl,
      })}
    >
      <Link href="/" onClick={() => {
        window.scrollTo({ top: 0, left: 0 });
        setOpenMenu(true)
      }}>
        <Image
          src={menuLogoWhite}
          alt="logo"
          className={styles.img}
        />
      </Link>
      <Image src={hamburger} onClick={() => { setOpenMenu(!openMenu) }} style={{
        ...(!openMenu ? { filter: 'invert(84%) sepia(99%) saturate(2300%) hue-rotate(74deg) brightness(99%) contrast(110%)' } : {})
      }} className={styles.menuImage} />
      <div className={`${styles.menuWrapper} ${openMenu ? styles.closedMenu : ''}`}>
        {data?.map((el) => <div
          key={el?.id}
          onClick={() => {
            setFilteredData(filteredData !== el.name ? el.name : 'none');
          }}
          className={styles.menuItem}
        >
          <Link
            href={el?.fix_url === 'techstack' ? '#' : `/${el?.fix_url}`}
            onClick={() => {
              if (el?.fix_url !== 'techstack') {
                setOpenMenu(!openMenu)
              }
              window.scrollTo({ top: 0, left: 0 })
            }}
            className={styles.menuItemTitle}
            style={{
              fontWeight: el.fix_url === router.pathname ? "600" : "400",
            }}
          >
            {el.name}
            {
              el?.subtitle_ingredients && el?.subtitle_ingredients?.length ?
                <Image src={dropdown} /> : <></>
            }
          </Link>

          <div className={styles.menuItemChildMainWrapper}>
            {el?.subtitle_ingredients?.map((e, idx) =>
              <div
                key={idx}
                className={styles.menuItemChildWrapper}
                style={{
                  display:
                    el.name === filteredData ? "inline-block" : "none",
                }}
              >
                {e?.ingredients?.map((subItem, idx) =>
                  <div className={styles.menuItemChild} key={idx} onMouseDown={() => {
                    setOpenMenu(!openMenu)
                    setFilteredData("none")
                    router.push(`/services/${subItem?.service}`)
                  }}>
                    {subItem.name}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        )}
        <div className={styles.buttonWrapper} onClick={() => setOpenMenu(true)}>
          <Link
            href={'/contactus'}>
            <Button text="Contact" boldBlue />
          </Link>
        </div>
        <div className={styles.pricing} onClick={() => setOpenMenu(true)} >
          <Link
            href={'/contactus'}>
            <Button text="Contact" lightBlue />
          </Link>
        </div>
      </div>
      <div className={`${styles.buttonWrapper} ${styles.buttonWrapperMobile}`} onClick={() => setOpenMenu(true)}>
        <Link
          href={'/contactus'}>
          <Button text="Contact" boldBlue />
        </Link>
      </div>
    </div>
  );
};

export default memo(Header);
