import styled, { css } from "styled-components";
import { Modal as modal } from "antd";

const Modal = styled(modal)`
  cursor: pointer;
  ${(props) =>
    props.width &&
    css`
      width: ${props.width}px;
    `}
  ${(props) =>
    props.cursor &&
    css`
      cursor: ${props.cursor} !important;
    `}
  ${(props) =>
    props.height &&
    css`
      height: ${props.height}px!important;
      .ant-modal-content {
        height: 100%;
      }
    `}
  ${(props) =>
    props.footerCustomize &&
    css`
      .ant-modal-content {
        border-radius: 10px;
        .ant-modal-header {
          border-radius: 10px;
        }
        .ant-modal-footer {
          padding: 30px 16px;
        }
      }
      .ant-modal-footer {
        height: auto;
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
        align-items: center;
        border-top: 1px solid #e8eef4;
        padding: 20px;
        button {
          border-radius: 4px;
          font-size: 14px;
          &:first-child {
            border: none;
            color: #c4c4c4;
            margin-left: 30px;
          }
          &:last-child {
            background-color: #7854ff;
            color: #ffffff;
            margin-left: 30px;
          }
        }
      }
    `}
  
  ${(props) =>
    props.modalDelete &&
    css`
      .ant-modal-body {
        text-align: center;
        //padding: 20px 20px 40px 30px;
        border-radius: 4px;
      }
      .ant-modal-footer {
        border-top: none !important;
      }
    `},
  ${(props) =>
    props.modalDef &&
    css`
      .ant-modal-body {
        //text-align: center;
        //padding: 90px 60px 60px;
      }
      .ant-modal-footer {
        height: auto;
        display: flex;
        justify-content: flex-end;
        //padding: 10px 30px 20px 10px;
        border-top: none !important;
      }
    `}
  ${(props) =>
    props.type === "notification" &&
    css`
      margin-right: 70.62px;
      margin-left: 66.62px;
    `}
  ${(props) =>
    props.services_modal &&
    css`
      .ant-modal-body {
        padding: 30px;
        h1 {
          display: flex;
        }
      }
      .ant-modal-footer {
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        border: none;
        > button {
          border-radius: 4px;
          height: 48px;
          &:first-child {
            color: #c4c4c4;
            margin: 0 15px 20px 0px;
          }
          &:last-child {
            background-color: #7854ff;
            color: #ffffff;
          }
        }
      }
    `}
    ${(props) =>
    props.buttonWidth &&
    css`
      .ant-modal-footer {
        > button {
          width: ${props.buttonWidth}px;
        }
      }
    `}
  ${(props) =>
    props.disp_footer &&
    css`
      .ant-modal-footer {
        display: ${props.disp_footer};
      }
    `}
    ${(props) =>
    props.buttonHeight &&
    css`
      .ant-modal-footer {
        > button {
          height: ${props.buttonHeight}px;
        }
      }
    `}
    ${(props) =>
    props.b_align &&
    css`
      .ant-modal-body {
        text-align: ${props.b_align};
      }
    `}
    ${(props) =>
    props.b_padding &&
    css`
      .ant-modal-body {
        padding: ${props.b_padding};
      }
    `}
`;

export default Modal;
