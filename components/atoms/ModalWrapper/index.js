import React from 'react';
import styled, { keyframes } from 'styled-components';

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
  animation: slideIn 0.3s ease-out forwards;

  @keyframes slideIn {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const ModalWrapper = ({ children, closeModal }) => {
  const handleWrapperClick = (event) => {
    // Prevent closing the modal when the content is clicked
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <ModalWrapperComp onClick={handleWrapperClick}>
      {children}
    </ModalWrapperComp>
  );
};

export default ModalWrapper;