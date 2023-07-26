import { memo, useState } from "react";
import Image from "next/image";
import { Paragraph } from "../../atoms";
import Button from "../../molecules/button/Button";

import styles from "./Technology.module.scss";
import { useSelector } from "react-redux";

const Technology = () => {
  const [current, setCurrent] = useState(0);
  const [filter, setFilter] = useState("back-end");

  const postsMainTechnologyApi = useSelector(
    (state) => state?.postsMainTechnologyApi?.queries?.["posts(undefined)"]?.data
  );
  const postsMainTechnologyFiltersApi = useSelector(
    (state) => state?.postsMainTechnologyFiltersApi?.queries?.["posts(undefined)"]?.data
  );


  const filterIcons = () => {
    if (filter === "front-end") {
      return postsMainTechnologyApi?.data_list?.filter((el) => el.main_technology_name.toLowerCase() === "react");
    } else if (filter === "back-end") {
      return postsMainTechnologyApi?.data_list?.filter((el) => el.main_technology_name.toLowerCase() !== "react");
    }
    return [];
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
            lightBlueTech={filter === "back-end"}
            grayTextBtnTech={filter !== "back-end"}
            onClick={() => setFilter("back-end")}
          />


          <Button
            text="Front-end"
            lightBlueTech={filter === "front-end"}
            grayTextBtnTech={filter !== "front-end"}
            onClick={() => setFilter("front-end")}
          />
        </div>
      </div>
      <div className={styles.languages}>
        {filteredIcons.map((el, i) => (
          <div className={styles.languageBlock} key={i}>
            <Image src={el.technology_logos_for_main.original_logo} className={styles.icon} width={50} height={50} />
            <Paragraph className={styles.name}>{el.main_technology_name}</Paragraph>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Technology);
