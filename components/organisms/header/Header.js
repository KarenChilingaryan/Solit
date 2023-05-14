import { memo, useEffect, useState } from "react";
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
const data = [
  {
    id: 1,
    name: "Tech Stack",
    fix_url: "techstack",
    data: ["mobile", "Android", "iOS", "ReactJS", "BacEnd", "Python"],
  },
  {
    id: 2,
    name: "Services",
    fix_url: "/services",
    data: [
      "Web development",
      "Mobile Development",
      "Software Testing",
      "UI/UX Design",
      "Dedicated Team",
      "Completed Projects",
    ],
  },
  {
    id: 3,
    name: "Portfolio",
    fix_url: "/portfolio",
    data: [],
  },
  {
    id: 4,
    name: "About us",
    fix_url: "/about",
    data: [],
  },
  {
    id: 5,
    name: "Careers",
    fix_url: "/careers",
    data: [],
  },
  {
    id: 6,
    name: "Blog",
    fix_url: "/blog",
    data: [],
  },
  {
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
    <div
      className={cx(
        styles.headerWrapper,
        !scrollYNew && styles.headerWrapperScroll
      )}
    >
      <Link
        href="/"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0 });
          setOpenMenu(true);
        }}
      >
        <Image src={menuLogoWhite} alt="logo" className={styles.img} />
      </Link>
      <Image
        src={hamburger}
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
        style={{
          ...(!openMenu
            ? {
                filter:
                  "invert(84%) sepia(99%) saturate(2300%) hue-rotate(74deg) brightness(99%) contrast(110%)",
              }
            : {}),
        }}
        className={styles.menuImage}
      />
      <div
        className={`${styles.menuWrapper} ${openMenu ? styles.closedMenu : ""}`}
      >
        {data?.map((el) => (
          <div
            key={el?.id}
            onClick={() => {
              setFilteredData(filteredData !== el.name ? el.name : "none");
            }}
            className={styles.menuItem}
          >
            <Link
              href={el?.fix_url === "techstack" ? "#" : `/${el?.fix_url}`}
              onClick={() => {
                if (el?.fix_url !== "techstack") {
                  setOpenMenu(!openMenu);
                }
                window.scrollTo({ top: 0, left: 0 });
              }}
              className={styles.menuItemTitle}
              style={{
                borderBottom:
                  el.fix_url === router.pathname ||
                  (el?.fix_url === "techstack" && router.pathname === "/")
                    ? "2px solid #ffffff"
                    : "0",
              }}
            >
              {el.name}
              {el?.subtitle_ingredients && el?.subtitle_ingredients?.length ? (
                <Image src={dropdown} />
              ) : (
                <></>
              )}
            </Link>

            <div className={styles.menuItemChildMainWrapper}>
              {el?.subtitle_ingredients?.map((e, idx) => (
                <div
                  key={idx}
                  className={styles.menuItemChildWrapper}
                  style={{
                    display: el.name === filteredData ? "inline-block" : "none",
                  }}
                >
                  {e?.ingredients?.map((subItem, idx) => (
                    <div
                      className={styles.menuItemChild}
                      key={idx}
                      onMouseDown={() => {
                        setOpenMenu(!openMenu);
                        setFilteredData("none");
                        router.push(`/services/${subItem?.service}`);
                      }}
                    >
                      {subItem.name}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        className={`${styles.menuWrapper} ${openMenu ? styles.closedMenu : ""}`}
      >
        <div className={styles.buttonWrapper} onClick={() => setOpenMenu(true)}>
          <Link href={"/contactus"}>
            <Button text="Pricing" boldBlue />
          </Link>
        </div>
        <div className={styles.pricing} onClick={() => setOpenMenu(true)}>
          <Link href={"/contactus"}>
            <Button text="Pricing" lightBlue />
          </Link>
        </div>
      </div>
      <div
        className={`${styles.buttonWrapper} ${styles.buttonWrapperMobile}`}
        onClick={() => setOpenMenu(true)}
      >
        <Link href={"/contactus"}>
          <Button text="Pricing" boldBlue />
        </Link>
      </div>
    </div>
  );
};

export default memo(Header);
