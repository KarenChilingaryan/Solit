import styled, { css } from 'styled-components';
import { InputNumber as inputNumber } from 'antd';

const InputNumber = styled(inputNumber)`
  background: #ffffff;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  height: 35px;
  padding: 0 15px;
  font-weight: 300;

  &:hover {
    border-color: #886cc0;
  }
  &:focus,
  &.ant-input-focused {
    border-color: #886cc0;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px #886cc02e;
  }

  .ant-input-number-input-wrap {
    height: 100%;

    .ant-input-number-input {
      height: 100%;
      padding: 0;
    }
  }

  &[disabled] {
    color: #00000096;
    background-color: #fff;
    border: 1px solid #eeeeee;
  }

  ${props =>
    props.color_type === 'blue' &&
    css`
      border: 1px solid #000080;
      &.ant-input-number-disabled {
        color: #000080;
        background-color: #fff;
        border: 1px solid #000080;
      }
    `}
  ${props =>
    (props.mb || props.mb === 0) &&
    css`
      margin-bottom: ${props.mb}px;
    `}
  ${props =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
  ${props =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
  ${props =>
    props.height &&
    css`
      height: ${props.height};
    `}
  ${props =>
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `}
  ${props =>
    props.radius &&
    css`
      border-radius: ${props.radius};
    `}
  ${props =>
    props.text_align &&
    css`
      input {
        text-align: ${props.text_align};
      }
    `}
  ${props =>
    props.hide === 'controls' &&
    css`
      //padding: 0 10px;
      //.ant-input-number-handler-wrap {
      //  display: none;
      //}
    `}
`;

export default InputNumber;
