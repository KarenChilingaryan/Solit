import styled, { css } from "styled-components";
import { Select as select } from "antd";
import { colors } from "../../../constants/colors";

const Select = styled(select)`
  width: 100%;
  .ant-select-selector {
    background: #fff !important;
    border: 1px solid #9ea09f !important;
    box-sizing: border-box;
    height: 44px !important;
    font-weight: 300;
    display: flex;
    align-items: center;
    border-radius: 8px !important;
  }

  & .ant-select-selection-search-input {
    height: 30px !important;
  }

  & .ant-select-selection-search {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    // border-color: ${colors.main_color} !important;
    .ant-select-selector {
      // border-color: ${colors.main_color} !important;
    }
  }
  &.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    // border-color: ${colors.main_color};
    // box-shadow: 0 0 0 2px ${colors.main_color}2e;
    border-right-width: 1px;
    outline: 0;
  }

  &[disabled] {
    color: #00000096;
    background-color: #fff;
    border: 1px solid #eeeeee;
  }

  & .ant-select-selector {
    padding: 0 15px !important;
  }
  & .ant-select-selector {
    text-align: start;
  }

  &.ant-select-disabled.ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    color: #00000096;
  }

  & .ant-select-suffix svg {
    display: none;
  }

  & .ant-select-suffix {
    position: unset;
  }

  & .ant-select-arrow > span:after {
    content: "";
    position: absolute;
    top: 4px;
    right: 2px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid #5f6982;
  }

  ${(props) =>
    props.type === "blue" &&
    css`
      .ant-select-selector {
        border: 1px solid #000080;
      }
      .ant-select-arrow {
        color: #000080;
      }
    `}
  ${(props) =>
    props.mode === "multiple" &&
    css`
      .ant-select-selector {
        padding: 0 5px;
      }
    `}
  ${(props) =>
    (props.mb || props.mb === 0) &&
    css`
      margin-bottom: ${props.mb}px;
    `}
  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
  ${(props) =>
    props.padding &&
    css`
      .ant-select-selector {
        padding: ${props.padding};
      }
    `}
  ${(props) =>
    props.max_width &&
    css`
      max-width: ${props.max_width};
    `}
  ${(props) =>
    props.width &&
    css`
      .ant-select-selector {
        width: ${props.width} !important;
      }
    `}
  ${(props) =>
    props.min_width &&
    css`
      min-width: ${props.min_width};
    `}
  ${(props) =>
    props.height &&
    css`
      .ant-select-selector {
        height: ${props.height} !important;
      }
    `}
    ${(props) =>
    props.radius &&
    css`
      .ant-select-selector {
        border-radius: ${props.radius} !important;
      }
    `}

    ${(props) =>
    props.border &&
    css`
      .ant-select-selector {
        border: ${props.border} !important;
      }
    `}

    ${(props) =>
    props.arrow_border_top &&
    css`
      .ant-select-arrow > span:after {
        border-top: ${props.arrow_border_top} !important;
      }
    `}

  ${(props) =>
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `}
  ${(props) =>
    props.fw &&
    css`
      .ant-select-selection-item {
        font-weight: ${props.fw};
      }
    `}
  ${(props) =>
    props.back_color &&
    css`
      .ant-select-selector {
        background-color: ${props.back_color};
      }
    `}
`;

export default Select;
