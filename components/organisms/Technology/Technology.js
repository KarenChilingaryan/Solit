import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { Paragraph } from "../../atoms";
import Button from "../../molecules/button/Button";

import styles from "./Technology.module.scss";

const Technology = () => {
  const [filter, setFilter] = useState("Back-End");

  const postsMainTechnologyApi = useSelector(
    (state) => state?.postsMainTechnologyApi?.queries?.["posts(undefined)"]?.data
  );
  const postsMainTechnologyFiltersApi = useSelector(
    (state) => state?.postsMainTechnologyFiltersApi?.queries?.["posts(undefined)"]?.data
  );

  const filterIcons = () => {
    const filterObject = {}
    postsMainTechnologyApi?.data_list?.map((el) => {
      if (filterObject[el.filter_name_main_technology.filter_number]) {
        filterObject[el.filter_name_main_technology.filter_number].push(el)
      } else {
        filterObject[el.filter_name_main_technology.filter_number] = [el]
      }
    })
    let returnArray = [];
    for (let i = 0; i < Object.values(filterObject).length; i++) {
      const element = Object.values(filterObject)[i].sort((a, b) => a.filter_number - b.filter_number);
      returnArray = [...returnArray, ...element]
    }
    return returnArray;
  };

  useEffect(() => {
    if (postsMainTechnologyFiltersApi) {
      setFilter(postsMainTechnologyFiltersApi[0].filter_number)
    }
  }, [postsMainTechnologyFiltersApi])

  const filteredIcons = filterIcons() || [];

  return (
    <div className={styles.container}>
      <Paragraph className={styles.title}>
        {postsMainTechnologyApi?.data_text ? postsMainTechnologyApi?.data_text[0].title : ""}
      </Paragraph>
      <div
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html: postsMainTechnologyApi?.data_text ? postsMainTechnologyApi?.data_text[0].description : "",
        }}
      />
      <div className={styles.buttonsParent}>
        <div className={styles.buttons}>
          {postsMainTechnologyFiltersApi?.map((el, index) =>
            <Button
              key={index}
              text={el.filter_name_main_technology}
              lightBlueTech={filter === el.filter_number}
              grayTextBtnTech={filter !== el.filter_number}
              onClick={() => setFilter(el.filter_number)}
            />
          )}
        </div>
      </div>
      <div className={styles.languages}>
        {filteredIcons.map((el, i) => (
          <div className={`${styles.languageBlock} ${el.filter_name_main_technology.filter_number != filter && styles.languageBlockDeActive}`} key={i}>
            <Image src={el.technology_logos_for_main.original_logo} className={styles.icon} width={50} height={50} />
            <Paragraph className={styles.name}>{el.main_technology_name}</Paragraph>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Technology);
