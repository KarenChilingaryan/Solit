import styled, { css } from "styled-components";
import { Input as input } from "antd";

const Input = styled(input)`
  background: #fff;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  height: 35px;
  padding: 0 15px;
  font-weight: 300;

  &:hover {
    border-color: #40a9ff;
  }
  &:focus,
  &.ant-input-focused {
    border-color: #40a9ff;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px #d1e9ff;
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
    props.margin &&
    css`
      margin: ${props.margin};
    `}
  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
  ${(props) =>
    props.input_padding &&
    css`
      input {
        padding: ${props.input_padding};
      }
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
    props.fz &&
    css`
      input {
        font-size: ${props.fz};
      }
    `}
  ${(props) =>
    props.fw &&
    css`
      input {
        font-weight: ${props.fw};
      }
    `}
  ${(props) =>
    props.radius &&
    css`
      border-radius: ${props.radius};
    `}

  ${(props) =>
    props.border &&
    css`
      border: ${props.border};
    `}
  &[type="file"]::-webkit-file-upload-button {
    visibility: hidden;
    display: none;
  }
  &[type="file"]::before {
    content: " ";
    display: inline-block;
    background: url("your-image.png") no-repeat center center;
    background-size: cover;
    width: 100%;
    height: 100%;
    padding: 10px 0;
    text-align: center;
    cursor: pointer;
  }
`;

export default Input;
