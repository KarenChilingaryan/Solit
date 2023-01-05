import styled, { css } from 'styled-components';
import Icon from '@ant-design/icons';

const IconWrapper = styled(Icon)`
  ${props =>
    props.color &&
    css`
      svg path {
        fill: ${props.color};
      }
    `}
`;

export default IconWrapper;
