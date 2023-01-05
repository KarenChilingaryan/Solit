import styled, { css } from 'styled-components';
import { Typography } from 'antd';

const { Title: title } = Typography;
const Title = styled(title)`
  margin-bottom: 30px;
  color: #101d5b;
  font-weight: 500;
  ${props =>
    props.level === 1 &&
    css`
      font-size: 36px;
      line-height: 40px;
    `}
  ${props =>
    props.level === 2 &&
    css`
      font-size: 24px;
      line-height: 28px;
    `}
  ${props =>
    props.level === 3 &&
    css`
      font-size: 18px;
      line-height: 16px;
    `}
  ${props =>
    props.level === 4 &&
    css`
      font-size: 16px;
      line-height: 24px;
    `}
  ${props =>
    props.level === 5 &&
    css`
      font-size: 14px;
      line-height: 24px;
    `}
  ${props =>
    props.level === 4 &&
    props.size_type === 'responsive' &&
    css`
      font-size: 14px;
      line-height: 24px;
    `}
  ${props =>
    props.level === 3 &&
    props.size_type === 'responsive' &&
    css`
      font-size: 16px;
      line-height: 24px;
    `}
  ${props =>
    props.level === 2 &&
    props.size_type === 'responsive' &&
    css`
      font-size: 18px;
      line-height: 16px;
    `}
  ${props =>
    props.level === 1 &&
    props.size_type === 'responsive' &&
    css`
      font-size: 24px;
      line-height: 28px;
    `}
  ${props =>
    props.mob_level === 2 &&
    css`
      @media screen and (max-width: 576px) {
        font-size: 24px;
        line-height: 28px;
      }
    `}
  ${props =>
    (props.mb || props.mb === 0) &&
    css`
      margin-bottom: ${props.mb}px;
    `}
  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `}
  ${props =>
    props.align &&
    css`
      text-align: ${props.align};
    `}
  ${props =>
    props.line_height &&
    css`
      line-height: ${props.line_height};
    `}
  ${props =>
    props.fw &&
    css`
      font-weight: ${props.fw};
    `}
  ${props =>
    props.mt &&
    css`
      margin-top: ${props.mt}px;
    `}
`;

/** @component */
export default Title;
