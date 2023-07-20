import { memo, useState } from "react";
import Image from "next/image";
import { Paragraph } from "../../atoms";
import Button from "../../molecules/button/Button";

import styles from "./Technology.module.scss";
import { useSelector } from "react-redux";

const buttonsName = [
  "Back-End",
  "Front-End",
  "iOS",
  "Android",
  "Databases",
  "UI/UX tools",
];
const languages = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8,
  9, 1, 2, 3, 4, 5, 6, 7, 8, 9,
];
const Technology = () => {
  const [current, setCurrent] = useState(0);

  const postsMainTechnologyApi = useSelector(
    (state) => state?.postsMainTechnologyApi?.queries?.["posts(undefined)"]?.data
  );
  const postsMainTechnologyFiltersApi = useSelector(
    (state) => state?.postsMainTechnologyFiltersApi?.queries?.["posts(undefined)"]?.data
  );

  return (
    <div className={styles.container}>
      <Paragraph className={styles.title}>{postsMainTechnologyApi?.data_text ? postsMainTechnologyApi?.data_text[0].title : ""}</Paragraph>
      <div className={styles.description}
        dangerouslySetInnerHTML={{ __html: postsMainTechnologyApi?.data_text ? postsMainTechnologyApi?.data_text[0].description : "" }}
      />
      <div className={styles.buttonsParent}>
        <div className={styles.buttons}>
          {postsMainTechnologyFiltersApi && postsMainTechnologyFiltersApi.map((el, i) => (
            <Button
              text={el.filter_name_main_technology}
              lightBlueTech={i === current}
              grayTextBtnTech={i !== current}
              key={i}
            />
          ))}
        </div>
      </div>
      <div className={styles.languages}>
        {postsMainTechnologyApi?.data_list?.map((el, i) => (
          <div className={styles.languageBlock} key={i}>
            <Image src={el.technology_logos_for_main.original_logo} className={styles.icon} width={20} height={25} />
            <Paragraph className={styles.name}>{el.main_technology_name}</Paragraph>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Technology);
