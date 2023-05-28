import { memo, use, useEffect, useRef, useState } from "react";
import { Paragraph } from "../../atoms";

import styles from "./Process.module.scss";

const Line = () => {
  const targetRef = useRef(null)
  const [visiblePercentage, setVisiblePercentage] = useState(0);

  const getText = (text, A, B) => {
    const [description, setDescription] = useState([]);
    useEffect(() => {
      if (text) {
        const textArr = text.split(" ");
        const arr = [];
        let textValue = "";
        for (let i = 0; i < textArr.length; i++) {
          const element = textArr[i];
          if (textValue.length + element.length < 25) {
            textValue = `${textValue} ${element}`;
          } else {
            arr.push(textValue);
            textValue = element;
          }
        }
        setDescription(arr);
      }
    }, [text]);
    console.log(description);
    return description?.map((el, index) => (
      <text
        key={index}
        x={A}
        y={B + 20 + index * 10}
        fill="rgba(255, 255, 255, 0.73)"
        textAnchor="middle"
        dominantBaseline="baseline"
        fontSize="8"
      >
        {el}
      </text>
    ));
  };
  const arr = [
    {
      type: "round",
      A: 100,
      B: 50,
    },
    {
      type: "path",
      A: { x: 100 + 5, y: 50 },
      B: { x: 250, y: 50 },
    },
    {
      type: "round",
      A: 250,
      B: 50,
    },
    {
      type: "path",
      A: { x: 250 + 5, y: 50 },
      B: { x: 440, y: 50 },
    },
    {
      A: { x: 440, y: 50 },
      B: { x: 480, y: 90 },
      controlPoint: { x: 480, y: 50 },
    },
    {
      type: "path",
      A: { x: 480, y: 90 },
      B: { x: 480, y: 120 },
    },
    {
      A: { x: 480, y: 120 },
      B: { x: 440, y: 160 },
      controlPoint: { x: 480, y: 160 },
    },
    {
      type: "path",
      A: { x: 440, y: 160 },
      B: { x: 370, y: 160 },
    },
    {
      type: "round",
      A: 370,
      B: 160,
    },
    {
      type: "path",
      A: { x: 365, y: 160 },
      B: { x: 245, y: 160 },
    },
    {
      type: "round",
      A: 250,
      B: 160,
    },
    {
      type: "path",
      A: { x: 250, y: 160 },
      B: { x: 42, y: 160 },
    },
    {
      A: { x: 42, y: 160 },
      B: { x: 2, y: 200 },
      controlPoint: { x: 2, y: 160 },
    },
    {
      type: "path",
      A: { x: 2, y: 200 },
      B: { x: 2, y: 230 },
    },
    {
      A: { x: 42, y: 270 },
      B: { x: 2, y: 230 },
      controlPoint: { x: 2, y: 270 },
    },
    {
      type: "path",
      A: { x: 42, y: 270 },
      B: { x: 120, y: 270 },
    },
    {
      type: "round",
      A: 120,
      B: 270,
    },
    {
      type: "path",
      A: { x: 125, y: 270 },
      B: { x: 280, y: 270 },
    },
    {
      type: "round",
      A: 280,
      B: 270,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = targetRef.current;
      if (!targetElement) return;

      const { top, height } = targetElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const percentage = Math.round(((windowHeight - top) / height) * 100);
      setVisiblePercentage(percentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };


  }, []);

  return (
    <svg viewBox="0 0 500 300" width="100%" height="100%" ref={targetRef}>
      {arr.map((el, index) => {
        let color = 'white';
        if (visiblePercentage > 0 && index < 1) {
          color = '#3FC1FF'
        } else if (visiblePercentage > 40 && visiblePercentage <= 55 && index < 3) {
          color = '#3FC1FF'
        } else if (visiblePercentage > 55 && visiblePercentage < 66 && index < 9) {
          color = '#3FC1FF'
        } else if (visiblePercentage >= 66 && visiblePercentage < 95 && index < 11) {
          color = '#3FC1FF'
        } else if (visiblePercentage >= 95 && visiblePercentage < 110 && index < 17) {
          color = '#3FC1FF';
        } else if (visiblePercentage >= 110) {
          color = '#3FC1FF';
        }
        if (el.type === "path") {
          const path = `M${el.A.x},${el.A.y} L${el.B.x},${el.B.y}`;

          return <path d={path} stroke={color} strokeWidth="1" fill="none" />;
        } else if (el.type === "round") {
          return (
            <>
              <text
                x={el.A}
                y={el.B - 10}
                fill={"white"}
                textAnchor="middle"
                dominantBaseline="baseline"
                fontSize="14"
              >
                Analysis
              </text>
              <circle
                cx={el.A}
                cy={el.B}
                r="6"
                stroke={color}
                stroke-width="1"
              />
              <circle cx={el.A} cy={el.B} r="4" fill={color} />
              {getText(
                "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.",
                el.A,
                el.B
              )}
            </>
          );
        } else {
          const path = `M${el.A.x},${el.A.y} Q${el.controlPoint.x},${el.controlPoint.y} ${el.B.x},${el.B.y}`;
          return <path d={path} stroke={color} strokeWidth="1" fill="none" />;
        }
      })}
    </svg>
  );
};

const Process = () => {
  return (
    <div className={styles.container}>
      <Paragraph className={styles.title}>Development process</Paragraph>
      <Paragraph className={styles.description}>
        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
        esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit
        aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute
        id deserunt nisi.
      </Paragraph>
      <Line />;
    </div>
  );
};

export default memo(Process);
