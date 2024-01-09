import { memo, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import _ from "lodash";
import cx from "classnames";
import { Col, Paragraph } from "../../atoms";
import { useSelector } from "react-redux";
import { useOutsideClick } from "./OutSideClick";
import menuLogoWhite from "../../../assets/img/bigLogo.png";
import hamburger from "../../../assets/img/hamburger.svg";
import close from "../../../assets/img/u_times.svg";
import dropdown from "../../../assets/img/angle-down.svg";
import active_menu_element from "../../../assets/img/active-menu-element.svg";
import menu_element from "../../../assets/img/menu-element.svg";
import Button from "../../molecules/button/Button";
import linkedIn from "../../../assets/img/linkedin.png";
import { data } from "../../../utils/hooks/helpers";

import styles from "./Header.module.scss";

const Header = () => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(true);
  const [dropdownElements, setDropdownElements] = useState([]);
  const [filteredData, setFilteredData] = useState("none");
  const [scrollY, setScrollY] = useState(0);
  const [scrollYNew, setScrollYNew] = useState(0);
  const [activeTab, setActiveTab] = useState({ name: "", slug: "" });
  const modalRef = useRef(null);

  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const isiOS = /iPad|iPhone|iPod/.test(userAgent);
    setIsIOS(isiOS);
  }, []);

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
    const is = document.getElementsByClassName("ant-scrolling-effect").length;
    if (!is) {
      if (scrollYNew && !scrollY) {
        setScrollYNew(scrollY);
      } else if (!scrollYNew && scrollY) {
        setScrollYNew(scrollY);
      }
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
            { title: "View All", what_we_do_detail: "/", slug: false },
          ],
        },
        {
          id: 2,
          name: "Services",
          fix_url: "/services",
          slug: false,
          data: [
            ...(headerData?.service || []),
            { title: "View All", service_detail: "/", slug: false },
          ],
        },
      ]);
    }
  }, [headerData]);

  useEffect(() => {
    const body = document.querySelector("body");
    const next = document.getElementById("__next");
    if (body) {
      body.style.overflow = !openMenu ? "hidden" : "auto";
      next.style.overflow = !openMenu ? "hidden" : "auto";
      next.style.maxHeight = !openMenu ? "100vh" : "initial";
    }
  }, [openMenu]);

  useEffect(() => {
    if (router) {
      const asPath = router.asPath.split("/");
      if (asPath.length == 3) {
        setActiveTab({
          name: "/" + asPath[1],
          slug: asPath[2],
        });
      } else if (
        asPath.length == 2 &&
        (asPath[1] == "what-we-do" || asPath[1] == "services")
      ) {
        setActiveTab({
          name: "/" + asPath[1],
          slug: "",
        });
      } else {
        setActiveTab({
          name: "",
          slug: "",
        });
      }
    }
  }, [router]);

  return (
    <div className={styles.mainWraperBlock}>
      {dropdownElements?.length && (
        <div
          className={`${cx(
            styles.headerWrapper,
            !scrollYNew && styles.headerWrapperScroll
          )} ${!openMenu && styles.openHeaderWrapper}`}
          style={{
            ...(window.innerWidth <= 576 && !openMenu
              ? { height: `calc(${window.innerHeight}px + 6vw)` }
              : {}),
          }}
        >
          <Link href="/" prefetch={false}>
            <Image
              src={menuLogoWhite}
              alt="logo"
              className={styles.img}
              onClick={() => {
                window.scrollTo({ top: 0, left: 0 });
              }}
            />
          </Link>

          <div className={`${styles.menuWrapper}`}>
            <Link
              href="/discuss-project"
              className={styles.pricing}
              prefetch={false}
            >
              <Button
                text="Pricing"
                transparentBlue
                onClick={() => setOpenMenu(true)}
              />
            </Link>
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
                  className={`${styles.menuItem} ${
                    styles["menuItem" + index]
                  } ${filteredData !== el.name ? styles.closedMenu : ""}`}
                >
                  <div
                    className={`${styles.menuItemTitle} ${
                      !router.pathname?.search(el.fix_url) &&
                      styles.menuItemTitleActiveDrop
                    }`}
                  >
                    <span>{el.name}</span>
                    <Image src={dropdown} alt="image" />
                  </div>
                  <div
                    className={styles.menuItemChildMainWrapper}
                    ref={modalRef}
                  >
                    {el?.data?.map((e, idx) => (
                      <Link
                        href={el?.fix_url + "/" + (e?.slug || "")}
                        key={idx}
                        prefetch={false}
                      >
                        <div
                          className={styles.menuItemChildWrapper}
                          style={{
                            display: el.name === filteredData ? "flex" : "none",
                          }}
                          onClick={() =>
                            setTimeout(() => {
                              setOpenMenu(true);
                            }, 100)
                          }
                        >
                          <Image
                            src={active_menu_element}
                            className={styles.activeElem}
                            alt="image"
                            style={{
                              ...(el?.fix_url === activeTab.name &&
                              e.slug == activeTab.slug
                                ? { display: "block" }
                                : {}),
                            }}
                          />
                          <Image
                            src={menu_element}
                            className={styles.disActiveElem}
                            alt="image"
                            style={{
                              ...(el?.fix_url === activeTab.name &&
                              e.slug == activeTab.slug
                                ? { display: "none" }
                                : {}),
                            }}
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
                    setTimeout(() => {
                      setOpenMenu(true);
                      setFilteredData(
                        filteredData !== el.name ? el.name : "none"
                      );
                      window.scrollTo({ top: 0, left: 0 });
                    }, 100);
                  }}
                  className={`${styles.menuItem} ${
                    styles["menuItem" + (index + 2)]
                  }`}
                >
                  <Link
                    href={el?.fix_url === "what-we-do" ? "#" : `${el?.fix_url}`}
                    className={`${styles.menuItemTitle} ${
                      !router.pathname?.search(el.fix_url) &&
                      styles.menuItemTitleActive
                    }`}
                    style={{
                      borderBottom:
                        el.fix_url === router.pathname ||
                        (el?.fix_url === "what-we-do" &&
                          router.pathname === "/")
                          ? "2px solid #ffffff"
                          : "0",
                    }}
                    prefetch={false}
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
              {footerApi &&
                footerApi?.contact?.map((item, index) => (
                  <Link
                    href={item.link}
                    target="_blank"
                    key={index}
                    prefetch={false}
                  >
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
            <Link
              href="/discuss-project"
              className={styles.pricing}
              prefetch={false}
            >
              <Button text="Pricing" transparentBlue />
            </Link>
            <div className={`${openMenu ? styles.closedMenu : ""}`}>
              <Image
                src={!openMenu ? close : hamburger}
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
                className={styles.menuImage}
                alt="image"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Header);
