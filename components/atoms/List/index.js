import styled, { css } from 'styled-components';
import { List as list } from 'antd';

const List = styled(list)`
  .ant-pagination-item {
    background-color: #f6f9fc;
    border-radius: 50%;
    border: none;
    min-width: 10px;
    font-size: 18px;
    a {
      color: #c8cbd8;
    }

    &:hover,
    &.ant-pagination-item-active {
      a {
        color: #7854ff;
      }
    }
  }

  .ant-pagination-item-ellipsis,
  .ant-pagination-item-link-icon {
    color: #886cc0;
  }

  .ant-pagination-prev,
  .ant-pagination-next {
    svg {
      font-size: 18px;
      margin-top: 5px;
    }
    min-width: 10px;

    button {
      background-color: transparent;
      border-radius: 50%;
      border: none;
      color: #c8cbd8;
    }

    &.ant-pagination-disabled,
    &.ant-pagination-disabled:hover {
      button {
        color: rgba(0, 0, 0, 0.25);
        border-color: #d9d9d9;
        background-color: transparent;
      }
    }

    &:hover {
      button {
        color: #7854ff;
      }
    }
  }

  ${props =>
    (props.mb || props.mb === 0) &&
    css`
      margin-bottom: ${props.mb}px;
    `}
  ${props =>
    (props.meta_mb || props.meta_mb === 0) &&
    css`
      .ant-list-item-meta {
        margin-bottom: ${props.meta_mb}px;
      }
    `}
  ${props =>
    props.meta_avatar_margin &&
    css`
      .ant-list-item-meta-avatar {
        margin: ${props.meta_avatar_margin};
      }
    `}
  ${props =>
    (props.item_mb || props.item_mb === 0) &&
    css`
      .ant-list-item {
        margin-bottom: ${props.item_mb}px;
      }
    `}
  ${props =>
    props.action_width &&
    css`
      .ant-list-item-action li {
        width: ${props.action_width};
      }
    `}
  ${props =>
    props.action_split_display &&
    css`
      .ant-list-item-action-split {
        display: ${props.action_split_display};
      }
    `}
  ${props =>
    props.item_padding &&
    css`
      .ant-list-item {
        padding: ${props.item_padding};
      }
    `}
  ${props =>
    props.item_radius &&
    css`
      .ant-list-item {
        border-radius: ${props.item_radius};
      }
    `}
  ${props =>
    props.item_shadow &&
    css`
      .ant-list-item {
        box-shadow: ${props.item_shadow};
      }
    `}
  ${props =>
    props.item_cursor &&
    css`
      .ant-list-item {
        cursor: ${props.item_cursor};
      }
    `}
  ${props =>
    props.item_hover_shadow &&
    css`
      .ant-list-item {
        transition: all ease 0.3s;
        &:hover {
          box-shadow: ${props.item_hover_shadow};
        }
      }
    `}
  ${props =>
    props.item_back &&
    css`
      .ant-list-item {
        background-color: ${props.item_back};
      }
    `}
  ${props =>
    props.total_pos &&
    css`
      .ant-pagination-total-text {
        float: ${props.total_pos};
      }
    `}
  ${props =>
    (props.title_mb || props.title_mb === 0) &&
    css`
      .ant-list-item-meta-title {
        margin-bottom: ${props.title_mb}px;
      }
    `}
  ${props =>
    props.title_align &&
    css`
      .ant-list-item-meta {
        display: flex;
        align-items: ${props.title_align};
      }
    `}
  ${props =>
    props.title_content_align &&
    css`
      .ant-list-item-meta-title {
        display: flex;
        align-items: ${props.title_content_align};
      }
    `}
  ${props =>
    props.title_justify &&
    css`
      .ant-list-item-meta-title {
        display: flex;
        justify-content: ${props.title_justify};
      }
    `}
  ${props =>
    props.title_direction &&
    css`
      .ant-list-item-meta-title {
        display: flex;
        flex-direction: ${props.title_direction};
      }
    `}
  ${props =>
    props.title_width &&
    css`
      .ant-list-item-meta-title {
        display: block;
        width: ${props.title_width};
      }
    `}
  ${props =>
    props.title_height &&
    css`
      .ant-list-item-meta-title {
        height: ${props.title_height};
      }
    `}
  ${props =>
    props.meta_align &&
    css`
      .ant-list-item-meta-title {
        display: flex;
        align-items: ${props.meta_align};
      }
    `}
`;

export default List;
