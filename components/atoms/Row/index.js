import styled, { css } from "styled-components";
import { Row as row } from "antd";

const Row = styled(row)`
  ${(props) =>
    (props.mb || props.mb === 0) &&
    css`
      margin-bottom: ${props.mb};
    `}
  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
    ${(props) =>
    props.mt &&
    css`
      margin-top: ${props.mt};
    `}
    ${(props) =>
    props.ml &&
    css`
      margin-left: ${props.ml};
    `}
    ${(props) =>
    props.gap &&
    css`
      gap: ${props.gap};
    `}
  ${(props) =>
    props.border &&
    css`
      border: ${props.border};
    `}
    ${(props) =>
    props.shadow &&
    css`
      box-shadow: ${props.shadow};
    `}
  ${(props) =>
    props.radius &&
    css`
      border-radius: ${props.radius};
    `}
  ${(props) =>
    props.display &&
    css`
      display: ${props.display};
    `}
    ${(props) =>
    props.position &&
    css`
      position: ${props.position};
    `}
    ${(props) =>
    props.grid_columns &&
    css`
      grid-template-columns: ${props.grid_columns};
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
    props.flex &&
    css`
      flex: ${props.flex};
    `}

    ${(props) =>
    props.justify &&
    css`
      display: flex;
      justify-content: ${props.justify} !important;
    `}
    ${(props) =>
    props.align_content &&
    css`
      display: flex;
      align-content: ${props.align_content} !important;
    `}
    
  

    ${(props) =>
    props.align &&
    css`
      align-items: ${props.align};
    `}
    ${(props) =>
    props.align_items &&
    css`
      align-items: ${props.align_items};
    `}
  ${(props) =>
    props.overflow &&
    css`
      overflow: ${props.overflow};
    `}
  ${(props) =>
    props.back_color &&
    css`
      background-color: ${props.back_color};
    `}
  ${(props) =>
    props.border_bot &&
    css`
      border-bottom: ${props.border_bot};
    `}
  ${(props) =>
    props.border_top &&
    css`
      border-top: ${props.border_top};
    `}
  ${(props) =>
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `}
  ${(props) =>
    props.odd_back &&
    css`
      &:nth-child(odd) {
        background-color: ${props.odd_back};
      }
    `}
  ${(props) =>
    props.color &&
    css`
      color: ${props.color} !important;
    `}
`;

/** @component */
export default Row;
