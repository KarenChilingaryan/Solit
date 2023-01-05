import styled, { css } from "styled-components";
import { Dropdown as dropdown } from "antd";
import propTypes from "prop-types";

const Dropdown = styled(dropdown)`
  cursor: pointer;
  ${(props) =>
    props.type === "notification" &&
    css`
      margin-right: 70.62px;
      margin-left: 66.62px;
      margin-top: 5px;
      position: relative;

      .ant-badge-count {
        width: 16px;
        min-width: 16px;
        height: 16px;
        padding: 0;
        font-size: 11px !important;
        line-height: 16px;

        .ant-scroll-number-only {
          height: 16px;
        }
      }
      .ant-badge-multiple-words span {
        padding: 0;
        font-size: 10px;

        .ant-scroll-number-only:first-child {
          margin-left: -2px;
        }
      }
    `}
  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
  ${(props) =>
    props.display &&
    css`
      display: ${props.display};
    `}
    ${(props) =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `}
`;

Dropdown.propTypes = {
  type: propTypes.string,
};

Dropdown.defaultProps = {};

/** @component */
export default Dropdown;
