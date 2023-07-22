import { memo, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import _ from "lodash";
import cx from "classnames";
import { Col, Paragraph } from "../../atoms";
import { useSelector } from "react-redux";
import menuLogoWhite from "../../../assets/img/bigLogo.png";
import hamburger from "../../../assets/img/hamburger.svg";
import dropdown from "../../../assets/img/dropdown.svg";
import active_menu_element from "../../../assets/img/active-menu-element.svg";
import menu_element from "../../../assets/img/menu-element.svg";
import Button from "../../molecules/button/Button";
import linkedIn from "../../../assets/img/linkedin.png";

import styles from "./Header.module.scss";

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
  const [dropdownElements, setDropdownElements] = useState([])
  const headerData = useSelector(
    (state) => state?.headerApi?.queries?.["header(undefined)"]?.data
  );

  const [filteredData, setFilteredData] = useState("none");

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



  useEffect(() => {
    if (headerData) {
      setDropdownElements([
        {
          id: 1,
          name: "Tech Stack",
          fix_url: "/whatWeDo",
          data: headerData?.tech_steck || [],
        },
        {
          id: 2,
          name: "Services",
          fix_url: "/services",
          data: headerData?.service || [],
        },
      ])
    }
  }, [headerData])

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
          {headerData && dropdownElements?.map((el) => <div
            key={el.id}
            onClick={() => {
              setFilteredData(filteredData !== el.name ? el.name : 'none');
            }}
            className={`${styles.menuItem} ${filteredData !== el.name ? styles.closedMenu : ''}`}
          >
            <Link
              href={el?.fix_url === '/whatWeDo' ? '' : `${el?.fix_url}`}
              onClick={() => {
                window.scrollTo({ top: 0, left: 0 })
              }}
              className={styles.menuItemTitle}
              style={{
                borderBottom: el.fix_url === router.pathname || (el?.fix_url === 'whatWeDo' && router.pathname === "/") ? "2px solid #ffffff" : "0",
              }}
            >
              {el.name}
              <Image src={dropdown} />
            </Link>
            <div className={styles.menuItemChildMainWrapper}>
              {el?.data?.map((e, idx) =>
                <Link href={el?.fix_url + '/' + (e?.service_detail || e?.what_we_do_detail)} key={idx}>
                  <div
                    className={styles.menuItemChildWrapper}
                    style={{
                      display:
                        el.name === filteredData ? "flex" : "none",
                    }}
                  >
                    <Image src={active_menu_element} className={styles.activeElem} />
                    <Image src={menu_element} className={styles.disActiveElem} />
                    {e.title}
                  </div>
                </Link>
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
                href={el?.fix_url === 'whatWeDo' ? '#' : `${el?.fix_url}`}
                onClick={() => {
                  if (el?.fix_url !== 'whatWeDo') {
                    setOpenMenu(!openMenu)
                  }
                  window.scrollTo({ top: 0, left: 0 })
                }}
                className={styles.menuItemTitle}
                style={{
                  borderBottom: el.fix_url === router.pathname || (el?.fix_url === 'whatWeDo' && router.pathname === "/") ? "2px solid #ffffff" : "0",
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
            ].map((item, index) =>
              <Image src={linkedIn} alt="logo" className={styles.socialIcons} key={index} />
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
