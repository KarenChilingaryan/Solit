import styled, { css } from "styled-components";
import { Switch as toggle } from "antd";
import { colors } from "../../../constants/colors";

const Switch = styled(toggle)`
  // background-color: ${colors.cadet_blue};

  &.ant-switch-checked {
    background-color: #00dace;
  }

  .ant-switch-handle {
    &:before {
      width: 12px;
      height: 12px;
      top: 1px;
      left: 4px;
    }
  }

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
    props.border &&
    css`
      border: ${props.border};
    `}
  ${(props) =>
    props.radius &&
    css`
      border-radius: ${props.radius};
    `}
  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}
  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}
  ${(props) =>
    props.back_color &&
    css`
      background-color: ${props.back_color};
    `}
  ${(props) =>
    props.switched_color &&
    css`
      &.ant-switch-checked {
        background-color: ${props.switched_color} !important;
      }
    `}
`;

export default Switch;
