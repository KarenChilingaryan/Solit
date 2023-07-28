import { memo, useContext, useEffect, useState } from "react";
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
import { useDispatch } from "react-redux";
import { postAbutUsWhatWeDoApi } from "../../../services/postAbutUsWhatWeDoApi";
import Link from "next/link";

const MenuItem = styled(Menu.Item)`
  color: #ffffff;
  padding: ${10 * 0.266711333}vw ${22 * 0.266711333}vw;
    span{
    padding: ${22 * 0.266711333}vw ${20 * 0.266711333}vw;
    font-size: ${20 * 0.266711333}vw;
    font-weight: 700
  }
  &:hover {
    background: rgba(0, 0, 0, 0.5);
    backdrop - filter: blur(36.5px);
    color: #219fdb;
    span {
      background: #219FDB;
      border-radius: 8px;
      color: #000000
    }
  }
`

const FullMenu = styled(Menu)`
  background: #000000;
  border-radius: 0 0 ${16 * 0.266711333}vw ${16 * 0.266711333}vw;
  overflow: hidden;
`
const WhatWeDo = ({ data }) => {
  const [contextData, setContextData] = useState(null);

  const dispatch = useDispatch();

  const onChange = (e) => {
    // setSize(e.target.value);
  };


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

  const getContext = async (id) => {
    const data = await dispatch(await postAbutUsWhatWeDoApi.endpoints.about.initiate(id));
    setContextData(data?.data)
  }

  useEffect(() => {
    if (!contextData && data) {
      getContext(data.data_list[0].about_as_what_we_do_detail)
    }
  }, [data])

  const renderTabsOrDropdown = () => {
    if (isMobile) {
      const menu = (
        <FullMenu>
          {data?.data_list?.map((item, i) => (
            <MenuItem key={i + 1} className={styles.dropdownOption}
              onClick={((e) => {
                getContext(data.data_list[i].about_as_what_we_do_detail)
              })}
            >
              {item.title}
            </MenuItem>
          ))}
        </FullMenu>
      );

      return (
        <div className={styles.contextWrapper}>
          <Dropdown overlay={menu} trigger={['click']}  >
            <a className={styles.antDropdownLink} onClick={(e) => e.preventDefault()}>
              {contextData?.name_about_as_what_we_do_detail} <Image src={downOutlined} />
            </a>
          </Dropdown>
          <Row className={styles.context}>
            <div dangerouslySetInnerHTML={{ __html: contextData?.info_name_about_as_what_we_do_detail }} />
          </Row>
        </div>
      );
    }

    return (
      <Tabs onChange={((e) => {
        getContext(data.data_list[e - 1].about_as_what_we_do_detail)
      })}
        defaultActiveKey="1"
        type="card"
        className={styles.tabs}
        // size={size}
        items={data?.data_list?.map((item, i) => {
          const id = String(i + 1);
          return {
            label: item.title,
            key: id,
            children: (
              // <Context icon={devIcon} context={context} title={title} />
              <Row className={styles.contextWrapper}>
                <Row className={styles.contextHeader}>
                  <Image src={devIcon} className={styles.contextIcon} />
                  <Col className={styles.contextTitle}>{contextData?.name_about_as_what_we_do_detail}</Col>
                </Row>
                <Row className={styles.context}>
                  <div dangerouslySetInnerHTML={{ __html: contextData?.info_name_about_as_what_we_do_detail }} />
                </Row>
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
          <Col className={styles.title}>{data ? data.data_text[0]?.title : ''}</Col>
          <div className={styles.description} dangerouslySetInnerHTML={{ __html: data && data.data_text[0].description || '' }} />

          {renderTabsOrDropdown()}
        </Col>
        <Link href={'/what-we-do'}>
          <Button text="More expertise" boldWhite icon={goRight} />
        </Link>
      </Col>
      <Image
        src={ourTeamBg}
        className={styles.backImage}
      />
    </div>
  );
};

export default memo(WhatWeDo);
