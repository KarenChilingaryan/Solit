import { memo, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import Image from "next/image";
import { Paragraph } from "../../atoms";
const Button = dynamic(() => import("../../molecules/button/Button"));

import styles from "./Technology.module.scss";

const Technology = () => {
  const [filter, setFilter] = useState("All");

  const postsMainTechnologyApi = useSelector(
    (state) =>
      state?.postsMainTechnologyApi?.queries?.["posts(undefined)"]?.data
  );
  const postsMainTechnologyFiltersApi = useSelector(
    (state) =>
      state?.postsMainTechnologyFiltersApi?.queries?.["posts(undefined)"]?.data
  );

  const filterIcons = () => {
    const filterObject = {};
    postsMainTechnologyApi?.data_list?.map((el) => {
      if (filterObject[el.filter_name_main_technology.filter_number]) {
        filterObject[el.filter_name_main_technology.filter_number].push(el);
      } else {
        filterObject[el.filter_name_main_technology.filter_number] = [el];
      }
    });
    let returnArray = [];
    for (let i = 0; i < Object.values(filterObject).length; i++) {
      const element = Object.values(filterObject)[i].sort(
        (a, b) => a.filter_number - b.filter_number
      );
      returnArray = [...returnArray, ...element];
    }
    return returnArray;
  };

  useEffect(() => {
    if (postsMainTechnologyFiltersApi) {
      setFilter(0);
    }
  }, [postsMainTechnologyFiltersApi]);

  const filteredIcons = filterIcons() || [];

  const containerRef = useRef(null);

  const scrollButtonToCenter = (e) => {
    const container = containerRef.current;
    if (container) {
      if (e.target) {
        const button = e.target;
        const containerWidth = container.clientWidth;
        const buttonOffsetLeft = button.offsetLeft;
        const buttonWidth = button.clientWidth;
        const scrollLeft =
          buttonOffsetLeft - (containerWidth - buttonWidth) / 2;
        container.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }
  };

  return (
    <div className={styles.container}>
      <Paragraph className={styles.title}>
        {postsMainTechnologyApi?.data_text
          ? postsMainTechnologyApi?.data_text[0].title
          : ""}
      </Paragraph>
      <div
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html: postsMainTechnologyApi?.data_text
            ? postsMainTechnologyApi?.data_text[0].description
            : "",
        }}
      />
      <div className={styles.buttonsParent} ref={containerRef}>
        <div className={styles.buttons}>
          {[
            {
              filter_name_main_technology: "All",
              filter_number: 0,
              id: 0,
            },
            ...(postsMainTechnologyFiltersApi
              ? postsMainTechnologyFiltersApi
              : []),
          ]?.map((el, index) => (
            <Button
              key={index}
              text={el.filter_name_main_technology}
              lightBlueTech={filter === el.filter_number}
              grayTextBtnTech={filter !== el.filter_number}
              onClick={(e) => {
                scrollButtonToCenter(e);
                setFilter(el.filter_number);
              }}
            />
          ))}
        </div>
      </div>
      <div className={styles.languages}>
        {filteredIcons.map((el, i) => (
          <div
            className={`${styles.languageBlock} ${
              el.filter_name_main_technology.filter_number != filter &&
              filter != 0 &&
              styles.languageBlockDeActive
            }`}
            key={i}
          >
            <Image
              src={el.technology_logos_for_main.original_logo}
              className={styles.icon}
              width={50}
              height={50}
              alt="image"
            />
            <Paragraph className={styles.name}>
              {el.main_technology_name}
            </Paragraph>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Technology);
