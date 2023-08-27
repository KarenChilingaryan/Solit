import { memo, useState } from "react";
import Image from "next/image";
import { Paragraph } from "../../atoms";
import Button from "../../molecules/button/Button";

import styles from "./Technology.module.scss";
import { useSelector } from "react-redux";

const Technology = () => {
  const [current, setCurrent] = useState(0);
  const [filter, setFilter] = useState("Back-End");

  const postsMainTechnologyApi = useSelector(
    (state) => state?.postsMainTechnologyApi?.queries?.["posts(undefined)"]?.data
  );
  const postsMainTechnologyFiltersApi = useSelector(
    (state) => state?.postsMainTechnologyFiltersApi?.queries?.["posts(undefined)"]?.data
  );

  const filterIcons = () => {
    const BE = [];
    const FE = [];
    postsMainTechnologyApi?.data_list?.map((el) => {
      if (el.filter_name_main_technology.filter_name_main_technology == "Back-End") {
        BE.push(el)
      } else {
        FE.push(el)
      }
    })
    return [...FE, ...BE];
  };

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

          <Button
            text="Back-end"
            lightBlueTech={filter === "Back-End"}
            grayTextBtnTech={filter !== "Back-End"}
            onClick={() => setFilter("Back-End")}
          />


          <Button
            text="Front-end"
            lightBlueTech={filter === "Front-End"}
            grayTextBtnTech={filter !== "Front-End"}
            onClick={() => setFilter("Front-End")}
          />
        </div>
      </div>
      <div className={styles.languages}>
        {filteredIcons.map((el, i) => (
          <div className={`${styles.languageBlock} ${el.filter_name_main_technology.filter_name_main_technology != filter && styles.languageBlockDeActive}`} key={i}>
            <Image src={el.technology_logos_for_main.original_logo} className={styles.icon} width={50} height={50} />
            <Paragraph className={styles.name}>{el.main_technology_name}</Paragraph>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Technology);
