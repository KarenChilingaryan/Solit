import { memo, use, useEffect, useState } from "react";
import { Paragraph } from "../../atoms";

import styles from "./Process.module.scss";


const Line = () => {

  const getText = (text, A, B) => {
    const [description, setDescription] = useState([]);
    useEffect(() => {
      if (text) {
        const textArr = text.split(' ');
        const arr = [];
        let textValue = ''
        for (let i = 0; i < textArr.length; i++) {
          const element = textArr[i];
          if (textValue.length + element.length < 25) {
            textValue = `${textValue} ${element}`;
          } else {
            arr.push(textValue);
            textValue = element;
          }
        }
        setDescription(arr)
      }
    }, [text])
    console.log(description);
    return description?.map((el, index) =>
      <text x={A} y={B + 20 + (index * 10)} fill="rgba(255, 255, 255, 0.73)" textAnchor="middle" dominantBaseline="baseline" fontSize="8">
        {el}
      </text>
    )
  }
  const arr = [
    {
      type: 'round',
      A: 100,
      B: 50
    },
    {
      type: 'path',
      A: { x: 100 + 5, y: 50 },
      B: { x: 250, y: 50 }
    },
    {
      type: 'round',
      A: 250,
      B: 50
    },
    {
      type: 'path',
      A: { x: 250 + 5, y: 50 },
      B: { x: 440, y: 50 }
    },
    {
      A: { x: 440, y: 50 },
      B: { x: 480, y: 90 },
      controlPoint: { x: 480, y: 50 },
    },
    {
      type: 'path',
      A: { x: 480, y: 90 },
      B: { x: 480, y: 120 }
    },
    {
      A: { x: 480, y: 120 },
      B: { x: 440, y: 160 },
      controlPoint: { x: 480, y: 160 },
    },
    {
      type: 'path',
      A: { x: 440, y: 160 },
      B: { x: 370, y: 160 }
    },
    {
      type: 'round',
      A: 370,
      B: 160
    },
    {
      type: 'path',
      A: { x: 365, y: 160 },
      B: { x: 245, y: 160 }
    },
    {
      type: 'round',
      A: 250,
      B: 160
    },
    {
      type: 'path',
      A: { x: 250, y: 160 },
      B: { x: 42, y: 160 }
    },
    {
      A: { x: 42, y: 160 },
      B: { x: 2, y: 200 },
      controlPoint: { x: 2, y: 160 },
    },
    {
      type: 'path',
      A: { x: 2, y: 200 },
      B: { x: 2, y: 230 }
    },
    {
      A: { x: 42, y: 270 },
      B: { x: 2, y: 230 },
      controlPoint: { x: 2, y: 270 },
    },
    {
      type: 'path',
      A: { x: 42, y: 270 },
      B: { x: 120, y: 270 }
    },
    {
      type: 'round',
      A: 120,
      B: 270
    },
    {
      type: 'path',
      A: { x: 125, y: 270 },
      B: { x: 280, y: 270 }
    },
    {
      type: 'round',
      A: 280,
      B: 270
    },
  ]

  return <svg viewBox="0 0 500 300" width="100%" height="100%">
    {arr.map(el => {
      if (el.type === 'path') {
        const path = `M${el.A.x},${el.A.y} L${el.B.x},${el.B.y}`;

        return <path d={path} stroke="white" strokeWidth="0.5" fill="none" />
      } else if (el.type === 'round') {
        return <>
          <text x={el.A} y={el.B - 10} fill="white" textAnchor="middle" dominantBaseline="baseline" fontSize="14">
            Analysis
          </text>
          <circle cx={el.A} cy={el.B} r="5" stroke="white" stroke-width="0.5" />
          <circle cx={el.A} cy={el.B} r="3" fill="white" />
          {getText('Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.', el.A, el.B)}
        </>
      } else {
        const path = `M${el.A.x},${el.A.y} Q${el.controlPoint.x},${el.controlPoint.y} ${el.B.x},${el.B.y}`;
        return <path d={path} stroke="white" strokeWidth="0.5" fill="none" />
      }
    }
    )}
  </svg>;
}


const Process = () => {

  return (
    <div className={styles.container}>
      <Paragraph className={styles.title}>Development process</Paragraph>
      <Paragraph className={styles.description}>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</Paragraph>
      <Line />;
    </div>
  );
};

export default memo(Process);
