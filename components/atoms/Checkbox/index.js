import styled, { css } from 'styled-components';
import { Checkbox as checkbox } from 'antd';

const Checkbox = styled(checkbox)`
  &:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: #886cc0;
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #886cc0;
    border-color: #886cc0;
  }
  .ant-checkbox-checked::after {
    border: 1px solid #886cc0;
  }

  ${props =>
    props.size &&
    css`
      input,
      .ant-checkbox-inner {
        width: ${props.size}px;

        height: ${props.size}px;
      }

      .ant-checkbox-inner::after {
        left: ${props.size}%;
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
    props.color &&
    css`
      color: ${props.color};
    `}
  ${props =>
    props.direction &&
    css`
      flex-direction: ${props.direction};
    `}
  ${props =>
    props.label_margin &&
    css`
      > span:last-child {
        margin: ${props.label_margin};
      }
    `}
  ${props =>
    props.fw &&
    css`
      font-weight: ${props.fw};
    `}
`;
Checkbox.defaultProps = {};

/** @component */
export default Checkbox;
