import styled, { css } from "styled-components";
import { Col as col } from "antd";

const Col = styled(col)`
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
    props.pl &&
    css`
      padding-left: ${props.pl} !important;
    `}
    ${(props) =>
    props.pr &&
    css`
      padding-right: ${props.pr} !important;
    `}

    ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}

    ${(props) =>
    props.min_height &&
    css`
      min-height: ${props.min_height};
    `}

    ${(props) =>
    props.ml &&
    css`
      margin-left: ${props.ml};
    `}

    ${(props) =>
    props.mr &&
    css`
      margin-right: ${props.mr};
    `}
  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding} !important;
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
    props.height &&
    css`
      height: ${props.height};
    `}
  ${(props) =>
    props.max_height &&
    css`
      max-height: ${props.max_height};
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
    props.flex_wrap &&
    css`
      flex-wrap: ${props.flex_wrap};
    `}
    ${(props) =>
    props.justify_grid &&
    css`
      display: grid;
      justify-content: ${props.justify_grid};
    `}

    ${(props) =>
    props.justify_items &&
    css`
      display: grid;
      justify-items: ${props.justify_items};
    `}
    
  ${(props) =>
    props.direction &&
    css`
      display: flex;
      flex-direction: ${props.direction};
    `}
  ${(props) =>
    props.border &&
    css`
      border: ${props.border};
    `}
  ${(props) =>
    props.border_right &&
    css`
      border-right: ${props.border_right};
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
    props.overflow_y &&
    css`
      overflow-y: ${props.overflow_y};
    `}
  ${(props) =>
    props.shadow &&
    css`
      box-shadow: ${props.shadow};
    `}
  ${(props) =>
    props.filter &&
    css`
      backdrop-filter: ${props.filter};
    `}
  ${(props) =>
    props.radius &&
    css`
      border-radius: ${props.radius};
    `}
  ${(props) =>
    props.back_color &&
    css`
      background-color: ${props.back_color} !important;
    `}
  ${(props) =>
    props.back_img &&
    css`
      background-image: ${props.back_color} !important;
    `}

    ${(props) =>
    props.carousel_component &&
    css`
      display: grid !important;
      justify-items: center;
      align-items: center;
      justify-content: center;
      align-content: space-evenly;
    `}

    ${(props) =>
    props.carousel_component_testimonials &&
    css`
      display: grid !important;
      justify-items: start;
      align-items: center;
      justify-content: center;
      align-content: space-evenly;
    `}
`;

/** @component */
export default Col;
