import { memo, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import _ from "lodash";
import cx from "classnames";
import { Col, Paragraph } from "../../atoms";
import { useSelector } from "react-redux";
import menuLogoWhite from "../../../assets/img/bigLogo.png";
import hamburger from "../../../assets/img/hamburger.svg";
import close from "../../../assets/img/u_times.svg";
import dropdown from "../../../assets/img/angle-down.svg";
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
    fix_url: "/about-us",
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
    fix_url: "/contact-us",
    data: [],
  },
];

const useOutsideClick = (ref, callback) => {
  const handleClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, callback]);
};

const Header = () => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(true);
  const [dropdownElements, setDropdownElements] = useState([]);
  const [filteredData, setFilteredData] = useState("none");
  const [scrollY, setScrollY] = useState(0);
  const [scrollYNew, setScrollYNew] = useState(0);
  const modalRef = useRef(null);

  const headerData = useSelector(
    (state) => state?.headerApi?.queries?.["header(undefined)"]?.data
  );

  const footerApi = useSelector(
    (state) => state?.footerApi?.queries?.["footer(undefined)"]?.data
  );

  const handleOutsideClick = () => {
    if (filteredData != "none") {
      setFilteredData("none");
    }
  };

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

  useOutsideClick(modalRef, handleOutsideClick);

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
          fix_url: "/what-we-do",
          data: [
            ...(headerData?.tech_steck || [] || []),
            { title: "View All", what_we_do_detail: "/" },
          ],
        },
        {
          id: 2,
          name: "Services",
          fix_url: "/services",
          data: [
            ...(headerData?.service || []),
            { title: "View All", service_detail: "/" },
          ],
        },
      ]);
    }
  }, [headerData]);

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      console.log("stex em");
      body.style.overflow = !openMenu ? "hidden" : "auto";
    }
  }, [openMenu]);

  return (
    <div className={styles.mainWraperBlock}>
      {dropdownElements?.length && (
        <div
          className={`${cx(
            styles.headerWrapper,
            !scrollYNew && styles.headerWrapperScroll
          )} ${!openMenu && styles.openHeaderWrapper}`}
        >
          <Link
            href="/"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0 });
            }}
            onTouchEnd={() => {
              window.scrollTo({ top: 0, left: 0 });
            }}
          >
            <Image src={menuLogoWhite} alt="logo" className={styles.img} />
          </Link>

          <div className={`${styles.menuWrapper}`}>
            {headerData &&
              dropdownElements?.map((el, index) => (
                <div
                  key={el.id}
                  onClick={() => {
                    if (window.innerWidth > 1024) {
                      setOpenMenu(true);
                    }
                    setTimeout(() => {
                      setFilteredData(
                        filteredData !== el.name ? el.name : "none"
                      );
                    }, 100);
                  }}
                  onTouchEnd={() => {
                    if (window.innerWidth > 1024) {
                      setOpenMenu(true);
                    }
                    setTimeout(() => {
                      setFilteredData(
                        filteredData !== el.name ? el.name : "none"
                      );
                    }, 100);
                  }}
                  className={`${styles.menuItem} ${
                    styles["menuItem" + index]
                  } ${filteredData !== el.name ? styles.closedMenu : ""}`}
                >
                  <div
                    className={styles.menuItemTitle}
                    style={{
                      borderBottom:
                        el.fix_url === router.pathname ||
                        (el?.fix_url === "what-we-do" &&
                          router.pathname === "/")
                          ? "2px solid #ffffff"
                          : "0",
                    }}
                  >
                    {el.name}
                    <Image src={dropdown} alt="" />
                  </div>
                  <div
                    className={styles.menuItemChildMainWrapper}
                    ref={modalRef}
                  >
                    {el?.data?.map((e, idx) => (
                      <Link
                        href={
                          el?.fix_url +
                          "/" +
                          (e?.service_detail || e?.what_we_do_detail)
                        }
                        key={idx}
                        onClick={() => setOpenMenu(true)}
                        onTouchEnd={() => setOpenMenu(true)}
                      >
                        <div
                          className={styles.menuItemChildWrapper}
                          style={{
                            display: el.name === filteredData ? "flex" : "none",
                          }}
                        >
                          <Image
                            src={active_menu_element}
                            className={styles.activeElem}
                            alt=""
                          />
                          <Image
                            src={menu_element}
                            className={styles.disActiveElem}
                            alt=""
                          />
                          {e.title}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            <div className={styles.menuSecondItemBlock}>
              {[...data]?.map((el, index) => (
                <div
                  key={el?.id}
                  onClick={() => {
                    setOpenMenu(true);
                    setFilteredData(
                      filteredData !== el.name ? el.name : "none"
                    );
                  }}
                  onTouchEnd={() => {
                    setOpenMenu(true);
                    setFilteredData(
                      filteredData !== el.name ? el.name : "none"
                    );
                  }}
                  className={`${styles.menuItem} ${
                    styles["menuItem" + (index + 2)]
                  }`}
                >
                  <Link
                    href={el?.fix_url === "what-we-do" ? "#" : `${el?.fix_url}`}
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0 });
                    }}
                    onTouchEnd={() => {
                      window.scrollTo({ top: 0, left: 0 });
                    }}
                    className={styles.menuItemTitle}
                    style={{
                      borderBottom:
                        el.fix_url === router.pathname ||
                        (el?.fix_url === "what-we-do" &&
                          router.pathname === "/")
                          ? "2px solid #ffffff"
                          : "0",
                    }}
                  >
                    {el.name}
                  </Link>
                </div>
              ))}
            </div>
            <Col className={styles.socialIconsWrapper}>
              <Paragraph className={styles.socialIconsTitle}>
                Let’s Contact for Great
              </Paragraph>
              {/* data && data[0]?.social_link? */}
              {footerApi &&
                footerApi?.contact?.map((item, index) => (
                  <Link href={item.link} target="_blank" key={index}>
                    <Image
                      src={item.logo || linkedIn}
                      alt="logo"
                      className={styles.socialIcons}
                      width={100}
                      height={100}
                    />
                  </Link>
                ))}
            </Col>
          </div>
          <div className={styles.rightButtons}>
            <Link href="/discuss-project" className={styles.pricing}>
              <Button text="Pricing" transparentBlue />
            </Link>
            <div className={`${openMenu ? styles.closedMenu : ""}`}>
              <Image
                src={!openMenu ? close : hamburger}
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
                onTouchEnd={() => {
                  setOpenMenu(!openMenu);
                }}
                className={styles.menuImage}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Header);
