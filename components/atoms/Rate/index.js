import styled, { css } from 'styled-components';
import { Rate as rate } from 'antd';

const Rate = styled(rate)`
  ${props =>
    props.starRatedColor &&
    css`
      display: flex;
      .ant-rate-star-full,
      .ant-rate-star-focused svg,
      .ant-rate-star-first {
        color: ${props.starRatedColor};
      }
    `}
  ${props =>
    props.size &&
    css`
    .ant-rate-star-second svg,
    .ant-rate-star-first svg,
    .ant-rate-star-second .anticon-star{
      height: ${props.size};
      width: ${props.size};
    `}
    ${props =>
    props.padding_between &&
    css`
      .ant-rate-star {
        margin-right: 0;
        padding: ${props.padding_between};
      }
    `}
`;

export default Rate;
