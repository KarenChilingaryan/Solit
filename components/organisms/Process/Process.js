import { memo, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Paragraph } from "../../atoms";

import styles from "./Process.module.scss";

const svgSizes = [
  {
    title: "Requirement Analysis",
    description:
      "Analyzing needs, we tailor solutions to align with your business goals.",
  },
  {
    title: "Planning and Design",
    description:
      "Plan, design for user experience, scalability, ensuring robust, high-performance software solutions.",
  },
  {
    title: "Development and Coding",
    description:
      "Transform design into high-performance software using cutting-edge technologies and best practices.",
  },
  {
    title: "Testing and Quality Assurance",
    description:
      "Rigorous testing ensures quality, reliability, and security by identifying and eliminating potential issues.",
  }, {
    title: "Deployment and Integration",
    description:
      "Seamless deployment, integration support for a smooth transition with minimal disruption to existing systems.",
  },
  {
    title: "Maintenance and Support",
    description: "Ongoing maintenance, support services to promptly address issues, ensuring peak software performance.",
  },
];

const Line = () => {
  const targetRef = useRef(null);
  const targetRefMobile = useRef(null);
  const [visiblePercentage, setVisiblePercentage] = useState(0);

  useEffect(() => {
    const getForMobile = () => {
      const targetElement = targetRefMobile.current;
      if (!targetElement) return;

      const { top, height } = targetElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const percentage = Math.round(((windowHeight - top) / height) * 60);
      setVisiblePercentageMobile(percentage);
    };
    const handleScroll = () => {
      const targetElement = targetRef.current;
      if (!targetElement) return;

      const { top, height } = targetElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const percentage = ((windowHeight - top) / height) * 120;
      setVisiblePercentage(percentage);
      getForMobile();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const part1Ref = useRef(null)
  const part2Ref = useRef(null)
  const part3Ref = useRef(null)
  const part4Ref = useRef(null)
  const part5Ref = useRef(null)

  const part1RefBlue = useRef(null)
  const part2RefBlue = useRef(null)
  const part3RefBlue = useRef(null)
  const part4RefBlue = useRef(null)
  const part5RefBlue = useRef(null)


  const infoTextRef1 = useRef(null)
  const infoTextRef2 = useRef(null)
  const infoTextRef3 = useRef(null)
  const infoTextRef4 = useRef(null)
  const infoTextRef5 = useRef(null)
  const infoTextRef6 = useRef(null)

  useEffect(() => {
    if (visiblePercentage > 0) {
      const width = ((targetRef.current.offsetWidth) * visiblePercentage * 2.5) / 100
      const px = width > targetRef.current.offsetWidth ? (targetRef.current.offsetWidth) : width
      part1Ref.current.style.width = `${px}px`;
    } else {
      part1Ref.current.style.width = `0px`
    }

    if (visiblePercentage > 40) {
      const height = ((part2Ref.current.children[0].offsetHeight) * (((visiblePercentage - 40) * 5) > 100 ? 100 : ((visiblePercentage - 40) * 5))) / 100
      part2Ref.current.style.height = `${height}px`
      part2Ref.current.style.marginBottom = `${part2Ref.current.children[0].offsetHeight - height}px`
    } else {
      part2Ref.current.style.height = `${0}px`
    }

    if (visiblePercentage > 60) {
      const width = ((targetRef.current.offsetWidth) * (visiblePercentage - 60) * (100 / 30)) / 100
      const realWidth = width > targetRef.current.offsetWidth ? (targetRef.current.offsetWidth) : width;
      part3Ref.current.style.width = `${realWidth}px`
      part3Ref.current.scrollLeft = targetRef.current.offsetWidth - realWidth
    } else {
      part3Ref.current.style.width = `${0}px`
      part3Ref.current.scrollLeft = 0
    }

    if (visiblePercentage > 90) {
      const height = ((part4Ref.current.children[0].offsetHeight) * (((visiblePercentage - 90) * 5) > 100 ? 100 : ((visiblePercentage - 90) * 5))) / 100
      part4Ref.current.style.height = `${height}px`
      part4Ref.current.style.marginBottom = `${part4Ref.current.children[0].offsetHeight - height}px`
    } else {
      part4Ref.current.style.height = `${0}px`
    }

    if (visiblePercentage > 110) {
      const width = ((targetRef.current.offsetWidth) * (visiblePercentage - 110) * 2.5) / 100
      const realWidth = width > targetRef.current.offsetWidth ? (targetRef.current.offsetWidth) : width;
      part5Ref.current.style.width = `${realWidth}px`
    } else {
      part5Ref.current.style.width = `${0}px`
    }

    if (visiblePercentage > 10) {
      const width = ((targetRef.current.offsetWidth) * (visiblePercentage - 10) * 2.5) / 100
      const px = width > targetRef.current.offsetWidth ? (targetRef.current.offsetWidth) : width
      part1RefBlue.current.style.width = `${px}px`
    } else {
      part1RefBlue.current.style.width = `0px`
    }

    if (visiblePercentage > 50) {
      const height = ((part2RefBlue.current.children[0].offsetHeight) * (((visiblePercentage - 50) * 5) > 100 ? 100 : ((visiblePercentage - 50) * 5))) / 100
      part2RefBlue.current.style.height = `${height}px`
      part2RefBlue.current.style.marginBottom = `${part2RefBlue.current.children[0].offsetHeight - height}px`
    } else {
      part2RefBlue.current.style.height = `${0}px`
    }

    if (visiblePercentage > 70) {
      const width = ((targetRef.current.offsetWidth) * (visiblePercentage - 70) * (100 / 30)) / 100
      const realWidth = width > targetRef.current.offsetWidth ? (targetRef.current.offsetWidth) : width;
      part3RefBlue.current.style.width = `${realWidth}px`
      part3RefBlue.current.scrollLeft = targetRef.current.offsetWidth - realWidth
    } else {
      part3RefBlue.current.style.width = `${0}px`
      part3RefBlue.current.scrollLeft = 0
    }

    if (visiblePercentage > 100) {
      const height = ((part4RefBlue.current.children[0].offsetHeight) * (((visiblePercentage - 100) * 5) > 100 ? 100 : ((visiblePercentage - 100) * 5))) / 100
      part4RefBlue.current.style.height = `${height}px`
      part4RefBlue.current.style.marginBottom = `${part4RefBlue.current.children[0].offsetHeight - height}px`
    } else {
      part4RefBlue.current.style.height = `${0}px`
    }

    if (visiblePercentage > 120) {
      const width = ((targetRef.current.offsetWidth) * (visiblePercentage - 120) * 2.5) / 100
      const realWidth = width > targetRef.current.offsetWidth ? (targetRef.current.offsetWidth) : width;
      part5RefBlue.current.style.width = `${realWidth}px`
    } else {
      part5RefBlue.current.style.width = `${0}px`
    }

    if(visiblePercentage > 0){
      infoTextRef1.current.children[0].style.opacity = (1 * visiblePercentage * 2.5) / 100
    } else {
      infoTextRef1.current.children[0].style.opacity = 0
    }
    if(visiblePercentage > 20){
      infoTextRef1.current.children[1].style.opacity = (1 * (visiblePercentage - 20) * 2.5) / 100
      infoTextRef2.current.children[0].style.opacity = (1 * (visiblePercentage - 20) * 2.5) / 100
    } else {
      infoTextRef1.current.children[1].style.opacity = 0
      infoTextRef2.current.children[0].style.opacity = 0
    }

    if(visiblePercentage > 35){
      infoTextRef2.current.children[1].style.opacity = (1 * (visiblePercentage - 35) * 5) / 100
    }else {
      infoTextRef2.current.children[1].style.opacity = 0
    }

    if(visiblePercentage > 70){
      infoTextRef3.current.children[0].style.opacity = (1 * (visiblePercentage - 70) * 2.5) / 100
    } else {
      infoTextRef3.current.children[0].style.opacity = 0
    }
    if(visiblePercentage > 80){
      infoTextRef3.current.children[1].style.opacity = (1 * (visiblePercentage - 80) * 2.5) / 100
      infoTextRef4.current.children[0].style.opacity = (1 * (visiblePercentage - 80) * 2.5) / 100
    } else {
      infoTextRef3.current.children[1].style.opacity = 0
      infoTextRef4.current.children[0].style.opacity = 0
    }

    if(visiblePercentage > 95){
      infoTextRef4.current.children[1].style.opacity = (1 * (visiblePercentage - 95) * 5) / 100
    }else {
      infoTextRef4.current.children[1].style.opacity = 0
    }

    if(visiblePercentage > 117){
      infoTextRef5.current.children[0].style.opacity = (1 * (visiblePercentage - 117) * 5) / 100
    } else {
      infoTextRef5.current.children[0].style.opacity = 0
    }

    if(visiblePercentage > 130){
      infoTextRef5.current.children[1].style.opacity = (1 * (visiblePercentage - 130) * 5) / 100
      infoTextRef6.current.children[0].style.opacity = (1 * (visiblePercentage - 130) * 5) / 100
    } else {
      infoTextRef5.current.children[1].style.opacity = 0
      infoTextRef6.current.children[0].style.opacity = 0
    }
    if(visiblePercentage > 145){
      infoTextRef6.current.children[1].style.opacity = (1 * (visiblePercentage - 145) * 5) / 100
    } else {
      infoTextRef6.current.children[1].style.opacity = 0
    }
  }, [visiblePercentage])

  return (
    <div className={styles.snack} ref={targetRef}>
      <div className={styles.part1} ref={part1Ref}>
        <div className={`${styles.borderRound} ${styles.borderRound1}`}>
          <div className={styles.round}></div>
        </div>
        <div className={`${styles.line1} ${styles.line}`}></div>
        <div className={styles.borderRound}>
          <div className={styles.round}></div>
        </div>
        <div className={`${styles.line2} ${styles.line}`}></div>
        <div className={`${styles.oval1} ${styles.oval}`}></div>
      </div>
      <div className={styles.part2} ref={part2Ref}>
        <div className={`${styles.line3} ${styles.line}`}></div>
      </div>
      <div className={styles.part3} ref={part3Ref}>
        <div className={`${styles.oval3} ${styles.oval}`}></div>
        <div className={`${styles.line6} ${styles.line}`}></div>
        <div className={`${styles.borderRound} ${styles.borderRound3}`}>
          <div className={styles.round}></div>
        </div>
        <div className={`${styles.line5} ${styles.line}`}></div>

        <div className={`${styles.borderRound} ${styles.borderRound2}`}>
          <div className={styles.round}></div>
        </div>
        <div className={`${styles.line4} ${styles.line}`}></div>
        <div className={`${styles.oval2} ${styles.oval}`}></div>
      </div>

      <div className={styles.part4} ref={part4Ref}>
        <div className={`${styles.line7} ${styles.line}`}></div>
      </div>
      <div className={styles.part5} ref={part5Ref}>
        <div className={`${styles.oval4} ${styles.oval}`}></div>
        <div className={`${styles.line8} ${styles.line}`}></div>
        <div className={`${styles.borderRound} ${styles.borderRound4}`}>
          <div className={styles.round}></div>
        </div>
        <div className={`${styles.line9} ${styles.line}`}></div>
        <div className={`${styles.borderRound} ${styles.borderRound5}`}>
          <div className={styles.round}></div>
        </div>
      </div>
      <div className={styles.snackBlue}>
        <div className={styles.part1} ref={part1RefBlue}>
          <div className={`${styles.borderRound} ${styles.borderRound1}`}>
            <div className={styles.round}></div>
          </div>
          <div className={`${styles.line1} ${styles.line}`}></div>
          <div className={styles.borderRound}>
            <div className={styles.round}></div>
          </div>
          <div className={`${styles.line2} ${styles.line}`}></div>
          <div className={`${styles.oval1} ${styles.oval}`}></div>
        </div>
        <div className={styles.part2} ref={part2RefBlue}>
          <div className={`${styles.line3} ${styles.line}`}></div>
        </div>
        <div className={styles.part3} ref={part3RefBlue}>
          <div className={`${styles.oval3} ${styles.oval}`}></div>
          <div className={`${styles.line6} ${styles.line}`}></div>
          <div className={`${styles.borderRound} ${styles.borderRound3}`}>
            <div className={styles.round}></div>
          </div>
          <div className={`${styles.line5} ${styles.line}`}></div>

          <div className={`${styles.borderRound} ${styles.borderRound2}`}>
            <div className={styles.round}></div>
          </div>
          <div className={`${styles.line4} ${styles.line}`}></div>
          <div className={`${styles.oval2} ${styles.oval}`}></div>
        </div>

        <div className={styles.part4} ref={part4RefBlue}>
          <div className={`${styles.line7} ${styles.line}`}></div>
        </div>
        <div className={styles.part5} ref={part5RefBlue}>
          <div className={`${styles.oval4} ${styles.oval}`}></div>
          <div className={`${styles.line8} ${styles.line}`}></div>
          <div className={`${styles.borderRound} ${styles.borderRound4}`}>
            <div className={styles.round}></div>
          </div>
          <div className={`${styles.line9} ${styles.line}`}></div>
          <div className={`${styles.borderRound} ${styles.borderRound5}`}>
            <div className={styles.round}></div>
          </div>
        </div>

      </div>

      <div className={styles.snackText}>
        <div className={styles.part1}>
          <div className={`${styles.borderRound} ${styles.borderRound1}`}>
            <div className={styles.info} ref={infoTextRef1}>
              <p className={styles.titleInfo}>{svgSizes[0].title}</p>
              <p className={styles.descriptionInfo}>{svgSizes[0].description}</p>
            </div>
            <div className={styles.round}></div>
          </div>
          <div className={`${styles.line1} ${styles.line}`}></div>
          <div className={styles.borderRound}>
            <div className={styles.info} ref={infoTextRef2}>
              <p className={styles.titleInfo}>{svgSizes[1].title}</p>
              <p className={styles.descriptionInfo}>{svgSizes[1].description}</p>
            </div>
            <div className={styles.round}></div>
          </div>
          <div className={`${styles.line2} ${styles.line}`}></div>
          <div className={`${styles.oval1} ${styles.oval}`}></div>
        </div>
        <div className={styles.part2} >
          <div className={`${styles.line3} ${styles.line}`}></div>
        </div>
        <div className={styles.part3} >
          <div className={`${styles.oval3} ${styles.oval}`}></div>
          <div className={`${styles.line6} ${styles.line}`}></div>
          <div className={`${styles.borderRound} ${styles.borderRound3}`}>
            <div className={styles.info} ref={infoTextRef4}>
              <p className={styles.titleInfo}>{svgSizes[2].title}</p>
              <p className={styles.descriptionInfo}>{svgSizes[2].description}</p>
            </div>
            <div className={styles.round}></div>
          </div>
          <div className={`${styles.line5} ${styles.line}`}></div>

          <div className={`${styles.borderRound} ${styles.borderRound2}`}>
            <div className={styles.info} ref={infoTextRef3}>
              <p className={styles.titleInfo}>{svgSizes[3].title}</p>
              <p className={styles.descriptionInfo}>{svgSizes[3].description}</p>
            </div>
            <div className={styles.round}></div>
          </div>
          <div className={`${styles.line4} ${styles.line}`}></div>
          <div className={`${styles.oval2} ${styles.oval}`}></div>
        </div>

        <div className={styles.part4} >
          <div className={`${styles.line7} ${styles.line}`}></div>
        </div>
        <div className={styles.part5} >
          <div className={`${styles.oval4} ${styles.oval}`}></div>
          <div className={`${styles.line8} ${styles.line}`}></div>
          <div className={`${styles.borderRound} ${styles.borderRound4}`}>
            <div className={styles.info} ref={infoTextRef5}>
              <p className={styles.titleInfo}>{svgSizes[4].title}</p>
              <p className={styles.descriptionInfo}>{svgSizes[4].description}</p>
            </div>
            <div className={styles.round}></div>
          </div>
          <div className={`${styles.line9} ${styles.line}`}></div>
          <div className={`${styles.borderRound} ${styles.borderRound5}`}>
            <div className={styles.info} ref={infoTextRef6}>
              <p className={styles.titleInfo}>{svgSizes[5].title}</p>
              <p className={styles.descriptionInfo}>{svgSizes[5].description}</p>
            </div>
            <div className={styles.round}></div>
          </div>
        </div>
      </div>
    </div>

  );
};

const Process = () => {
  const postsMainProcessTextApi = useSelector(
    (state) =>
      state?.postsMainProcessTextApi?.queries?.["posts(undefined)"]?.data
  );

  return (
    <div className={styles.container}>
      <Paragraph className={styles.title}>
        {postsMainProcessTextApi ? postsMainProcessTextApi[0].title : ""}
      </Paragraph>
      <div
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html: postsMainProcessTextApi
            ? postsMainProcessTextApi[0].description
            : "",
        }}
      />
      <Line />;
    </div>
  );
};

export default memo(Process);
