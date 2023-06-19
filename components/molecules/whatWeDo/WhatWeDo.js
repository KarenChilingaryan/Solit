import { memo, useEffect, useState } from "react";
import Image from "next/image";
import { Dropdown, Menu } from 'antd';


import { Button as ShowMore, Col, Row, Tabs } from "../../atoms";
import Button from "../../molecules/button/Button";
import ourTeamBg from "../../../assets/img/our-team_bg.png";
import devIcon from "../../../assets/img/devIcon.svg";
import showMore from "../../../assets/img/showMore.svg";
import goRight from "../../../assets/img/goRigthArrow.svg";
import downOutlined from "../../../assets/img/grey-dropdown.svg";

import styles from "./WhatWeDo.module.scss";
import styled from "styled-components";

const MenuItem = styled(Menu.Item)`
  color: #ffffff;
  padding: ${10 * 0.266711333}vw;
  font-size: ${18 * 0.266711333}vw;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
    backdrop - filter: blur(36.5px);
    color: #219fdb;
  }
`

const FullMenu = styled(Menu)`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(36.5px);
  border-radius: ${16 * 0.266711333}vw;
  overflow: hidden;
`
const WhatWeDo = () => {
  const onChange = (e) => {
    // setSize(e.target.value);
  };
  const context =
    "Obtain a top-of-the-class custom mobile application of any complexity with Andersen - a mobile app development company possessing deep expertise and knowledge of the latest mobile development frameworks With Andersen, you will get a source of solid IT expertise and well-honed skills in mobile software projects";
  const title = "Mobile Development";


  const [isMobile, setIsMobile] = useState(false);

  // Function to check if the screen size is below the mobile threshold
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 576); // Adjust the threshold as per your requirements
  };

  // Add event listener for window resize
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderTabsOrDropdown = () => {
    console.log(isMobile, "isMobileisMobileisMobile");
    if (isMobile) {
      // Render Dropdown component
      const menu = (
        <FullMenu>
          {new Array(7).fill(null).map((_, i) => (
            <MenuItem key={i + 1} className={styles.dropdownOption}>
              {/* Render your dropdown menu items */}
              {`Option ${i + 1} `}
            </MenuItem>
          ))}
        </FullMenu>
      );

      return (
        <div className={styles.contextWrapper}>
          <Dropdown overlay={menu} trigger={['click']}>
            <a className={styles.antDropdownLink} onClick={(e) => e.preventDefault()}>
              Mobile Development <Image src={downOutlined} />
            </a>
          </Dropdown>
          <Row className={styles.context}>{context}</Row>
        </div>
      );
    }

    // Render Tabs component
    return (
      <Tabs
        defaultActiveKey="1"
        type="card"
        className={styles.tabs}
        // size={size}
        items={new Array(7).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: title,
            key: id,
            children: (
              // <Context icon={devIcon} context={context} title={title} />
              <Row className={styles.contextWrapper}>
                <Row className={styles.contextHeader}>
                  <Image src={devIcon} className={styles.contextIcon} />
                  <Col className={styles.contextTitle}>{title}</Col>
                </Row>
                <Row className={styles.context}>{context}</Row>
                <ShowMore className={styles.button}>
                  Show more <Image src={showMore} className={styles.btnImg} />
                </ShowMore>
              </Row>
            ),
          };
        })}
      />
    );
  };
  return (
    <div className={styles.container}>
      <Col className={styles.sectionWrapper}>
        <Col className={styles.whatWeDoWrapper}>
          <Col className={styles.title}>What we do?</Col>
          <Col className={styles.description}>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
            esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
            Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
            aute id deserunt nisi.
          </Col>
          {renderTabsOrDropdown()}
        </Col>

        <Button text="More expertise" boldWhite icon={goRight} />

      </Col>
      <Image
        src={ourTeamBg}
        className={styles.backImage}
      />
    </div>
  );
};

export default memo(WhatWeDo);
