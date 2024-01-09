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
  },
  {
    title: "Deployment and Integration",
    description:
      "Seamless deployment, integration support for a smooth transition with minimal disruption to existing systems.",
  },
  {
    title: "Maintenance and Support",
    description:
      "Ongoing maintenance, support services to promptly address issues, ensuring peak software performance.",
  },
];

const Line = () => {
  const targetRef = useRef(null);
  const targetRefMobile = useRef(null);
  const [visiblePercentage, setVisiblePercentage] = useState(0);
  const [visiblePercentageMobile, setVisiblePercentageMobile] = useState(0);
  useEffect(() => {
    const getForMobile = () => {
      const targetElement = targetRefMobile.current;
      if (!targetElement) return;

      const { top, height } = targetElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const percentage = Math.ceil(((windowHeight - top) / height) * 60);
      setVisiblePercentageMobile(percentage);
    };
    const handleScroll = () => {
      const targetElement = targetRef.current;
      if (!targetElement) return;

      const { top, height } = targetElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const percentage = ((windowHeight - top) / height) * 120;
      const percentageMobile = (-top / height) * 120;
      setVisiblePercentage(percentage);
      setVisiblePercentageMobile(percentageMobile);
      getForMobile();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const mobileScroll = useRef(null);
  const part1Ref = useRef(null);
  const part2Ref = useRef(null);
  const part3Ref = useRef(null);
  const part4Ref = useRef(null);
  const part5Ref = useRef(null);

  const part1RefBlue = useRef(null);
  const part2RefBlue = useRef(null);
  const part3RefBlue = useRef(null);
  const part4RefBlue = useRef(null);
  const part5RefBlue = useRef(null);

  const infoTextRef1 = useRef(null);
  const infoTextRef2 = useRef(null);
  const infoTextRef3 = useRef(null);
  const infoTextRef4 = useRef(null);
  const infoTextRef5 = useRef(null);
  const infoTextRef6 = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 576 && targetRef?.current) {
      mobileScroll.current.style.top = `${
        -792 + (visiblePercentageMobile + 30) * 2.9
      }vw`;
      const mainElement = targetRef.current.children[1].children;
      if (visiblePercentageMobile > -26) {
        let margin = (20 * (visiblePercentageMobile + 26) * 10) / 100;
        margin = margin > 20 ? 20 : margin;
        margin = margin < 0 ? 0 : margin;
        mainElement[0].style.marginTop = `-${margin}px`;
        mainElement[0].style.marginBottom = `${margin}px`;
      } else {
        mainElement[0].style.marginTop = `-${0}px`;
        mainElement[0].style.marginBottom = `${0}px`;
      }
      if (visiblePercentageMobile > -15) {
        let margin = (20 * visiblePercentageMobile * 10) / 100;
        margin = margin > 20 ? 20 : margin;
        margin = margin < 0 ? 0 : margin;
        mainElement[1].style.marginTop = `-${margin}px`;
        mainElement[1].style.marginBottom = `${margin}px`;
      } else {
        mainElement[1].style.marginTop = `-${0}px`;
        mainElement[1].style.marginBottom = `${0}px`;
      }
      if (visiblePercentageMobile > -4) {
        let margin = (20 * (visiblePercentageMobile + 4) * 10) / 100;
        margin = margin > 20 ? 20 : margin;
        margin = margin < 0 ? 0 : margin;
        mainElement[2].style.marginTop = `-${margin}px`;
        mainElement[2].style.marginBottom = `${margin}px`;
      } else {
        mainElement[2].style.marginTop = `-${0}px`;
        mainElement[2].style.marginBottom = `${0}px`;
      }
      if (visiblePercentageMobile > 17) {
        let margin = (20 * (visiblePercentageMobile - 17) * 10) / 100;
        margin = margin > 20 ? 20 : margin;
        margin = margin < 0 ? 0 : margin;
        mainElement[3].style.marginTop = `-${margin}px`;
        mainElement[3].style.marginBottom = `${margin}px`;
      } else {
        mainElement[3].style.marginTop = `-${0}px`;
        mainElement[3].style.marginBottom = `${0}px`;
      }
      if (visiblePercentageMobile > 33) {
        let margin = (20 * (visiblePercentageMobile - 33) * 10) / 100;
        margin = margin > 20 ? 20 : margin;
        margin = margin < 0 ? 0 : margin;
        mainElement[4].style.marginTop = `-${margin}px`;
        mainElement[4].style.marginBottom = `${margin}px`;
      } else {
        mainElement[4].style.marginTop = `-${0}px`;
        mainElement[4].style.marginBottom = `${0}px`;
      }
      if (visiblePercentageMobile > 49) {
        let margin = (20 * (visiblePercentageMobile - 49) * 10) / 100;
        margin = margin > 20 ? 20 : margin;
        margin = margin < 0 ? 0 : margin;
        mainElement[5].style.marginTop = `-${margin}px`;
        mainElement[5].style.marginBottom = `${margin}px`;
      } else {
        mainElement[5].style.marginTop = `-${0}px`;
        mainElement[5].style.marginBottom = `${0}px`;
      }
    } else {
      if (visiblePercentage > 10) {
        const opacity = (1 * (visiblePercentage - 10) * 50) / 100;
        const width =
          part1Ref.current.children[0].offsetLeft +
          part1Ref.current.children[0].offsetWidth;
        part1Ref.current.children[0].style.opacity = opacity;
        part1Ref.current.style.width = `${width}px`;
      } else {
        part1Ref.current.children[0].style.opacity = 0;
        part1Ref.current.style.width = `${0}px`;
      }

      if (visiblePercentage > 12) {
        const opacity = (1 * (visiblePercentage - 12) * 50) / 100;
        part1Ref.current.children[0].children[0].style.opacity = opacity;
        infoTextRef1.current.children[0].style.opacity = opacity;
      } else {
        part1Ref.current.children[0].children[0].style.opacity = 0;
        infoTextRef1.current.children[0].style.opacity = 0;
      }

      if (visiblePercentage > 14) {
        const opacity = ((1) * (visiblePercentage - 14) * 50) / 100
        const width = part1RefBlue.current.children[0].offsetLeft + part1RefBlue.current.children[0].offsetWidth;
        part1RefBlue.current.children[0].style.opacity = opacity
        console.log(width);
        part1RefBlue.current.style.width = `${width}px`;
      } else {
        part1RefBlue.current.children[0].style.opacity = 0;
        part1RefBlue.current.style.width = `${0}px`;
      }

      if (visiblePercentage > 16) {
        const opacity = (1 * (visiblePercentage - 16) * 50) / 100;
        part1RefBlue.current.children[0].children[0].style.opacity = opacity;
      } else {
        part1RefBlue.current.children[0].children[0].style.opacity = 0;
      }

      if (visiblePercentage > 16) {
        const maxWidth = part1Ref.current.children[0].offsetLeft + part1Ref.current.children[0].offsetWidth + part1Ref.current.children[1].offsetWidth + part1Ref.current.children[2].offsetWidth;
        const width = ((maxWidth) * (visiblePercentage - 16) * 5.55) / 100 + part1Ref.current.children[0].offsetLeft + part1Ref.current.children[0].offsetWidth
        const opacity = (1 * (visiblePercentage - 16) * 10) / 100
        const px = width > maxWidth ? (maxWidth - 1) : width
        part1Ref.current.style.width = `${px}px`;
        infoTextRef1.current.children[1].style.opacity = opacity;
      } else {
        infoTextRef1.current.children[1].style.opacity = 0;
      }

      if (visiblePercentage > 21) {
        const maxWidth = part1Ref.current.children[0].offsetLeft + part1Ref.current.children[0].offsetWidth + part1Ref.current.children[1].offsetWidth;
        const width = ((maxWidth) * (visiblePercentage - 21) * 5.88) / 100 + part1Ref.current.children[0].offsetLeft + part1Ref.current.children[0].offsetWidth
        const px = width > maxWidth ? (maxWidth - 1) : width
        part1RefBlue.current.style.width = `${px}px`;
      } else {
        part1RefBlue.current.style.width = `${
          part1Ref.current.children[0].offsetLeft +
          part1Ref.current.children[0].offsetWidth
        }px`;
      }

      if (visiblePercentage > 27) {
        const opacity = (1 * (visiblePercentage - 27) * 5.88) / 100;
        part1Ref.current.children[2].style.opacity = opacity;
      } else {
        part1Ref.current.children[2].style.opacity = 0;
      }

      if (visiblePercentage > 31) {
        const opacity = (1 * (visiblePercentage - 31) * 50) / 100;
        part1Ref.current.children[2].children[0].style.opacity = opacity;
        infoTextRef2.current.children[0].style.opacity = opacity;
      } else {
        part1Ref.current.children[2].children[0].style.opacity = 0;
        infoTextRef2.current.children[0].style.opacity = 0;
      }

      if (visiblePercentage > 33) {
        const opacity = (1 * (visiblePercentage - 33) * 50) / 100;
        part1RefBlue.current.children[2].style.opacity = opacity;
        const width = part1Ref.current.children[0].offsetLeft + part1Ref.current.children[0].offsetWidth + part1Ref.current.children[1].offsetWidth + part1Ref.current.children[2].offsetWidth;
        part1RefBlue.current.style.width = `${(width - 1) <= 0 ? 0 : (width - 1)}px`;
      } else {
        part1RefBlue.current.children[2].style.opacity = 0;
      }

      if (visiblePercentage > 35) {
        const opacity = (1 * (visiblePercentage - 35) * 50) / 100;
        part1RefBlue.current.children[2].children[0].style.opacity = opacity;
        infoTextRef2.current.children[1].style.opacity = opacity;
      } else {
        part1RefBlue.current.children[2].children[0].style.opacity = 0;
        infoTextRef2.current.children[1].style.opacity = 0;
      }

      if (visiblePercentage > 37) {
        const maxWidth = targetRef.current.offsetWidth;

        const width = ((maxWidth) * (visiblePercentage - 37) * 5.55) / 100 + part1Ref.current.children[0].offsetLeft + part1Ref.current.children[0].offsetWidth + part1Ref.current.children[1].offsetWidth + part1Ref.current.children[2].offsetWidth;
        const px = width > maxWidth ? (maxWidth - 1) : width
        part1Ref.current.style.width = `${px}px`;
      }

      if (visiblePercentage > 40) {
        const maxWidth = targetRef.current.offsetWidth;
        const width = ((maxWidth) * (visiblePercentage - 40) * 3) / 100 + part1Ref.current.children[0].offsetLeft + part1Ref.current.children[0].offsetWidth + part1Ref.current.children[1].offsetWidth + part1Ref.current.children[2].offsetWidth;
        const px = width > maxWidth ? (maxWidth - 1) : width
        part1RefBlue.current.style.width = `${px}px`;
      }

      if (visiblePercentage > 46) {
        const height = ((part2Ref.current.children[0].offsetHeight) * (((visiblePercentage - 46) * 8) > 100 ? 100 : ((visiblePercentage - 46) * 8))) / 100
        part2Ref.current.style.height = `${height - 1}px`
        part2Ref.current.style.marginBottom = `${part2Ref.current.children[0].offsetHeight - height}px`
      } else {
        part2Ref.current.style.height = `${0}px`;
      }

      let blueHeight = 0;
      if (visiblePercentage > 57) {
        blueHeight = ((part2RefBlue.current.children[0].offsetHeight) * (((visiblePercentage - 57) * 17) > 100 ? 100 : ((visiblePercentage - 57) * 17))) / 100
        part2RefBlue.current.style.height = `${blueHeight - 1}px`
        part2RefBlue.current.style.marginBottom = `${part2RefBlue.current.children[0].offsetHeight - blueHeight}px`
      } else {
        part2RefBlue.current.style.height = `${0}px`;
      }

      if (visiblePercentage > 59) {
        const maxWidth = part3Ref.current.children[5].offsetWidth + part3Ref.current.children[6].offsetWidth;
        const width = ((targetRef.current.offsetWidth) * (visiblePercentage - 59) * 5.55) / 100;
        const realWidth = (width > maxWidth ? (maxWidth - 1) : width);
        part3Ref.current.style.width = `${Math.ceil(realWidth)}px`;
        part3Ref.current.scrollLeft =
          targetRef.current.offsetWidth - Math.ceil(realWidth);
      } else {
        part3Ref.current.style.width = `${0}px`;
        part3Ref.current.scrollLeft = 0;
      }

      if (visiblePercentage > 63) {
        const maxWidth = part3Ref.current.children[5].offsetWidth + part3Ref.current.children[6].offsetWidth;
        const width = ((targetRef.current.offsetWidth) * (visiblePercentage - 63) * 5.55) / 100;
        const realWidth = (width > maxWidth ? (maxWidth - 1) : width);
        part3RefBlue.current.style.width = `${Math.ceil(realWidth)}px`;
        part3RefBlue.current.scrollLeft =
          targetRef.current.offsetWidth - Math.ceil(realWidth);
      } else {
        part3RefBlue.current.style.width = `${0}px`;
        part3RefBlue.current.scrollLeft = 0;
      }

      if (visiblePercentage > 63) {
        const opacity = ((1) * (visiblePercentage - 63) * 50) / 100
        part3Ref.current.children[4].style.opacity = opacity
        part3Ref.current.style.width = `${Math.ceil(part3Ref.current.children[5].offsetWidth + part3Ref.current.children[6].offsetWidth + part3Ref.current.children[4].offsetWidth)}px`
      } else {
        part3Ref.current.children[4].style.opacity = 0;
      }

      if (visiblePercentage > 65) {
        const opacity = ((1) * (visiblePercentage - 65) * 50) / 100
        part3Ref.current.children[4].children[0].style.opacity = opacity
        part3RefBlue.current.children[4].style.opacity = opacity
        infoTextRef3.current.children[0].style.opacity = opacity
        const realWidth = part3Ref.current.children[5].offsetWidth + part3Ref.current.children[6].offsetWidth + part3Ref.current.children[4].offsetWidth
        part3RefBlue.current.style.width = `${Math.ceil(realWidth)}px`
      } else {
        part3Ref.current.children[4].children[0].style.opacity = 0;
        part3RefBlue.current.children[4].style.opacity = 0;
        infoTextRef3.current.children[0].style.opacity = 0;
      }

      if (visiblePercentage > 67) {
        const opacity = (1 * (visiblePercentage - 67) * 50) / 100;
        part3RefBlue.current.children[4].children[0].style.opacity = opacity;
        infoTextRef3.current.children[1].style.opacity = opacity;

        const maxWidth = part3Ref.current.children[5].offsetWidth + part3Ref.current.children[6].offsetWidth + part3Ref.current.children[4].offsetWidth + part3Ref.current.children[3].offsetWidth
        const width = ((targetRef.current.offsetWidth) * (visiblePercentage - 67) * 5.55) / 100 + part3Ref.current.children[5].offsetWidth + part3Ref.current.children[6].offsetWidth + part3Ref.current.children[4].offsetWidth
        const realWidth = (width > maxWidth ? (maxWidth - 1) : width);
        part3Ref.current.style.width = `${Math.ceil(realWidth)}px`
      } else {
        part3RefBlue.current.children[4].children[0].style.opacity = 0;
        infoTextRef3.current.children[1].style.opacity = 0;
      }

      if (visiblePercentage > 70) {
        const maxWidth = part3Ref.current.children[5].offsetWidth + part3Ref.current.children[6].offsetWidth + part3Ref.current.children[4].offsetWidth + part3Ref.current.children[3].offsetWidth
        const width = ((targetRef.current.offsetWidth) * (visiblePercentage - 70) * 7.55) / 100 + part3Ref.current.children[5].offsetWidth + part3Ref.current.children[6].offsetWidth + part3Ref.current.children[4].offsetWidth;
        const realWidth = width > maxWidth ? (maxWidth - 1) : width;
        part3RefBlue.current.style.width = `${Math.ceil(realWidth)}px`;
      }

      if (visiblePercentage > 72.5) {
        const opacity = ((1) * (visiblePercentage - 72.5) * 50) / 100
        part3Ref.current.children[2].style.opacity = opacity
        part3Ref.current.style.width = `${Math.ceil(part3Ref.current.children[5].offsetWidth + part3Ref.current.children[6].offsetWidth + part3Ref.current.children[4].offsetWidth + part3Ref.current.children[3].offsetWidth + part3Ref.current.children[2].offsetWidth)}px`;
      } else {
        part3Ref.current.children[2].style.opacity = 0;
      }

      if (visiblePercentage > 74.5) {
        const opacity = (1 * (visiblePercentage - 74.5) * 50) / 100;
        part3Ref.current.children[2].children[0].style.opacity = opacity;
        part3RefBlue.current.children[2].style.opacity = opacity;

        const realWidth = part3Ref.current.children[5].offsetWidth + part3Ref.current.children[6].offsetWidth + part3Ref.current.children[3].offsetWidth + part3Ref.current.children[2].offsetWidth + part3Ref.current.children[4].offsetWidth
        part3RefBlue.current.style.width = `${Math.ceil(realWidth)}px`

        infoTextRef4.current.children[0].style.opacity = opacity;
      } else {
        part3Ref.current.children[2].children[0].style.opacity = 0;
        infoTextRef4.current.children[0].style.opacity = 0;
        part3RefBlue.current.children[2].style.opacity = 0;
      }

      if (visiblePercentage > 76.5) {
        const opacity = (1 * (visiblePercentage - 76.5) * 50) / 100;
        part3RefBlue.current.children[2].children[0].style.opacity = opacity;
        infoTextRef4.current.children[1].style.opacity = opacity;
        const maxWidth = targetRef.current.offsetWidth;
        const width =
          (targetRef.current.offsetWidth * (visiblePercentage - 76.5) * 5.55) /
            100 +
          part3Ref.current.children[5].offsetWidth +
          part3Ref.current.children[6].offsetWidth +
          part3Ref.current.children[4].offsetWidth +
          part3Ref.current.children[3].offsetWidth +
          part3Ref.current.children[2].offsetWidth;
        const realWidth = width > maxWidth ? maxWidth : width;
        part3Ref.current.style.width = `${Math.ceil(realWidth)}px`;
      } else {
        part3RefBlue.current.children[2].children[0].style.opacity = 0;
        infoTextRef4.current.children[1].style.opacity = 0;
      }

      if (visiblePercentage > 79) {
        const maxWidth = targetRef.current.offsetWidth;
        const width =
          (targetRef.current.offsetWidth * (visiblePercentage - 79) * 3) / 100 +
          part3Ref.current.children[5].offsetWidth +
          part3Ref.current.children[6].offsetWidth +
          part3Ref.current.children[4].offsetWidth +
          part3Ref.current.children[3].offsetWidth +
          part3Ref.current.children[2].offsetWidth;
        const realWidth = width > maxWidth ? maxWidth : width;
        part3RefBlue.current.style.width = `${Math.ceil(realWidth)}px`;
      }

      if (visiblePercentage > 95) {
        const blueHeight =
          (part4RefBlue.current.children[0].offsetHeight *
            ((visiblePercentage - 95) * 5 > 100
              ? 100
              : (visiblePercentage - 95) * 5)) /
          100;
        part4RefBlue.current.style.height = `${blueHeight}px`;
        part4RefBlue.current.style.marginBottom = `${
          part4RefBlue.current.children[0].offsetHeight - blueHeight
        }px`;
      } else {
        part4RefBlue.current.style.height = `${0}px`;
      }

      if (visiblePercentage > 85.5) {
        const height =
          (part4Ref.current.children[0].offsetHeight *
            ((visiblePercentage - 85.5) * 8 > 100
              ? 100
              : (visiblePercentage - 85.5) * 8)) /
          100;
        part4Ref.current.style.height = `${height}px`;
        part4Ref.current.style.marginBottom = `${
          part4Ref.current.children[0].offsetHeight - height
        }px`;
      } else {
        part4Ref.current.style.height = `${0}px`;
      }

      if (visiblePercentage > 98.4) {
        const maxWidth =
          part5Ref.current.children[0].offsetWidth +
          part5Ref.current.children[1].offsetWidth;
        const width = (maxWidth * (visiblePercentage - 98.4) * 5.55) / 100;
        const px = width > maxWidth ? maxWidth : width;
        part5Ref.current.style.width = `${px}px`;
      } else {
        part5Ref.current.style.width = `${0}px`;
      }

      if (visiblePercentage > 115) {
        const maxWidth = part5RefBlue.current.children[0].offsetWidth + part5RefBlue.current.children[1].offsetWidth;
        const width = ((maxWidth) * (visiblePercentage - 115) * 10.55) / 100;
        const px = width > maxWidth ? (maxWidth - 1) : width
        part5RefBlue.current.style.width = `${px}px`;
      } else {
        part5RefBlue.current.style.width = `${0}px`;
      }

      if (visiblePercentage > 117) {
        const opacity = ((1) * (visiblePercentage - 117) * 50) / 100
        part5Ref.current.children[2].style.opacity = opacity
        part5Ref.current.style.width = `${part5Ref.current.children[0].offsetWidth + part5Ref.current.children[1].offsetWidth + part5Ref.current.children[2].offsetWidth - 1}px`;
      } else {
        part5Ref.current.children[2].style.opacity = 0;
      }

      if (visiblePercentage > 119) {
        const opacity = ((1) * (visiblePercentage - 119) * 50) / 100
        part5Ref.current.children[2].children[0].style.opacity = opacity
        part5Ref.current.style.width = `${part5Ref.current.children[0].offsetWidth + part5Ref.current.children[1].offsetWidth + part5Ref.current.children[2].offsetWidth - 1}px`;
        infoTextRef5.current.children[0].style.opacity = opacity
        part5RefBlue.current.style.width = `${part5RefBlue.current.children[0].offsetWidth + part5RefBlue.current.children[1].offsetWidth + part5RefBlue.current.children[2].offsetWidth - 1}px`;
        part5RefBlue.current.children[2].style.opacity = opacity;
      } else {
        part5Ref.current.children[2].children[0].style.opacity = 0;
        infoTextRef5.current.children[0].style.opacity = 0;
        part5RefBlue.current.children[2].style.opacity = 0;
      }

      if (visiblePercentage > 121) {
        const maxWidth =
          part5Ref.current.children[0].offsetWidth +
          part5Ref.current.children[1].offsetWidth +
          part5Ref.current.children[2].offsetWidth +
          part5Ref.current.children[3].offsetWidth;
        const width =
          (maxWidth * (visiblePercentage - 121) * 5.55) / 100 +
          part5Ref.current.children[0].offsetWidth +
          part5Ref.current.children[1].offsetWidth +
          part5Ref.current.children[2].offsetWidth;
        const opacity = (1 * (visiblePercentage - 121) * 50) / 100;
        part5RefBlue.current.children[2].children[0].style.opacity = opacity;
        infoTextRef5.current.children[1].style.opacity = opacity;
        const px = width > maxWidth ? maxWidth : width;
        part5Ref.current.style.width = `${px}px`;
      } else {
        infoTextRef5.current.children[1].style.opacity = 0;
        part5RefBlue.current.children[2].children[0].style.opacity = 0;
      }

      if (visiblePercentage > 130) {
        const maxWidth =
          part5RefBlue.current.children[0].offsetWidth +
          part5RefBlue.current.children[1].offsetWidth +
          part5RefBlue.current.children[2].offsetWidth +
          part5RefBlue.current.children[3].offsetWidth;
        const width =
          (maxWidth * (visiblePercentage - 130) * 15.55) / 100 +
          part5RefBlue.current.children[0].offsetWidth +
          part5RefBlue.current.children[1].offsetWidth +
          part5RefBlue.current.children[2].offsetWidth;
        const px = width > maxWidth ? maxWidth : width;
        part5RefBlue.current.style.width = `${px}px`;
      }

      if (visiblePercentage > 131.8) {
        const opacity = (1 * (visiblePercentage - 131.8) * 50) / 100;
        part5Ref.current.children[4].style.opacity = opacity;
        part5Ref.current.style.width = `${
          part5Ref.current.children[0].offsetWidth +
          part5Ref.current.children[1].offsetWidth +
          part5Ref.current.children[2].offsetWidth +
          part5Ref.current.children[3].offsetWidth +
          part5Ref.current.children[4].offsetWidth
        }px`;
      } else {
        part5Ref.current.children[4].style.opacity = 0;
      }

      if (visiblePercentage > 133.8) {
        const opacity = (1 * (visiblePercentage - 133.8) * 50) / 100;
        part5Ref.current.children[4].children[0].style.opacity = opacity;
        part5Ref.current.style.width = `${part5Ref.current.offsetWidth}px`;
        part5RefBlue.current.style.width = `${part5Ref.current.offsetWidth}px`;
        infoTextRef6.current.children[0].style.opacity = opacity;
        part5RefBlue.current.children[4].style.opacity = opacity;
      } else {
        part5Ref.current.children[4].children[0].style.opacity = 0;
        infoTextRef6.current.children[0].style.opacity = 0;
        part5RefBlue.current.children[4].style.opacity = 0;
      }

      if (visiblePercentage > 135.8) {
        const opacity = (1 * (visiblePercentage - 135.8) * 50) / 100;
        infoTextRef6.current.children[1].style.opacity = opacity;
        part5RefBlue.current.children[4].children[0].style.opacity = opacity;
      } else {
        infoTextRef6.current.children[1].style.opacity = 0;
        part5RefBlue.current.children[4].children[0].style.opacity = 0;
      }
    }
  }, [visiblePercentage, visiblePercentageMobile]);

  return (
    <div className={styles.mobileBlockElement} ref={targetRef}>
      <div className={styles.snack}>
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
                <p className={styles.descriptionInfo}>
                  {svgSizes[0].description}
                </p>
              </div>
              <div className={styles.round}></div>
            </div>
            <div className={`${styles.line1} ${styles.line}`}></div>
            <div className={styles.borderRound}>
              <div className={styles.info} ref={infoTextRef2}>
                <p className={styles.titleInfo}>{svgSizes[1].title}</p>
                <p className={styles.descriptionInfo}>
                  {svgSizes[1].description}
                </p>
              </div>
              <div className={styles.round}></div>
            </div>
            <div className={`${styles.line2} ${styles.line}`}></div>
            <div className={`${styles.oval1} ${styles.oval}`}></div>
          </div>
          <div className={styles.part2}>
            <div className={`${styles.line3} ${styles.line}`}></div>
          </div>
          <div className={styles.part3}>
            <div className={`${styles.oval3} ${styles.oval}`}></div>
            <div className={`${styles.line6} ${styles.line}`}></div>
            <div className={`${styles.borderRound} ${styles.borderRound3}`}>
              <div className={styles.info} ref={infoTextRef4}>
                <p className={styles.titleInfo}>{svgSizes[2].title}</p>
                <p className={styles.descriptionInfo}>
                  {svgSizes[2].description}
                </p>
              </div>
              <div className={styles.round}></div>
            </div>
            <div className={`${styles.line5} ${styles.line}`}></div>

            <div className={`${styles.borderRound} ${styles.borderRound2}`}>
              <div className={styles.info} ref={infoTextRef3}>
                <p className={styles.titleInfo}>{svgSizes[3].title}</p>
                <p className={styles.descriptionInfo}>
                  {svgSizes[3].description}
                </p>
              </div>
              <div className={styles.round}></div>
            </div>
            <div className={`${styles.line4} ${styles.line}`}></div>
            <div className={`${styles.oval2} ${styles.oval}`}></div>
          </div>

          <div className={styles.part4}>
            <div className={`${styles.line7} ${styles.line}`}></div>
          </div>
          <div className={styles.part5}>
            <div className={`${styles.oval4} ${styles.oval}`}></div>
            <div className={`${styles.line8} ${styles.line}`}></div>
            <div className={`${styles.borderRound} ${styles.borderRound4}`}>
              <div className={styles.info} ref={infoTextRef5}>
                <p className={styles.titleInfo}>{svgSizes[4].title}</p>
                <p className={styles.descriptionInfo}>
                  {svgSizes[4].description}
                </p>
              </div>
              <div className={styles.round}></div>
            </div>
            <div className={`${styles.line9} ${styles.line}`}></div>
            <div className={`${styles.borderRound} ${styles.borderRound5}`}>
              <div className={styles.info} ref={infoTextRef6}>
                <p className={styles.titleInfo}>{svgSizes[5].title}</p>
                <p className={styles.descriptionInfo}>
                  {svgSizes[5].description}
                </p>
              </div>
              <div className={styles.round}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.snackMobile}>
        {svgSizes.map((el, index) => {
          return (
            <div key={index} className={styles.blockMobile}>
              <div className={styles.titleMobile}>{el.title}</div>
              <div className={styles.descriptionMobile}>{el.description}</div>
            </div>
          );
        })}
        <div className={styles.mainBlock} ref={mobileScroll}>
          <div className={styles.snackMobileShadow}>
            <div className={styles.shadowLine}>
              {[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5,
                6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
                23, 24, 25, 26, 27, 28, 29,
              ].map((el) => {
                return <div key={el} className={styles.mobileLine}></div>;
              })}
            </div>
            <div className={styles.shadowElements}>
              {[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
              ].map((el) => {
                return (
                  <div key={el} className={styles.blockMobile}>
                    <div className={styles.leftPart} />
                  </div>
                );
              })}
            </div>
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
        // dangerouslySetInnerHTML={{
        //   __html: postsMainProcessTextApi
        //     ? postsMainProcessTextApi[0].description
        //     : "",
        // }}
      >
        {postsMainProcessTextApi ? postsMainProcessTextApi[0].description : ""}
      </div>
      <Line />;
    </div>
  );
};

export default memo(Process);
