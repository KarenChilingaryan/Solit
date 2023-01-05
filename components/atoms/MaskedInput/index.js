import styled, { css } from "styled-components";
import maskedInput from "react-input-mask";
import { colors } from "../../../constants/colors";

const MaskedInput = styled(maskedInput)`
  background: #ffffff;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  //border-radius: 50px;
  //height: 44px;
  height: 35px;
  padding: 0 15px;
  font-weight: 300;
  width: 100%;

  &:hover {
    // border-color: ${mainColor};
  }
  &:focus,
  &.ant-input-focused {
    // border-color: ${mainColor};
    border-right-width: 1px !important;
    outline: 0;
    // box-shadow: 0 0 0 2px ${mainColor}2e;
  }

  &[disabled] {
    color: #00000096;
    background-color: #fff;
    border: 1px solid #eeeeee;
  }
  ${(props) =>
    (props.mb || props.mb === 0) &&
    css`
      margin-bottom: ${props.mb}px!important;
    `}
  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding}!important;
    `}
  ${(props) =>
    props.height &&
    css`
      height: ${props.height}!important;
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
  ${(props) =>
    props.type === "blue" &&
    css`
      border: 1px solid #c9c9c9 !important;
      &:hover {
        // border-color: ${mainColor} !important;
      }
      &:focus,
      &.ant-input-focused {
        // border-color: ${mainColor} !important;
        box-shadow: none;
      }
    `}
`;

export default MaskedInput;
