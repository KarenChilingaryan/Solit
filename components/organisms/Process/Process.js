import { memo, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Paragraph } from "../../atoms";

import styles from "./Process.module.scss";


const svgSizes = [
  {
    type: "round",
    A: 80,
    B: 50,
    name: "Requirement Analysis",
    description: "Our expert team initiates the process by thoroughly understanding your project requirements, goals, and expectations. This analysis serves as the foundation for creating a tailored solution that perfectly aligns with your business needs.",
    position: 'first'
  },
  {
    type: "path",
    A: { x: 85, y: 50 },
    B: { x: 250, y: 50 },
  },
  {
    type: "round",
    A: 239,
    B: 50,
    name: 'Planning and Design',
    description: 'With a comprehensive understanding of your project, we meticulously plan the development roadmap and craft an intuitive design that not only enhances user experience but also ensures scalability and flexibility for future expansions.',
    position: 'right'
  },
  {
    type: "path",
    A: { x: 244, y: 50 },
    B: { x: 465, y: 50 },
  },
  {
    A: { x: 465, y: 50 },
    B: { x: 499, y: 90 },
    controlPoint: { x: 499, y: 48 },
  },
  {
    type: "path",
    A: { x: 499, y: 90 },
    B: { x: 499, y: 115 },
  },
  {
    A: { x: 499, y: 115 },
    B: { x: 465, y: 148 },
    controlPoint: { x: 499, y: 148 },
  },
  {
    type: "path",
    A: { x: 465, y: 148 },
    B: { x: 370, y: 148 },
  },
  {
    type: "round",
    A: 400,
    B: 148,
    name: 'Development and Coding',
    description: 'Our seasoned developers leverage cutting-edge technologies and industry best practices to transform the approved design into a functional software solution, leaving no stone unturned in delivering a robust and high-performance product.',
    position: 'right'
  },
  {
    type: "path",
    A: { x: 395, y: 148 },
    B: { x: 245, y: 148 },
  },
  {
    type: "round",
    A: 240,
    B: 148,
    name: 'Testing and Quality Assurance',
    description: 'Rigorous testing methodologies are employed to identify and eliminate any potential bugs or glitches, ensuring the final product meets the highest standards of quality, reliability, and security.',
    position: 'left'
  },
  {
    type: "path",
    A: { x: 240, y: 148 },
    B: { x: 36, y: 148 },
  },
  {
    A: { x: 36, y: 148 },
    B: { x: 2, y: 180 },
    controlPoint: { x: 2, y: 148 },
  },
  {
    type: "path",
    A: { x: 2, y: 180 },
    B: { x: 2, y: 210 },
  },
  {
    A: { x: 34, y: 252 },
    B: { x: 2, y: 210 },
    controlPoint: { x: 2, y: 252 },
  },
  {
    type: "path",
    A: { x: 34, y: 252 },
    B: { x: 100, y: 252 },
  },
  {
    type: "round",
    A: 100,
    B: 252,
    name: 'Deployment and Integration',
    description: 'Once the software is thoroughly vetted and approved, we seamlessly deploy it to your desired platform, offering full integration support to ensure a smooth transition and minimal disruption to your existing systems.',
    position: 'left'
  },
  {
    type: "path",
    A: { x: 105, y: 252 },
    B: { x: 260, y: 252 },
  },
  {
    type: "round",
    A: 260,
    B: 252,
    name: 'Maintenance and Support',
    description: 'Our commitment extends beyond deployment as we provide ongoing maintenance and support services, promptly addressing any issues that may arise and proactively updating the software to keep it at its peak performance.',
    position: 'right'
  },
];


const svgSizesMobile = [
  {
    type: "round",
    A: 17,
    B: 50,
  },
  {
    type: "path",
    A: { x: 17, y: 60 },
    B: { x: 17, y: 230 },
  },
  {
    type: "round",
    A: 17,
    B: 230,
  },
  {
    type: "path",
    A: { x: 17, y: 240 },
    B: { x: 17, y: 410 },
  },
  {
    type: "round",
    A: 17,
    B: 410,
  },
  {
    type: "path",
    A: { x: 17, y: 420 },
    B: { x: 17, y: 590 },
  },
  {
    type: "round",
    A: 17,
    B: 590,
  },
  {
    type: "path",
    A: { x: 17, y: 600 },
    B: { x: 17, y: 770 },
  },
  {
    type: "round",
    A: 17,
    B: 770,
  },
  {
    type: "path",
    A: { x: 17, y: 780 },
    B: { x: 17, y: 950 },
  },
  {
    type: "round",
    A: 17,
    B: 950,
  },
];

const GetText = (text, A, B, fs = "8", lh = 10, anchor = "middle", position = 'center') => {
  const [description, setDescription] = useState([]);
  useEffect(() => {
    if (text) {
      const textArr = text.split(" ");
      const arr = [];
      let textValue = "";
      for (let i = 0; i < textArr.length; i++) {
        const element = textArr[i];
        if (textValue.length + element.length < 40) {
          textValue = `${textValue} ${element}`;
        } else {
          arr.push(textValue);
          textValue = element;
        }
      }
      setDescription(arr);
    }
  }, [text]);

  return description?.map((el, index) => (
    <text
      key={index}
      x={A}
      y={B + 20 + index * lh}
      fill="rgba(255, 255, 255, 0.73)"
      textAnchor={anchor}
      dominantBaseline="baseline"
      fontSize={fs}
    >
      {el}
    </text>
  ));
};

