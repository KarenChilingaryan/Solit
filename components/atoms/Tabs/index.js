import styled, { css } from 'styled-components';
import { Tabs as tabs } from 'antd';

const Tabs = styled(tabs)`
  .ant-tabs-nav-wrap {
    background: #fff !important;
  }
  .ant-tabs-nav {
    margin: 0 !important;
  }

  .ant-tabs-tab {
    justify-content: center;
    .ant-tabs-tab-btn {
      font-size: 18px;
      color: #c8cbd8;
      font-weight: 500;
      font-size: 18px;
      line-height: 26px;

      svg {
        fill: #e8eef4;
      }
    }
  }

  .ant-tabs-tab-active {
    .ant-tabs-tab-btn {
      color: #101d5b;

      svg {
        fill: #7854ff;
      }
    }
  }

  .ant-tabs-ink-bar {
    display: none;
  }

  ${props =>
    props.tab_btn_color &&
    css`
      .ant-tabs-tab-btn {
        color: ${props.tab_btn_color};
      }
    `}

  ${props =>
    props.list_padding &&
    css`
      .ant-tabs-nav-wrap {
        padding: ${props.list_padding};
      }
    `}

  ${props =>
    props.tab_btn_fz &&
    css`
      .ant-tabs-tab-btn {
        font-size: ${props.tab_btn_fz}px;
      }
    `}

    ${props =>
    props.tab_width &&
    css`
      .ant-tabs-tab {
        width: ${props.tab_width};
      }
    `}
  ${props =>
    props.tab_btn_padding &&
    css`
      .ant-tabs-tab-btn {
        padding: ${props.tab_btn_padding}px;
      }
    `}
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
  ${props =>
    props.active_tab_btn_fw &&
    css`
      .ant-tabs-tab-active {
        .ant-tabs-tab-btn {
          font-weight: ${props.active_tab_btn_fw};
        }
      }
    `}
  ${props =>
    props.tab_btn_fw &&
    css`
      .ant-tabs-tab-btn {
        font-weight: ${props.tab_btn_fw};
      }
    `}
  ${props =>
    props.active_tab_btn_color &&
    css`
      .ant-tabs-tab-active {
        .ant-tabs-tab-btn {
          color: ${props.active_tab_btn_color};
        }
      }
    `}
  ${props =>
    props.active_tab_back_color &&
    css`
      .ant-tabs-tab-active {
        background-color: ${props.active_tab_back_color} !important;
        border-bottom-color: ${props.active_tab_back_color};
      }
    `}
  ${props =>
    props.active_sider_color &&
    css`
      .ant-tabs-ink-bar {
        background-color: ${props.active_sider_color};
      }
    `}
  ${props =>
    props.display &&
    css`
      .ant-tabs-nav-wrap {
        display: ${props.display} !important;
      }
    `}


    ${props =>
    props.tabs_tab_ml &&
    css`
      .ant-tabs-tab-btn {
        margin-left: ${props.tabs_tab_ml};
      }
    `}
    ${props =>
    props.tabs_tab_m &&
    css`
      .ant-tabs-tab + .ant-tabs-tab {
        margin-left: ${props.tabs_tab_m} !important;
      }
    `}
    ${props =>
    props.tabs_nav_list_back_color &&
    css`
      .ant-tabs-tab {
        background-color: ${props.tabs_nav_list_back_color};
      }
    `}
    ${props =>
    props.tabs_tabpane_border &&
    css`
      .ant-tabs-tabpane {
        border-left: ${props.tabs_tabpane_border};
        border-right: ${props.tabs_tabpane_border};
        border-bottom: ${props.tabs_tabpane_border};
      }
    `}
    ${props =>
    props.radius &&
    css`
      .ant-tabs-tabpane {
        border-radius: ${props.radius};
      }
    `}
    ${props =>
    props.type === 'broker-dashboard' &&
    css`
      background: #ffffff;
      & .ant-tabs-tabpane {
        padding: 10px 20px;
      }
      & .ant-list-item-action li {
        padding: 0px !important;
        & em {
          display: none;
        }
      }

      & .ant-tabs-nav-list {
        & .ant-tabs-tab-btn {
          // width: 285px;
          text-align: center;
          padding: 0px !important;
        }
        & .ant-tabs-tab {
          height: 42px;
          margin-left: 0;
          padding: 0 !important;
          align-items: center;
          justify-content: center;
          position: relative;
          &::before {
            content: '';
            position: absolute;
            right: -1px;
            bottom: 17%;
            border-right: 1px solid #d7d7d7;
            width: 1px;
            height: 30.8px;
          }
        }
        & .ant-tabs-ink-bar {
          display: none;
        }
        & .ant-tabs-tab-active {
          background: #f6f9fc;
          border-top: 4px solid #7854ff;
          border-right: none;
          border-left: none;
          &::before {
            display: none;
          }
        }
        & .ant-tabs-nav {
          display: none;
        }
      }
    `}
`;

export default Tabs;
