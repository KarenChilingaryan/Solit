import styled, { css } from 'styled-components';
import Icon from '@ant-design/icons';
import { memo } from 'react';

const IconWrapper = styled(Icon)`
  ${props =>
    props.color &&
    css`
      svg path {
        fill: ${props.color};
      }
    `}
`;

export default memo(IconWrapper);