const Line = () => {
  const targetRef = useRef(null)
  const targetRefMobile = useRef(null)
  const [visiblePercentage, setVisiblePercentage] = useState(0);
  const [changeValue, setChangeValue] = useState(0);
  const [visiblePercentageMobile, setVisiblePercentageMobile] = useState(0);

  useEffect(() => {
    const getForMobile = () => {

      const targetElement = targetRefMobile.current;
      if (!targetElement) return;

      const { top, height } = targetElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const percentage = Math.round(((windowHeight - top) / height) * 60);
      setVisiblePercentageMobile(percentage);
    }
    const handleScroll = () => {
      const targetElement = targetRef.current;
      if (!targetElement) return;

      const { top, height } = targetElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const percentage = Math.round(((windowHeight - top) / height) * 60);
      setVisiblePercentage(percentage);
      getForMobile()
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <svg viewBox="0 0 500 330" width="100%" height="100%" ref={targetRef} className={styles.desktopSvg}>
        {svgSizes.map((el, index) => {
          let color = 'white';
          if (visiblePercentage > 0) {
            color = '#3FC1FF'
          }
          // else if (visiblePercentage > 30) {
          //   color = '#3FC1FF'
          // }
          //  else if (visiblePercentage > 55 && visiblePercentage < 66 && index < 9) {
          //   color = '#3FC1FF'
          // } else if (visiblePercentage >= 66 && visiblePercentage < 77 && index < 11) {
          //   color = '#3FC1FF'
          // } else if (visiblePercentage >= 77 && visiblePercentage < 110 && index < 17) {
          //   color = '#3FC1FF';
          // } else if (visiblePercentage >= 110) {
          //   color = '#3FC1FF';
          // }
          if (el.type === "path") {
            const path = `M${el.A.x},${el.A.y} L${el.B.x},${el.B.y}`;

            return <>
              <path key={path} d={path} stroke="white" strokeWidth="1" fill="none" />
              <path className={color == '#3FC1FF' && `${styles["loadingPath" + index]} ${styles.loadingPath}`} key={path} d={path} stroke="white" strokeWidth="1" fill="none" />
            </>
          } else if (el.type === "round") {
            return (
              <>
                <text
                  x={el.A}
                  y={el.B - 13}
                  fill={"white"}
                  textAnchor="middle"
                  dominantBaseline="baseline"
                  fontSize="10"
                  fontWeight="600"
                >
                  {el.name}
                </text>
                <circle
                  cx={el.A}
                  cy={el.B}
                  r="6"
                  stroke={"white"}
                  stroke-width="1"
                  className={color == '#3FC1FF' && `${styles["loadingPathRound" + index]} ${styles.loadingPathRound}`}
                />
                <circle cx={el.A} cy={el.B} r="4" fill={'white'} className={color == '#3FC1FF' && `${styles['loadingPathRoundFill' + index]} ${styles.loadingPathRoundFill}`} />
                {GetText(
                  el.description,
                  el.A,
                  el.B,
                  7,
                  10,
                  'middle',
                  el.position
                )}
              </>
            );
          } else {
            const path = `M${el.A.x},${el.A.y} Q${el.controlPoint.x},${el.controlPoint.y} ${el.B.x},${el.B.y}`;
            return <>
              <path key={index} d={path} stroke="white" strokeWidth="1" fill="none" />;
              <path className={color == '#3FC1FF' ? `${styles["loadingPath" + index]} ${styles.loadingPath}` : styles.loadingPathBack} key={index} d={path} stroke="white" strokeWidth="1" fill="none" />;
            </>
          }
        })}
      </svg>
      <svg viewBox="0 0 500 1100" width="100%" height="100%" ref={targetRefMobile} className={styles.mobileSvg}>
        {svgSizesMobile.map((el, index) => {
          let color = 'white';
          if (visiblePercentageMobile > 0 && index < 1) {
            color = '#3FC1FF'
          } else if (visiblePercentageMobile > 40 && visiblePercentageMobile <= 55 && index < 3) {
            color = '#3FC1FF'
          } else if (visiblePercentageMobile > 55 && visiblePercentageMobile < 66 && index < 5) {
            color = '#3FC1FF'
          } else if (visiblePercentageMobile >= 66 && visiblePercentageMobile < 85 && index < 7) {
            color = '#3FC1FF'
          } else if (visiblePercentageMobile >= 85 && visiblePercentageMobile < 100 && index < 9) {
            color = '#3FC1FF';
          } else if (visiblePercentageMobile >= 100) {
            color = '#3FC1FF';
          }
          if (el.type === "path") {
            const path = `M${el.A.x},${el.A.y} L${el.B.x},${el.B.y}`;

            return <path key={index} d={path} stroke={color} strokeWidth="2" fill="none" />;
          } else if (el.type === "round") {
            return (
              <>
                <text
                  x={el.A + 120}
                  y={el.B + 10}
                  fill={"white"}
                  textAnchor="middle"
                  dominantBaseline="baseline"
                  fontSize="32"
                >
                  Analysis
                </text>
                <circle
                  cx={el.A}
                  cy={el.B}
                  r="15"
                  stroke={color}
                  stroke-width="3"
                />
                <circle cx={el.A} cy={el.B} r="9" fill={color} />
                {GetText(
                  "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.",
                  el.A + 60,
                  el.B + 40,
                  "24",
                  28,
                  "start"
                )}
              </>
            );
          }
        })}
      </svg>

    </>
  );
};

const Process = () => {

  const postsMainProcessTextApi = useSelector(
    (state) => state?.postsMainProcessTextApi?.queries?.["posts(undefined)"]?.data
  );

  return (
    <div className={styles.container}>
      <Paragraph className={styles.title}>{postsMainProcessTextApi ? postsMainProcessTextApi[0].title : ""}</Paragraph>
      <div className={styles.description}
        dangerouslySetInnerHTML={{ __html: postsMainProcessTextApi ? postsMainProcessTextApi[0].description : "" }}
      />
      <Line />;
    </div>
  );
};

export default memo(Process);
