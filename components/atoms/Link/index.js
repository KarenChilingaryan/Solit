import styled, { css } from 'styled-components';
import link from 'next/link'

const Link = styled(link)`
  color: #886CC0;
  font-weight: 500;

  ${props =>
    props.type === 'secondary' &&
    css`
      color: #717579;
    `}
  ${props =>
    props.ml &&
    css`
      margin-left: ${props.ml}px;
    `}
  ${props =>
    props.type === 'destructive' &&
    css`
      color: #eb1c26;
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
    props.width &&
    css`
      width: ${props.width};
    `}
  ${props =>
    props.max_width &&
    css`
      max-width: ${props.max_width};
    `}
  ${props =>
    props.text_overflow &&
    css`
      text-overflow: ${props.text_overflow};
      overflow: hidden;
      white-space: nowrap;
    `}
  ${props =>
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `}
  ${props =>
    props.hover_color &&
    css`
      &:hover {
        color: ${props.hover_color};
      }
    `}
  ${props =>
    (props.lh || props.lh === 0) &&
    css`
      line-height: ${props.lh}px;
    `}
  ${props =>
    props.fz &&
    css`
      font-size: ${props.fz}px;
    `}
  ${props =>
    props.fw &&
    css`
      font-weight: ${props.fw};
    `}
  ${props =>
    props.display &&
    css`
      display: ${props.display};
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
    props.vert_align &&
    css`
      display: flex;
      align-items: ${props.vert_align};
    `}
}
`;

export default Link;
