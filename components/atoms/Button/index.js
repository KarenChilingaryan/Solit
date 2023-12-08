import styled, { css } from "styled-components";
import { Button as button } from "antd";

const Button = styled(button)`
  border: none;
  font-weight: 500;
  color: #fff;
  padding: 15px 19px;
  font-size: 20px;
  border-radius: 20px;
  .filter-button {
    color: red !important;
  }
  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
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
    props.fz &&
    css`
      font-size: ${props.fz};
    `}
    ${(props) =>
    props.lh &&
    css`
      line-height: ${props.lh};
    `}
  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}
  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}

    ${(props) =>
    props.ml &&
    css`
      margin-left: ${props.ml};
    `}
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
  ${(props) =>
    props.icon_height &&
    css`
      svg {
        height: ${props.icon_height};
      }
    `}

    ${(props) =>
    props.type === "main" &&
    css`
      background: #fff;
      color: #3787e7;

      &:hover {
        background: #fff;
        color: #3787e7;
      }
      &:active {
        background: #fff;
        color: #3787e7;
      }
      &:focus {
        background: #fff;
        color: #3787e7;
      }
      &[disabled] {
        background: #e7e7e7;
        color: #616161;
      }
    `}

    ${(props) =>
    props.type === "main-gradient" &&
    css`
      background: linear-gradient(90deg, #3787e7 -12.55%, #fb55de 116.19%);
      color: #fff;
      &:hover {
        background: linear-gradient(269.86deg, #3787e7 0.15%, #fb55de 102.92%);
        color: #fff;
      }

      &:focus {
        background: linear-gradient(90deg, #3787e7 -12.55%, #fb55de 116.19%);
        color: #fff;
      }
      &:active {
        background: linear-gradient(90deg, #3787e7 -12.55%, #fb55de 116.19%);
        color: #fff;
      }
    `}
  

    
  ${(props) =>
    props.type === "primary" &&
    css`
      background: #7854ff;
      border: 1px solid #7854ff;
      color: #fff;
      &:hover {
        background: #fff;
        color: #7854ff;
        border: 1px solid #7854ff;
      }
      &:active {
        background: #7854ff;
        border: 1px solid #7854ff;
        color: #fff;
      }
      &:focus {
        background: #7854ff;
        border: 1px solid #7854ff;
        color: #fff;
      }
      &[disabled] {
        background: #e7e7e7;
        color: #616161;
      }
    `}

    ${(props) =>
    props.type === "primary_transparent" &&
    css`
      background: #fff;
      border: 1px solid #7854ff;
      color: #7854ff;
      &:hover {
        background: #7854ff;
        color: #fff;
        border: 1px solid #7854ff;
      }
      &:active {
        background: #fff;
        color: #7854ff;
        border: 1px solid #7854ff;
      }
      &:focus {
        background: #fff;
        color: #7854ff;
        border: 1px solid #7854ff;
      }
      &[disabled] {
        background: #e7e7e7;
        color: #616161;
      }
    `}

  ${(props) =>
    props.type === "main_grey" &&
    css`
      background: #f6f6f6;
      color: #272727;
      // border: none !important;
      &:hover {
        background: linear-gradient(90deg, #3787e7 -12.55%, #fb55de 116.19%);
        color: #fff;
        border: none;
      }

      &:active {
        background: linear-gradient(90deg, #3787e7 -12.55%, #fb55de 116.19%);
        color: #fff;
        border: none;
      }

      &:focus {
        background: linear-gradient(90deg, #3787e7 -12.55%, #fb55de 116.19%);
        color: #fff;
        border: none;
      }

      &[disabled] {
        background: #000080;
        color: #616161;
      }
    `}



  ${(props) =>
    props.type === "ghost" &&
    css`
      color: #fff;
      background: transparent;
      box-shadow: none;
      &:hover {
        background: #9c8ae7;
        color: #fff;
      }

      &:focus {
        color: #fff;
      }
      &:active {
        color: #fff;
      }
    `}
  ${(props) =>
    props.type === "outline" &&
    css`
      background: none;
      border: 1px solid ${props.bordercolor};
      border-radius: 0px 0px 2px 2px;
      color: #7854ff;
      &:hover {
        color: #6138fb;
        border-color: #6138fb;
      }
      &:active {
        color: #7854ff;
        border-color: #7854ff;
      }
      &:focus {
        color: #7854ff;
        border-color: #7854ff;
      }
    `}

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}
    ${(props) =>
    props.bg &&
    css`
      background: ${props.bg} !important;
    `}
  

    ${(props) =>
    props.maxwidth &&
    css`
      max-width: ${props.maxwidth} !important;
    `}

  

    ${(props) =>
    props.minwidth &&
    css`
      min-width: ${props.minwidth} !important;
    `}
  ${(props) =>
    props.fw &&
    css`
      span {
        font-weight: ${props.fw};
      }
    `}
  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
  ${(props) =>
    (props.mb || props.mb === 0) &&
    css`
      margin-bottom: ${props.mb}px;
    `}
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
  ${(props) =>
    props.display &&
    css`
      display: ${props.display};
    `}
  ${(props) =>
    props.align &&
    css`
      display: flex;
      align-items: ${props.align};
    `}
  ${(props) =>
    props.justify &&
    css`
      display: flex;
      justify-content: ${props.justify};
    `}
  ${(props) =>
    props.line_height &&
    css`
      line-height: ${props.line_height};
    `}
`;

export default Button;
