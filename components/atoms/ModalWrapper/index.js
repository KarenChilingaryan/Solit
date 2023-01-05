import React from 'react';
import styled from 'styled-components';

const ModalWrapperComp = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(16, 22, 51, 0.7);
  z-index: 1000;
  overflow-y: auto;
`;

const ModalWrapper = ({ children, closeModal }) => {
  return <ModalWrapperComp onClick={closeModal}>{children}</ModalWrapperComp>;
};

export default ModalWrapper;
