import React from 'react';
import styled, { css } from 'styled-components';
import { Switch } from '../index';

const SwitchWrapper = styled.label`
  width: fit-content;
  display: flex;
  align-items: center;

  > span {
    width: 60px;
    font-weight: 400;
    font-size: 16px;
    color: #101d5b;
    cursor: pointer;
  }
  ${props =>
    (props.mb || props.mb === 0) &&
    css`
      margin-bottom: ${props.mb}px !important;
    `}
  ${props =>
    props.hide === 'label' &&
    css`
      > span {
        display: none;
      }
    `}
  ${props =>
    props.justify &&
    css`
      display: flex;
      justify-content: ${props.justify}!important;
    `}
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
`;

const LabeledSwitch = ({ label, defaultChecked, onChange, mb, hide, disabled, justify, width }) => {
  return (
    <SwitchWrapper mb={mb} hide={hide} justify={justify} width={width}>
      {label && <span>{label}</span>}
      <Switch
        size='small'
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
      />
    </SwitchWrapper>
  );
};

export default LabeledSwitch;
