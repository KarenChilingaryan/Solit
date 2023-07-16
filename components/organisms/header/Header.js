import { memo, useEffect, useState } from "react";
import _ from "lodash";
import Link from "next/link";
import cx from "classnames";
import { useRouter } from "next/router";
import menuLogoWhite from "../../../assets/img/bigLogo.png";
import hamburger from "../../../assets/img/hamburger.svg";
import dropdown from "../../../assets/img/dropdown.svg";
import active_menu_element from "../../../assets/img/active-menu-element.svg";
import menu_element from "../../../assets/img/menu-element.svg";
import Button from "../../molecules/button/Button";
import Image from "next/image";
import linkedIn from "../../../assets/img/linkedin.png";
import { useSelector } from "react-redux";

import styles from "./Header.module.scss";
import { Col, Paragraph } from "../../atoms";

const dropdownElements = [
  {
    id: 1,
    name: "Tech Stack",
    fix_url: "techstack",
    data: [
      { name: "mobile" },
      { name: "Android" },
      { name: "iOS" },
      { name: "ReactJS" },
      { name: "BacEnd" },
      { name: "Python" }
    ],
  },
  {
    id: 2,
    name: "Services",
    fix_url: "/services",
    data: [
      { name: "Web development" },
      { name: "Mobile Development" },
      { name: "Software Testing" },
      { name: "UI/UX Design" },
      { name: "Dedicated Team" },
      { name: "Completed Projects" },
    ],
  },
]

const data = [
  {
    dropdown: false,
    id: 3,
    name: "Portfolio",
    fix_url: "/portfolio",
    data: [],
  },
  {
    dropdown: false,
    id: 4,
    name: "About us",
    fix_url: "/about",
    data: [],
  },
  {
    dropdown: false,
    id: 5,
    name: "Careers",
    fix_url: "/careers",
    data: [],
  },
  {
    dropdown: false,
    id: 6,
    name: "Blog",
    fix_url: "/blog",
    data: [],
  },
  {
    dropdown: false,
    id: 7,
    name: "Contact Us",
    fix_url: "/contactUs",
    data: [],
  },
];
const Header = () => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(true);
  // const data = useSelector(
  //   (state) => state?.headerApi?.queries?.["header(undefined)"]?.data
  // );

  const [filteredData, setFilteredData] = useState("none");

  const routes = ["/", "/about", "/blog"];

  const secondaryUrl = !routes.includes(router.pathname);

  const [scrollY, setScrollY] = useState(0);
  const [scrollYNew, setScrollYNew] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollYNew && !scrollY) {
      setScrollYNew(scrollY);
    } else if (!scrollYNew && scrollY) {
      setScrollYNew(scrollY);
    }
  }, [scrollY]);

  return (
    <div className={styles.mainWraperBlock}>

      <div
        className={`${cx(styles.headerWrapper, !scrollYNew && styles.headerWrapperScroll)} ${!openMenu && styles.openHeaderWrapper}`}
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

        <div className={`${styles.menuWrapper}`}>
          {[...dropdownElements]?.map((el) => <div
            key={el?.id}
            onClick={() => {
              setFilteredData(filteredData !== el.name ? el.name : 'none');
            }}
            className={`${styles.menuItem} ${filteredData !== el.name ? styles.closedMenu : ''}`}
          >
            <Link
              href={el?.fix_url === 'techstack' ? '/' : `/${el?.fix_url}`}
              onClick={() => {
                window.scrollTo({ top: 0, left: 0 })
              }}
              className={styles.menuItemTitle}
              style={{
                borderBottom: el.fix_url === router.pathname || (el?.fix_url === 'techstack' && router.pathname === "/") ? "2px solid #ffffff" : "0",
              }}
            >
              {el.name}
              <Image src={dropdown} />
            </Link>
            <div className={styles.menuItemChildMainWrapper}>
              {el?.data?.map((e, idx) =>
                <div
                  key={idx}
                  className={styles.menuItemChildWrapper}
                  style={{
                    display:
                      el.name === filteredData ? "inline-block" : "none",
                  }}
                >
                  <Image src={active_menu_element} className={styles.activeElem} />
                  <Image src={menu_element} className={styles.disActiveElem} />
                  {e.name}
                </div>
              )}
            </div>
          </div>
          )}
          <div className={styles.menuSecondItemBlock}>

            {[...data]?.map((el) => <div
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
                  borderBottom: el.fix_url === router.pathname || (el?.fix_url === 'techstack' && router.pathname === "/") ? "2px solid #ffffff" : "0",
                }}
              >
                {el.name}
              </Link>
            </div>
            )}
          </div>
        <Col className={styles.socialIconsWrapper}>
          <Paragraph className={styles.socialIconsTitle}>Let’s Contact for Great</Paragraph>
          {/* data && data[0]?.social_link? */}
          {[
            { name: 'hhhhh' },
            { name: 'hhhhh' },
            { name: 'hhhhh' },
            { name: 'hhhhh' },
            { name: 'hhhhh' },
            { name: 'hhhhh' },
          ].map(item =>
            <Image src={linkedIn} alt="logo" className={styles.socialIcons} key={item.name} />
          )}
        </Col>
        </div>
        <div className={`${styles.menuWrapper} ${openMenu ? styles.closedMenu : ''}`}>

          <div className={styles.pricing} onClick={() => setOpenMenu(true)} >
            <Link
              href={'/contactus'}>
              <Button text="Pricing" transparentBlue />
            </Link>
          </div>
          <Image src={hamburger} onClick={() => { setOpenMenu(!openMenu) }} className={styles.menuImage} />
        </div>
        <div className={`${styles.buttonWrapper} ${styles.buttonWrapperMobile}`} onClick={() => setOpenMenu(true)}>
          <Link
            href={'/contactus'}>
            <Button text="Pricing" transparentBlue />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
