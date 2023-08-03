import styled, { css } from "styled-components";
import { Typography } from "antd";

const { Paragraph: paragraph } = Typography;
const Paragraph = styled(paragraph)`
  margin-bottom: 0px !important;
  // color: #171b1e;
  font-weight: 500;

  ${(props) =>
    props.type === "primary" &&
    css`
      color: #886cc0;
    `}
  ${(props) =>
    props.type === "secondary" &&
    css`
      color: #717579;
    `}
  ${(props) =>
    props.type === "blue" &&
    css`
      color: #000080;
    `}
    ${(props) =>
    props.tree_dots &&
    css`
      white-space: pre;
      text-overflow: ellipsis;
      overflow: hidden;
    `}
  ${(props) =>
    props.ml &&
    css`
      margin-left: ${props.ml}px;
    `}
  ${(props) =>
    props.mr &&
    css`
      margin-right: ${props.mr}px;
    `}
  ${(props) =>
    props.mt &&
    css`
      margin-top: ${props.mt} !important;
    `}
    ${(props) =>
    props.position &&
    css`
      position: ${props.position};
    `}
      ${(props) =>
    props.left &&
    css`
      left: ${props.left};
    `}
        ${(props) =>
    props.bottom &&
    css`
      bottom: ${props.bottom};
    `}
        ${(props) =>
    props.right &&
    css`
      right: ${props.right};
    `}
    ${(props) =>
    props.opacity &&
    css`
      opacity: ${props.opacity};
    `}
  ${(props) =>
    props.type === "destructive" &&
    css`
      color: #ef3e36;
    `}
  ${(props) =>
    props.background_img &&
    css`
      background-color: red;
      background-image: linear-gradient(45deg, #3787e7, #fb55de);
      background-size: 100%;
      background-repeat: repeat;

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      &:hover {
        background-image: linear-gradient(45deg, #fb55de, #3787e7);
      }
    `}

    ${(props) =>
    props.gradient_text &&
    css`
      background-image: linear-gradient(90deg, #3787e7, #fb55de);
      background-size: 100%;
      background-repeat: repeat;

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}
  ${(props) =>
    (props.mb || props.mb === 0) &&
    css`
      &.ant-typography,
      .ant-typography p {
        margin-bottom: ${props.mb};
      }
    `}
  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin} !important;
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
    props.max_width &&
    css`
      max-width: ${props.max_width};
    `}
  ${(props) =>
    props.white_space &&
    css`
      white-space: ${props.white_space};
    `}
  ${(props) =>
    props.text_overflow &&
    css`
      text-overflow: ${props.text_overflow};
      overflow: hidden;
      white-space: nowrap;
      //display: block;
      //width: 100%;
      //white-space: nowrap;
      //overflow: hidden;
    `}
  ${(props) =>
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `}
  ${(props) =>
    props.ls &&
    css`
      letter-spacing: ${props.ls};
    `}

    ${(props) =>
    props.display &&
    css`
      display: ${props.display};
    `}
  ${(props) =>
    props.decoration &&
    css`
      text-decoration: ${props.decoration};
    `}
  ${(props) =>
    props.hover_color &&
    css`
      &:hover {
        color: ${props.hover_color};
      }
    `}
  ${(props) =>
    props.lh &&
    css`
      line-height: ${props.lh};
    `}
  ${(props) =>
    props.fz &&
    css`
      font-size: ${props.fz};
    `}
  ${(props) =>
    props.mob_fz &&
    css`
      @media screen and (max-width: 600px) {
        font-size: ${props.mob_fz}px;
      }
    `}
  ${(props) =>
    props.tab_fz &&
    css`
      @media screen and (max-width: 992px) {
        font-size: ${props.tab_fz}px;
      }
    `}
  ${(props) =>
    props.fw &&
    css`
      font-weight: ${props.fw};
    `}
  ${(props) =>
    props.display &&
    css`
      display: ${props.display};
    `}
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
    ${(props) =>
    props.border_bottom &&
    css`
      border-bottom: ${props.border_bottom};
    `}
  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
  ${(props) =>
    props.align &&
    css`
      text-align: ${props.align};
    `}
  ${(props) =>
    props.vert_align &&
    css`
      display: flex;
      align-items: ${props.vert_align};
    `}
  ${(props) =>
    props.sectype === "light" &&
    css`
      font-weight: 300;
    `}
    ${(props) =>
    props.type === "textOverflow" &&
    css`
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    `}
`;

/** @component */
export default Paragraph;
