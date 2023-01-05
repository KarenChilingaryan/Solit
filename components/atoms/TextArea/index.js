import styled, { css } from "styled-components";
import { Input } from "antd";

const TextArea = styled(Input.TextArea)`
  background: #fff;
  box-sizing: border-box;
  color: #5f6982;
  padding: 15px;
  font-weight: 300;
  // overflow: hidden !important;

  &:hover {
    border-color: #40a9ff;
  }
  &:focus,
  &.ant-input-focused {
    border-color: #40a9ff;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px #886cc02e;
  }
  &[disabled] {
    color: #00000096;
    background-color: #fff;
    border: 1px solid #eeeeee;
  }
  ${(props) =>
    props.type === "blue" &&
    css`
      border: 1px solid #000080;
    `}
  ${(props) =>
    (props.mb || props.mb === 0) &&
    css`
      margin-bottom: ${props.mb}px;
    `}
  ${(props) =>
    props.min_height &&
    css`
      min-height: ${props.min_height};
    `}
  ${(props) =>
    props.max_height &&
    css`
      max-height: ${props.max_height};
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
    props.padding &&
    css`
      padding: ${props.padding};
    `}
  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}
  ${(props) =>
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `}
  ${(props) =>
    props.radius &&
    css`
      border-radius: ${props.radius};
    `}
`;

export default TextArea;
