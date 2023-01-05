import { memo } from "react";
import TitledText from "../../molecules/titledText/TitledText";
import ContactForm from "../contactForm/ContactForm";
import HomeMainTexts from "../../molecules/homeMainTexts/HomeMainTexts";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import styles from "./careersItem.module.scss";

const CareersComponent = () => {
  const { id } = useRouter().query;
  const careerTechnologyItem = useSelector(
    (state) =>
      state?.careerTechnologyItemApi?.queries?.[`careerTechnologyItem("${id}")`]?.data
  );

  return (
    <div className={styles.careerPage}>
      <HomeMainTexts
        result={{
          default_text: "Join our Andorid team",
          color_text: "Andorid",
        }}
        style={{ margin: "0 auto" }}
        square
      />
      <div className={styles.textsBlocks}>
        <ReactMarkdown
          children={careerTechnologyItem ? careerTechnologyItem?.description : ""}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        />
      </div>
      < div className={styles.careersPageForm} >
        <HomeMainTexts
          result={{
            default_text: "Tell us about your talents!",
            color_text: "about",
            white: true,
          }}
          margin={false}
          style={{ margin: "0 auto" }}
          square
        />
        <ContactForm
          title={"Tell us about your talents!"}
          style={{ background: "#105475" }}
          whiteButton={true}
        />
      </div >
    </div >
  );
}
export default memo(CareersComponent);
